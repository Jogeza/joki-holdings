import React from "react";
import { Link } from "react-router-dom";

export default function Print() {
  const printItems = [
    {
      id: "01",
      title: "Business Cards & Stationery",
      category: "Business Print",
      desc:
        "Business cards, letterheads, envelopes, invoices and other everyday materials that keep your business looking consistent.",
      image: "/images/print-01.svg",
    },
    {
      id: "02",
      title: "Flyers, Brochures & Company Profiles",
      category: "Marketing Print",
      desc:
        "Printed materials for promoting your business, presenting your services and sharing information with customers.",
      image: "/images/print-02.svg",
    },
    {
      id: "03",
      title: "Banners, Signs & Large Format",
      category: "Large Format",
      desc:
        "Banners, pull-ups, posters, signage and other large-format materials for shops, offices, events and campaigns.",
      image: "/images/print-03.svg",
    },
  ];

  const printServices = [
    {
      number: "01",
      title: "Business Print",
      text:
        "Business cards, letterheads, envelopes, invoices, receipts and other stationery your business uses every day.",
    },
    {
      number: "02",
      title: "Marketing Materials",
      text:
        "Flyers, brochures, company profiles, posters and other materials for promoting your products and services.",
    },
    {
      number: "03",
      title: "Large Format",
      text:
        "Banners, pull-up banners, posters, stickers and signage for shops, offices, events and outdoor campaigns.",
    },
    {
      number: "04",
      title: "Branded Materials",
      text:
        "Labels, packaging, stickers and other printed materials that help carry your brand into the physical world.",
    },
  ];

  const finishes = [
    {
      number: "01",
      title: "Matte & Gloss",
      desc:
        "Choose a finish that suits the material, from clean matte surfaces to brighter gloss finishes.",
    },
    {
      number: "02",
      title: "Lamination",
      desc:
        "Add protection and durability to printed materials that need to handle regular use.",
    },
    {
      number: "03",
      title: "Cutting & Trimming",
      desc:
        "Materials are trimmed and finished to the required size and shape.",
    },
    {
      number: "04",
      title: "Custom Finishing",
      desc:
        "Need something different? Tell us what you have in mind and we can work out the best production approach.",
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">

        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="joki-page-hero">
          <span className="joki-eyebrow">
            02 / Print
          </span>

          <h1>
            Print that
            <span> works for your business.</span>
          </h1>

          <p>
            From business cards and flyers to banners and signage, we
            produce the printed materials businesses need to get noticed,
            stay consistent and look professional.
          </p>
        </div>

        {/* =====================================================
            SHOWCASE
        ====================================================== */}

        <div className="joki-showcase-section">

          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              What We Print
            </span>

            <h2>
              Print for everyday business.
            </h2>
          </div>

          <div className="joki-showcase-grid">
            {printItems.map((item) => (
              <div
                key={item.id}
                className="joki-showcase-card"
              >
                <div className="joki-showcase-img-wrap">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <span className="joki-showcase-badge">
                    {item.category}
                  </span>

                </div>

                <div className="joki-showcase-body">

                  <span className="joki-showcase-num">
                    {item.id}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="joki-capabilities-box">

          <div className="joki-content-grid">

            <div>
              <span className="joki-section-number">
                PRINT SERVICES
              </span>

              <h3>
                From small jobs to larger projects.
              </h3>

              <p>
                We handle the printed materials businesses use every day,
                whether you need a few items or a larger production run.
              </p>
            </div>

            <div className="joki-list">

              {printServices.map((service) => (
                <div key={service.number}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "12px",
                      opacity: 0.45,
                    }}
                  >
                    {service.number}
                  </span>

                  <strong>
                    {service.title}
                  </strong>

                  <p
                    style={{
                      margin: "8px 0 0 32px",
                    }}
                  >
                    {service.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

        {/* =====================================================
            FINISHING
        ====================================================== */}

        <div className="joki-finishes-section">

          <div className="joki-section-heading">

            <span className="joki-eyebrow">
              Finishing Options
            </span>

            <h2>
              Choose how the final piece should look.
            </h2>

          </div>

          <div className="joki-finishes-grid">

            {finishes.map((finish) => (
              <div
                key={finish.number}
                className="joki-finish-card"
              >

                <span className="joki-finish-num">
                  {finish.number}
                </span>

                <h4>
                  {finish.title}
                </h4>

                <p>
                  {finish.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

        {/* =====================================================
            HOW WE WORK
        ====================================================== */}

        <div
          className="joki-capabilities-box"
          style={{
            marginTop: "80px",
          }}
        >

          <div className="joki-content-grid">

            <div>

              <span className="joki-section-number">
                HOW IT WORKS
              </span>

              <h3>
                Simple from start to finish.
              </h3>

              <p>
                Send us what you need, and we'll help you choose the right
                format, size and print option before production starts.
              </p>

            </div>

            <div className="joki-list">

              <div>
                <strong>01 &nbsp; Tell us what you need</strong>
              </div>

              <div>
                <strong>02 &nbsp; Confirm the artwork</strong>
              </div>

              <div>
                <strong>03 &nbsp; We prepare it for print</strong>
              </div>

              <div>
                <strong>04 &nbsp; Collect or arrange delivery</strong>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PAGE CTA
        ====================================================== */}

        <div className="joki-page-cta">

          <h2>
            Need something printed?
          </h2>

          <p>
            Tell us what you need, the size, quantity and when you need it.
            We'll help you work out the next step.
          </p>

          <div className="joki-cta-btns">

            <Link
              to="/contact"
              className="joki-button joki-button-primary"
            >
              Talk to Us &rarr;
            </Link>

            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings%2C%20I'd%20like%20to%20ask%20about%20Print%20services."
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