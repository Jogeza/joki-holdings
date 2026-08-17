import React from "react";
import { Link } from "react-router-dom";

export default function Print() {
  const printItems = [
    {
      id: "01",
      title: "Executive Business Cards & Corporate Stationery",
      category: "Corporate Print",
      desc: "Printed on heavy 450 GSM cotton stocks with optional metallic gold foil, spot UV gloss, and soft-touch matte lamination.",
      image: "/images/print-01.svg",
    },
    {
      id: "02",
      title: "Brochures, Catalogues & Annual Reports",
      category: "Commercial Publications",
      desc: "Perfect-bound and saddle-stitched multi-page company profiles, tri-fold leaflets, and custom folders that make lasting impressions.",
      image: "/images/print-02.svg",
    },
    {
      id: "03",
      title: "Large Format Banners, Signage & Displays",
      category: "Outdoor & Event",
      desc: "Heavy-duty tearproof PVC pull-up banners, teardrop flags, backdrop banners, and 3D illuminated acrylic building signs.",
      image: "/images/print-03.svg",
    },
  ];

  const finishes = [
    {
      name: "Spot UV Coating",
      desc: "Gloss varnish applied selectively to logos or headings for a raised tactile contrast.",
    },
    {
      name: "Metallic Hot Foil",
      desc: "Premium reflective gold, silver, copper, or holographic stamping.",
    },
    {
      name: "Soft-Touch Matte",
      desc: "Silky velvety lamination that eliminates glare and adds a luxury feel.",
    },
    {
      name: "Custom Die-Cutting",
      desc: "Precision contour cutting for distinctive bespoke box packaging and custom shapes.",
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">
        {/* HERO */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">02 / Production Discipline</span>

          <h1>
            Make your brand
            <span> tangible &amp; bold.</span>
          </h1>

          <p>
            Commercial-grade printing for businesses, organizations, events, and institutions
            that demand perfection in paper weight, color fidelity, and finish quality.
          </p>
        </div>

        {/* SHOWCASE GALLERY */}
        <div className="joki-showcase-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Production Portfolio</span>
            <h2>Commercial Print Showcase</h2>
          </div>

          <div className="joki-showcase-grid">
            {printItems.map((item) => (
              <div key={item.id} className="joki-showcase-card">
                <div className="joki-showcase-img-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="joki-showcase-badge">{item.category}</span>
                </div>
                <div className="joki-showcase-body">
                  <span className="joki-showcase-num">{item.id}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES LIST */}
        <div className="joki-capabilities-box">
          <div className="joki-content-grid">
            <div>
              <span className="joki-section-number">WHAT WE PRINT</span>
              <h3>High-Precision Commercial Print</h3>
              <p>
                Equipped for small-batch boutique runs and high-volume commercial batch printing with quick turnaround in Kampala.
              </p>
            </div>

            <div className="joki-list">
              <div>Business Cards (Standard &amp; Luxury)</div>
              <div>Flyers, Leaflets &amp; Brochures</div>
              <div>Company Profiles &amp; Annual Reports</div>
              <div>Pull-Up &amp; Backdrop Banners</div>
              <div>Custom Stickers &amp; Product Labels</div>
              <div>Branded Packaging &amp; Carry Bags</div>
              <div>3D Signage &amp; Lightboxes</div>
              <div>Receipt Books &amp; Invoices</div>
            </div>
          </div>
        </div>

        {/* FINISHING SPECS */}
        <div className="joki-finishes-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Premium Finishing</span>
            <h2>Craftsmanship in Every Detail</h2>
          </div>

          <div className="joki-finishes-grid">
            {finishes.map((f, i) => (
              <div key={i} className="joki-finish-card">
                <span className="joki-finish-num">0{i + 1}</span>
                <h4>{f.name}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE CTA */}
        <div className="joki-page-cta">
          <h2>Need a custom print quote?</h2>
          <p>Send us your specifications, dimensions, and quantity for instant pricing.</p>
          <div className="joki-cta-btns">
            <Link to="/contact" className="joki-button joki-button-primary">
              Request a Quote &rarr;
            </Link>
            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20request%20a%20Print%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline-light"
            >
              Instant WhatsApp Quote &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
