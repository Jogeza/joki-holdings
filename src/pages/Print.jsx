import React from "react";
import { Link } from "react-router-dom";

const printServices = [
  {
    number: "01",
    title: "Business Printing",
    description:
      "Professional business cards, letterheads, envelopes and stationery that keep your brand consistent.",
    image: "/assets/images/project/project-img1.jpg",
  },
  {
    number: "02",
    title: "Marketing Materials",
    description:
      "Flyers, brochures, posters and promotional materials designed to get your message noticed.",
    image: "/assets/images/project/project-img2.jpg",
  },
  {
    number: "03",
    title: "Large Format",
    description:
      "Banners, signage and large-format prints for businesses, campaigns, events and spaces.",
    image: "/assets/images/project/project-img3.jpg",
  },
  {
    number: "04",
    title: "Labels & Packaging",
    description:
      "Printed labels, packaging materials and product presentation designed for real-world use.",
    image: "/assets/images/project/project-img4.jpg",
  },
];

const printApplications = [
  "Business Cards",
  "Flyers & Brochures",
  "Posters",
  "Banners & Signage",
  "Labels & Stickers",
  "Corporate Stationery",
  "Promotional Materials",
  "Large Format Printing",
];

export default function Print() {
  return (
    <section className="joki-page joki-print-page">
      <div className="joki-container">

        {/* HERO */}
        <div className="joki-page-hero joki-print-hero">
          <span className="joki-eyebrow">02 / Print</span>

          <h1>
            Make it
            <span> tangible.</span>
          </h1>

          <p>
            Professional printing for businesses, organisations,
            events and brands that need their ideas to exist
            beyond the screen.
          </p>
        </div>

        {/* INTRO */}
        <div className="joki-content-grid joki-print-intro">
          <div>
            <span className="joki-section-number">
              PRINT WITH PURPOSE
            </span>
          </div>

          <div>
            <h2 className="joki-section-heading">
              From screen to
              <span> something real.</span>
            </h2>

            <p className="joki-section-copy">
              Good printing is more than putting ink on paper.
              It is about choosing the right material, finish,
              size and production method to make your brand
              look professional wherever it appears.
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <div className="joki-print-services">
          <div className="joki-section-header">
            <span className="joki-section-number">WHAT WE PRINT</span>

            <p>
              Practical printing solutions for everyday business,
              marketing and brand communication.
            </p>
          </div>

          <div className="joki-print-grid">
            {printServices.map((service) => (
              <article className="joki-print-card" key={service.number}>
                <div className="joki-print-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                  <span>{service.number}</span>
                </div>

                <div className="joki-print-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="joki-card-link">
                    Explore service
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* APPLICATIONS */}
        <div className="joki-content-grid joki-print-applications">
          <div>
            <span className="joki-section-number">
              PRINT APPLICATIONS
            </span>
          </div>

          <div className="joki-list joki-print-list">
            {printApplications.map((item, index) => (
              <div key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="joki-page-cta joki-print-cta">
          <span className="joki-eyebrow">03 / Let's produce</span>

          <h2>Have something to print?</h2>

          <p>
            Tell us what you need and we will help you work
            out the right format, material and production option.
          </p>

          <Link
            to="/contact"
            className="joki-button joki-button-primary"
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}