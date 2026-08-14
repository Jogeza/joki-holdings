import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="joki-contact-section">
      <div className="joki-container">

        {/* HEADER */}
        <div className="joki-contact-header">
          <span className="joki-eyebrow">
            05 / Contact Joki
          </span>

          <h1>
            Let's make
            <span> something work.</span>
          </h1>

          <p>
            Have a project, a business idea or something that needs
            to look better? Tell us what you have in mind and let's
            work out the next step.
          </p>
        </div>


        {/* MAIN CONTACT AREA */}
        <div className="joki-contact-grid">

          {/* CONTACT INFORMATION */}
          <div className="joki-contact-info">

            <div className="joki-contact-intro">
              <span className="joki-section-number">
                GET IN TOUCH
              </span>

              <h2>
                Start with a
                <span> conversation.</span>
              </h2>

              <p>
                Whether you need design, printing, a website or a
                combination of services, we're ready to hear about
                it.
              </p>
            </div>


            <div className="joki-contact-details">

              <div className="joki-contact-detail">
                <span>Email</span>

                <a href="mailto:info@jokiholdings.com">
                  info@jokiholdings.com
                </a>
              </div>


              <div className="joki-contact-detail">
                <span>Phone</span>

                <a href="tel:+256778283522">
                  +256 778 283522
                </a>
              </div>


              <div className="joki-contact-detail">
                <span>WhatsApp</span>

                <a
                  href="https://wa.me/256778283522"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </div>


              <div className="joki-contact-detail">
                <span>Location</span>

                <strong>
                  Kampala, Uganda
                </strong>
              </div>

            </div>


            <div className="joki-contact-note">
              <span>Prefer a direct conversation?</span>

              <p>
                You can also reach us directly by phone or WhatsApp.
              </p>
            </div>

          </div>


          {/* FORM */}
          <div className="joki-contact-form-wrapper">

            {sent ? (
              <div className="joki-form-success">

                <span className="joki-section-number">
                  ENQUIRY SENT
                </span>

                <h2>
                  Message
                  <span> received.</span>
                </h2>

                <p>
                  Thanks for reaching out to Joki Holdings. We've
                  received your enquiry and will get back to you.
                </p>

                <button
                  type="button"
                  className="joki-button joki-button-secondary"
                  onClick={() => setSent(false)}
                >
                  Send another enquiry
                </button>

              </div>
            ) : (
              <form
                className="joki-contact-form"
                onSubmit={handleSubmit}
              >

                <div className="joki-form-heading">
                  <span className="joki-section-number">
                    PROJECT ENQUIRY
                  </span>

                  <h2>
                    Tell us about
                    <span> your project.</span>
                  </h2>
                </div>


                <label>
                  <span>Name</span>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </label>


                <label>
                  <span>Email</span>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                  />
                </label>


                <label>
                  <span>Service</span>

                  <select
                    name="service"
                    defaultValue="Design"
                  >
                    <option value="Design">
                      Design
                    </option>

                    <option value="Print">
                      Print
                    </option>

                    <option value="Web">
                      Web
                    </option>

                    <option value="Design + Print">
                      Design + Print
                    </option>

                    <option value="Design + Web">
                      Design + Web
                    </option>

                    <option value="Something else">
                      Something else
                    </option>
                  </select>
                </label>


                <label>
                  <span>Project details</span>

                  <textarea
                    name="message"
                    rows="7"
                    required
                    placeholder="Tell us about your project, what you need and any important details..."
                  />
                </label>


                <button
                  type="submit"
                  className="joki-button joki-button-primary"
                >
                  Send Enquiry
                </button>

              </form>
            )}

          </div>

        </div>


        {/* BOTTOM CTA */}
        <div className="joki-contact-bottom">

          <span className="joki-eyebrow">
            Design · Print · Web
          </span>

          <h2>
            Your next idea
            <span> starts here.</span>
          </h2>

        </div>

      </div>
    </section>
  );
}