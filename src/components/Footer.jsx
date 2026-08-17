import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="joki-footer">
      <div className="joki-container">
        <div className="joki-footer-top">
          <div className="joki-footer-brand">
            <img src="/brand-assets/joki-logo.svg" alt="Joki Holdings Ltd" />
            <p>
              Creative, print and digital solutions built to help businesses
              look better, communicate clearly and grow.
            </p>
          </div>

          <div className="joki-footer-column">
            <h4>Explore</h4>
            <Link to="/about">About Joki</Link>
            <Link to="/design">Design Solutions</Link>
            <Link to="/print">Commercial Print</Link>
            <Link to="/web">Web Experiences</Link>
          </div>

          <div className="joki-footer-column">
            <h4>Contact</h4>
            <a href="mailto:info@jokiholdings.com">
              info@jokiholdings.com
            </a>
            <a href="tel:+256778283522">+256 778 283522</a>
            <span>Kampala, Uganda</span>
          </div>

          <div className="joki-footer-column">
            <h4>Start a Project</h4>
            <span>Have an idea or need a quote?</span>
            <Link to="/contact" className="joki-footer-cta-link">
              Talk to Us &rarr;
            </Link>
          </div>
        </div>

        <div className="joki-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Joki Holdings Ltd. All rights reserved.</span>
          <span className="joki-footer-tagline">Design &bull; Print &bull; Digital</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
