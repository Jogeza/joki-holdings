import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Design + Print",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    "Design (Brand & Graphics)",
    "Print (Commercial & Stationery)",
    "Web (Websites & Apps)",
    "Design + Print Bundle",
    "Full Brand + Web + Print",
    "Other Inquiries",
  ];

  const faqs = [
    {
      q: "What is your typical turnaround time for design and print projects in Kampala?",
      a: "Standard brand design concepts take 3–5 business days. Printing turnaround ranges from 24–48 hours for business stationery/flyers to 3–5 days for large custom packaging or multi-page annual reports.",
    },
    {
      q: "Do you deliver printed materials across Uganda?",
      a: "Yes. We offer prompt direct delivery within Kampala and door-to-door courier dispatch across all major towns in Uganda (Entebbe, Jinja, Mbarara, Gulu, Mbale, etc.).",
    },
    {
      q: "Can you build websites that integrate MTN MoMo and Airtel Money?",
      a: "Absolutely. We integrate trusted Ugandan and East African payment gateways (MTN Mobile Money, Airtel Money, Pesapal, Flutterwave, and Visa/Mastercard) directly into your website.",
    },
    {
      q: "What file formats will I receive upon completing a design project?",
      a: "You will receive full vector master files (Adobe Illustrator .AI, SVG, EPS), print-ready high-res CMYK PDFs with crop marks, and web-optimized RGB assets (PNG, JPEG, WebP).",
    },
  ];

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSelectService(serviceName) {
    setFormData({ ...formData, service: serviceName });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  function getWhatsAppUrl() {
    const text = `*New Inquiry from Joki Holdings Website*
*Name:* ${formData.name || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Selected Service:* ${formData.service}
*Project Details:*
${formData.message || "Hi Joki team, I'd like to discuss a new project."}`;

    return `https://wa.me/256778283522?text=${encodeURIComponent(text)}`;
  }

  return (
    <section className="joki-page joki-contact-page">
      <div className="joki-container">
        {/* HERO */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">Contact &bull; Start a Conversation</span>

          <h1>
            Have a project
            <span> in mind?</span>
          </h1>

          <p>
            Tell us about your brand, print requirements, or web project.
            We provide prompt quotes and transparent recommendations.
          </p>
        </div>

        {/* MAIN CONTACT GRID */}
        <div className="joki-contact-grid">
          {/* LEFT INFO PANEL */}
          <div className="joki-contact-info">
            <div className="joki-info-card">
              <h3>Direct Contacts</h3>
              <p>Reach out directly or send us a message through our form.</p>

              <div className="joki-contact-details">
                <div className="joki-detail-row">
                  <span className="joki-detail-label">Email</span>
                  <a href="mailto:info@jokiholdings.com" className="joki-detail-val">
                    info@jokiholdings.com
                  </a>
                </div>

                <div className="joki-detail-row">
                  <span className="joki-detail-label">Phone Call</span>
                  <a href="tel:+256778283522" className="joki-detail-val">
                    +256 778 283522
                  </a>
                </div>

                <div className="joki-detail-row">
                  <span className="joki-detail-label">WhatsApp</span>
                  <a
                    href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="joki-detail-val joki-whatsapp-link-text"
                  >
                    +256 778 283522 (Chat with us)
                  </a>
                </div>

                <div className="joki-detail-row">
                  <span className="joki-detail-label">Office &amp; Production</span>
                  <strong className="joki-detail-val">Kampala, Uganda</strong>
                </div>

                <div className="joki-detail-row">
                  <span className="joki-detail-label">Working Hours</span>
                  <span className="joki-detail-val">Mon – Sat: 8:00 AM – 6:00 PM EAT</span>
                </div>
              </div>
            </div>

            {/* QUICK WHATSAPP CTA BOX */}
            <div className="joki-whatsapp-quickbox">
              <div className="joki-wa-header">
                <span className="joki-online-dot"></span>
                <strong>Instant WhatsApp Chat</strong>
              </div>
              <p>Prefer quick chatting? Send your brief directly to our team on WhatsApp for immediate feedback.</p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="joki-button joki-button-whatsapp-full"
              >
                Send via WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="joki-contact-form-wrapper">
            {sent ? (
              <div className="joki-form-success">
                <div className="joki-success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#075B59" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2>Enquiry Received!</h2>
                <p>
                  Thank you, <strong>{formData.name || "valued client"}</strong>. Your enquiry for <strong>{formData.service}</strong> has been logged.
                  Our team will review your brief and contact you within 24 hours.
                </p>
                <div className="joki-success-actions">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="joki-button joki-button-primary"
                  >
                    Also Send to WhatsApp &rarr;
                  </a>
                  <button
                    type="button"
                    className="joki-button joki-button-dark"
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Design + Print",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Project
                  </button>
                </div>
              </div>
            ) : (
              <form className="joki-contact-form" onSubmit={handleSubmit}>
                <div className="joki-form-group">
                  <label className="joki-label">
                    Full Name <span className="joki-req">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Moses Mukasa"
                    className="joki-input"
                  />
                </div>

                <div className="joki-form-row">
                  <div className="joki-form-group">
                    <label className="joki-label">
                      Email Address <span className="joki-req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="joki-input"
                    />
                  </div>

                  <div className="joki-form-group">
                    <label className="joki-label">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+256 7..."
                      className="joki-input"
                    />
                  </div>
                </div>

                {/* INTERACTIVE SERVICE PILLS */}
                <div className="joki-form-group">
                  <label className="joki-label">Select Service / Discipline</label>
                  <div className="joki-service-pills">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        className={`joki-pill ${formData.service === svc ? "is-selected" : ""}`}
                        onClick={() => handleSelectService(svc)}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="joki-form-group">
                  <label className="joki-label">
                    Project Details &amp; Scope <span className="joki-req">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Tell us about your brand, print dimensions/quantity, or website objectives..."
                    className="joki-textarea"
                  />
                </div>

                <div className="joki-form-actions">
                  <button
                    type="submit"
                    className="joki-button joki-button-primary joki-btn-submit"
                  >
                    Submit Enquiry &rarr;
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="joki-button joki-button-outline"
                  >
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQ ACCORDION SECTION */}
        <div className="joki-faq-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Frequently Asked Questions</span>
            <h2>Got Questions? We Have Answers</h2>
          </div>

          <div className="joki-faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`joki-faq-item ${isOpen ? "is-open" : ""}`}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="joki-faq-question">
                    <h4>{faq.q}</h4>
                    <span className="joki-faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <div className="joki-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
