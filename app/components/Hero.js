"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-ambient-glow"></div>
      
      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <div className={`hero-left ${mounted ? 'fade-in' : ''}`}>
          <div className="hero-status-pill">
            <span className="status-pulse-dot"></span>
            <span>Backend Developer</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <br />
            <span className="gradient-name">Abdullah Ahmed</span>
          </h1>

          <p className="hero-tagline">
            Architecting Scalable Backend Systems & APIs
          </p>

          <p className="hero-bio">
            Backend developer with production experience at <span className="highlight-text">Tensorik</span>, building 
            and scaling an educational platform serving <span className="highlight-text">10,000+ users</span>. 
            Specialized in payment integration, API design, database optimization, and rate limiting using{" "}
            <span className="highlight-text">Next.js, Supabase</span>, and <span className="highlight-text">Node.js</span>.
          </p>

          <div className="hero-action-buttons">
            <a href="#projects" className="btn-primary-work">
              <span>View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            
            <a href="#contact" className="btn-secondary-touch">
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>

          <div className="hero-social-section">
            <span className="social-label">Find me on</span>
            <div className="social-icons-row">
              <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" className="social-box-btn" aria-label="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/" target="_blank" rel="noopener noreferrer" className="social-box-btn" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:abdullahahmed02000@gmail.com" className="social-box-btn" aria-label="Email">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Card with Photo & Floating Badges */}
        <div className={`hero-right ${mounted ? 'fade-in-delay' : ''}`}>
          <div className="hero-card-wrapper">
            {/* Outer Decorative Glow Border */}
            <div className="decorative-glow-frame"></div>
            
            {/* Floating Code Icon Badge */}
            <div className="floating-code-badge">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>

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

          {/* Bottom 4-Column Stats Box */}
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
              <div className="stat-metric-value">10K+</div>
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
              <div className="stat-metric-value">750+</div>
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
              <div className="stat-metric-value">12+</div>
              <div className="stat-metric-label">Projects</div>
            </div>

            <div className="stat-banner-item">
              <div className="stat-icon-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="stat-metric-value">1+</div>
              <div className="stat-metric-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }

        /* Ambient subtle radial glow */
        .hero-ambient-glow {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%);
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

        .fade-in {
          animation: fadeUp 0.6s ease-out forwards;
        }

        .fade-in-delay {
          animation: fadeUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        /* ── Left Column ────────────────────────────────────────── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 22px;
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
          color: #38BDF8;
          font-weight: 600;
          width: fit-content;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.1);
        }

        .status-pulse-dot {
          width: 7px;
          height: 7px;
          background: #00D2FF;
          border-radius: 50%;
          box-shadow: 0 0 8px #00D2FF;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .hero-heading {
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.08;
          margin: 0;
          color: #FFFFFF;
          letter-spacing: -0.03em;
        }

        :global(html.light-mode) .hero-heading {
          color: #0F172A;
        }

        .gradient-name {
          background: linear-gradient(135deg, #00D2FF 0%, #3B82F6 50%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-tagline {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .hero-bio {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin: 0;
          max-width: 540px;
        }

        .highlight-text {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-action-buttons {
          display: flex;
          gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .btn-primary-work {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #00D2FF 0%, #2563EB 100%);
          color: #FFFFFF;
          padding: 14px 28px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 210, 255, 0.35);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .btn-primary-work:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 210, 255, 0.5);
        }

        .btn-secondary-touch {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--card-bg);
          color: var(--text-primary);
          border: 1px solid var(--card-border);
          padding: 14px 28px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 10px;
          transition: all 0.25s ease;
          text-decoration: none;
          box-shadow: var(--card-shadow);
        }

        .btn-secondary-touch:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .hero-social-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        .social-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .social-icons-row {
          display: flex;
          gap: 12px;
        }

        .social-box-btn {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 10px;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .social-box-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 210, 255, 0.2);
        }

        /* ── Right Column: Image Card & Badges ────────────────── */
        .hero-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .hero-card-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
        }

        /* Decorative Background Frame */
        .decorative-glow-frame {
          position: absolute;
          top: 15px;
          right: -15px;
          width: 100%;
          height: 100%;
          border: 1.5px solid rgba(0, 210, 255, 0.2);
          border-radius: 24px;
          pointer-events: none;
          z-index: 0;
        }

        /* Floating Code Badge (Top-Left) */
        .floating-code-badge {
          position: absolute;
          top: 24px;
          left: -20px;
          width: 52px;
          height: 52px;
          background: rgba(15, 17, 23, 0.85);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(0, 210, 255, 0.35);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 210, 255, 0.2);
          transition: transform 0.3s ease;
        }

        .floating-code-badge:hover {
          transform: scale(1.08) rotate(-4deg);
        }

        /* Dot Matrix Pattern (Top-Right) */
        .dot-matrix-pattern {
          position: absolute;
          top: 24px;
          right: 24px;
          display: grid;
          grid-template-columns: repeat(6, 6px);
          gap: 10px;
          z-index: 2;
          pointer-events: none;
        }

        .matrix-dot {
          width: 3px;
          height: 3px;
          background: rgba(0, 210, 255, 0.35);
          border-radius: 50%;
        }

        /* Photo Card Frame */
        .hero-photo-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid rgba(0, 210, 255, 0.25);
          border-radius: 24px;
          padding: 14px;
          z-index: 2;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 210, 255, 0.08);
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .hero-photo-card:hover {
          border-color: rgba(0, 210, 255, 0.5);
        }

        .photo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 4.6;
          border-radius: 18px;
          overflow: hidden;
          background: #08090C;
        }

        .hero-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-photo-card:hover .hero-profile-image {
          transform: scale(1.02);
        }

        .photo-bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 40%;
          background: linear-gradient(to top, rgba(8, 9, 12, 0.95) 0%, transparent 100%);
          pointer-events: none;
        }

        /* Floating Bottom Glass Status Box */
        .floating-status-box {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(15, 17, 23, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 5;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        :global(html.light-mode) .floating-status-box {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(0, 0, 0, 0.1);
        }

        .status-cyan-bar {
          position: absolute;
          left: 0;
          top: 12px;
          bottom: 12px;
          width: 3.5px;
          background: #00D2FF;
          border-radius: 0 4px 4px 0;
          box-shadow: 0 0 10px #00D2FF;
        }

        .status-info-txt {
          padding-left: 8px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .status-headline {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .status-subline {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.35;
        }

        .status-live-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #10B981;
          font-weight: 600;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 20px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10B981;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        /* ── Bottom 4-Column Stats Banner ─────────────────────── */
        .hero-stats-banner {
          width: 100%;
          max-width: 440px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 16px 14px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          box-shadow: var(--card-shadow);
          transition: border-color 0.25s ease;
        }

        .hero-stats-banner:hover {
          border-color: var(--card-border-hover);
        }

        .stat-banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 4px;
        }

        .stat-icon-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .stat-metric-value {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }

        .stat-metric-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.2;
        }

        /* ── Responsive ────────────────────────────────────────── */
        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-left {
            align-items: center;
          }

          .hero-heading {
            font-size: 3.2rem;
          }

          .hero-action-buttons {
            justify-content: center;
          }

          .hero-social-section {
            align-items: center;
          }

          .hero-card-wrapper {
            max-width: 380px;
          }

          .hero-stats-banner {
            max-width: 380px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 100px 0 50px;
          }

          .hero-heading {
            font-size: 2.5rem;
          }

          .hero-action-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary-work,
          .btn-secondary-touch {
            width: 100%;
            justify-content: center;
          }

          .floating-status-box {
            padding: 10px 12px;
          }

          .status-headline {
            font-size: 0.8rem;
          }

          .status-subline {
            display: none;
          }

          .hero-stats-banner {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
