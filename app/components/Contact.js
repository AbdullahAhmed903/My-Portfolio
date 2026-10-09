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

  return (
    <div className="contact-wrapper">
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

      <style jsx global>{`
        .contact-wrapper {
          width: 100%;
          padding: 0;
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

        /* ── Contact Light Mode Overrides ─────────────────────── */
        :global(html.light-mode) .contact-interactive-card {
          background: #ffffff;
          border-color: #e2e8f0;
          box-shadow: 0 14px 35px -5px rgba(15, 23, 42, 0.08);
        }

        :global(html.light-mode) .contact-meta-pill {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          color: #334155;
        }

        :global(html.light-mode) .contact-meta-pill.interactive:hover {
          background: rgba(34, 197, 94, 0.08);
          border-color: #22c55e;
          color: #15803d;
        }

        :global(html.light-mode) .btn-email-box {
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
        }

        :global(html.light-mode) .btn-email-box:hover {
          background: rgba(2, 132, 199, 0.06);
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 4px 16px rgba(2, 132, 199, 0.15);
        }

        :global(html.light-mode) .btn-copy-box {
          background: rgba(2, 132, 199, 0.08);
          border: 1.5px solid rgba(2, 132, 199, 0.3);
          color: #0284c7;
        }

        :global(html.light-mode) .btn-copy-box:hover {
          background: rgba(2, 132, 199, 0.14);
          border-color: #0284c7;
        }

        :global(html.light-mode) .quick-message-form {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);
        }

        :global(html.light-mode) .form-title {
          color: #0284c7;
        }

        :global(html.light-mode) .form-note {
          color: #64748b;
        }

        :global(html.light-mode) .form-input,
        :global(html.light-mode) .form-textarea {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
        }

        :global(html.light-mode) .form-input::placeholder,
        :global(html.light-mode) .form-textarea::placeholder {
          color: #94a3b8;
        }

        :global(html.light-mode) .form-input:focus,
        :global(html.light-mode) .form-textarea:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        :global(html.light-mode) .btn-send-dispatch {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);
        }

        @media (max-width: 768px) {
          .contact-heading {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .contact-interactive-card {
            padding: 20px 16px;
            border-radius: 16px;
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
    </div>
  );
}
