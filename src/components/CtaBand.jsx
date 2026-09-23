import { Link } from 'react-router-dom';
import Monogram from './Monogram';

export default function CtaBand({ title, copy, to = '/contact', label = 'Start a project →' }) {
  return (
    <section className="cta">
      <Monogram />
      <div className="wrap">
        <div className="cta-copy">
          <span className="eyebrow">Let’s work together</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <Link className="btn cta-button" to={to}>{label}</Link>
      </div>
    </section>
  );
}
