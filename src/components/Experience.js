import React, { useState } from "react";
import { experience } from "../data/profile";
import "./Experience.css";

export default function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section id="experience" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="section-wrap">
        <p className="section-label">Work History</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">// {experience.length} companies · 3.5+ years</p>

        <div className="exp__layout">
          {/* Tabs */}
          <div className="exp__tabs">
            {experience.map((e, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? "exp-tab--active" : ""}`}
                onClick={() => setActive(i)}
                style={{ "--exp-color": e.color }}
              >
                <span className="exp-tab__dot" style={{ background: e.color }} />
                <div className="exp-tab__info">
                  <div className="exp-tab__company">{e.company}</div>
                  <div className="exp-tab__period">{e.period}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="exp__panel card" key={active} style={{ "--exp-color": exp.color }}>
            <div className="exp-panel__header">
              <div>
                <div className="exp-panel__role">{exp.role}</div>
                <div className="exp-panel__company" style={{ color: exp.color }}>{exp.company}</div>
                <div className="exp-panel__meta">
                  <span>📅 {exp.period}</span>
                  <span>📍 {exp.location}</span>
                  <span className="tag" style={{ color: exp.color, borderColor: exp.color + "44", background: exp.color + "11" }}>{exp.type}</span>
                </div>
              </div>
            </div>

            <ul className="exp-panel__points">
              {exp.points.map((p, i) => (
                <li key={i} className="exp-point">
                  <span className="exp-point__dot" style={{ background: exp.color }} />
                  {p}
                </li>
              ))}
            </ul>

            <div className="exp-panel__tech">
              <span className="tech-label">Tech Stack:</span>
              {exp.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
