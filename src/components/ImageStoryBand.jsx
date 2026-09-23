import Reveal from './Reveal';

export default function ImageStoryBand({ image, eyebrow, title, copy, position = 'center' }) {
  return (
    <Reveal as="section" className="image-story">
      <img src={image} alt="" loading="lazy" style={{ objectPosition: position }} />
      <div className="image-story-shade" aria-hidden="true" />
      <div className="wrap image-story-content">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </Reveal>
  );
}
