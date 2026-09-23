import { useState } from 'react';
import { MEDIA_ARCHIVE, MEDIA_FILTERS } from '../data/media';

export default function MediaArchive() {
  const [filter, setFilter] = useState('all');
  const media = filter === 'all' ? MEDIA_ARCHIVE : MEDIA_ARCHIVE.filter((item) => item.group === filter);

  return (
    <section className="section media-archive">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Studio archive</span>
          <div>
            <h2>Real work. Real materials.</h2>
            <p>Every supplied photograph and film, organised as a working record of print, fabrication and production from the Joki studio.</p>
          </div>
        </div>
        <div className="filter-bar archive-filters" role="group" aria-label="Filter studio media">
          {MEDIA_FILTERS.map(([value, label]) => (
            <button type="button" key={value} className={filter === value ? 'active' : undefined} aria-pressed={filter === value} onClick={() => setFilter(value)}>
              {label}
            </button>
          ))}
        </div>
        <div className="media-wall">
          {media.map((item, index) => (
            <figure className={`media-tile ${index % 11 === 0 ? 'media-tile-feature' : ''} ${index % 7 === 3 ? 'media-tile-tall' : ''}`} key={`${item.src}-${index}`}>
              {item.type === 'video' ? (
                <video src={item.src} controls muted playsInline preload="metadata" aria-label={item.label} />
              ) : (
                <img src={item.src} alt={item.label} loading="lazy" decoding="async" />
              )}
              <figcaption><span>{item.label}</span><small>{item.group}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
