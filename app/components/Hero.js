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
        {/* Left Column - Text */}
        <div className={`hero-left ${mounted ? 'fade-in' : ''}`}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Node.js & Backend Developer</span>
          </div>

          <h1 className="hero-name">
            <span className="name-solid">Abdullah</span>
            <span className="name-gradient gradient-text">Ahmed</span>
          </h1>

          <p className="hero-tagline">
            Architecting Scalable Backend Systems & APIs
          </p>

          <p className="hero-bio">
            Backend developer with production experience at <strong>Tensorik</strong>, building and scaling 
            an educational platform serving 10,000+ users. Specialized in payment integration, 
            API design, database optimization, and rate limiting using Next.js, Supabase, and Node.js.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Get in touch</span>
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
            <div className="frame-glow"></div>
            <div className="frame-outer"></div>
            <div className="frame-inner">
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
                <div className="image-label">
                  <span className="dot"></span>
                  <span>Node.js / Backend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 130px 0 80px;
          overflow: hidden;
        }

        /* Ambient subtle glow behind hero */
        .hero-ambient-glow {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.07) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Grid overlay background */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
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

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--pill-text);
          font-weight: 600;
          letter-spacing: 0.02em;
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .hero-name {
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          letter-spacing: -0.03em;
        }

        .name-solid {
          color: var(--text-primary);
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
          line-height: 1.7;
          margin: 0;
          max-width: 540px;
        }

        .hero-bio strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 12px 26px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 8px;
          box-shadow: 0 4px 14px rgba(0, 210, 255, 0.25);
          transition: all 0.25s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 210, 255, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--card-bg);
          color: var(--text-primary);
          border: 1px solid var(--card-border);
          padding: 12px 26px;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 8px;
          transition: all 0.25s ease;
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .social-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .social-icon:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .geometric-frame {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .frame-glow {
          position: absolute;
          inset: -10px;
          background: var(--accent-gradient);
          filter: blur(20px);
          opacity: 0.15;
          border-radius: 24px;
          z-index: 0;
        }

        .frame-outer {
          position: absolute;
          top: -14px;
          left: -14px;
          right: 14px;
          bottom: 14px;
          border: 1.5px dashed var(--pill-border);
          border-radius: 20px;
          pointer-events: none;
          z-index: 1;
        }

        .frame-inner {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 14px;
          z-index: 2;
          box-shadow: var(--card-shadow);
          transition: border-color 0.3s ease;
        }

        .frame-inner:hover {
          border-color: var(--card-border-hover);
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 14px;
          overflow: hidden;
          background: var(--card-bg-elevated);
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
          transition: transform 0.4s ease;
        }

        .frame-inner:hover .profile-img {
          transform: scale(1.02);
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
          bottom: 12px;
          left: 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(8, 9, 12, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .image-label .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }

        @media (max-width: 968px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-left {
            align-items: center;
          }

          .hero-name {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
          }

          .geometric-frame {
            max-width: 320px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 110px 0 60px;
          }

          .hero-name {
            font-size: 2.4rem;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
