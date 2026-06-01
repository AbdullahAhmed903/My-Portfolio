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
      <div className="hero-container">
        {/* Left Column - Text */}
        <div className={`hero-left ${mounted ? 'fade-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Node.js Backend Developer</span>
          </div>

          <h1 className="hero-name">
            <span className="name-solid">Abdullah</span>
            <span className="name-outline">Ahmed</span>
          </h1>

          <p className="hero-tagline">
            Building scalable systems
          </p>

          <p className="hero-bio">
            Backend developer with production experience at Tensorik, building and scaling 
            an educational platform serving 10,000+ users. Specialized in payment integration, 
            API design, database optimization, and rate limiting using Next.js, Supabase, and Node.js.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              See my work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:abdullahahmed02000@gmail.com" className="social-icon" aria-label="Email">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
              </svg>
            </a>
            <a href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume%202026-05-30.pdf" target="_blank" rel="noopener noreferrer" download className="social-icon" aria-label="Download CV">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M7 10l5 5 5-5M12 4v11" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Geometric Frame with Image */}
        <div className={`hero-right ${mounted ? 'fade-in-delay' : ''}`}>
          <div className="geometric-frame">
            <div className="frame-outer"></div>
            <div className="frame-inner">
              <div className="card-stats">
                <div className="stat-item">
                  <div className="stat-value">10K+</div>
                  <div className="stat-label">Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">750+</div>
                  <div className="stat-label">Commits</div>
                </div>
              </div>

              <div className="image-container">
                {!imgError ? (
                  <img
                    src="https://i.ibb.co/3592vhkV/384A7585.jpg"
                    alt="Abdullah Ahmed"
                    className="profile-img"
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
                <div className="image-label">Node.js Dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 140px 0 80px;
        }

        /* Grid overlay background - only on hero */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 229, 160, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 229, 160, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
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

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 20px;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.05em;
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 0.95;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
          letter-spacing: -0.02em;
        }

        .name-solid {
          color: var(--text-primary);
        }

        .name-outline {
          color: transparent;
          -webkit-text-stroke: 2px var(--text-very-muted);
          text-stroke: 2px var(--text-very-muted);
        }

        .hero-tagline {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .hero-bio {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
          max-width: 500px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .btn-primary {
          background: var(--accent);
          color: #000;
          padding: 14px 32px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
        }

        .btn-primary:hover {
          background: var(--accent-bright);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          padding: 14px 32px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--text-muted);
        }

        .btn-secondary:hover {
          color: var(--text-primary);
          border-bottom-color: var(--accent);
        }

        .hero-socials {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .social-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.2s ease;
          text-decoration: none;
          border: 1px solid var(--card-border);
          border-radius: 4px;
        }

        .social-icon:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .geometric-frame {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .frame-outer {
          position: absolute;
          top: -20px;
          left: -20px;
          right: 20px;
          bottom: 20px;
          border: 2px solid var(--pill-border);
          border-radius: 12px;
          pointer-events: none;
        }

        .frame-inner {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 24px;
          z-index: 1;
        }

        .card-stats {
          display: flex;
          gap: 24px;
          margin-bottom: 20px;
        }

        .stat-item {
          flex: 1;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 12px;
          border-radius: 8px;
        }

        .stat-value {
          font-family: 'Courier New', monospace;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(30%);
        }

        .profile-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
        }

        .image-label {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: var(--accent);
          color: #000;
          padding: 8px 16px;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-name {
            font-size: 3rem;
          }

          .geometric-frame {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 100px 0 60px;
          }

          .hero-name {
            font-size: 2.5rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            text-align: center;
          }

          .hero-socials {
            justify-content: center;
          }

          .frame-outer {
            top: -10px;
            left: -10px;
            right: 10px;
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
}
