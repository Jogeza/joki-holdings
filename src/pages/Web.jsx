import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Web() {
  const webProjects = [
    {
      id: "01",
      title: "Business Websites",
      category: "Business Web",
      desc:
        "Clear, professional websites that explain what your business does, show your services and make it easy for customers to get in touch.",
      image: "/images/web-01.svg",
    },
    {
      id: "02",
      title: "Online Stores",
      category: "E-Commerce",
      desc:
        "Online shops built to help you present your products, manage your catalogue and give customers a simple way to place orders.",
      image: "/images/web-02.svg",
    },
    {
      id: "03",
      title: "Custom Web Applications",
      category: "Web Apps",
      desc:
        "Custom websites and web applications for businesses that need more than a standard company website.",
      image: "/images/web-03.svg",
    },
  ];

  const webServices = [
    {
      number: "01",
      title: "Business Websites",
      text:
        "Professional websites for companies, organisations, professionals and growing businesses.",
    },
    {
      number: "02",
      title: "Online Stores",
      text:
        "Product-focused websites that allow customers to browse your products and make enquiries or purchases online.",
    },
    {
      number: "03",
      title: "Landing Pages",
      text:
        "Focused pages for products, services, campaigns and specific marketing activities.",
    },
    {
      number: "04",
      title: "Custom Web Apps",
      text:
        "Web-based systems, portals and applications built around a specific business process or requirement.",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Works on Mobile",
      desc:
        "Your website should work properly on the phones, tablets and computers your customers already use.",
    },
    {
      number: "02",
      title: "Easy to Understand",
      desc:
        "We keep the structure and content clear so visitors can quickly understand what you do and what to do next.",
    },
    {
      number: "03",
      title: "Built for Your Business",
      desc:
        "We design around your business, customers and goals instead of forcing your content into a generic template.",
    },
    {
      number: "04",
      title: "Ready to Grow",
      desc:
        "We build with room for new pages, features and improvements as your business develops.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Web Design & Development in Kampala | Joki Holdings
        </title>

        <meta
          name="description"
          content="Professional web design and development in Kampala, Uganda. Joki Holdings builds business websites, online stores, landing pages and custom web applications."
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.jokiholdings.com/web"
        />

        {/* Open Graph */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Web Design & Development in Kampala | Joki Holdings"
        />

        <meta
          property="og:description"
          content="Professional websites, online stores, landing pages and custom web applications built by Joki Holdings in Kampala, Uganda."
        />

        <meta
          property="og:url"
          content="https://www.jokiholdings.com/web"
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
          content="Web Design & Development in Kampala | Joki Holdings"
        />

        <meta
          name="twitter:description"
          content="Professional websites, online stores, landing pages and custom web applications built by Joki Holdings in Kampala, Uganda."
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
              03 / Web
            </span>

            <h1>
              A website that
              <span> works for your business.</span>
            </h1>

            <p>
              We build clear, responsive websites that help businesses
              explain what they do, reach customers and have a proper
              presence online.
            </p>

          </div>

          {/* =====================================================
              SHOWCASE
          ====================================================== */}

          <div className="joki-showcase-section">

            <div className="joki-section-heading">

              <span className="joki-eyebrow">
                What We Build
              </span>

              <h2>
                Websites for real businesses.
              </h2>

            </div>

            <div className="joki-showcase-grid">

              {webProjects.map((project) => (
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
              WEB SERVICES
          ====================================================== */}

          <div className="joki-capabilities-box">

            <div className="joki-content-grid">

              <div>

                <span className="joki-section-number">
                  WEB SERVICES
                </span>

                <h3>
                  From simple websites to custom systems.
                </h3>

                <p>
                  Whether you need a simple company website or a more
                  involved web application, we start with what the
                  business actually needs.
                </p>

              </div>

              <div className="joki-list">

                {webServices.map((service) => (
                  <div key={service.number}>

                    <strong>
                      {service.number} &nbsp; {service.title}
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
              WHAT MATTERS
          ====================================================== */}

          <div className="joki-pillars-section">

            <div className="joki-section-heading">

              <span className="joki-eyebrow">
                What Matters
              </span>

              <h2>
                A website should be useful.
              </h2>

            </div>

            <div className="joki-pillars-grid">

              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="joki-pillar-card"
                >

                  <span className="joki-pillar-num">
                    {pillar.number}
                  </span>

                  <h4>
                    {pillar.title}
                  </h4>

                  <p>
                    {pillar.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* =====================================================
              HOW WE BUILD
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
                  HOW WE BUILD
                </span>

                <h3>
                  Clear process. No unnecessary complexity.
                </h3>

                <p>
                  We keep the process practical and involve you at the
                  important stages so the finished website reflects
                  your business.
                </p>

              </div>

              <div className="joki-list">

                <div>
                  <strong>
                    01 &nbsp; Understand the business
                  </strong>
                </div>

                <div>
                  <strong>
                    02 &nbsp; Plan the website
                  </strong>
                </div>

                <div>
                  <strong>
                    03 &nbsp; Design and build
                  </strong>
                </div>

                <div>
                  <strong>
                    04 &nbsp; Test and launch
                  </strong>
                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              CTA
          ====================================================== */}

          <div className="joki-page-cta">

            <h2>
              Need a website?
            </h2>

            <p>
              Tell us what your business does and what you want the
              website to achieve. We'll help you work out what you need.
            </p>

            <div className="joki-cta-btns">

              <Link
                to="/contact"
                className="joki-button joki-button-primary"
              >
                Talk to Us &rarr;
              </Link>

              <a
                href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings%2C%20I'd%20like%20to%20discuss%20a%20Web%20project."
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
    </>
  );
}