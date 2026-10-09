"use client";
import "./Hero.css";
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
  const [gitStats, setGitStats] = useState({
    commits: 1650,
    projects: 23,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadHeroStats() {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted) return;

        setGitStats({
          commits: data.commits || 1805,
          projects: data.projects || 24,
        });
      } catch (err) {
        console.error("Error loading hero stats:", err);
      }
    }

    loadHeroStats();
    return () => {
      isMounted = false;
    };
  }, []);

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
            <span>Full-Stack Developer (Backend-Focused)</span>
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
            Full-Stack Developer with a primary focus on backend engineering, proficient in{" "}
            <span className="highlight-text">Node.js, NestJS, Express.js, TypeScript, Next.js, PostgreSQL, Mongoose</span>, and{" "}
            <span className="highlight-text">Supabase</span>. Experienced at <span className="highlight-text">Tensorik</span> owning backend architecture and REST APIs across AI education, mobile LMS, and e-commerce platforms, with a proven track record of designing, building, and deploying scalable end-to-end systems.
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
                      src="/profile.webp"
                      alt="Abdullah Ahmed"
                      className="hero-profile-image"
                      width={420}
                      height={420}
                      onError={(e) => {
                        if (e.currentTarget.src.includes(".webp")) {
                          e.currentTarget.src = "/profile.jpg";
                        } else if (!e.currentTarget.src.includes("ibb.co")) {
                          e.currentTarget.src = "https://i.ibb.co/3592vhkV/384A7585.jpg";
                        } else {
                          setImgError(true);
                        }
                      }}
                      loading="eager"
                      fetchPriority="high"
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
                    <h4 className="status-headline">Full-Stack Developer (Backend-Focused)</h4>
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
                <Counter value={750} suffix="+" />
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
                <Counter value={gitStats.commits} suffix="+" />
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
                <Counter value={gitStats.projects} suffix="+" />
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
                <Counter value={2} suffix="+ Yrs" />
              </div>
              <div className="stat-metric-label">Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      </section>
  );
}
