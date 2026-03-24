import React, { useState } from "react";
import { profile } from "../data/profile";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get your free access key from https://web3forms.com/
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY";

    if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      alert("Please enter a free Web3Forms Access Key in Contact.js to receive emails.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio Inquiry",
          message: form.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      }
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-wrap">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's Work <span className="title-grad">Together</span></h2>
        <p className="section-subtitle">// Open to full-time roles, collaborations & interesting projects</p>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            <p className="contact__tagline">
              I'm currently open to new opportunities in fintech, distributed systems, or full-stack engineering.
              Whether you have a role, a project idea, or just want to connect — feel free to reach out!
            </p>

            <div className="contact__links">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: "Email",
                  value: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  ),
                  label: "Phone",
                  value: profile.phone,
                  href: `tel:${profile.phone}`,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                  label: "LinkedIn",
                  value: "naveenmaloth-b12040181",
                  href: profile.linkedin,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  ),
                  label: "GitHub",
                  value: "github.com/naveenmaloth09",
                  href: profile.github,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@maloth_nk",
                  href: profile.instagram,
                },
              ].map((link) => (
                <a key={link.label} href={link.href} className="contact-link" target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <span className="clink-icon">{link.icon}</span>
                  <div>
                    <div className="clink-label">{link.label}</div>
                    <div className="clink-value">{link.value}</div>
                  </div>
                  <svg className="clink-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <div className="avail-dot" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Form */}
          <form className="contact__form card" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a Message</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  className="form-input"
                  type="text" name="name" required
                  placeholder="John Doe"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  className="form-input"
                  type="email" name="email" required
                  placeholder="john@example.com"
                  value={form.email} onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                className="form-input"
                type="text" name="subject"
                placeholder="Job Opportunity / Collaboration"
                value={form.subject} onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input form-textarea"
                name="message" required rows={5}
                placeholder="Hi Naveen, I'd love to connect about..."
                value={form.message} onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
              {loading ? (
                <>Sending...</>
              ) : sent ? (
                <>✓ Message Sent Successfully!</>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
