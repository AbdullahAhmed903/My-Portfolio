"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "./Counter";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

const TELEMETRY_LOGS = [
  { type: "AUTH", text: "POST /api/v1/auth/jwt - 200 OK", latency: "14ms", status: "success" },
  { type: "DB", text: "PostgreSQL pool active (12 connections) · index scan", latency: "2.1ms", status: "success" },
  { type: "PAYMENT", text: "Razorpay Webhook: order_captured #rzp_984", latency: "42ms", status: "success" },
  { type: "CACHE", text: "Redis cache HIT · key: course_meta_1092", latency: "0.8ms", status: "info" },
  { type: "RATE_LIMIT", text: "Token bucket check: 18/60 req/min · ALLOWED", latency: "0.4ms", status: "info" },
  { type: "QUEUE", text: "BullMQ worker completed: send_email_receipt", latency: "28ms", status: "success" }
];

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % TELEMETRY_LOGS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeLog = TELEMETRY_LOGS[logIndex];

  return (
    <section className="hero-section" id="home">
      <div className="hero-ambient-glow"></div>
      
      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Status Pill */}
          <motion.div 
            className="hero-status-pill"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="status-pulse-dot"></span>
            <span>Backend Developer</span>
          </motion.div>

          <motion.h1 
            className="hero-heading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <br />
            <span className="gradient-name">Abdullah Ahmed</span>
          </motion.h1>

          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Architecting Scalable Backend Systems & APIs
          </motion.p>

          <motion.p 
            className="hero-bio"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Backend developer with production experience at <span className="highlight-text">Tensorik</span>, building 
            and scaling an educational platform serving <span className="highlight-text">10,000+ users</span>. 
            Specialized in payment integration, API design, database optimization, and rate limiting using{" "}
            <span className="highlight-text">Next.js, Supabase</span>, and <span className="highlight-text">Node.js</span>.
          </motion.p>

          {/* Live Backend Telemetry Console Banner */}
          <motion.div
            className="hero-telemetry-box"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className="telemetry-header">
              <div className="telemetry-status">
                <span className="telemetry-live-dot"></span>
                <span className="telemetry-title">LIVE TELEMETRY STREAM</span>
              </div>
              <span className="telemetry-ping">24ms avg latency</span>
            </div>
            <div className="telemetry-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={logIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="telemetry-row"
                >
                  <span className={`log-tag log-${activeLog.type.toLowerCase()}`}>
                    [{activeLog.type}]
                  </span>
                  <span className="log-text">{activeLog.text}</span>
                  <span className="log-latency">{activeLog.latency}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
            className="hero-action-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="btn-primary-work"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="btn-secondary-touch"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="social-label">Find me on</span>
            <div className="social-icons-row">
              <motion.a 
                href="https://github.com/AbdullahAhmed903" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-box-btn" 
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
                className="social-box-btn" 
                aria-label="LinkedIn"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:abdullahahmed02000@gmail.com" 
                className="social-box-btn" 
                aria-label="Email"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Tilt Hero Card with Photo & Floating Badges */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <TiltCard className="hero-card-tilt-wrap" maxTilt={10} scale={1.02}>
            <div className="hero-card-wrapper">
              {/* Outer Decorative Rotating Beam Frame */}
              <BorderBeam duration={9} size={280} colorFrom="#00D2FF" colorTo="#2563EB" />
              
              {/* Floating Code Icon Badge with spring float */}
              <motion.div 
                className="floating-code-badge"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </motion.div>

              {/* Dot Matrix Pattern */}
              <div className="dot-matrix-pattern">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="matrix-dot"></span>
                ))}
              </div>

              {/* Main Image Frame */}
              <div className="hero-photo-card">
                <div className="photo-container">
                  {!imgError ? (
                    <img
                      src="https://i.ibb.co/3592vhkV/384A7585.jpg"
                      alt="Abdullah Ahmed"
                      className="hero-profile-image"
                      onError={() => setImgError(true)}
                      loading="eager"
                    />
                  ) : (
                    <div className="profile-placeholder">
                      <svg width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                  )}
                  <div className="photo-bottom-gradient"></div>
                </div>

                {/* Floating Bottom Status Bar on Photo */}
                <div className="floating-status-box">
                  <div className="status-cyan-bar"></div>
                  <div className="status-info-txt">
                    <h4 className="status-headline">Node.js & Backend Developer</h4>
                    <p className="status-subline">Building reliable, scalable and high-performance systems.</p>
                  </div>
                  <div className="status-live-badge">
                    <span className="live-dot"></span>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Bottom 4-Column Stats Box with Animated Numbers */}
          <div className="hero-stats-banner">
            <div className="stat-banner-item">
              <div className="stat-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="stat-metric-value">
                <Counter value={10} suffix="K+" />
              </div>
              <div className="stat-metric-label">Users Served</div>
            </div>

            <div className="stat-banner-item">
              <div className="stat-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16.5 9.4 7.55 4.24"/>
                  <polyline points="3.29 7 12 12.01 20.72 7"/>
                  <polyline points="12 22.08 12 12"/>
                </svg>
              </div>
              <div className="stat-metric-value">
                <Counter value={750} suffix="+" />
              </div>
              <div className="stat-metric-label">Commits</div>
            </div>

            <div className="stat-banner-item">
              <div className="stat-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
                </svg>
              </div>
              <div className="stat-metric-value">
                <Counter value={12} suffix="+" />
              </div>
              <div className="stat-metric-label">Projects</div>
            </div>

            <div className="stat-banner-item">
              <div className="stat-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="stat-metric-value">
                <Counter value={1} suffix="+ Yrs" />
              </div>
              <div className="stat-metric-label">Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hero-section {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        .hero-ambient-glow {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.09) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.25);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent);
          width: fit-content;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.08);
        }

        .status-pulse-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: pulseGlow 2s infinite;
        }

        .hero-heading {
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0;
        }

        .gradient-name {
          background: linear-gradient(135deg, #00d2ff 0%, #38bdf8 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          filter: drop-shadow(0 0 25px rgba(0, 210, 255, 0.25));
        }

        .hero-tagline {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .hero-bio {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 540px;
          margin: 0;
        }

        .highlight-text {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* ── Live Telemetry Box ───────────────────────────── */
        .hero-telemetry-box {
          background: rgba(15, 17, 23, 0.7);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          max-width: 540px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .telemetry-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .telemetry-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #38bdf8;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .telemetry-live-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulseGlow 1.5s infinite;
        }

        .telemetry-ping {
          color: #64748b;
        }

        .telemetry-body {
          min-height: 24px;
        }

        .telemetry-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
        }

        .log-tag {
          font-weight: 700;
          font-size: 0.72rem;
          padding: 1px 6px;
          border-radius: 4px;
        }

        .log-auth { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .log-db { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .log-payment { background: rgba(14, 165, 233, 0.2); color: #38bdf8; }
        .log-cache { background: rgba(249, 115, 22, 0.2); color: #fb923c; }
        .log-rate_limit { background: rgba(234, 179, 8, 0.2); color: #facc15; }
        .log-queue { background: rgba(239, 68, 68, 0.2); color: #f87171; }

        .log-text {
          color: #cbd5e1;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .log-latency {
          color: #94a3b8;
          font-size: 0.72rem;
        }

        /* ── Action Buttons ────────────────────────────────────────── */
        .hero-action-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .btn-primary-work {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #00d2ff 0%, #3b82f6 100%);
          color: #08090c;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 210, 255, 0.35);
          cursor: pointer;
        }

        .btn-secondary-touch {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          backdrop-filter: blur(8px);
          cursor: pointer;
        }

        .hero-social-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }

        .social-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-icons-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-box-btn {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
        }

        .social-box-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(0, 210, 255, 0.08);
          box-shadow: 0 0 12px rgba(0, 210, 255, 0.2);
        }

        /* ── Right Column: Hero Card ────────────────────────────── */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-card-wrapper {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 16px;
          box-shadow: var(--card-shadow);
        }

        .floating-code-badge {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 48px;
          height: 48px;
          background: #0f1117;
          border: 1px solid rgba(0, 210, 255, 0.4);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.25);
          z-index: 10;
        }

        .dot-matrix-pattern {
          position: absolute;
          bottom: 24px;
          right: 24px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 6px;
          opacity: 0.3;
          pointer-events: none;
        }

        .matrix-dot {
          width: 3px;
          height: 3px;
          background: var(--accent);
          border-radius: 50%;
        }

        .hero-photo-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          background: #0a0b0e;
        }

        .photo-container {
          width: 100%;
          aspect-ratio: 4/4.5;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .hero-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-card-wrapper:hover .hero-profile-image {
          transform: scale(1.04);
        }

        .photo-bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(8, 9, 12, 0.95) 0%, rgba(8, 9, 12, 0.4) 60%, transparent 100%);
          pointer-events: none;
        }

        .floating-status-box {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(15, 17, 23, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 5;
        }

        .status-cyan-bar {
          width: 3px;
          height: 36px;
          background: var(--accent);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent);
        }

        .status-info-txt {
          flex: 1;
        }

        .status-headline {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2px 0;
        }

        .status-subline {
          font-size: 0.74rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .status-live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #22c55e;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulseGlow 1.5s infinite;
        }

        /* ── 4-Column Stats Banner ────────────────────────────────── */
        .hero-stats-banner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 16px 14px;
          box-shadow: var(--card-shadow);
        }

        .stat-banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
        }

        .stat-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .stat-metric-value {
          font-size: 1.15rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .stat-metric-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-left {
            align-items: center;
          }
          .hero-status-pill {
            margin: 0 auto;
          }
          .hero-action-buttons {
            justify-content: center;
          }
          .hero-social-section {
            justify-content: center;
          }
          .hero-right {
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .hero-stats-banner {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
