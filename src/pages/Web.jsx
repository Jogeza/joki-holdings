import React from "react";
import { Link } from "react-router-dom";

export default function Web() {
  const webProjects = [
    {
      id: "01",
      title: "Corporate & Enterprise Platforms",
      category: "Corporate Web",
      desc: "Authority-building websites designed to position your enterprise, showcase your track record, and convert high-value corporate inquiries.",
      image: "/images/web-01.svg",
    },
    {
      id: "02",
      title: "E-Commerce & Digital Storefronts",
      category: "Commerce & Payments",
      desc: "High-converting online stores with built-in MTN Mobile Money, Airtel Money, and card payment gateways for frictionless Ugandan checkout.",
      image: "/images/web-02.svg",
    },
    {
      id: "03",
      title: "Custom Web Applications & Portals",
      category: "Web Applications",
      desc: "Interactive client portals, booking engines, dashboard interfaces, and bespoke cloud applications built on modern JavaScript frameworks.",
      image: "/images/web-03.svg",
    },
  ];

  const pillars = [
    {
      title: "Mobile-First Design",
      desc: "Over 80% of East African traffic is mobile. Every page is tailored for seamless smartphone usability.",
    },
    {
      title: "Blazing Speed & Performance",
      desc: "Optimized asset delivery, clean code, and fast load times that rank high on Google Core Web Vitals.",
    },
    {
      title: "Local Payment Integrations",
      desc: "Seamless integration with MTN MoMo, Airtel Money, Pesapal, Flutterwave, and Stripe.",
    },
    {
      title: "Security & Reliable Hosting",
      desc: "SSL certificates, regular backups, firewall protection, and 99.9% uptime cloud hosting.",
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">
        {/* HERO */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">03 / Digital Discipline</span>

          <h1>
            Your business
            <span> online &amp; unstoppable.</span>
          </h1>

          <p>
            Modern, lightning-fast websites engineered to present your brand
            professionally, capture leads, and drive measurable business growth.
          </p>
        </div>

        {/* SHOWCASE GALLERY */}
        <div className="joki-showcase-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Digital Portfolio</span>
            <h2>Web Solutions Showcase</h2>
          </div>

          <div className="joki-showcase-grid">
            {webProjects.map((project) => (
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
              <span className="joki-section-number">WHAT WE BUILD</span>
              <h3>End-to-End Web Engineering</h3>
              <p>
                From simple high-converting landing pages to complex corporate portals, we build modern web experiences.
              </p>
            </div>

            <div className="joki-list">
              <div>Corporate Business Websites</div>
              <div>E-Commerce &amp; MoMo Storefronts</div>
              <div>High-Converting Landing Pages</div>
              <div>Portfolio &amp; Creative Showcase Sites</div>
              <div>WordPress &amp; CMS Development</div>
              <div>Custom Web Apps (React / Node)</div>
              <div>Search Engine Optimization (SEO)</div>
              <div>Website Maintenance &amp; Cloud Hosting</div>
            </div>
          </div>
        </div>

        {/* PILLARS GRID */}
        <div className="joki-pillars-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">The Joki Standard</span>
            <h2>Built For Real Results</h2>
          </div>

          <div className="joki-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="joki-pillar-card">
                <span className="joki-pillar-num">0{idx + 1}</span>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAGE CTA */}
        <div className="joki-page-cta">
          <h2>Ready to launch your new website?</h2>
          <p>Let's build a website that accurately reflects your business quality.</p>
          <div className="joki-cta-btns">
            <Link to="/contact" className="joki-button joki-button-primary">
              Start Web Project &rarr;
            </Link>
            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20discuss%20a%20Web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline-light"
            >
              WhatsApp Web Team &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
