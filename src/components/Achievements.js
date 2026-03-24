import React from "react";
import { achievements } from "../data/profile";
import "./Achievements.css";

const extras = [
  { icon: "💬", text: "500+ LinkedIn Connections" },
  { icon: "✍️", text: "Active Tech Content Creator" },
  { icon: "🔗", text: "Open Source Contributor" },
  { icon: "📚", text: "System Design Evangelist" },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: "rgba(0,0,0,0.15)" }}>
      <div className="section-wrap">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">// Milestones along the journey</p>

        <div className="ach__grid">
          {achievements.map((a, i) => (
            <div className="ach-card card" key={i}>
              <div className="ach-icon">{a.icon}</div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          ))}
        </div>

        <div className="ach__extras">
          {extras.map((e, i) => (
            <div key={i} className="extra-chip">
              <span>{e.icon}</span>
              <span>{e.text}</span>
            </div>
          ))}
        </div>

        <div className="hackerrank-card card">
          <div className="hr-left">
            <div className="hr-title">HackerRank Java</div>
            <div className="hr-subtitle">6-Star Rating · 400+ Problems Solved</div>
          </div>
          <div className="hr-stars">
            {Array(6).fill(0).map((_, i) => (
              <span key={i} className="star" style={{ "--delay": `${i * 0.1}s` }}>★</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
