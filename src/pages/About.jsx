import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="joki-page joki-about-page">
      <div className="joki-container">

        {/* HERO */}
        <div className="joki-page-hero joki-about-hero">
          <span className="joki-eyebrow">04 / About Joki</span>

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


        {/* INTRODUCTION */}
        <div className="joki-about-grid">

          <div>
            <span className="joki-section-number">
              WHO WE ARE
            </span>
          </div>

          <div className="joki-about-copy">

            <p className="joki-large-text">
              We believe good design should do more than look good.
              It should make a business clearer, more credible and
              easier to remember.
            </p>

            <p>
              Joki Holdings brings creative design, professional
              printing and modern web development together under one
              roof.
            </p>

            <p>
              From the first idea to the finished printed piece or
              digital experience, we help businesses create work
              that feels consistent, intentional and professional.
            </p>

          </div>

        </div>


        {/* OUR APPROACH */}
        <div className="joki-about-approach">

          <div className="joki-about-approach-heading">
            <span className="joki-section-number">
              OUR APPROACH
            </span>

            <h2>
              One idea.
              <span> Many touchpoints.</span>
            </h2>
          </div>

          <div className="joki-about-approach-content">

            <p>
              A business does not exist in just one place. Your
              customers may discover you through a social post,
              receive your business card, visit your website or see
              your brand on a printed sign.
            </p>

            <p>
              We believe all of those moments should feel connected.
              That's why we combine design, print and web into one
              visual system.
            </p>

          </div>

        </div>


        {/* SERVICES */}
        <div className="joki-about-services">

          <div className="joki-about-services-header">
            <span className="joki-eyebrow">
              What we bring together
            </span>

            <h2>
              From concept
              <span> to execution.</span>
            </h2>
          </div>

          <div className="joki-about-services-grid">

            <div className="joki-about-service-card">
              <span>01</span>

              <h3>Design</h3>

              <p>
                Brand identities, marketing materials, packaging,
                social graphics and visual systems that communicate
                clearly.
              </p>

              <Link to="/design">
                Explore Design →
              </Link>
            </div>


            <div className="joki-about-service-card">
              <span>02</span>

              <h3>Print</h3>

              <p>
                Professional print production that takes your
                designs from the screen into the real world.
              </p>

              <Link to="/print">
                Explore Print →
              </Link>
            </div>


            <div className="joki-about-service-card">
              <span>03</span>

              <h3>Web</h3>

              <p>
                Modern websites and digital experiences designed to
                give your business a professional presence online.
              </p>

              <Link to="/web">
                Explore Web →
              </Link>
            </div>

          </div>

        </div>


        {/* VALUES */}
        <div className="joki-values">

          <span className="joki-eyebrow">
            What matters to us
          </span>

          <div className="joki-values-grid">

            <div>
              <span>01</span>

              <h3>Quality</h3>

              <p>
                We care about the final result and the details that
                make good work stand out.
              </p>
            </div>


            <div>
              <span>02</span>

              <h3>Clarity</h3>

              <p>
                Good communication creates better ideas, better
                decisions and better work.
              </p>
            </div>


            <div>
              <span>03</span>

              <h3>Consistency</h3>

              <p>
                Your brand should feel like one brand wherever
                customers encounter it.
              </p>
            </div>


            <div>
              <span>04</span>

              <h3>Progress</h3>

              <p>
                We keep learning, experimenting and improving the
                way we work.
              </p>
            </div>

          </div>

        </div>


        {/* FINAL STATEMENT */}
        <div className="joki-about-statement">

          <span className="joki-section-number">
            OUR BELIEF
          </span>

          <h2>
            Good work should
            <span> move a business forward.</span>
          </h2>

          <p>
            Whether you need a new identity, something printed or a
            stronger presence online, the goal is the same:
            create work that helps your business communicate and
            grow.
          </p>

        </div>


        {/* CTA */}
        <div className="joki-page-cta">

          <h2>
            Let's work together.
          </h2>

          <Link
            to="/contact"
            className="joki-button joki-button-primary"
          >
            Talk to Us
          </Link>

        </div>

      </div>
    </section>
  );
}