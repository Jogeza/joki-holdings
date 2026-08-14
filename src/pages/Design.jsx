import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    text: "Visual systems that give your business a clear and consistent presence."
  },
  {
    number: "02",
    title: "Logo Design",
    text: "Distinctive logos designed to make your business recognizable."
  },
  {
    number: "03",
    title: "Business Profiles",
    text: "Professional company profiles and documents that communicate credibility."
  },
  {
    number: "04",
    title: "Social Media Graphics",
    text: "Purposeful social content designed to keep your brand visible and consistent."
  },
  {
    number: "05",
    title: "Marketing Materials",
    text: "Campaign materials that turn ideas, offers and messages into clear visuals."
  },
  {
    number: "06",
    title: "Posters & Flyers",
    text: "Promotional artwork designed to attract attention and communicate quickly."
  },
  {
    number: "07",
    title: "Packaging & Labels",
    text: "Practical packaging and label designs built for both shelf and screen."
  },
  {
    number: "08",
    title: "Corporate Stationery",
    text: "Business cards, letterheads and stationery that keep your brand professional."
  }
];

const projects = [
  {
    number: "01",
    category: "BRAND IDENTITY",
    title: "Project One"
  },
  {
    number: "02",
    category: "MARKETING DESIGN",
    title: "Project Two"
  },
  {
    number: "03",
    category: "SOCIAL MEDIA",
    title: "Project Three"
  },
  {
    number: "04",
    category: "PACKAGING",
    title: "Project Four"
  },
  {
    number: "05",
    category: "PRINT DESIGN",
    title: "Project Five"
  },
  {
    number: "06",
    category: "CORPORATE DESIGN",
    title: "Project Six"
  }
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience and what the design needs to achieve."
  },
  {
    number: "02",
    title: "Develop",
    text: "We turn the brief into concepts, visual directions and practical design solutions."
  },
  {
    number: "03",
    title: "Refine",
    text: "We review, improve and polish the selected direction until it feels right."
  },
  {
    number: "04",
    title: "Deliver",
    text: "You receive artwork prepared for the channels where your brand needs to appear."
  }
];

export default function Design() {
  return (
    <main className="joki-design-page">

      {/* HERO */}
      <section className="joki-design-hero">
        <div className="joki-container">
          <div className="joki-design-hero-grid">

            <div className="joki-design-hero-copy">
              <span className="joki-eyebrow">01 / Design</span>

              <h1>
                Ideas made
                <span> visible.</span>
              </h1>

              <p>
                We create visual identities and marketing materials
                that help businesses communicate clearly, look
                professional and stay consistent everywhere.
              </p>

              <div className="joki-design-hero-actions">
                <Link
                  to="/contact"
                  className="joki-button joki-button-primary"
                >
                  Talk to Us
                </Link>

                <a
                  href="#selected-work"
                  className="joki-text-link"
                >
                  View selected work
                </a>
              </div>
            </div>

            <div className="joki-design-hero-visual">
              <div className="joki-design-visual-frame">
                <div className="joki-design-visual-top">
                  <span>JOKI</span>
                  <span>DESIGN / 01</span>
                </div>

                <div className="joki-design-visual-center">
                  <span>VISUAL</span>
                  <strong>IDENTITY</strong>
                </div>

                <div className="joki-design-visual-bottom">
                  <span>IDEAS</span>
                  <span>MADE VISIBLE</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="joki-design-intro">
        <div className="joki-container">
          <div className="joki-design-intro-grid">

            <div>
              <span className="joki-section-number">
                WHAT WE DO
              </span>
            </div>

            <div>
              <h2>
                Design that works
                <span> for business.</span>
              </h2>

              <p>
                Good design is more than decoration. It should make
                your business easier to recognize, easier to understand
                and easier to remember.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="joki-design-services">
        <div className="joki-container">

          <div className="joki-design-services-heading">
            <span className="joki-eyebrow">Our capabilities</span>

            <h2>
              From the first idea
              <span> to the final artwork.</span>
            </h2>
          </div>

          <div className="joki-design-services-grid">
            {services.map((service) => (
              <article
                className="joki-design-service"
                key={service.number}
              >
                <span className="joki-design-service-number">
                  {service.number}
                </span>

                <div>
                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>

                <span className="joki-design-service-arrow">
                  ?
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        className="joki-design-work"
        id="selected-work"
      >
        <div className="joki-container">

          <div className="joki-design-work-heading">
            <div>
              <span className="joki-eyebrow">
                Selected work
              </span>

              <h2>
                Work worth
                <span> showing.</span>
              </h2>
            </div>

            <p>
              A growing collection of identities, campaigns and
              visual materials created for businesses and organizations.
            </p>
          </div>

          <div className="joki-design-project-grid">
            {projects.map((project, index) => (
              <article
                className={`joki-design-project joki-design-project-${index + 1}`}
                key={project.number}
              >
                <div className="joki-project-image">
                  <div className="joki-project-placeholder">
                    <span>{project.number}</span>
                    <strong>PROJECT</strong>
                  </div>
                </div>

                <div className="joki-project-meta">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>

                  <span className="joki-project-arrow">
                    ?
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="joki-design-process">
        <div className="joki-container">

          <div className="joki-design-process-heading">
            <span className="joki-eyebrow">
              How we work
            </span>

            <h2>
              Simple process.
              <span> Strong results.</span>
            </h2>
          </div>

          <div className="joki-design-process-grid">
            {process.map((step) => (
              <article
                className="joki-design-process-item"
                key={step.number}
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="joki-design-cta">
        <div className="joki-container">
          <div className="joki-design-cta-inner">

            <div>
              <span className="joki-eyebrow">
                Start a project
              </span>

              <h2>
                Have a design
                <span> project?</span>
              </h2>

              <p>
                Tell us what you are working on and let's turn the
                idea into something your audience can see, understand
                and remember.
              </p>
            </div>

            <Link
              to="/contact"
              className="joki-button joki-button-light"
            >
              Talk to Us
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
