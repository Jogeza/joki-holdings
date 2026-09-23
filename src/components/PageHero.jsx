import { useLocation } from 'react-router-dom';
import Monogram from './Monogram';

const HERO_IMAGES = {
  '/design': '/images/design-craft.png',
  '/print': '/media/joki-holdings-print-portfolio-01.jpg',
  '/web': '/images/web-studio.png',
  '/work': '/images/press.jpeg',
  '/about': '/media/IMG-20260409-WA0010.jpeg',
  '/contact': '/images/signage.jpeg',
};

export default function PageHero({ eyebrow, title, copy }) {
  const { pathname } = useLocation();
  const image = HERO_IMAGES[pathname] || '/images/hero-kampala-studio-v2.png';
  return (
    <header className="page-hero">
      <Monogram />
      <img className="page-hero-image" src={image} alt="" aria-hidden="true" />
      <div className="page-hero-overlay" aria-hidden="true" />
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </header>
  );
}
