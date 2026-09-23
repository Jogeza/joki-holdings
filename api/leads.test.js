const handler = require("./leads");

const base = { service: "GENERAL", source: "/contact", name: "Moses", email: "moses@example.com", message: "A project brief", consent: true };

describe("lead API validation", () => {
  test.each(["GENERAL", "DESIGN", "PRINT", "WEB"])("accepts %s", (service) => expect(handler.validatePayload({ ...base, service })).toEqual({}));
  test("rejects invalid email", () => expect(handler.validatePayload({ ...base, email: "bad" }).email).toBeTruthy());
  test("rejects missing name", () => expect(handler.validatePayload({ ...base, name: "" }).name).toBeTruthy());
  test("rejects unsupported service", () => expect(handler.validatePayload({ ...base, service: "HACK" }).service).toBeTruthy());
  test("rejects oversized field", () => expect(handler.validatePayload({ ...base, name: "x".repeat(121) }).name).toBeTruthy());
  test("rejects honeypot", () => expect(handler.validatePayload({ ...base, honeypot: "bot" }).form).toBeTruthy());
  test("rejects invalid Print quantity", () => expect(handler.validatePayload({ ...base, service: "PRINT", projectDetails: { quantity: "0" } }).quantity).toBeTruthy());
  test("rejects malformed payload", () => expect(handler.validatePayload(null).form).toBeTruthy());
  test("normalizes with server authority", () => { const lead = handler.normalizeLead(base); expect(lead.lead_id).toBeTruthy(); expect(lead.created_at).toBeTruthy(); expect(lead.consent).toBe(true); });
});
