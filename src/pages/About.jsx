import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="joki-page">

      <div className="joki-container">

        <div className="joki-page-hero">
          <span className="joki-eyebrow">About Joki</span>

          <h1>
            Creative work
            <span> with purpose.</span>
          </h1>

          <p>
            Joki Holdings Ltd is a creative, print and digital
            solutions company helping businesses turn ideas into
            professional experiences.
          </p>
        </div>

        <div className="joki-about-grid">

          <div>
            <span className="joki-section-number">
              WHO WE ARE
            </span>
          </div>

          <div>
            <p className="joki-large-text">
              We believe good design should do more than look good.
              It should make a business clearer, more credible and
              easier to remember.
            </p>

            <p>
              That's why Joki combines design, printing and web
              development. Instead of treating these as separate
              services, we connect them into one visual experience.
            </p>
          </div>

        </div>

        <div className="joki-values">

          <span className="joki-eyebrow">
            What matters to us
          </span>

          <div className="joki-values-grid">

            <div>
              <span>01</span>
              <h3>Quality</h3>
              <p>
                We care about the final result.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Clarity</h3>
              <p>
                Good communication creates better work.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Consistency</h3>
              <p>
                Your brand should look like one brand.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Progress</h3>
              <p>
                We keep learning and improving.
              </p>
            </div>

          </div>

        </div>

        <div className="joki-page-cta">
          <h2>Let's work together.</h2>

          <Link to="/contact" className="joki-button joki-button-primary">
            Talk to Us
          </Link>
        </div>

      </div>

    </section>
  );
}
