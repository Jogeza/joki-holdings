import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function WebShowcase() {
  return (
    <Reveal as="section" className="section web-showcase">
      <div className="wrap web-showcase-grid">
        <div className="web-showcase-copy">
          <span className="eyebrow">Web design</span>
          <h2>Designed for every screen.</h2>
          <p>Clear navigation and layouts that adjust to desktop and mobile screens.</p>
          <ul className="web-points">
            <li>Responsive on phones, tablets and desktops</li>
            <li>Clear service information and contact links</li>
            <li>Built for speed, clarity and easy updates</li>
          </ul>
          <Link className="btn btn-gold" to="/web">Explore web design →</Link>
        </div>
        <div className="device-stage" aria-label="Nyumba Dynamics website shown on laptop and phone">
          <div className="laptop">
            <div className="laptop-camera" aria-hidden="true" />
            <div className="laptop-screen">
              <img src="/images/nyumba-dynamics-website.png" alt="Nyumba Dynamics website desktop design" loading="lazy" />
            </div>
            <div className="laptop-base" aria-hidden="true" />
          </div>
          <div className="phone">
            <div className="phone-speaker" aria-hidden="true" />
            <div className="phone-screen">
              <img src="/images/nyumba-dynamics-website.png" alt="Nyumba Dynamics responsive website preview" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
