const crypto = require("crypto");

const MAX_BODY_BYTES = 64 * 1024;
const MAX = { name: 120, email: 254, phone: 40, company: 160, country: 80, city: 120, source: 80, message: 4000 };
const SERVICES = new Set(["GENERAL", "DESIGN", "PRINT", "WEB"]);

function text(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

function validatePayload(body) {
  const errors = {};
  if (!body || typeof body !== "object" || Array.isArray(body)) return { form: "Malformed JSON payload." };
  if (!SERVICES.has(body.service)) errors.service = "Unsupported service.";
  if (!text(body.name, MAX.name)) errors.name = "Name is required.";
  const email = text(body.email, MAX.email);
  const phone = text(body.phone, MAX.phone);
  if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.email = "A valid email is required.";
  if (body.service !== "PRINT" && !email) errors.email = "A valid email is required.";
  if (body.service === "PRINT" && !email && !phone) errors.contact = "An email or phone number is required.";
  if (!text(body.message, MAX.message)) errors.message = "Project details are required.";
  if (!body.consent) errors.consent = "Enquiry consent is required.";
  for (const [field, limit] of Object.entries(MAX)) if (body[field] !== undefined && typeof body[field] !== "string") errors[field] = "Invalid field type.";
  for (const [field, limit] of Object.entries(MAX)) if (typeof body[field] === "string" && body[field].length > limit) errors[field] = "Field exceeds the allowed length.";
  if (body.honeypot || body.website) errors.form = "Submission rejected.";
  if (body.projectDetails !== undefined && (!body.projectDetails || typeof body.projectDetails !== "object" || Array.isArray(body.projectDetails))) errors.projectDetails = "Invalid project details.";
  if (body.service === "PRINT" && body.projectDetails?.quantity !== undefined && (!/^\d+$/.test(String(body.projectDetails.quantity)) || Number(body.projectDetails.quantity) < 1)) errors.quantity = "Invalid print quantity.";
  return errors;
}

function normalizeLead(body) {
  const details = body.projectDetails && typeof body.projectDetails === "object" ? body.projectDetails : {};
  return {
    lead_id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    service: body.service,
    source: text(body.source || "/contact", MAX.source) || "/contact",
    name: text(body.name, MAX.name),
    email: text(body.email, MAX.email).toLowerCase(),
    phone: text(body.phone, MAX.phone),
    company: text(body.company, MAX.company),
    country: text(body.country, MAX.country),
    city: text(body.city, MAX.city),
    message: text(body.message, MAX.message),
    project_details: details,
    consent: true,
    delivery_state: "RECEIVED",
  };
}

async function checkRateLimit(req) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { allowed: true, configured: false };
  const ip = String(req.headers["x-forwarded-for"] || "unknown").split(",")[0].trim().slice(0, 80);
  try {
    const response = await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(["INCR", `joki:lead-rate:${ip}`]) });
    if (!response.ok) return { allowed: false, configured: true, unavailable: true };
    const result = await response.json();
    const count = Number(result.result);
    if (count === 1) await fetch(url, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(["EXPIRE", `joki:lead-rate:${ip}`, 3600]) });
    return { allowed: count <= 5, configured: true };
  } catch (error) {
    return { allowed: false, configured: true, unavailable: true };
  }
}

async function persistLead(lead) {
  if (process.env.LEAD_STORAGE_PROVIDER !== "supabase" || !process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error("STORAGE_UNCONFIGURED");
  const response = await fetch(`${process.env.SUPABASE_URL.replace(/\/$/, "")}/rest/v1/joki_leads`, { method: "POST", headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json", Prefer: "return=minimal" }, body: JSON.stringify(lead) });
  if (!response.ok) throw new Error("STORAGE_FAILED");
}

async function updateNotificationState(leadId, state) {
  if (process.env.LEAD_STORAGE_PROVIDER !== "supabase") return;
  await fetch(`${process.env.SUPABASE_URL.replace(/\/$/, "")}/rest/v1/joki_leads?lead_id=eq.${encodeURIComponent(leadId)}`, { method: "PATCH", headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ delivery_state: state }) });
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function leadLines(lead) {
  const lines = [`Lead ID: ${lead.lead_id}`, `Service: ${lead.service}`, `Submitted: ${lead.created_at}`, `Source: ${lead.source}`, `Name: ${lead.name}`, `Email: ${lead.email}`];
  for (const [label, value] of [["Phone", lead.phone], ["Company", lead.company], ["Country", lead.country], ["City", lead.city], ["Project details", JSON.stringify(lead.project_details)], ["Message", lead.message]]) if (value) lines.push(`${label}: ${value}`);
  return lines;
}

async function notifyLead(lead) {
  if (process.env.LEAD_EMAIL_PROVIDER !== "resend" || !process.env.RESEND_API_KEY || !process.env.LEAD_NOTIFICATION_TO || !process.env.LEAD_NOTIFICATION_FROM) throw new Error("EMAIL_UNCONFIGURED");
  const subjectName = lead.name.replace(/[\r\n]/g, " ").slice(0, 80);
  const lines = leadLines(lead);
  const html = `<h2>New ${escapeHtml(lead.service)} enquiry — ${escapeHtml(subjectName)}</h2><pre>${escapeHtml(lines.join("\n"))}</pre>`;
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.LEAD_NOTIFICATION_FROM, to: [process.env.LEAD_NOTIFICATION_TO], reply_to: lead.email, subject: `New ${lead.service} enquiry — ${subjectName}`, text: lines.join("\n"), html }) });
  if (!response.ok) throw new Error("EMAIL_FAILED");
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  const requestId = crypto.randomUUID();
  if (req.method !== "POST") return send(res, 405, { ok: false, error: "METHOD_NOT_ALLOWED", requestId });
  if (Number(req.headers["content-length"] || 0) > MAX_BODY_BYTES) return send(res, 413, { ok: false, error: "PAYLOAD_TOO_LARGE", requestId });
  const rate = await checkRateLimit(req);
  if (!rate.allowed) return send(res, rate.unavailable ? 503 : 429, { ok: false, error: rate.unavailable ? "SERVICE_UNAVAILABLE" : "RATE_LIMITED", requestId });
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (error) { return send(res, 400, { ok: false, error: "MALFORMED_REQUEST", requestId }); } }
  const errors = validatePayload(body);
  if (Object.keys(errors).length) return send(res, 422, { ok: false, error: "VALIDATION_ERROR", requestId, fields: errors });
  const lead = normalizeLead(body);
  try { await persistLead(lead); } catch (error) { console.error("lead_persistence_failed", { requestId, service: lead.service, category: error.message }); return send(res, 503, { ok: false, error: "SERVICE_UNAVAILABLE", requestId }); }
  try { await notifyLead(lead); await updateNotificationState(lead.lead_id, "NOTIFICATION_SENT"); } catch (error) { console.error("lead_notification_failed", { requestId, leadId: lead.lead_id, service: lead.service, category: error.message }); await updateNotificationState(lead.lead_id, "NOTIFICATION_FAILED"); }
  console.info("lead_accepted", { requestId, leadId: lead.lead_id, service: lead.service });
  return send(res, 201, { ok: true, leadId: lead.lead_id });
};

module.exports.validatePayload = validatePayload;
module.exports.normalizeLead = normalizeLead;
module.exports.MAX_BODY_BYTES = MAX_BODY_BYTES;
