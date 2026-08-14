import React from "react";
import { Link } from "react-router-dom";

export default function Web() {
  return (
    <section className="joki-page">
      <div className="joki-container">

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

        <div className="joki-content-grid">

          <div>
            <span className="joki-section-number">WHAT WE BUILD</span>
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

        <div className="joki-page-cta">
          <h2>Need a website?</h2>

          <Link to="/contact" className="joki-button joki-button-primary">
            Talk to Us
          </Link>
        </div>

      </div>
    </section>
  );
}
