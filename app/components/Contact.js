"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";
import "./Contact.css";

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
    </div>
  );
}
