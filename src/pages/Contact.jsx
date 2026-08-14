import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="joki-contact-section">

      <div className="joki-container joki-contact-grid">

        <div className="joki-contact-info">

          <span className="joki-eyebrow">
            Contact Joki
          </span>

          <h1>
            Have a project
            <br />
            in mind?
          </h1>

          <p>
            Tell us what you're working on and let's figure out
            how we can help.
          </p>

          <div className="joki-contact-details">

            <div>
              <span>Email</span>
              <a href="mailto:info@jokiholdings.com">
                info@jokiholdings.com
              </a>
            </div>

            <div>
              <span>Phone</span>
              <a href="tel:+256778283522">
                +256 778 283522
              </a>
            </div>

            <div>
              <span>WhatsApp</span>
              <a
                href="https://wa.me/256778283522"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </div>

            <div>
              <span>Location</span>
              <strong>Kampala, Uganda</strong>
            </div>

          </div>

        </div>

        <div>

          {sent ? (
            <div className="joki-form-success">
              <h2>Message received.</h2>
              <p>
                Thanks for reaching out to Joki Holdings.
                We'll get back to you.
              </p>
            </div>
          ) : (
            <form className="joki-contact-form" onSubmit={handleSubmit}>

              <label>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Service
                <select name="service">
                  <option>Design</option>
                  <option>Print</option>
                  <option>Web</option>
                  <option>Design + Print</option>
                  <option>Design + Web</option>
                  <option>Something else</option>
                </select>
              </label>

              <label>
                Project details
                <textarea
                  name="message"
                  rows="7"
                  required
                  placeholder="Tell us about your project..."
                />
              </label>

              <button
                type="submit"
                className="joki-button joki-button-primary"
              >
                Send Enquiry ?
              </button>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}
