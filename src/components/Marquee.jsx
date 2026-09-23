import { TICKER_ITEMS } from '../data/site';

function Group({ hidden }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {TICKER_ITEMS.map((item) => (
        <span className="ticker-item" key={item}>
          {item}
          <i>•</i>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Services">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
