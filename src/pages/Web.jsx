import React from "react";
import { Link } from "react-router-dom";

export default function Web() {
  return (
    <section className="joki-page joki-page-web">
      <div className="joki-container">

        {/* Page Hero */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">03 / Web</span>

          <h1>
            Your business
            <span> online.</span>
          </h1>

          <p>
            Modern websites built to present your business
            professionally, communicate your value and give
            customers a clear way to engage with you.
          </p>
        </div>

        {/* Services */}
        <div className="joki-content-grid">

          <div>
            <span className="joki-section-number">
              WHAT WE BUILD
            </span>
          </div>

          <div className="joki-list">
            <div>Business Websites</div>
            <div>Corporate Websites</div>
            <div>Landing Pages</div>
            <div>Portfolio Websites</div>
            <div>WordPress Websites</div>
            <div>Custom Web Applications</div>
            <div>Website Maintenance</div>
            <div>Digital Experiences</div>
          </div>

        </div>

        {/* Capabilities */}
        <div className="joki-web-capabilities">

          <div className="joki-web-capability">
            <span className="joki-web-capability-number">
              01
            </span>

            <div>
              <strong>Built around your business</strong>

              <p>
                Every website starts with your goals, audience
                and the way your business actually operates.
              </p>
            </div>
          </div>

          <div className="joki-web-capability">
            <span className="joki-web-capability-number">
              02
            </span>

            <div>
              <strong>Designed for real customers</strong>

              <p>
                Clear layouts, responsive experiences and
                focused calls to action make it easier for
                people to engage.
              </p>
            </div>
          </div>

          <div className="joki-web-capability">
            <span className="joki-web-capability-number">
              03
            </span>

            <div>
              <strong>Ready to grow with you</strong>

              <p>
                We build with future updates, new content and
                changing business needs in mind.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="joki-page-cta">
          <h2>Need a website?</h2>

          <Link
            to="/contact"
            className="joki-button joki-button-primary"
          >
            Talk to Us
          </Link>
        </div>

      </div>
    </section>
  );
}