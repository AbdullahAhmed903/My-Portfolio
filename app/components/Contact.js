"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const email = "abdullahahmed02000@gmail.com";

  const triggerCelebration = async () => {
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#00D2FF", "#38BDF8", "#0284C7", "#22C55E"],
      });
    } catch {
      // Gracefully continue
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    triggerCelebration();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!senderMessage.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Recruiter/Collaborator'}`);
    const body = encodeURIComponent(senderMessage);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setSentSuccess(true);
    triggerCelebration();
    setTimeout(() => {
      setSentSuccess(false);
      setSenderMessage("");
    }, 4000);
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

          {/* Interactive 3D Contact Console */}
          <ScrollReveal delay={200}>
            <TiltCard maxTilt={5} scale={1.01} style={{ width: "100%", maxWidth: "680px" }}>
              <div className="contact-interactive-card">
                <BorderBeam duration={10} size={300} colorFrom="#00D2FF" colorTo="#0EA5E9" />

                {/* Location & Phone Meta Pills Row */}
                <div className="contact-meta-pills-row">
                  <div className="contact-meta-pill">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>New Cairo, Egypt</span>
                  </div>
                  <a href="tel:+201090524452" className="contact-meta-pill interactive">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>+201090524452</span>
                  </a>
                </div>

                {/* Email & Copy Buttons Row */}
                <div className="contact-actions-row">
                  <motion.a 
                    href={`mailto:${email}`} 
                    className="btn-email-box"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                    </svg>
                    <span>{email}</span>
                  </motion.a>

                  <motion.button 
                    type="button" 
                    onClick={handleCopyEmail} 
                    className="btn-copy-box" 
                    aria-label="Copy email address"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  </motion.button>
                </div>

                {/* Quick Message Dispatch Form */}
                <form onSubmit={handleSendMessage} className="quick-message-form">
                  <div className="form-header">
                    <span className="form-title">⚡ Quick Message Dispatcher</span>
                    <span className="form-note">Direct mailto connection</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Your name or company (optional)"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="form-input"
                  />

                  <textarea
                    placeholder="Type your message, project scope, or opportunity here..."
                    rows={3}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="form-textarea"
                    required
                  />

                  <div className="form-footer">
                    <span className="char-count">{senderMessage.length} chars</span>
                    
                    <motion.button
                      type="submit"
                      className="btn-send-dispatch"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>{sentSuccess ? "Dispatched!" : "Send via Email"}</span>
                      {sentSuccess ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </TiltCard>
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
                <motion.a 
                  key={item.label} 
                  href={item.href} 
                  className="footer-nav-item"
                  whileHover={{ y: -2, color: "#00D2FF" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="footer-social-icons">
              <motion.a
                href="https://github.com/AbdullahAhmed903"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>

              <motion.a
                href={`mailto:${email}`}
                className="footer-social-btn"
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
              </motion.a>
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

      <style jsx global>{`
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

        /* ── Interactive Contact Card ─────────────────────────── */
        .contact-interactive-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 28px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
          width: 100%;
          text-align: left;
        }

        .contact-meta-pills-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .contact-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .contact-meta-pill.interactive {
          cursor: pointer;
        }

        .contact-meta-pill.interactive:hover {
          border-color: #22c55e;
          color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.2);
        }

        .contact-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .btn-email-box {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          font-family: var(--font-mono);
          cursor: pointer;
        }

        .btn-email-box:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(0, 210, 255, 0.06);
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.2);
        }

        .btn-copy-box {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.25);
          border-radius: 12px;
          color: var(--accent);
          font-weight: 700;
          font-size: 0.92rem;
          cursor: pointer;
        }

        .btn-copy-box:hover {
          background: rgba(0, 210, 255, 0.16);
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.3);
        }

        .copied-text {
          color: #22c55e;
        }

        /* ── Quick Message Form ───────────────────────────────── */
        .quick-message-form {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.76rem;
        }

        .form-title {
          font-weight: 700;
          color: #38bdf8;
        }

        .form-note {
          color: var(--text-muted);
        }

        .form-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 0.88rem;
          color: var(--text-primary);
          outline: none;
          font-family: var(--font-sans);
          transition: border-color 0.2s;
        }

        .form-input:focus {
          border-color: #00d2ff;
        }

        .form-textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 0.88rem;
          color: var(--text-primary);
          outline: none;
          font-family: var(--font-sans);
          resize: vertical;
          min-height: 80px;
          transition: border-color 0.2s;
        }

        .form-textarea:focus {
          border-color: #00d2ff;
        }

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .char-count {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .btn-send-dispatch {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #00d2ff 0%, #2563eb 100%);
          border: none;
          color: #08090c;
          font-weight: 700;
          font-size: 0.84rem;
          padding: 9px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: filter 0.2s;
        }

        .btn-send-dispatch:hover {
          filter: brightness(1.08);
        }

        /* ── Footer Styles ────────────────────────────────────────── */
        .portfolio-footer {
          width: 100%;
          border-top: 1px solid var(--footer-border);
          background: var(--footer-bg);
          padding: 60px 0 40px;
        }

        .footer-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .footer-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .footer-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2px 0;
        }

        .footer-role {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-nav-item {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: color 0.2s ease;
        }

        .footer-social-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .footer-social-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(0, 210, 255, 0.08);
          box-shadow: 0 0 12px rgba(0, 210, 255, 0.2);
        }

        .footer-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.06);
          width: 100%;
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-highlight {
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .contact-interactive-card {
            padding: 20px 16px;
            border-radius: 16px;
          }
          .footer-top-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          .footer-nav-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 8px;
          }
        }

        @media (max-width: 540px) {
          .contact-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .btn-email-box,
          .btn-copy-box {
            width: 100%;
            justify-content: center;
            font-size: 0.85rem;
            padding: 11px 14px;
          }
          .btn-email-box span {
            word-break: break-all;
          }
          .quick-message-form {
            padding: 14px 12px;
          }
          .form-footer {
            flex-wrap: wrap;
            gap: 8px;
          }
          .btn-send-dispatch {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
