import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState("design");
  const [typedText, setTypedText] = useState("");

  const heroText = "We make your business visible.";
  const firstPartLength = "We make your".length;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setTypedText(heroText);
      return;
    }

    let index = 0;

    const timer = setInterval(() => {
      index += 1;
      setTypedText(heroText.slice(0, index));

      if (index >= heroText.length) {
        clearInterval(timer);
      }
    }, 65);

    return () => clearInterval(timer);
  }, []);

  const previews = {
    design: {
      number: "01",
      title: "Design",
      tagline: "Brand identity, graphics & visual communication",
      desc: "From logos and brand materials to packaging and campaign artwork, we create visuals that help your business look consistent and recognisable.",
      image: "/images/home-design.svg",
      link: "/design",
    },

    print: {
      number: "02",
      title: "Print",
      tagline: "Business printing & physical brand materials",
      desc: "Business cards, brochures, flyers, banners, signage and other printed materials — from artwork to finished job.",
      image: "/images/home-print.svg",
      link: "/print",
    },

    web: {
      number: "03",
      title: "Web",
      tagline: "Websites built for real businesses",
      desc: "Business websites, online shops and custom web applications built around what your customers actually need.",
      image: "/images/home-web.svg",
      link: "/web",
    },
  };

  const currentPreview = previews[activeTab];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="joki-hero">
        <div className="joki-container joki-hero-grid">
          <div className="joki-hero-copy">
            <span className="joki-eyebrow">
              Joki Holdings Ltd &bull; Kampala, Uganda
            </span>

            <h1 aria-label={heroText}>
              {typedText.slice(0, firstPartLength)}

              {typedText.length > firstPartLength && (
                <span>{typedText.slice(firstPartLength)}</span>
              )}

              {typedText.length < heroText.length && (
                <span
                  className="joki-type-cursor"
                  aria-hidden="true"
                >
                  |
                </span>
              )}
            </h1>

            <p>
              Design. Print. Web.
              <br />
              We help businesses look good, communicate clearly and show up
              properly — wherever they are.
            </p>

            <div className="joki-hero-actions">
              <Link
                to="/contact"
                className="joki-button joki-button-primary"
              >
                Talk to Us &rarr;
              </Link>

              <Link
                to="/design"
                className="joki-button joki-button-link"
              >
                Explore Our Work &rarr;
              </Link>
            </div>

            {/* =================================================
                TRUST / POSITIONING STRIP
            ================================================== */}

            <div className="joki-hero-trust">
              <div className="joki-trust-item">
                <strong>Local</strong>
                <span>Kampala Based</span>
              </div>

              <div className="joki-trust-divider"></div>

              <div className="joki-trust-item">
                <strong>Remote</strong>
                <span>Work Anywhere</span>
              </div>

              <div className="joki-trust-divider"></div>

              <div className="joki-trust-item">
                <strong>3</strong>
                <span>Design &bull; Print &bull; Web</span>
              </div>
            </div>

            <p className="joki-hero-location">
              Based in Kampala. Working with clients wherever they are.
            </p>
          </div>

          {/* =================================================
              INTERACTIVE HERO VISUAL
          ================================================== */}

          <div className="joki-hero-visual-wrapper">
            <div className="joki-visual-tabs-nav">
              {Object.entries(previews).map(([key, preview]) => (
                <button
                  key={key}
                  type="button"
                  className={`joki-tab-btn ${activeTab === key ? "is-active" : ""
                    }`}
                  onClick={() => setActiveTab(key)}
                  aria-pressed={activeTab === key}
                >
                  {preview.number} {preview.title}
                </button>
              ))}
            </div>

            <div className="joki-visual-display">
              <img
                key={activeTab}
                src={currentPreview.image}
                alt={`Joki Holdings ${currentPreview.title} work`}
                className="joki-visual-img"
              />

              <div className="joki-visual-overlay">
                <span className="joki-visual-tag">
                  {currentPreview.tagline}
                </span>

                <Link
                  to={currentPreview.link}
                  className="joki-visual-link"
                >
                  Explore {currentPreview.title} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSITIONING STRIP
      ====================================================== */}

      <section className="joki-stats-strip">
        <div className="joki-container joki-stats-grid">
          <div className="joki-stat-card">
            <h3>Good Design</h3>
            <p>
              Clear visual work that gives your business a consistent,
              recognisable presence.
            </p>
          </div>

          <div className="joki-stat-card">
            <h3>Quality Print</h3>
            <p>
              From everyday business materials to larger promotional and
              branded print jobs.
            </p>
          </div>

          <div className="joki-stat-card">
            <h3>Useful Websites</h3>
            <p>
              Websites that explain what you do, work across devices and make
              it easy for people to get in touch.
            </p>
          </div>

          <div className="joki-stat-card">
            <h3>One Creative Partner</h3>
            <p>
              Bring us the whole project or just the part you need help with.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

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
              We handle the work businesses need to look good, communicate
              clearly and stay consistent — from design and print to websites.
            </p>

            <Link
              to="/about"
              className="joki-text-link"
            >
              More about Joki Holdings &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          THREE DISCIPLINES
      ====================================================== */}

      <section className="joki-services">
        <div className="joki-container">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              Our Core Disciplines
            </span>

            <h2>
              Three capabilities.
              <br />
              One creative partner.
            </h2>
          </div>

          <div className="joki-services-grid">
            {/* DESIGN */}

            <Link
              to="/design"
              className="joki-service-card"
            >
              <div className="joki-card-header">
                <span>01</span>
                <span className="joki-card-badge">
                  Creative
                </span>
              </div>

              <h3>Design</h3>

              <p>
                Logos, branding, business materials, packaging, social media
                graphics and the visual work your business needs every day.
              </p>

              <div className="joki-card-tags">
                <span>Brand Identity</span>
                <span>Packaging</span>
                <span>Graphics</span>
              </div>

              <strong className="joki-card-cta">
                Explore Design &rarr;
              </strong>
            </Link>

            {/* PRINT */}

            <Link
              to="/print"
              className="joki-service-card"
            >
              <div className="joki-card-header">
                <span>02</span>
                <span className="joki-card-badge">
                  Production
                </span>
              </div>

              <h3>Print</h3>

              <p>
                Business cards, flyers, brochures, banners, signage, stickers
                and other printed materials — from artwork to finished job.
              </p>

              <div className="joki-card-tags">
                <span>Stationery</span>
                <span>Large Format</span>
                <span>Signage</span>
              </div>

              <strong className="joki-card-cta">
                Explore Print &rarr;
              </strong>
            </Link>

            {/* WEB */}

            <Link
              to="/web"
              className="joki-service-card"
            >
              <div className="joki-card-header">
                <span>03</span>
                <span className="joki-card-badge">
                  Digital
                </span>
              </div>

              <h3>Web</h3>

              <p>
                Business websites, online shops and custom web applications
                built around what your customers actually need.
              </p>

              <div className="joki-card-tags">
                <span>Websites</span>
                <span>E-Commerce</span>
                <span>Web Apps</span>
              </div>

              <strong className="joki-card-cta">
                Explore Web &rarr;
              </strong>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <section className="joki-process-section">
        <div className="joki-container">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              How We Work
            </span>

            <h2>
              A straightforward
              <br />
              process.
            </h2>
          </div>

          <div className="joki-process-grid">
            <div className="joki-process-step">
              <span className="joki-step-num">
                01
              </span>

              <h4>
                Discovery &amp; Brief
              </h4>

              <p>
                We understand what you need, who it is for and what the
                finished job needs to achieve.
              </p>
            </div>

            <div className="joki-process-step">
              <span className="joki-step-num">
                02
              </span>

              <h4>
                Creative Concept
              </h4>

              <p>
                We turn the brief into practical design directions, layouts,
                concepts or website structures.
              </p>
            </div>

            <div className="joki-process-step">
              <span className="joki-step-num">
                03
              </span>

              <h4>
                Refinement &amp; Build
              </h4>

              <p>
                We refine the work and prepare it for its final use, whether
                that means print, production or the web.
              </p>
            </div>

            <div className="joki-process-step">
              <span className="joki-step-num">
                04
              </span>

              <h4>
                Delivery
              </h4>

              <p>
                You receive the finished work, production files or live
                website ready for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOLD CALL TO ACTION
      ====================================================== */}

      <section className="joki-gold-section">
        <div className="joki-container">
          <span className="joki-eyebrow">
            Have a project in mind?
          </span>

          <h2>
            Let's make
            <br />
            something useful.
          </h2>

          <p className="joki-gold-desc">
            Tell us what you're working on. Whether you need a new identity,
            printed materials or a website, we'll help you work out the best
            way to take it forward.
          </p>

          <div className="joki-gold-actions">
            <Link
              to="/contact"
              className="joki-button joki-button-dark"
            >
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