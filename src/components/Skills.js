import React, { useState } from "react";
import { skills } from "../data/profile";
import AnimatedSection from "./AnimatedSection";
import "./Skills.css";

const categories = [
  { key: "backend", label: "Backend", icon: "⚙️", color: "#00ff87" },
  { key: "frontend", label: "Frontend", icon: "🎨", color: "#60a5fa" },
  { key: "databases", label: "Databases", icon: "🗄️", color: "#f59e0b" },
  { key: "cloud", label: "Cloud & DevOps", icon: "☁️", color: "#a78bfa" },
  { key: "monitoring", label: "Monitoring", icon: "📊", color: "#34d399" },
  { key: "testing", label: "Testing", icon: "🧪", color: "#fb923c" },
];

export default function Skills() {
  const [active, setActive] = useState("backend");

  const cat = categories.find((c) => c.key === active);

  return (
    <section id="skills" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="section-wrap">
        <p className="section-label">Technical Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">// {Object.values(skills).flat().length}+ technologies across the stack</p>

        <AnimatedSection>
          <div className="skills__layout">
            {/* Sidebar tabs */}
          <div className="skills__tabs">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`skill-tab ${active === cat.key ? "skill-tab--active" : ""}`}
                onClick={() => setActive(cat.key)}
                style={{ "--cat-color": cat.color }}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="tab-count">{skills[cat.key]?.length}</span>
              </button>
            ))}
          </div>

          {/* Skill pills */}
          <div className="skills__panel">
            <div className="panel-header">
              <span className="panel-icon">{cat.icon}</span>
              <span className="panel-title" style={{ color: cat.color }}>{cat.label}</span>
              <span className="panel-count">{skills[active]?.length} technologies</span>
            </div>
            <div className="skills__pills">
              {skills[active]?.map((skill, i) => (
                <div
                  key={skill}
                  className="skill-pill"
                  style={{ "--delay": `${i * 0.04}s`, "--cat-color": cat.color }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* All skills compact bar */}
        <div className="skills__all-label">
          <span className="section-label" style={{ marginBottom: 20 }}>All Technologies</span>
        </div>
        <div className="skills__marquee-wrap">
          <div className="skills__marquee">
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, i) => (
              <span key={i} className="marquee-item">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
