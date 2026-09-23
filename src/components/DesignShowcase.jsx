import Reveal from './Reveal';

const MOCKUPS = [
  ['/images/design-mockups/football-brand.png', 'Football identity', 'Club identity, match-day graphics and branded apparel.'],
  ['/images/design-mockups/hotel-brand.png', 'Hospitality identity', 'Guest touchpoints designed as one calm, premium system.'],
  ['/images/design-mockups/school-brand.png', 'School identity', 'Admissions, wayfinding and everyday student materials.'],
  ['/images/design-mockups/event-brand.png', 'Event campaign', 'A flexible visual language from promotion to the venue.'],
  ['/images/design-mockups/church-brand.png', 'Church identity', 'Welcoming communications for services and community life.'],
];

export default function DesignShowcase() {
  return (
    <Reveal as="section" className="section design-showcase">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Identity in context</span>
          <div><h2>Designed for the places people meet you.</h2><p>Realistic identity studies across sport, hospitality, education, events and community organisations.</p></div>
        </div>
        <div className="mockup-grid">
          {MOCKUPS.map(([src, title, copy], index) => (
            <figure className={`mockup-card mockup-card-${index + 1}`} key={src}>
              <img src={src} alt={`${title} presentation mockup`} loading="lazy" />
              <figcaption><span><b>{title}</b><small>{copy}</small></span><i aria-hidden="true">0{index + 1}</i></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
