"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "abdullahahmed02000@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="contact-wrapper" id="contact">
        <div className="contact-container">
          <ScrollReveal>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>GET IN TOUCH</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="contact-heading">
              Let's Build Something <br />
              <span className="gradient-scalable">Scalable</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="contact-subtitle">
              I'm open to backend engineering roles, cloud architecture opportunities, and impactful collaborative projects.
            </p>
          </ScrollReveal>

          {/* Email & Copy Buttons Row */}
          <ScrollReveal delay={200}>
            <div className="contact-actions-row">
              <a href={`mailto:${email}`} className="btn-email-box">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
                <span>{email}</span>
              </a>

              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn-copy-box" 
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <svg width="17" height="17" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="copied-text">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="portfolio-footer">
        <div className="footer-container">
          {/* Upper Footer Row */}
          <div className="footer-top-row">
            <div className="footer-brand">
              <h3 className="footer-name">Abdullah Ahmed</h3>
              <p className="footer-role">Backend Developer</p>
            </div>

            <nav className="footer-nav-links">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="footer-nav-item">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="footer-social-icons">
              <a
                href="https://github.com/AbdullahAhmed903"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href={`mailto:${email}`}
                className="footer-social-btn"
                aria-label="Email"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Lower Footer Row */}
          <div className="footer-bottom-row">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Abdullah Ahmed. All rights reserved.
            </p>

            <p className="footer-built-with">
              Built with <span className="tech-highlight">Next.js</span> & <span className="tech-highlight">Node.js</span>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .contact-wrapper {
          width: 100%;
          padding: 60px 0 100px;
        }

        .contact-container {
          max-width: 850px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
        }

        .contact-heading {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .gradient-scalable {
          background: linear-gradient(135deg, #00D2FF 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .contact-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin: 0 0 20px 0;
          line-height: 1.65;
          max-width: 580px;
        }

        .contact-actions-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-email-box {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 14px 24px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .btn-email-box:hover {
          border-color: #00D2FF;
          color: #00D2FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 210, 255, 0.15);
        }

        .btn-copy-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 14px 22px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: var(--card-shadow);
        }

        .btn-copy-box:hover {
          border-color: #00D2FF;
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .copied-text {
          color: #22C55E;
          font-weight: 600;
        }

        /* ── Footer ─────────────────────────────────────────── */
        .portfolio-footer {
          background: var(--footer-bg);
          border-top: 1px solid var(--footer-border);
          padding: 48px 0 36px;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .footer-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .footer-role {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .footer-nav-item {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-nav-item:hover {
          color: #00D2FF;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .footer-social-btn:hover {
          color: #00D2FF;
          border-color: #00D2FF;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 210, 255, 0.2);
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: var(--card-border);
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .footer-copyright {
          margin: 0;
        }

        .footer-built-with {
          margin: 0;
        }

        .tech-highlight {
          color: #00D2FF;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: 2.3rem;
          }

          .footer-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .footer-nav-links {
            gap: 16px;
          }

          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
}
