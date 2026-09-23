import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="logo" to="/" aria-label="Joki Holdings home">
            <img className="logo-image" src="/images/joki-logo.svg" alt="" width="74" height="56" />
          </Link>
          <p>Design, print and web work built in Kampala for businesses here and worldwide.</p>
          <div className="legacy-line">Previously operated as {SITE.legacyNames.join(' / ')}.</div>
        </div>
        <div>
          <h4>Studio</h4>
          <div className="footer-links">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="footer-links">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <span>{SITE.location}</span>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 {SITE.name}</span>
        <span>Design · Print · Web</span>
      </div>
    </footer>
  );
}
