import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onPointer = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  return (
    <nav className="site-nav" ref={navRef} aria-label="Primary">
      <div className="wrap nav-inner">
        <Link className="logo" to="/" aria-label="Joki Holdings home">
          <img className="logo-image" src="/images/joki-logo.svg" alt="" width="74" height="56" />
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-button-icon" aria-hidden="true">{open ? '✕' : '☰'}</span>
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <div className={`nav-links${open ? ' open' : ''}`} id="primary-nav">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {label}
            </NavLink>
          ))}
          <Link className="btn btn-gold mobile-cta" to="/contact">Start a project</Link>
        </div>
        <Link className="btn btn-gold nav-cta" to="/contact">Start a project</Link>
      </div>
    </nav>
  );
}
