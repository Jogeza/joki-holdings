import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Design", to: "/design" },
    { label: "Print", to: "/print" },
    { label: "Web", to: "/web" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="joki-header">
      <div className="joki-container joki-header-inner">
        <Link to="/" className="joki-logo" onClick={() => setOpen(false)}>
          <img src="/brand-assets/joki-logo.svg" alt="Joki Holdings Ltd" />
        </Link>

        <button
          type="button"
          className="joki-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "?" : "?"}
        </button>

        <nav className={`joki-nav ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="joki-header-cta"
          onClick={() => setOpen(false)}
        >
          Talk to Us
        </Link>
      </div>
    </header>
  );
}

export default Header;
