import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      num: "01",
      title: "Quality First",
      desc: "We obsess over the final result — from vector geometry to the tangible weight of print stock.",
    },
    {
      num: "02",
      title: "Radical Clarity",
      desc: "Clear communication, transparent timelines, and straightforward pricing with zero hidden surprises.",
    },
    {
      num: "03",
      title: "Brand Consistency",
      desc: "Your digital website and physical print materials should speak the exact same visual language.",
    },
    {
      num: "04",
      title: "Continuous Progress",
      desc: "We stay ahead of modern design aesthetics and digital web standards to keep your brand relevant.",
    },
  ];

  const pillars = [
    {
      title: "Design",
      tagline: "Visual Foundation",
      desc: "Crafting the core visual assets, logos, typography, and marketing graphics that define who you are.",
      link: "/design",
    },
    {
      title: "Print",
      tagline: "Physical Authority",
      desc: "Translating digital concepts into high-grade physical stationery, signage, and packaging you can hold.",
      link: "/print",
    },
    {
      title: "Web",
      tagline: "Digital Reach",
      desc: "Deploying high-speed, modern websites that convert visitors into paying clients 24/7.",
      link: "/web",
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">
        {/* HERO */}
        <div className="joki-page-hero">
          <span className="joki-eyebrow">About Joki Holdings Ltd</span>

          <h1>
            Creative work
            <span> with purpose &amp; precision.</span>
          </h1>

          <p>
            Joki Holdings Ltd is a Ugandan creative, print, and digital solutions
            firm dedicated to helping businesses turn ambitious ideas into commanding market presence.
          </p>
        </div>

        {/* NARRATIVE SECTION */}
        <div className="joki-about-grid">
          <div>
            <span className="joki-section-number">WHO WE ARE</span>
            <h3>One Creative Partner for Everything</h3>
          </div>

          <div>
            <p className="joki-large-text">
              We believe great design should do more than look attractive.
              It must make a business clearer, more authoritative, and impossible to overlook.
            </p>

            <p>
              Most companies struggle because they juggle multiple disconnected vendors — one freelancer
              for logos, a local printer who alters the colors, and a separate web developer who ignores
              the brand guide.
            </p>

            <p>
              Joki Holdings solves this by uniting <strong>Creative Design</strong>, <strong>Commercial Printing</strong>,
              and <strong>Modern Web Development</strong> under one roof in Kampala. We ensure your brand identity remains
              cohesive and uncompromising across every touchpoint.
            </p>
          </div>
        </div>

        {/* 3 PILLARS ECOSYSTEM */}
        <div className="joki-showcase-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">The Joki Ecosystem</span>
            <h2>How Our Three Disciplines Connect</h2>
          </div>

          <div className="joki-about-pillars-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="joki-about-pillar-card">
                <span className="joki-eyebrow">{p.tagline}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to={p.link} className="joki-text-link">
                  Explore {p.title} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* VALUES */}
        <div className="joki-values">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">Our Core Principles</span>
            <h2>What Guides Everything We Build</h2>
          </div>

          <div className="joki-values-grid">
            {values.map((v) => (
              <div key={v.num}>
                <span>{v.num}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LOCATION & REACH */}
        <div className="joki-location-box">
          <div className="joki-location-content">
            <span className="joki-eyebrow">Headquartered in Uganda</span>
            <h3>Rooted in Kampala, Serving East Africa</h3>
            <p>
              We operate from Kampala, Uganda, delivering physical print orders countrywide
              and deploying web solutions for businesses across East Africa and beyond.
            </p>
          </div>
        </div>

        {/* PAGE CTA */}
        <div className="joki-page-cta">
          <h2>Let's build something exceptional together.</h2>
          <p>Talk to our team about your next branding, print, or web project.</p>
          <div className="joki-cta-btns">
            <Link to="/contact" className="joki-button joki-button-primary">
              Talk to Us &rarr;
            </Link>
            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings,%20I'd%20like%20to%20learn%20more%20about%20working%20together."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline-light"
            >
              Chat on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
