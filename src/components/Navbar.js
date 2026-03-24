import React, { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo("hero")}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">NKM</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${activeSection === link.id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="navbar__cta btn btn-primary"
        >
          Hire Me
        </button>

        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`mobile-link ${activeSection === link.id ? "mobile-link--active" : ""}`}
            onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => { scrollTo("contact"); setMenuOpen(false); }} 
          className="btn btn-primary" 
          style={{ marginTop: 16 }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
