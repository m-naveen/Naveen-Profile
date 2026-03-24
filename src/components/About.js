import React from "react";
import { profile } from "../data/profile";
import AnimatedSection from "./AnimatedSection";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <AnimatedSection>
          <div className="about__grid">
          <div className="about__left">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Passionate about<br /><span className="title-accent">Scalable Systems</span></h2>
            <p className="about__text">
              I'm a Full Stack Software Engineer with <strong>3.6+ years</strong> of experience building
              secure fintech and wealth management solutions. I graduated with a{" "}
              <strong>B.Tech from IIT (ISM) Dhanbad</strong>, where I built a strong foundation in
              data structures, algorithms, and system design.
            </p>
            <p className="about__text">
              On the backend, I design <strong>high-availability microservices</strong>, build secure REST APIs,
              optimize database performance, and implement event-driven architectures using Kafka.
              On the frontend, I craft <strong>responsive financial dashboards</strong> with React and Redux.
            </p>
            <p className="about__text">
              My goal is to grow into a senior full-stack engineer who designs end-to-end scalable
              systems and drives architectural decisions.
            </p>

            <div className="about__contacts">
              <a href={`mailto:${profile.email}`} className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {profile.phone}
              </a>
            </div>
          </div>

          <div className="about__right">
            <div className="about__interests">
              {[
                { icon: "⚡", title: "Distributed Systems", desc: "Designing scalable microservices and event-driven architectures" },
                { icon: "🔧", title: "Clean Code", desc: "Writing maintainable, testable, well-documented code" },
                { icon: "📈", title: "Performance Tuning", desc: "DB optimization, caching, query tuning, monitoring" },
                { icon: "🎨", title: "Frontend Craft", desc: "Building intuitive UIs with React and TypeScript" },
              ].map((item) => (
                <div className="interest-card card" key={item.title}>
                  <span className="interest-icon">{item.icon}</span>
                  <div>
                    <div className="interest-title">{item.title}</div>
                    <div className="interest-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__education card">
              <div className="edu-label">Education</div>
              <div className="edu-item">
                <div className="edu-dot" />
                <div>
                  <div className="edu-degree">B.Tech — Electronics & Communication Engineering</div>
                  <div className="edu-school">IIT (Indian School of Mines), Dhanbad</div>
                  <div className="edu-year">2018 – 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
