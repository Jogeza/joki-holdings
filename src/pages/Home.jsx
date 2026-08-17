import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState("design");

  const previews = {
    design: {
      number: "01",
      title: "Design",
      tagline: "Brand Identity, Typography & Visual Strategy",
      desc: "Creating distinct logos, packaging, and corporate guidelines that position your company as an industry leader.",
      image: "/images/home-design.svg",
      link: "/design",
    },
    print: {
      number: "02",
      title: "Print",
      tagline: "Tangible, High-Precision Commercial Printing",
      desc: "From 450 GSM gold-foiled stationery and corporate brochures to heavy-duty outdoor signage and pull-up banners.",
      image: "/images/home-print.svg",
      link: "/print",
    },
    web: {
      number: "03",
      title: "Web",
      tagline: "High-Performance Modern Web Platforms",
      desc: "Speed-optimized corporate websites, e-commerce storefronts with Mobile Money integration, and custom digital apps.",
      image: "/images/home-web.svg",
      link: "/web",
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="joki-hero">
        <div className="joki-container joki-hero-grid">
          <div className="joki-hero-copy">
            <span className="joki-eyebrow">
              Joki Holdings Ltd &bull; Kampala, Uganda
            </span>

            <h1>
              We make your
              <span> business visible.</span>
            </h1>

            <p>
              Design. Print. Web.
              <br />
              One creative partner for ambitious businesses that want to
              look professional, build authority, and communicate with confidence.
            </p>

            <div className="joki-hero-actions">
              <Link to="/contact" className="joki-button joki-button-primary">
                Talk to Us &rarr;
              </Link>

              <Link to="/design" className="joki-button joki-button-link">
                Explore Our Work &rarr;
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="joki-hero-trust">
              <div className="joki-trust-item">
                <strong>100%</strong>
                <span>Quality Guarantee</span>
              </div>
              <div className="joki-trust-divider"></div>
              <div className="joki-trust-item">
                <strong>Fast</strong>
                <span>Kampala Delivery</span>
              </div>
              <div className="joki-trust-divider"></div>
              <div className="joki-trust-item">
                <strong>3-in-1</strong>
                <span>Design, Print &amp; Web</span>
              </div>
            </div>
          </div>

          {/* INTERACTIVE HERO VISUAL TABS */}
          <div className="joki-hero-visual-wrapper">
            <div className="joki-visual-tabs-nav">
              <button
                type="button"
                className={`joki-tab-btn ${activeTab === "design" ? "is-active" : ""}`}
                onClick={() => setActiveTab("design")}
              >
                01 Design
              </button>
              <button
                type="button"
                className={`joki-tab-btn ${activeTab === "print" ? "is-active" : ""}`}
                onClick={() => setActiveTab("print")}
              >
                02 Print
              </button>
              <button
                type="button"
                className={`joki-tab-btn ${activeTab === "web" ? "is-active" : ""}`}
                onClick={() => setActiveTab("web")}
              >
                03 Web
              </button>
            </div>

            <div className="joki-visual-display">
              <img
                src={previews[activeTab].image}
                alt={previews[activeTab].title}
                className="joki-visual-img"
              />
              <div className="joki-visual-overlay">
                <span className="joki-visual-tag">{previews[activeTab].tagline}</span>
                <Link to={previews[activeTab].link} className="joki-visual-link">
                  Explore {previews[activeTab].title} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS / STATS STRIP */}
      <section className="joki-stats-strip">
        <div className="joki-container joki-stats-grid">
          <div className="joki-stat-card">
            <h3>Creative Excellence</h3>
            <p>From scratch concept design to production-ready master files.</p>
          </div>
          <div className="joki-stat-card">
            <h3>Tangible Quality</h3>
            <p>Commercial-grade materials, spot UV, embossing and gold foil finishes.</p>
          </div>
          <div className="joki-stat-card">
            <h3>Digital Growth</h3>
            <p>Modern, responsive websites engineered for speed and conversion.</p>
          </div>
          <div className="joki-stat-card">
            <h3>Local Expertise</h3>
            <p>Based in Kampala, serving businesses across Uganda and East Africa.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / INTRO */}
      <section className="joki-intro">
        <div className="joki-container joki-intro-grid">
          <span className="joki-section-number">
            01 / WHAT WE DO
          </span>

          <div>
            <h2>
              From the first spark
              <br />
              to the final deliverable.
            </h2>

            <p className="joki-intro-lead">
              Joki Holdings brings creative brand design, precision printing,
              and modern web engineering together under one roof. No fragmented
              agencies or mismatched contractors — just one dedicated team.
            </p>

            <Link to="/about" className="joki-text-link">
              More about Joki Holdings &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* THREE DISCIPLINES */}
      <section className="joki-services">
        <div className="joki-container">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              Our Core Disciplines
            </span>

            <h2>
              Three capabilities.
              <br />
              One unified partner.
            </h2>
          </div>

          <div className="joki-services-grid">
            <Link to="/design" className="joki-service-card">
              <div className="joki-card-header">
                <span>01</span>
                <span className="joki-card-badge">Creative</span>
              </div>
              <h3>Design</h3>
              <p>
                Visual identity systems, logos, corporate guidelines, packaging,
                marketing collateral, and high-impact social media artwork.
              </p>
              <div className="joki-card-tags">
                <span>Brand Identity</span>
                <span>Packaging</span>
                <span>Graphics</span>
              </div>
              <strong className="joki-card-cta">Explore Design &rarr;</strong>
            </Link>

            <Link to="/print" className="joki-service-card">
              <div className="joki-card-header">
                <span>02</span>
                <span className="joki-card-badge">Production</span>
              </div>
              <h3>Print</h3>
              <p>
                Executive business stationery, flyers, brochures, custom packaging,
                pull-up banners, and 3D acrylic outdoor signage.
              </p>
              <div className="joki-card-tags">
                <span>Stationery</span>
                <span>Large Format</span>
                <span>Signage</span>
              </div>
              <strong className="joki-card-cta">Explore Print &rarr;</strong>
            </Link>

            <Link to="/web" className="joki-service-card">
              <div className="joki-card-header">
                <span>03</span>
                <span className="joki-card-badge">Digital</span>
              </div>
              <h3>Web</h3>
              <p>
                Modern, responsive websites, e-commerce stores with Mobile Money,
                and custom web applications built for speed and conversions.
              </p>
              <div className="joki-card-tags">
                <span>Custom Websites</span>
                <span>E-Commerce</span>
                <span>Web Apps</span>
              </div>
              <strong className="joki-card-cta">Explore Web &rarr;</strong>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="joki-process-section">
        <div className="joki-container">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Our Methodology</span>
            <h2>How We Deliver Value</h2>
          </div>

          <div className="joki-process-grid">
            <div className="joki-process-step">
              <span className="joki-step-num">01</span>
              <h4>Discovery &amp; Brief</h4>
              <p>We understand your business goals, target audience, and project scope.</p>
            </div>
            <div className="joki-process-step">
              <span className="joki-step-num">02</span>
              <h4>Creative Concept</h4>
              <p>We design polished visual options, wireframes, and prototypes for your review.</p>
            </div>
            <div className="joki-process-step">
              <span className="joki-step-num">03</span>
              <h4>Refinement &amp; Build</h4>
              <p>Precision execution — whether print production or web development.</p>
            </div>
            <div className="joki-process-step">
              <span className="joki-step-num">04</span>
              <h4>Launch &amp; Delivery</h4>
              <p>Final physical delivery in Kampala or live web deployment with complete assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOLD CALL TO ACTION */}
      <section className="joki-gold-section">
        <div className="joki-container">
          <span className="joki-eyebrow">
            Ready to get started?
          </span>

          <h2>
            Let's make
            <br />
            something memorable.
          </h2>

          <p className="joki-gold-desc">
            Whether you need a fresh brand identity, 5,000 corporate brochures, or a high-converting website, we're ready to help.
          </p>

          <div className="joki-gold-actions">
            <Link to="/contact" className="joki-button joki-button-dark">
              Talk to Us &rarr;
            </Link>
            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline"
            >
              Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
