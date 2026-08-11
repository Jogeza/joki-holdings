import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="joki-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Joki Holdings home">
              <Logo />
            </Link>
            <p className="brand-tag">Building businesses. Creating value.</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Jogeza Moses N<br />Creative Director | Founder</p>
            <p>
              <a href="tel:+256778283522">+256 778 283522</a><br />
              <a href="mailto:info@jokiholdings.com">info@jokiholdings.com</a>
            </p>
            <p>
              BH 340, Blue Heights<br />Nasser Road, Kampala, Uganda
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/our-businesses">Our Businesses</Link></li>
              <li><Link to="/ventures">Ventures</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} Joki Holdings Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
