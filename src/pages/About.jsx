import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      num: "01",
      title: "Do Good Work",
      desc: "We pay attention to the details and care about the finished result. The work should look good, work properly and be ready to use.",
    },
    {
      num: "02",
      title: "Keep Things Clear",
      desc: "We explain things in plain language, agree on what needs to be done and keep you informed as the work moves forward.",
    },
    {
      num: "03",
      title: "Stay Consistent",
      desc: "Your logo, colours, printed materials and website should feel like they belong to the same business.",
    },
    {
      num: "04",
      title: "Keep Getting Better",
      desc: "Design, print and technology keep changing. We keep learning and improving how we work so the quality keeps moving forward.",
    },
  ];

  const pillars = [
    {
      title: "Design",
      tagline: "Make it clear",
      desc: "We create logos, brand identities, graphics, packaging and other visual materials that help people recognise your business.",
      link: "/design",
    },
    {
      title: "Print",
      tagline: "Put it in people's hands",
      desc: "We turn your designs into business cards, brochures, flyers, banners, labels and other materials your business needs.",
      link: "/print",
    },
    {
      title: "Web",
      tagline: "Take it online",
      desc: "We build websites and web applications that explain what you do, work well on different devices and make it easy for people to contact you.",
      link: "/web",
    },
  ];

  return (
    <section className="joki-page">
      <div className="joki-container">
        {/* =====================================================
            HERO
        ====================================================== */}

        <div className="joki-page-hero">
          <span className="joki-eyebrow">About Joki Holdings Ltd</span>

          <h1>
            We help businesses
            <span> look the part.</span>
          </h1>

          <p>
            Joki Holdings is a Kampala-based company working across
            Design. Print. Web. We help businesses present themselves clearly,
            consistently and professionally.
          </p>
        </div>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}

        <div className="joki-about-grid">
          <div>
            <span className="joki-section-number">
              WHO WE ARE
            </span>

            <h3>
              One team for the work your business needs.
            </h3>
          </div>

          <div>
            <p className="joki-large-text">
              A business needs more than a good logo. It needs clear
              communication, good materials and a reliable way for people to
              find it online.
            </p>

            <p>
              That is where Joki comes in. We bring Design. Print. Web.
              together so you can get the work done without having to manage
              several different suppliers for every part of your brand.
            </p>

            <p>
              Some clients come to us with a new business and need everything
              from the ground up. Others already have a brand and simply need
              a website, printed materials, packaging or regular design work.
            </p>

            <p>
              We work around what the project actually needs. No unnecessary
              extras. No complicated process. Just good work delivered for its
              intended purpose.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESIGN. PRINT. WEB.
        ====================================================== */}

        <div className="joki-showcase-section">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              Design. Print. Web.
            </span>

            <h2>
              Three services. One team.
            </h2>
          </div>

          <div className="joki-about-pillars-grid">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="joki-about-pillar-card"
              >
                <span className="joki-eyebrow">
                  {p.tagline}
                </span>

                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <Link
                  to={p.link}
                  className="joki-text-link"
                >
                  Explore {p.title} <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            HOW WE WORK
        ====================================================== */}

        <div className="joki-values">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              How We Work
            </span>

            <h2>
              Keep it simple. Do it well.
            </h2>
          </div>

          <div className="joki-values-grid">
            {values.map((v) => (
              <div key={v.num}>
                <span>{v.num}</span>

                <h3>{v.title}</h3>

                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            OUR APPROACH
        ====================================================== */}

        <div className="joki-about-grid joki-about-approach">
          <div>
            <span className="joki-section-number">
              OUR APPROACH
            </span>

            <h3>
              Start with what you actually need.
            </h3>
          </div>

          <div>
            <p className="joki-large-text">
              Every project is different. We would rather understand the job
              first than sell you something you do not need.
            </p>

            <p>
              If you need a logo, we focus on the logo. If you need a complete
              brand identity, we build the system around it. If you need
              printed materials, we prepare them properly for production.
            </p>

            <p>
              And if your business needs a website, we start with what your
              customers need to find and understand before deciding how the
              site should work.
            </p>

            <p>
              The goal is simple: make the final result useful to your
              business, not just nice to look at.
            </p>
          </div>
        </div>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <div className="joki-values">
          <div className="joki-section-heading">
            <span className="joki-eyebrow">
              What Matters To Us
            </span>

            <h2>
              The way we approach the work.
            </h2>
          </div>

          <div className="joki-values-grid">
            {values.map((v) => (
              <div key={v.num}>
                <span>{v.num}</span>

                <h3>{v.title}</h3>

                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            LOCATION & REACH
        ====================================================== */}

        <div className="joki-location-box">
          <div className="joki-location-content">
            <span className="joki-eyebrow">
              Based in Kampala
            </span>

            <h3>
              Local team. Work that can go anywhere.
            </h3>

            <p>
              Joki is based in Kampala, Uganda. We work with businesses and
              organisations in Kampala and across Uganda, while our design and
              web services can support clients wherever they are.
            </p>

            <p>
              For print, we can arrange production and delivery depending on
              the project. For design and web work, much of the process can be
              handled remotely.
            </p>
          </div>
        </div>

        {/* =====================================================
            WHAT WE BELIEVE
        ====================================================== */}

        <div className="joki-about-grid joki-about-belief">
          <div>
            <span className="joki-section-number">
              WHY JOKI
            </span>

            <h3>
              Good work should make business easier.
            </h3>
          </div>

          <div>
            <p className="joki-large-text">
              Your customers should not have to work hard to understand what
              you do.
            </p>

            <p>
              A clear identity helps people recognise you. Good print helps
              you present yourself properly. A useful website gives people a
              place to learn more and take the next step.
            </p>

            <p>
              That is what we aim to create at Joki. Practical creative work
              that helps businesses communicate better.
            </p>
          </div>
        </div>

        {/* =====================================================
            PAGE CTA
        ====================================================== */}

        <div className="joki-page-cta">
          <h2>
            Have something you want to work on?
          </h2>

          <p>
            Tell us what you need and we will work out the best way to get it
            done.
          </p>

          <div className="joki-cta-btns">
            <Link
              to="/contact"
              className="joki-button joki-button-primary"
            >
              Talk to Us <span>→</span>
            </Link>

            <a
              href="https://wa.me/256778283522?text=Hello%20Joki%20Holdings%2C%20I'd%20like%20to%20learn%20more%20about%20working%20together."
              target="_blank"
              rel="noopener noreferrer"
              className="joki-button joki-button-outline-light"
            >
              Chat on WhatsApp <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}