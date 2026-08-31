"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

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
        {/* Left Column: Bio & Highlights & Architecture Visualizer */}
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

          {/* Interactive Backend Architecture Pipeline Flow */}
          <ScrollReveal delay={250}>
            <div className="arch-flow-box">
              <div className="arch-flow-header">
                <div className="arch-flow-badge">
                  <span className="flow-pulse"></span>
                  <span>SYSTEM DATA FLOW</span>
                </div>
                <span className="flow-sub">High Throughput Pipeline</span>
              </div>

              <div className="arch-steps-track">
                <div className="arch-step">
                  <span className="step-tag">Client</span>
                  <span className="step-name">App / Web</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step">
                  <span className="step-tag">Gateway</span>
                  <span className="step-name">Rate Limiter</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: 0.4, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step highlight-step">
                  <span className="step-tag">Service</span>
                  <span className="step-name">NestJS / Node</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: 0.8, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step">
                  <span className="step-tag">Storage</span>
                  <span className="step-name">Postgres / Redis</span>
                </div>
              </div>
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
                  <motion.span 
                    key={item.label} 
                    className="tech-highlight-pill"
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="pill-icon">{item.icon}</span>
                    <span className="pill-text">{item.label}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={400}>
            <div className="about-actions-row">
              <motion.a
                href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume%202026-05-30.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-download-cv"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download Resume</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </motion.a>

              <motion.a 
                href="#contact" 
                className="btn-get-touch-link"
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
                <span className="arrow-icon">↗</span>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 3D Tilt Timeline Cards */}
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

                  {/* 3D Tilt Card Content */}
                  <TiltCard maxTilt={8} scale={1.02} style={{ width: "100%" }}>
                    <div className="timeline-info-card">
                      {idx === 0 && <BorderBeam duration={7} size={220} colorFrom="#00D2FF" colorTo="#3B82F6" />}
                      
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
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .about-section {
          width: 100%;
          position: relative;
        }

        .about-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: flex-start;
        }

        /* ── Left Column ────────────────────────────────────────── */
        .about-left-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-main-title {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0;
        }

        .about-tagline {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--accent);
          margin: 0;
        }

        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .about-paragraphs p {
          font-size: 0.96rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        .cyan-highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* ── Architecture Flow Box ─────────────────────────────── */
        .arch-flow-box {
          background: rgba(15, 17, 23, 0.6);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 14px;
          padding: 16px 18px;
          margin: 8px 0;
          backdrop-filter: blur(8px);
        }

        .arch-flow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .arch-flow-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: #00d2ff;
        }

        .flow-pulse {
          width: 6px;
          height: 6px;
          background: #00d2ff;
          border-radius: 50%;
          box-shadow: 0 0 6px #00d2ff;
        }

        .flow-sub {
          font-size: 0.72rem;
          color: #64748b;
          font-family: var(--font-mono);
        }

        .arch-steps-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          overflow-x: auto;
          padding: 4px 0;
        }

        .arch-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 6px 10px;
          min-width: 80px;
          text-align: center;
        }

        .highlight-step {
          border-color: rgba(0, 210, 255, 0.4);
          background: rgba(0, 210, 255, 0.08);
        }

        .step-tag {
          font-size: 0.65rem;
          color: #94a3b8;
          font-family: var(--font-mono);
          text-transform: uppercase;
        }

        .step-name {
          font-size: 0.76rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        .step-connector {
          color: #64748b;
          font-size: 0.8rem;
          position: relative;
          display: flex;
          align-items: center;
        }

        .flow-packet {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00d2ff;
          box-shadow: 0 0 6px #00d2ff;
        }

        /* ── Tech Highlights ────────────────────────────────────── */
        .tech-highlights-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .tech-label-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .highlights-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-primary);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: default;
        }

        .tech-highlight-pill:hover {
          border-color: var(--accent);
          background: rgba(0, 210, 255, 0.06);
          box-shadow: 0 0 14px rgba(0, 210, 255, 0.2);
        }

        .pill-icon {
          color: var(--accent);
          display: flex;
          align-items: center;
        }

        /* ── Action Buttons ────────────────────────────────────────── */
        .about-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .btn-download-cv {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #00d2ff 0%, #3b82f6 100%);
          color: #08090c;
          font-weight: 700;
          font-size: 0.92rem;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(0, 210, 255, 0.3);
        }

        .btn-get-touch-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.92rem;
          border-radius: 10px;
        }

        /* ── Right Column: Timeline Cards ────────────────────────── */
        .about-right-col {
          position: relative;
          padding-left: 28px;
        }

        .timeline-connector-line {
          position: absolute;
          left: 6px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: linear-gradient(180deg, #00d2ff 0%, rgba(0, 210, 255, 0.2) 60%, transparent 100%);
        }

        .cards-timeline-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .timeline-card-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .timeline-glowing-node {
          position: absolute;
          left: -28px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(0, 210, 255, 0.2);
          border: 2px solid #00d2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.6);
        }

        .inner-node-dot {
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
        }

        .timeline-info-card {
          position: relative;
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .card-left-icon {
          flex-shrink: 0;
        }

        .icon-glow-circle {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-right-details {
          flex: 1;
        }

        .card-category-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }

        .card-main-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }

        .card-desc-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.45;
        }

        .card-subline-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .card-impact-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 3px 10px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.25);
          border-radius: 9999px;
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: #38bdf8;
        }

        .badge-icon-wrap {
          display: flex;
          align-items: center;
          color: var(--accent);
        }

        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-right-col {
            padding-left: 20px;
          }
        }
      `}</style>
    </section>
  );
}
