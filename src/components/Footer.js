import React from "react";
import { profile } from "../data/profile";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__logo">
            <span className="logo-bracket">&lt;</span>
            <span>NKM</span>
            <span className="logo-bracket">/&gt;</span>
          </div>
          <p className="footer__tagline">
            Building scalable systems, one commit at a time.
          </p>
        </div>

        <div className="footer__links">
          {[
            { label: "About", id: "about" },
            { label: "Skills", id: "skills" },
            { label: "Experience", id: "experience" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((l) => (
            <button
              key={l.id}
              className="footer-link"
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="footer__socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Naveen Kumar Maloth · All rights reserved</span>
        <span className="footer__built">Built with React &amp; ❤️</span>
      </div>
    </footer>
  );
}
