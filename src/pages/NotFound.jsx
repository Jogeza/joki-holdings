import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Joki Holdings" description="The page you requested does not exist." path="/404" noindex />
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">404</span>
          <h1>This page went to print.</h1>
          <p>The address you followed does not exist. Head back home or start a project instead.</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/">Back home</Link>
            <Link className="btn btn-outline" to="/contact">Start a project</Link>
          </div>
        </div>
      </header>
    </>
  );
}
