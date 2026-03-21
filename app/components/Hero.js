"use client";
import { useState } from "react";

const SOCIALS = [
  {
    href: "https://github.com/AbdullahAhmed903",
    label: "GitHub",
    tooltip: "GitHub",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/abdullah-ahmed8a6852250",
    label: "LinkedIn",
    tooltip: "LinkedIn",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v5.25A2.75 2.75 0 0 1 19.25 22H4.75A2.75 2.75 0 0 1 2 19.25V14a6 6 0 0 1 6-6h8Zm-8 0V6a4 4 0 1 1 8 0v2" />
      </svg>
    ),
  },
  {
    href: "mailto:abdullahahmed02000@gmail.com",
    label: "Email",
    tooltip: "Email",
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
      </svg>
    ),
  },
];

const DOWNLOAD = {
  href: "https://ik.imagekit.io/abdullahAhmed/Abdullah-Ahmed-Fathy-Nodejs(cv)-20260217.pdf",
  label: "Download CV",
  tooltip: "Download CV",
  icon: (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M7 10l5 5 5-5M12 4v11" />
    </svg>
  ),
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-img-col">
          {!imgError ? (
            <img
              src="https://i.ibb.co/3592vhkV/384A7585.jpg"
              alt="Abdullah Ahmed profile"
              className="hero-img"
              onError={() => setImgError(true)}
              loading="eager"
            />
          ) : (
            <div className="hero-img-placeholder" aria-label="AA profile placeholder">AA</div>
          )}
        </div>

        <div className="hero-text-col">
          <div className="hero-status">
            <span className="hero-dot">●</span> AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className="hero-name">Abdullah Ahmed</h1>
          <div className="hero-subtitle">Node.js Backend Developer</div>
          <p className="hero-desc">
            Motivated backend developer with hands-on experience building scalable systems using Node.js, Express.js, MongoDB, and MySQL. Passionate about RESTful APIs, clean architecture, and AWS Cloud.
          </p>
          <div className="hero-cta-row">
            <a href="#projects" className="hero-cta-btn">See my work →</a>

            <div className="hero-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="hero-social-icon"
                >
                  <span className="icon-tooltip">{s.tooltip}</span>
                  {s.icon}
                </a>
              ))}

              <a
                href={DOWNLOAD.href}
                target="_blank"
                rel="noopener noreferrer"
                download
                aria-label={DOWNLOAD.label}
                className="hero-social-icon hero-download-icon"
              >
                <span className="icon-tooltip">{DOWNLOAD.tooltip}</span>
                <span className="download-arrow">{DOWNLOAD.icon}</span>
                <span className="download-label">Download CV</span>
              </a>
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
          padding: 0;
          width: 100%;
          background: transparent;
        }

        .hero-inner {
          max-width: 900px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 60px;
        }

        .hero-img-col { flex-shrink: 0; }

        .hero-img {
          width: 260px;
          height: 320px;
          border-radius: 16px;
          object-fit: cover;
          display: block;
          background: var(--card-bg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .hero-img-placeholder {
          width: 260px;
          height: 320px;
          border-radius: 16px;
          background: var(--card-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 2px;
          user-select: none;
        }

        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-status {
          display: flex;
          align-items: center;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.75rem;
          color: var(--accent);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .hero-dot { font-size: 1.1em; margin-right: 0.5em; }

        .hero-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-family: 'Segoe UI', 'Arial', sans-serif;
          font-size: 1.25rem;
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 1.25rem;
        }

        .hero-desc {
          font-family: 'Segoe UI', 'Arial', sans-serif;
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 480px;
          margin: 0 0 2rem 0;
        }

        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .hero-cta-btn {
          background: var(--accent);
          color: #fff;
          border-radius: 999px;
          padding: 14px 28px;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: 0.2s;
          box-shadow: 0 4px 12px rgba(0, 200, 117, 0.2);
          white-space: nowrap;
        }
        .hero-cta-btn:hover { background: var(--accent-dark); transform: translateY(-2px); }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hero-social-icon {
          position: relative;
          display: flex;
          align-items: center;
          color: var(--nav-link);
          transition: all 0.25s ease;
          transform: translateY(0);
          text-decoration: none;
        }
        .hero-social-icon:hover {
          color: var(--accent);
          transform: translateY(-3px);
        }

        .icon-tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: var(--pill-bg);
          backdrop-filter: blur(8px);
          border: 1px solid var(--pill-border);
          border-radius: 6px;
          padding: 6px 12px;
          font-size: 0.72rem;
          color: var(--text-primary);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: all 0.2s ease;
          font-family: 'Courier New', Courier, monospace;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .hero-social-icon:hover .icon-tooltip { opacity: 1; transform: translateX(-50%) translateY(-2px); }

        .hero-download-icon { overflow: visible; }

        @keyframes bounceDown {
          0%   { transform: translateY(0); }
          40%  { transform: translateY(3px); }
          70%  { transform: translateY(-1px); }
          100% { transform: translateY(3px); }
        }

        .hero-download-icon:hover .download-arrow {
          animation: bounceDown 0.5s ease forwards;
        }

        .download-label {
          display: inline-block;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          white-space: nowrap;
          font-size: 0.78rem;
          color: var(--accent);
          font-family: 'Courier New', Courier, monospace;
          transition: all 0.3s ease;
          vertical-align: middle;
          margin-left: 0;
        }
        .hero-download-icon:hover .download-label {
          max-width: 120px;
          opacity: 1;
          margin-left: 8px;
        }

        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column;
            text-align: center;
            gap: 32px;
          }
          .hero-text-col { align-items: center; text-align: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-cta-row { justify-content: center; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
