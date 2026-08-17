import React from "react";
import { Link } from "react-router-dom";

export default function Design() {
  const projects = [
    {
      id: "01",
      title: "Corporate Brand Identity & Guidelines",
      category: "Brand Systems",
      desc: "Complete visual identity encompassing logo design, chromatic palette (Pantone & digital), bespoke typography rules, and master brand manual.",
      image: "/images/design-01.svg",
    },
    {
      id: "02",
      title: "Eco-Friendly Packaging & Collateral",
      category: "Packaging & Print Prep",
      desc: "Custom die-cut product packaging, lookbooks, and marketing collateral designed with soft-touch finishes and sustainable craft materials.",
      image: "/images/design-02.svg",
    },
    {
      id: "03",
      title: "Digital Campaigns & Social Artworks",
      category: "Digital Communication",
      desc: "High-impact social media creatives, seasonal launch graphics, and promotional banners engineered for high click-through rates.",
      image: "/images/design-03.svg",
    },
  ];

  const packages = [
    {
      title: "Brand Starter",
      tag: "For Startups & New Ventures",
      features: [
        "Primary & Secondary Logo Marks",
        "Curated Color Palette & Typography",
        "Business Card Design Master",
        "Social Media Profile Assets",
        "Vector Source Files (AI, SVG, PNG, PDF)",
      ],
    },
    {
      title: "Corporate Suite",
      tag: "Most Popular for Growing Companies",
      features: [
        "Everything in Brand Starter",
        "Full Corporate Brand Guidelines Book",
        "Stationery Suite (Letterheads, Invoices)",
        "Company Profile / Brochure Layout",
        "Packaging & Label Design",
        "Print-Ready Production Files",
      ],
    },
    {
      title: "Custom Retainer",
      tag: "For Established Organizations",
      features: [
        "Dedicated Monthly Design Hours",
        "Campaign & Event Creatives",
        "Marketing & Advertising Collateral",
        "Priority Turnaround & Revision Support",
        "Direct Art Direction Consultations",
      ],
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">
        {/* HERO */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">01 / Creative Discipline</span>

          <h1>
            Ideas made
            <span> visible &amp; memorable.</span>
          </h1>

          <p>
            We create visual identities, marketing collateral, and packaging that
            help ambitious businesses look credible, communicate with clarity, and stand out.
          </p>
        </div>

        {/* SHOWCASE GALLERY */}
        <div className="joki-showcase-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Featured Work</span>
            <h2>Design Showcase</h2>
          </div>

          <div className="joki-showcase-grid">
            {projects.map((project) => (
              <div key={project.id} className="joki-showcase-card">
                <div className="joki-showcase-img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="joki-showcase-badge">{project.category}</span>
                </div>
                <div className="joki-showcase-body">
                  <span className="joki-showcase-num">{project.id}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPABILITIES LIST */}
        <div className="joki-capabilities-box">
          <div className="joki-content-grid">
            <div>
              <span className="joki-section-number">WHAT WE DESIGN</span>
              <h3>Full-Spectrum Design Services</h3>
              <p>
                Every asset is crafted vector-clean, scalable from a mobile screen to a 10-meter highway billboard.
              </p>
            </div>

            <div className="joki-list">
              <div>Brand Identity Systems</div>
              <div>Logo Design &amp; Redesigns</div>
              <div>Corporate Business Profiles</div>
              <div>Social Media Campaign Graphics</div>
              <div>Marketing &amp; Sales Collateral</div>
              <div>Posters, Flyers &amp; Infographics</div>
              <div>Packaging, Boxes &amp; Labels</div>
              <div>Corporate Stationery &amp; Uniforms</div>
            </div>
          </div>
        </div>

        {/* PACKAGES TIERS */}
        <div className="joki-packages-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Solutions Tailored To You</span>
            <h2>Design Engagement Tiers</h2>
          </div>

          <div className="joki-packages-grid">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`joki-package-card ${idx === 1 ? "is-featured" : ""}`}>
                {idx === 1 && <span className="joki-popular-badge">Recommended</span>}
                <h3>{pkg.title}</h3>
                <span className="joki-package-tag">{pkg.tag}</span>
                <ul className="joki-package-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`joki-button ${idx === 1 ? "joki-button-primary" : "joki-button-dark"}`}>
                  Inquire Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE CTA */}
        <div className="joki-page-cta">
          <h2>Have a design project in mind?</h2>
          <p>Let's collaborate to build a standout visual identity for your brand.</p>
          <div className="joki-cta-btns">
            <Link to="/contact" className="joki-button joki-button-primary">
              Talk to Us &rarr;
            </Link>
            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20inquire%20about%20Design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline-light"
            >
              WhatsApp Us &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
