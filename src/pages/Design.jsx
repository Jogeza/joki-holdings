import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Design() {
  const projects = [
    {
      id: "01",
      title: "Brand Identity",
      category: "Branding",
      desc:
        "Logos, colours, typography and brand guidelines that give your business a clear and consistent look.",
      image: "/images/design-01.svg",
    },
    {
      id: "02",
      title: "Packaging & Labels",
      category: "Packaging",
      desc:
        "Labels, boxes, product packaging and other materials designed to make your products look ready for the shelf.",
      image: "/images/design-02.svg",
    },
    {
      id: "03",
      title: "Marketing & Social Graphics",
      category: "Marketing",
      desc:
        "Posters, social media artwork, adverts and promotional graphics for the things your business needs to communicate.",
      image: "/images/design-03.svg",
    },
  ];

  const packages = [
    {
      title: "Brand Starter",
      tag: "For new businesses",
      features: [
        "Primary Logo",
        "Secondary Logo Mark",
        "Colour Palette",
        "Typography Selection",
        "Business Card Design",
        "Social Media Profile Assets",
        "Print & Digital Logo Files",
      ],
    },

    {
      title: "Brand Package",
      tag: "For growing businesses",
      features: [
        "Everything in Brand Starter",
        "Brand Guidelines",
        "Business Stationery",
        "Company Profile / Brochure",
        "Social Media Templates",
        "Packaging or Label Design",
        "Print-Ready Files",
      ],
    },

    {
      title: "Ongoing Design",
      tag: "For businesses with regular work",
      features: [
        "Regular Design Support",
        "Social Media Graphics",
        "Marketing Materials",
        "Campaign Artwork",
        "Event & Promotional Graphics",
        "Priority Design Requests",
        "Ongoing Creative Support",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Graphic Design & Branding in Kampala | Joki Holdings
        </title>

        <meta
          name="description"
          content="Professional graphic design and branding services in Kampala, Uganda. Joki Holdings creates brand identities, logos, packaging, marketing graphics and business materials."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.jokiholdings.com/design"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Graphic Design & Branding in Kampala | Joki Holdings"
        />

        <meta
          property="og:description"
          content="Professional graphic design and branding services in Kampala, Uganda. From brand identity and logos to packaging and marketing materials."
        />

        <meta
          property="og:url"
          content="https://www.jokiholdings.com/design"
        />

        <meta
          property="og:image"
          content="https://www.jokiholdings.com/brand-assets/joki-logo.svg"
        />

        <meta
          property="og:site_name"
          content="Joki Holdings Ltd"
        />

        <meta
          property="og:locale"
          content="en_UG"
        />

        {/* Twitter / X */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Graphic Design & Branding in Kampala | Joki Holdings"
        />

        <meta
          name="twitter:description"
          content="Professional graphic design and branding services in Kampala, Uganda. From brand identity and logos to packaging and marketing materials."
        />

        <meta
          name="twitter:image"
          content="https://www.jokiholdings.com/brand-assets/joki-logo.svg"
        />
      </Helmet>

      <section className="joki-page">
        <div className="joki-container">

          {/* =====================================================
              HERO
          ====================================================== */}

          <div className="joki-page-hero">
            <span className="joki-eyebrow">
              01 / Design
            </span>

            <h1>
              Good design
              <span> makes a difference.</span>
            </h1>

            <p>
              We design the things your business needs to look
              professional, stay consistent and communicate clearly.
            </p>
          </div>

          {/* =====================================================
              SHOWCASE
          ====================================================== */}

          <div className="joki-showcase-section">
            <div className="joki-section-heading">
              <span className="joki-eyebrow">
                What We Make
              </span>

              <h2>
                Design for real business needs.
              </h2>
            </div>

            <div className="joki-showcase-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="joki-showcase-card"
                >
                  <div className="joki-showcase-img-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <span className="joki-showcase-badge">
                      {project.category}
                    </span>
                  </div>

                  <div className="joki-showcase-body">
                    <span className="joki-showcase-num">
                      {project.id}
                    </span>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              WHAT WE DESIGN
          ====================================================== */}

          <div className="joki-capabilities-box">
            <div className="joki-content-grid">

              <div>
                <span className="joki-section-number">
                  WHAT WE DESIGN
                </span>

                <h3>
                  From the logo to the little things.
                </h3>

                <p>
                  Your business needs more than a logo. We create
                  the visual materials you need to present the
                  business properly, from your stationery and
                  packaging to your marketing graphics.
                </p>
              </div>

              <div className="joki-list">
                <div>Brand Identity</div>
                <div>Logo Design & Redesign</div>
                <div>Company Profiles</div>
                <div>Business Cards & Stationery</div>
                <div>Social Media Graphics</div>
                <div>Posters & Flyers</div>
                <div>Packaging & Labels</div>
                <div>Signage & Promotional Materials</div>
              </div>

            </div>
          </div>

          {/* =====================================================
              DESIGN PACKAGES
          ====================================================== */}

          <div className="joki-packages-section">
            <div className="joki-section-heading">
              <span className="joki-eyebrow">
                Design Options
              </span>

              <h2>
                Start where you need to.
              </h2>
            </div>

            <div className="joki-packages-grid">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`joki-package-card ${
                    idx === 1 ? "is-featured" : ""
                  }`}
                >
                  {idx === 1 && (
                    <span className="joki-popular-badge">
                      Popular
                    </span>
                  )}

                  <h3>
                    {pkg.title}
                  </h3>

                  <span className="joki-package-tag">
                    {pkg.tag}
                  </span>

                  <ul className="joki-package-list">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`joki-button ${
                      idx === 1
                        ? "joki-button-primary"
                        : "joki-button-dark"
                    }`}
                  >
                    Talk to Us <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              DESIGN + PRINT CONNECTION
          ====================================================== */}

          <div className="joki-page-cta">
            <h2>
              Need the design printed too?
            </h2>

            <p>
              We can take your artwork from the screen to the
              finished product. Design. Print. Web.
            </p>

            <div className="joki-cta-btns">
              <Link
                to="/contact"
                className="joki-button joki-button-primary"
              >
                Talk to Us <span>→</span>
              </Link>

              <Link
                to="/print"
                className="joki-button joki-button-outline-light"
              >
                See Print Services <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}