import React from "react";
import { projects } from "../data/profile";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Key Projects</h2>
        <p className="section-subtitle">// Real-world fintech systems from production</p>

        <div className="projects__grid">
          {projects.map((proj, i) => (
            <div className="project-card card" key={i} style={{ "--i": i }}>
              <div className="project-card__top">
                <span className="project-icon">{proj.icon}</span>
                <span className="project-period">{proj.period}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon highlight */}
        <div className="hackathon-banner">
          <div className="hackathon-inner">
            <div className="hackathon-trophy">🏆</div>
            <div>
              <div className="hackathon-title">Finfactor Hackathon Winner</div>
              <div className="hackathon-desc">
                Placed <strong>1st out of 100 teams</strong> by implementing a BBPS (Bharat Bill Payment System)
                feature end-to-end in a single hackathon session.
              </div>
            </div>
            <div className="hackathon-badge">
              <span>#1</span>
              <span>/ 100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
