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

  return (
    <>
      <div className="contact-container">
        <div className="contact-inner">
          <ScrollReveal>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>GET IN TOUCH</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="contact-heading">
              Let's Build Something <span className="gradient-text">Scalable</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="contact-desc">
              I am open to backend engineering roles, cloud architecture opportunities, and impactful collaborative projects.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="contact-actions">
              <a href={`mailto:${email}`} className="btn-email">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
                <span>{email}</span>
              </a>

              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="btn-copy" 
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="contact-socials">
              <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" className="social-pill">
                GITHUB ↗
              </a>
              <a href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/" target="_blank" rel="noopener noreferrer" className="social-pill">
                LINKEDIN ↗
              </a>
              <a href={`mailto:${email}`} className="social-pill">
                EMAIL ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-copy">© 2026 Abdullah Ahmed Fathy. All rights reserved.</p>
          <p className="footer-built">
            Built with <strong>Next.js</strong> & Node.js
          </p>
        </div>
      </footer>

      <style jsx>{`
        .contact-container {
          width: 100%;
          margin-bottom: 60px;
        }

        .contact-inner {
          max-width: 800px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .contact-heading {
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .contact-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
          max-width: 580px;
        }

        .contact-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 14px 28px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .btn-email:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .btn-copy {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          padding: 14px 20px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-copy:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-pill {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 8px 18px;
          background: var(--background-subtle);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .social-pill:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .site-footer {
          background: var(--footer-bg);
          border-top: 1px solid var(--footer-border);
          padding: 2rem 0;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .footer-copy {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-built {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-built strong {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: 2.2rem;
          }

          .btn-email {
            font-size: 0.82rem;
            padding: 12px 18px;
          }

          .footer-content {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
