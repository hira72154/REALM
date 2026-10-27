
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "24/7 Services", href: "/support" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({
  theme,
  toggleTheme,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt="THE REALM logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>THE REALM</strong>
            <small>GROW TOGETHER</small>
          </span>
        </Link>

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                isActive ? "nav-active" : ""
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
