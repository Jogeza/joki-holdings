import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoSvg from "../assets/images/svg/logo.svg";
import menu2 from "../assets/images/svg/menu2.svg";
import CloseIcon from "../assets/images/svg/close-icon.svg";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";

interface MenuChild {
  label: string;
  link: string;
}

interface MenuItem {
  label: string;
  children: MenuChild[];
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const location = useLocation();

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const isParentActive = (children: MenuChild[]) => {
    return children.some((child) => child.link === location.pathname);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const menuItems: MenuItem[] = [
    {
      label: "Businesses",
      children: [
        { label: "Joki Print", link: "/services" },
        { label: "Graphic Design", link: "/services" },
        { label: "Large Format Printing", link: "/services" },
        { label: "Digital & Web", link: "/services" },
        { label: "Creative Services", link: "/services" },
      ],
    },
    {
      label: "Work",
      children: [
        { label: "Portfolio", link: "/properties" },
        { label: "Case Studies", link: "/properties" },
      ],
    },
    {
      label: "Company",
      children: [
        { label: "About Joki Holdings", link: "/about" },
        { label: "Our Approach", link: "/about" },
      ],
    },
    {
      label: "Insights",
      children: [
        { label: "Creative & Business Insights", link: "/blog" },
        { label: "Design & Print Guides", link: "/blog" },
      ],
    },
  ];

  return (
    <>
      {menuOpen && (
        <div
          className="overlay active"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header className="header" id="top-navbar">
        <div className="header-container">

          <Link
            to="/"
            className="logo joki-logo"
            onClick={closeMenu}
          >
            <img
              src={LogoSvg}
              alt="Joki Holdings"
            />
          </Link>

          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {!menuOpen ? (
              <img
                src={menu2}
                className="menu-icon"
                alt=""
              />
            ) : (
              <img
                src={CloseIcon}
                className="close-icon"
                alt=""
              />
            )}
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <div className="for-mobile-menu position-relative">

              <Link
                to="/"
                className="mobile-logo joki-mobile-logo"
                onClick={closeMenu}
              >
                <img
                  src={LogoSvg}
                  alt="Joki Holdings"
                />
              </Link>

              <ul className="menu">

                <li className="dropdown">
                  <Link
                    to="/"
                    className={`dropdown-btn ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>

                {menuItems.map((item, index) => (
                  <li
                    key={item.label}
                    className="dropdown"
                  >
                    <button
                      type="button"
                      className={`dropdown-btn ${
                        isParentActive(item.children) ? "active" : ""
                      }`}
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.label}

                      <img
                        src={DropdownArrow}
                        alt=""
                      />

                      <span className="dots-circle" />
                    </button>

                    {openDropdown === index && (
                      <ul className="dropdown-menu">
                        {item.children.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.link}
                              className={
                                location.pathname === sub.link
                                  ? "active"
                                  : ""
                              }
                              onClick={closeMenu}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                <li>
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            <div className="nav-actions">
              <Link
                to="/contact"
                className="btn-quote get-quote-btn"
                onClick={closeMenu}
              >
                Talk To Us

                <img
                  src={CrossArrow}
                  alt=""
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
