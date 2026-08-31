"use client";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const highlights = [
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      label: "RESTful APIs",
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15"/>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 22V12"/>
        </svg>
      ),
      label: "Clean Architecture",
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
      label: "AWS Cloud",
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      label: "Real-time Apps",
    },
    {
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      label: "Rate Limiting",
    },
  ];

  const cards = [
    {
      tag: "Current Role",
      title: "Backend Developer",
      desc: "Tensorik — Building & Scaling EdTech Platform",
      badge: "10K+ Users Impacted",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      tag: "Education",
      title: "GPA 3.6 / 4.0",
      desc: "B.S. Information Systems",
      subline: "Port Said University",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tag: "Specialization",
      title: "AWS Cloud Architect",
      desc: "Egypt's Digital Pioneers Initiative",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
    },
    {
      tag: "Activity",
      title: "750+ Commits",
      desc: "Production code, open-source repos & backend systems",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Bio & Highlights */}
        <div className="about-left-col">
          <ScrollReveal>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>ABOUT ME</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="about-main-title">Who I Am</h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="about-tagline">
              Building reliable, scalable, and high-performance backend systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="about-paragraphs">
              <p>
                I'm a Backend Developer with hands-on production experience building and scaling an AI & EdTech 
                platform serving <span className="cyan-highlight">10,000+ users</span> at <span className="cyan-highlight">Tensorik</span>. 
                I work on designing robust APIs, payment systems, admin dashboards, rate limiting, and optimized 
                database schemas using <span className="cyan-highlight">Next.js, Supabase</span>, and <span className="cyan-highlight">Node.js</span>.
              </p>
              
              <p>
                I have experience in <span className="cyan-highlight">RESTful API design</span>, authentication, role-based 
                access control, and collaborating on production codebases via Git. I've integrated <span className="cyan-highlight">Razorpay payment gateway</span>, 
                implemented API rate limiting, and optimized <span className="cyan-highlight">PostgreSQL</span> database schemas for performance.
              </p>

              <p>
                I hold a <span className="cyan-highlight">Bachelor's Degree in Information Systems</span> (GPA: 3.6) from 
                Port Said University and completed comprehensive backend training at <span className="cyan-highlight">Route Academy</span>, 
                where I built systems using Node.js, Express.js, Mongoose, and Socket.IO following <span className="cyan-highlight">SOLID principles</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Tech Highlights Header & Pills */}
          <ScrollReveal delay={300}>
            <div className="tech-highlights-wrap">
              <div className="tech-label-header">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  <path d="M12 2v2"/>
                  <path d="M12 20v2"/>
                  <path d="m4.93 4.93 1.41 1.41"/>
                  <path d="m17.66 17.66 1.41 1.41"/>
                  <path d="M2 12h2"/>
                  <path d="M20 12h2"/>
                  <path d="m6.34 17.66-1.41 1.41"/>
                  <path d="m19.07 4.93-1.41 1.41"/>
                </svg>
                <span>TECH HIGHLIGHTS</span>
              </div>

              <div className="highlights-tags-row">
                {highlights.map((item) => (
                  <span key={item.label} className="tech-highlight-pill">
                    <span className="pill-icon">{item.icon}</span>
                    <span className="pill-text">{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={400}>
            <div className="about-actions-row">
              <a
                href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume%202026-05-30.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-download-cv"
              >
                <span>Download Resume</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </a>

              <a href="#contact" className="btn-get-touch-link">
                <span>Get In Touch</span>
                <span className="arrow-icon">↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Timeline Cards */}
        <div className="about-right-col">
          <div className="timeline-connector-line"></div>

          <div className="cards-timeline-stack">
            {cards.map((card, idx) => (
              <ScrollReveal key={card.title} delay={200 + idx * 100}>
                <div className="timeline-card-wrapper">
                  {/* Glowing Node Point */}
                  <div className="timeline-glowing-node">
                    <div className="inner-node-dot"></div>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-info-card">
                    <div className="card-left-icon">
                      <div className="icon-glow-circle">
                        {card.icon}
                      </div>
                    </div>

                    <div className="card-right-details">
                      <span className="card-category-tag">{card.tag}</span>
                      <h3 className="card-main-title">{card.title}</h3>
                      <p className="card-desc-text">{card.desc}</p>
                      {card.subline && <p className="card-subline-text">{card.subline}</p>}

                      {card.badge && (
                        <div className="card-impact-badge">
                          <span className="badge-icon-wrap">{card.badgeIcon}</span>
                          <span>{card.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          width: 100%;
          position: relative;
        }

        .about-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* ── Left Column ────────────────────────────── */
        .about-left-col {
          display: flex;
          flex-direction: column;
        }

        .about-main-title {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0 0 12px 0;
        }

        .about-tagline {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin: 0 0 24px 0;
          letter-spacing: -0.01em;
        }

        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 0.96rem;
          line-height: 1.75;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .cyan-highlight {
          color: #38BDF8;
          font-weight: 600;
        }

        :global(html.light-mode) .cyan-highlight {
          color: #0284C7;
        }

        /* Tech Highlights */
        .tech-highlights-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .tech-label-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #00D2FF;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .highlights-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 8px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .tech-highlight-pill:hover {
          border-color: #00D2FF;
          color: var(--text-primary);
          background: rgba(0, 210, 255, 0.06);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 210, 255, 0.15);
        }

        .pill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00D2FF;
        }

        /* CTA Buttons */
        .about-actions-row {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-download-cv {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00D2FF 0%, #2563EB 100%);
          color: #FFFFFF;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(0, 210, 255, 0.35);
          transition: all 0.25s ease;
        }

        .btn-download-cv:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 210, 255, 0.5);
        }

        .btn-get-touch-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 10px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-get-touch-link:hover {
          border-color: #00D2FF;
          color: #00D2FF;
          transform: translateY(-2px);
        }

        .arrow-icon {
          color: #00D2FF;
          font-size: 1.1rem;
        }

        /* ── Right Column: Timeline Cards ─────────────── */
        .about-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          padding-left: 20px;
        }

        .timeline-connector-line {
          position: absolute;
          left: -4px;
          top: 30px;
          bottom: 40px;
          width: 2px;
          background: linear-gradient(to bottom, #00D2FF 0%, rgba(0, 210, 255, 0.2) 100%);
          box-shadow: 0 0 8px rgba(0, 210, 255, 0.4);
        }

        .cards-timeline-stack {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .timeline-card-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Glowing Cyan Node */
        .timeline-glowing-node {
          position: absolute;
          left: -28px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #00D2FF;
          box-shadow: 0 0 12px #00D2FF, 0 0 20px rgba(0, 210, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: transform 0.3s ease;
        }

        .inner-node-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFFFFF;
        }

        .timeline-card-wrapper:hover .timeline-glowing-node {
          transform: translateY(-50%) scale(1.3);
          box-shadow: 0 0 16px #00D2FF, 0 0 28px #00D2FF;
        }

        /* Timeline Info Card */
        .timeline-info-card {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .timeline-card-wrapper:hover .timeline-info-card {
          border-color: rgba(0, 210, 255, 0.4);
          transform: translateX(4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 210, 255, 0.08);
        }

        .card-left-icon {
          flex-shrink: 0;
        }

        .icon-glow-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.1);
          transition: all 0.25s ease;
        }

        .timeline-card-wrapper:hover .icon-glow-circle {
          background: rgba(0, 210, 255, 0.12);
          border-color: #00D2FF;
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.3);
          transform: scale(1.06);
        }

        .card-right-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .card-category-tag {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: #00D2FF;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .card-main-title {
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .card-desc-text {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin: 0;
        }

        .card-subline-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }

        .card-impact-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.2);
          color: #38BDF8;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          width: fit-content;
        }

        .badge-icon-wrap {
          display: flex;
          align-items: center;
        }

        /* ── Responsive ────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-right-col {
            padding-left: 24px;
          }
        }

        @media (max-width: 640px) {
          .about-actions-row {
            flex-direction: column;
            width: 100%;
          }

          .btn-download-cv,
          .btn-get-touch-link {
            width: 100%;
            justify-content: center;
          }

          .timeline-info-card {
            padding: 16px;
            gap: 14px;
          }

          .icon-glow-circle {
            width: 44px;
            height: 44px;
          }

          .card-main-title {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
}
