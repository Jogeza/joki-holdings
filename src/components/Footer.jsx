import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="joki-footer">
      <div className="joki-container">
        <div className="joki-footer-top">
          <div className="joki-footer-brand">
            <img
              src="/brand-assets/joki-logo.svg"
              alt="Joki Holdings Ltd"
            />

            <p>
              Creative, print and digital solutions built to help businesses
              look better, communicate clearly and grow.
            </p>
          </div>

          <div className="joki-footer-column">
            <h4>Explore</h4>

            <Link to="/about">About</Link>
            <Link to="/design">Design</Link>
            <Link to="/print">Print</Link>
            <Link to="/web">Web</Link>
          </div>

          <div className="joki-footer-column">
            <h4>Contact</h4>

            <a href="mailto:info@jokiholdings.com">
              info@jokiholdings.com
            </a>

            <a href="tel:+256778283522">
              +256 778 283522
            </a>

            <span>Kampala, Uganda</span>
          </div>

          <div className="joki-footer-column">
            <h4>Start a Project</h4>

            <span>Have an idea?</span>

            <Link to="/contact">
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="joki-footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Joki Holdings Ltd.
          </span>

          <span>
            Creative &middot; Print &middot; Digital
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;