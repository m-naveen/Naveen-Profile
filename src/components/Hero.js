import React, { useEffect, useState } from "react";
import { profile } from "../data/profile";
import "./Hero.css";

const roles = [
  "Full Stack Engineer",
  "Java & Spring Boot Dev",
  "React Developer",
  "Fintech Systems Builder",
  "Distributed Systems Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="hero" className="hero">
      {/* Ambient blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="hero__inner">
        <div className="hero__left fade-up">
          <div className="hero__badge">
            <span className="badge-dot" />
            <span>Available for opportunities</span>
          </div>

          <h1 className="hero__name">
            <span className="name-hi">Hi, I'm</span>
            <br />
            <span className="name-main">Naveen Kumar</span>
            <br />
            <span className="name-accent">Maloth</span>
          </h1>

          <div className="hero__role">
            <span className="role-prefix">&gt; </span>
            <span className="role-text">{displayed}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero__summary fade-up-d2">
            Building <em>scalable fintech platforms</em> with Java, Spring Boot & React.
            3.6+ years crafting distributed systems, microservices & financial data pipelines.
          </p>

          <div className="hero__stats fade-up-d3">
            {[
              { value: "3.5+", label: "Years Exp" },
              { value: "400+", label: "Problems Solved" },
              { value: "#1", label: "Hackathon Win" },
              { value: "6★", label: "HackerRank Java" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__actions fade-up-d4">
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </button>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="hero__right fade-up-d2">
          <div className="hero__avatar-wrap">
            <div className="avatar-ring avatar-ring--outer" />
            <div className="avatar-ring avatar-ring--inner" />
            <div className="hero__avatar">
              {/* Replace src with your actual photo path */}
              <img src="/photo.jpg" alt="Naveen Kumar Maloth" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
              <div className="avatar-fallback">NKM</div>
            </div>
            <div className="avatar-badge avatar-badge--iit">
              <span>IIT ISM</span>
              <span>'22</span>
            </div>
            <div className="avatar-badge avatar-badge--pune">
              <span>📍 Pune</span>
            </div>
          </div>

          <div className="tech-orbit">
            {["Java", "React", "Kafka", "K8s", "AWS"].map((t, i) => (
              <div
                key={t}
                className="tech-pill"
                style={{ "--delay": `${i * 0.5}s`, "--i": i }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
