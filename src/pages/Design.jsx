import React from "react";
import { Link } from "react-router-dom";

export default function Design() {
  return (
    <section className="joki-page">
      <div className="joki-container">

        <div className="joki-page-hero">
          <span className="joki-eyebrow">01 / Design</span>

          <h1>
            Ideas made
            <span> visible.</span>
          </h1>

          <p>
            We create visual identities and marketing materials
            that help businesses communicate clearly and look
            consistent everywhere.
          </p>
        </div>

        <div className="joki-content-grid">

          <div>
            <span className="joki-section-number">WHAT WE DESIGN</span>
          </div>

          <div className="joki-list">
            <div>Brand Identity</div>
            <div>Logo Design</div>
            <div>Business Profiles</div>
            <div>Social Media Graphics</div>
            <div>Marketing Materials</div>
            <div>Posters & Flyers</div>
            <div>Packaging & Labels</div>
            <div>Corporate Stationery</div>
          </div>

        </div>

        <div className="joki-page-cta">
          <h2>Have a design project?</h2>

          <Link to="/contact" className="joki-button joki-button-primary">
            Talk to Us
          </Link>
        </div>

      </div>
    </section>
  );
}
