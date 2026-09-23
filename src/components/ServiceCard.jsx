import { Link } from 'react-router-dom';

export default function ServiceCard({ service, index, dark = false }) {
  return (
    <Link className={`card service-card${dark ? ' dark' : ''}`} to={service.path}>
      <img className="service-card-image" src={service.image} alt="" loading="lazy" />
      <span className="service-card-shade" aria-hidden="true" />
      <div className="service-card-top">
        <span className="num">{String(index + 1).padStart(2, '0')}</span>
        <span className="service-card-arrow" aria-hidden="true">↗</span>
      </div>
      <div className="service-card-copy">
        <h3>{service.cardTitle}</h3>
        <p>{service.cardCopy}</p>
        <span className="card-cta">Explore discipline</span>
      </div>
    </Link>
  );
}
