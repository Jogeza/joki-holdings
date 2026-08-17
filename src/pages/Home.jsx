import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState("design");
  const [typedText, setTypedText] = useState("");

  const heroText = "We help businesses look the part.";
  const firstPartLength = "We help businesses".length;

  /* =========================================================
     HERO TYPING EFFECT
  ========================================================= */

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

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll("[data-joki-reveal]");

    if (!elements.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add("joki-reveal-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("joki-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     HERO SERVICE PREVIEWS
  ========================================================= */

  const previews = {
    design: {
      number: "01",
      title: "Design",
      shortTitle: "Creative",
      tagline: "Brand identity, graphics and visual materials",
      desc:
        "Logos, brand identity, packaging and everyday artwork that help your business look consistent and recognisable.",
      image: "/images/home-design.svg",
      link: "/design",
      accent: "Creative",
    },

    print: {
      number: "02",
      title: "Print",
      shortTitle: "Production",
      tagline: "Business printing and branded materials",
      desc:
        "Business cards, brochures, flyers, banners, stickers and signage, prepared properly and ready for production.",
      image: "/images/home-print.svg",
      link: "/print",
      accent: "Production",
    },

    web: {
      number: "03",
      title: "Web",
      shortTitle: "Digital",
      tagline: "Websites built around your business",
      desc:
        "Business websites, online shops and web applications that make it easier for people to understand and use your business.",
      image: "/images/home-web.svg",
      link: "/web",
      accent: "Digital",
    },
  };

  const currentPreview = previews[activeTab];

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      number: "01",
      title: "Design",
      badge: "Creative",
      text:
        "Logos, brand identity, packaging, social graphics and the everyday artwork your business needs.",
      tags: ["Brand Identity", "Packaging", "Graphics"],
      link: "/design",
    },

    {
      number: "02",
      title: "Print",
      badge: "Production",
      text:
        "Business cards, flyers, brochures, banners, stickers and signage, from artwork to finished job.",
      tags: ["Stationery", "Large Format", "Signage"],
      link: "/print",
    },

    {
      number: "03",
      title: "Web",
      badge: "Digital",
      text:
        "Business websites and online shops that are easy to use, easy to find and built around your goals.",
      tags: ["Websites", "E-Commerce", "Web Apps"],
      link: "/web",
    },
  ];

  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      title: "Tell us what you need",
      text:
        "Give us the idea, the problem or simply tell us what you are trying to achieve.",
    },

    {
      number: "02",
      title: "We work out the direction",
      text:
        "We look at what is needed and come back with a clear and practical way forward.",
    },

    {
      number: "03",
      title: "We make it",
      text:
        "Design, print or development — this is where the actual work gets done.",
    },

    {
      number: "04",
      title: "You get the finished work",
      text:
        "We prepare everything you need and make sure it is ready to use.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="joki-hero joki-v3-hero">
        {/* Large Joki monogram background */}

        <div className="joki-hero-mark" aria-hidden="true">
          <img
            src="/brand-assets/joki-monogram.svg"
            alt=""
          />
        </div>

        {/* Ambient decorative lights */}

        <div
          className="joki-hero-orb joki-hero-orb-one"
          aria-hidden="true"
        />

        <div
          className="joki-hero-orb joki-hero-orb-two"
          aria-hidden="true"
        />

        <div
          className="joki-hero-orb joki-hero-orb-three"
          aria-hidden="true"
        />

        <div className="joki-container joki-hero-grid">
          {/* =================================================
              HERO COPY
          ================================================== */}

          <div
            className="joki-hero-copy joki-v3-hero-copy"
            data-joki-reveal
          >
            <span className="joki-eyebrow joki-glass-eyebrow">
              Joki Holdings Ltd · Kampala
            </span>

            <h1 aria-label={heroText}>
              {typedText.slice(0, firstPartLength)}

              {typedText.length > firstPartLength && (
                <span>
                  {typedText.slice(firstPartLength)}
                </span>
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
              We help businesses look good, communicate clearly and
              present themselves properly.
            </p>

            <div className="joki-hero-actions">
              <Link
                to="/contact"
                className="joki-button joki-button-primary joki-v3-button"
              >
                Talk to Us <span>→</span>
              </Link>

              <Link
                to="/design"
                className="joki-button joki-button-link"
              >
                See Our Work <span>→</span>
              </Link>
            </div>

            {/* Trust strip */}

            <div className="joki-hero-trust joki-glass-trust">
              <div className="joki-trust-item">
                <strong>Kampala</strong>
                <span>Based in Uganda</span>
              </div>

              <div className="joki-trust-divider" />

              <div className="joki-trust-item">
                <strong>3</strong>
                <span>Core Services</span>
              </div>

              <div className="joki-trust-divider" />

              <div className="joki-trust-item">
                <strong>1</strong>
                <span>Creative Partner</span>
              </div>
            </div>

            <p className="joki-hero-location">
              Kampala based. Available for projects across Uganda and beyond.
            </p>
          </div>

          {/* =================================================
              INTERACTIVE HERO VISUAL
          ================================================== */}

          <div
            className="joki-hero-visual-wrapper joki-v3-glass-panel"
            data-joki-reveal
          >
            <div className="joki-visual-panel-top">
              <div>
                <span className="joki-visual-kicker">
                  Our services
                </span>

                <strong>
                  What can we help with?
                </strong>
              </div>

              <span className="joki-visual-status">
                <i />
                Taking projects
              </span>
            </div>

            <div className="joki-visual-tabs-nav">
              {Object.entries(previews).map(
                ([key, preview]) => (
                  <button
                    key={key}
                    type="button"
                    className={`joki-tab-btn ${
                      activeTab === key ? "is-active" : ""
                    }`}
                    onClick={() => setActiveTab(key)}
                    aria-pressed={activeTab === key}
                  >
                    <span>{preview.number}</span>
                    {preview.title}
                  </button>
                )
              )}
            </div>

            <div className="joki-visual-display">
              <img
                key={activeTab}
                src={currentPreview.image}
                alt={`Joki Holdings ${currentPreview.title} work`}
                className="joki-visual-img"
              />

              <div className="joki-visual-gradient" />

              <div className="joki-visual-overlay">
                <div>
                  <span className="joki-visual-tag">
                    {currentPreview.tagline}
                  </span>

                  <span className="joki-visual-description">
                    {currentPreview.desc}
                  </span>
                </div>

                <Link
                  to={currentPreview.link}
                  className="joki-visual-link"
                >
                  Explore {currentPreview.title}{" "}
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="joki-visual-footer">
              <span>
                0{currentPreview.number} / {currentPreview.accent}
              </span>

              <span>
                JOKI HOLDINGS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSITIONING STRIP
      ====================================================== */}

      <section className="joki-stats-strip joki-v3-dark-section">
        <div className="joki-container joki-stats-grid">
          <div
            className="joki-stat-card joki-v3-stat"
            data-joki-reveal
          >
            <span className="joki-stat-index">01</span>

            <h3>Good Design</h3>

            <p>
              Design that makes your business easier to recognise
              and easier to trust.
            </p>
          </div>

          <div
            className="joki-stat-card joki-v3-stat"
            data-joki-reveal
          >
            <span className="joki-stat-index">02</span>

            <h3>Quality Print</h3>

            <p>
              From business stationery to banners and branded
              materials, we handle the job from artwork to print.
            </p>
          </div>

          <div
            className="joki-stat-card joki-v3-stat"
            data-joki-reveal
          >
            <span className="joki-stat-index">03</span>

            <h3>Websites That Work</h3>

            <p>
              Websites that make it easy for customers to understand
              your business and get in touch.
            </p>
          </div>

          <div
            className="joki-stat-card joki-v3-stat"
            data-joki-reveal
          >
            <span className="joki-stat-index">04</span>

            <h3>One Partner</h3>

            <p>
              Need design, print and web for the same project?
              Keep it under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="joki-intro joki-v3-intro">
        <div className="joki-container joki-intro-grid">
          <div data-joki-reveal>
            <span className="joki-section-number">
              01 / WHAT WE DO
            </span>

            <div className="joki-intro-orbit">
              <img
                src="/brand-assets/joki-monogram.svg"
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>

          <div data-joki-reveal>
            <h2>
              You have a business.
              <br />
              We help you present it well.
            </h2>

            <p className="joki-intro-lead">
              Good branding is more than a logo. Your cards, posters,
              packaging, website and social media should all feel like
              they belong to the same business. That is where we come in.
            </p>

            <Link
              to="/about"
              className="joki-text-link"
            >
              About Joki <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="joki-services joki-v3-services">
        <div className="joki-container">
          <div
            className="joki-section-heading joki-v3-section-heading"
            data-joki-reveal
          >
            <span className="joki-eyebrow">
              What We Do
            </span>

            <h2>
              The things your business
              <br />
              needs to show up well.
            </h2>
          </div>

          <div className="joki-services-grid">
            {services.map((service, index) => (
              <Link
                to={service.link}
                className={`joki-service-card joki-v3-service-card service-${index + 1}`}
                key={service.number}
                data-joki-reveal
              >
                <div className="joki-card-glow" />

                <div className="joki-card-header">
                  <span>{service.number}</span>

                  <span className="joki-card-badge">
                    {service.badge}
                  </span>
                </div>

                <div className="joki-service-icon">
                  <img
                    src="/brand-assets/joki-monogram.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="joki-card-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <strong className="joki-card-cta">
                  Explore {service.title} <span>→</span>
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <section className="joki-process-section joki-v3-process">
        <div className="joki-container">
          <div
            className="joki-section-heading"
            data-joki-reveal
          >
            <span className="joki-eyebrow">
              How We Work
            </span>

            <h2>
              Simple.
              <br />
              Clear. Practical.
            </h2>
          </div>

          <div className="joki-process-grid">
            {process.map((step, index) => (
              <div
                className="joki-process-step joki-v3-process-step"
                key={step.number}
                data-joki-reveal
                style={{
                  "--joki-delay": `${index * 80}ms`,
                }}
              >
                <div className="joki-process-top">
                  <span className="joki-step-num">
                    {step.number}
                  </span>

                  <span className="joki-process-line" />
                </div>

                <h4>{step.title}</h4>

                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="joki-gold-section joki-v3-gold-section">
        <div
          className="joki-cta-monogram"
          aria-hidden="true"
        >
          <img
            src="/brand-assets/joki-monogram.svg"
            alt=""
          />
        </div>

        <div
          className="joki-container joki-v3-cta-content"
          data-joki-reveal
        >
          <span className="joki-eyebrow">
            Have something in mind?
          </span>

          <h2>
            Let's get to work.
          </h2>

          <p className="joki-gold-desc">
            Need a logo, printed materials, a website or all three?
            Tell us what you are working on and we'll take it from there.
          </p>

          <div className="joki-gold-actions">
            <Link
              to="/contact"
              className="joki-button joki-button-dark joki-v3-button"
            >
              Talk to Us <span>→</span>
            </Link>

            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings%2C%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline"
            >
              Chat on WhatsApp <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}