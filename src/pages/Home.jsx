import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const firstPart = "We make your";
  const secondPart = " business visible.";

  const fullText = firstPart + secondPart;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index += 1;

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 70);

    return () => {
      clearInterval(timer);
    };
  }, [fullText]);

  const firstVisibleLength = Math.min(
    typedText.length,
    firstPart.length
  );

  const visibleFirstPart = typedText.slice(0, firstVisibleLength);

  const visibleSecondPart =
    typedText.length > firstPart.length
      ? typedText.slice(firstPart.length)
      : "";

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="joki-hero">
        <div className="joki-container joki-hero-grid">

          <div className="joki-hero-copy">

            <span className="joki-eyebrow">
              Joki Holdings Ltd
            </span>

            <h1>
              {visibleFirstPart}
              <span>{visibleSecondPart}</span>
            </h1>

            <p>
              Design. Print. Web.
              <br />
              One creative partner for businesses that want to
              look professional and communicate with confidence.
            </p>

            <div className="joki-hero-actions">

              <Link
                to="/contact"
                className="joki-button joki-button-primary"
              >
                Talk to Us
              </Link>

              <Link
                to="/design"
                className="joki-button joki-button-link"
              >
                Explore our work
              </Link>

            </div>

          </div>

          {/* =================================================
              HERO ARTWORK
          ================================================== */}

          <div className="joki-hero-visual">

            <div className="joki-home-art joki-home-art-design">
              <img
                src="/images/home/home-design.webp"
                alt="Joki Holdings design work"
              />

              <span>
                01 / DESIGN
              </span>
            </div>

            <div className="joki-home-art joki-home-art-print">
              <img
                src="/images/home/home-print.webp"
                alt="Joki Holdings print work"
              />

              <span>
                02 / PRINT
              </span>
            </div>

            <div className="joki-home-art joki-home-art-web">
              <img
                src="/images/home/home-web.webp"
                alt="Joki Holdings web development work"
              />

              <span>
                03 / WEB
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="joki-intro">

        <div className="joki-container joki-intro-grid">

          <span className="joki-section-number">
            01 / WHAT WE DO
          </span>

          <div>

            <h2>
              From the first idea
              <br />
              to the final product.
            </h2>

            <p>
              Joki Holdings brings creative design, professional printing
              and modern web development together under one roof.
            </p>

            <Link
              to="/about"
              className="joki-text-link"
            >
              More about Joki
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="joki-services">

        <div className="joki-container">

          <div className="joki-section-heading">

            <span className="joki-eyebrow">
              Our services
            </span>

            <h2>
              Three disciplines.
              <br />
              One partner.
            </h2>

          </div>


          <div className="joki-services-grid">

            {/* DESIGN */}

            <Link
              to="/design"
              className="joki-service-card"
            >

              <span>
                01
              </span>

              <h3>
                Design
              </h3>

              <p>
                Branding, graphic design, marketing materials,
                social media artwork and visual identity.
              </p>

              <strong>
                Explore Design
              </strong>

            </Link>


            {/* PRINT */}

            <Link
              to="/print"
              className="joki-service-card"
            >

              <span>
                02
              </span>

              <h3>
                Print
              </h3>

              <p>
                Business stationery, promotional materials,
                signage, large-format work and commercial printing.
              </p>

              <strong>
                Explore Print
              </strong>

            </Link>


            {/* WEB */}

            <Link
              to="/web"
              className="joki-service-card"
            >

              <span>
                03
              </span>

              <h3>
                Web
              </h3>

              <p>
                Modern websites and digital experiences designed
                around your business goals.
              </p>

              <strong>
                Explore Web
              </strong>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOLD CTA
      ====================================================== */}

      <section className="joki-gold-section">

        <div className="joki-container">

          <span className="joki-eyebrow">
            Ready to build?
          </span>

          <h2>
            Let's make
            <br />
            something useful.
          </h2>

          <Link
            to="/contact"
            className="joki-button joki-button-dark"
          >
            Talk to Us
          </Link>

        </div>

      </section>

    </>
  );
}