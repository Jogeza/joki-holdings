import React from "react";
import { Link } from "react-router-dom";

export default function Print() {
  return (
    <section className="joki-page">
      <div className="joki-container">

        <div className="joki-page-hero">
          <span className="joki-eyebrow">02 / Print</span>

          <h1>
            Make it
            <span> tangible.</span>
          </h1>

          <p>
            Professional printing for businesses, organisations,
            events and brands that need their ideas to exist
            beyond the screen.
          </p>
        </div>

        <div className="joki-content-grid">

          <div>
            <span className="joki-section-number">WHAT WE PRINT</span>
          </div>

          <div className="joki-list">
            <div>Business Cards</div>
            <div>Flyers & Brochures</div>
            <div>Posters</div>
            <div>Banners & Signage</div>
            <div>Labels & Stickers</div>
            <div>Corporate Stationery</div>
            <div>Promotional Materials</div>
            <div>Large Format Printing</div>
          </div>

        </div>

        <div className="joki-page-cta">
          <h2>Need something printed?</h2>

          <Link to="/contact" className="joki-button joki-button-primary">
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
