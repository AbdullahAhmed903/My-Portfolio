"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

export default function About() {
  const cards = [
    {
      tag: "Work Experience",
      title: "Junior Backend Developer",
      desc: "Tensorik — AI EdTech, LMS Mobile & E-Commerce",
      badge: "01/2026 – 08/2026",
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
      tag: "Freelance Engineering",
      title: "Freelance Backend Developer",
      desc: "Clinic & Healthcare Systems · Express, Mongo, Stripe & Redis",
      badge: "01/2025 – 01/2026",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      tag: "Education",
      title: "B.S. Information Systems",
      desc: "Faculty of Management Tech & IS, Port Said University",
      badge: "GPA 3.6 / 4.0 (Honors)",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tag: "Cloud Architecture",
      title: "AWS Cloud Track",
      desc: "Egypt's Digital Pioneers Initiative (EC2, RDS, IAM)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
    },
    {
      tag: "Core Engineering",
      title: "DSA · OOP · SOLID · System Design",
      desc: "Scalable REST APIs, Redis Caching, BullMQ & Clean Architecture",
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
                I'm a <span className="cyan-highlight">Full-Stack Developer (Backend-Focused)</span> proficient in{" "}
                <span className="cyan-highlight">Node.js, NestJS, Express.js, TypeScript, Next.js, Mongoose, PostgreSQL, and Supabase</span>. Most recently, I served as a Junior Backend Developer at <span className="cyan-highlight">Tensorik</span>, owning backend architecture and REST APIs across an AI/tech education platform, a Flutter-based LMS mobile app, and an e-commerce platform, while contributing to frontend UI development in Next.js.
              </p>
              
              <p>
                I have a proven track record of independently designing, building, and deploying scalable end-to-end backend systems from requirement gathering to production. My engineering foundation is built on <span className="cyan-highlight">Data Structures & Algorithms</span>, <span className="cyan-highlight">Object-Oriented Programming (OOP)</span>, <span className="cyan-highlight">System Design</span>, relational database modeling, rate limiting, and asynchronous background jobs with <span className="cyan-highlight">BullMQ and Redis</span>.
              </p>

              <p>
                I hold a <span className="cyan-highlight">Bachelor's Degree in Information Systems (GPA: 3.6 / Honors)</span> from Port Said University. I deepened my cloud engineering knowledge through the <span className="cyan-highlight">AWS Cloud track</span> (EC2, RDS, IAM) with Egypt's Digital Pioneers Initiative and completed an intensive backend diploma at <span className="cyan-highlight">Route Academy</span>.
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

          {/* CTA Buttons */}
          <ScrollReveal delay={400}>
            <div className="about-actions-row">
              <motion.a
                href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume_2026-09-01.pdf?updatedAt=1788257012808"
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

        /* ── About Light Mode Overrides ────────────────────────── */
        :global(html.light-mode) .arch-flow-box {
          background: #ffffff;
          border: 1.5px solid rgba(2, 132, 199, 0.25);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
        }

        :global(html.light-mode) .arch-flow-badge {
          color: #0284c7;
        }

        :global(html.light-mode) .flow-pulse {
          background: #0284c7;
          box-shadow: 0 0 6px #0284c7;
        }

        :global(html.light-mode) .flow-sub {
          color: #64748b;
        }

        :global(html.light-mode) .arch-step {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
        }

        :global(html.light-mode) .arch-step.highlight-step {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.45);
        }

        :global(html.light-mode) .step-tag {
          color: #64748b;
        }

        :global(html.light-mode) .step-name {
          color: #0f172a;
        }

        :global(html.light-mode) .step-connector {
          color: #94a3b8;
        }

        :global(html.light-mode) .flow-packet {
          background: #0284c7;
          box-shadow: 0 0 6px #0284c7;
        }

        :global(html.light-mode) .btn-get-touch-link {
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0f172a;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
        }

        :global(html.light-mode) .btn-get-touch-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(2, 132, 199, 0.05);
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.15);
        }

        :global(html.light-mode) .tech-highlight-pill {
          background: #ffffff;
          border-color: #cbd5e1;
          color: #0f172a;
          box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
        }

        /* ── Right Column: Timeline Cards ────────────────────────── */
        .about-right-col {
          position: relative;
          padding-left: 28px;
        }

        .timeline-connector-line {
          position: absolute;
          left: 7px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          transform: translateX(-50%);
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
          left: -21px;
          transform: translateX(-50%);
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
            padding-left: 24px;
            padding-right: 0;
          }
          .arch-flow-box {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .about-section {
            overflow: hidden;
          }
          .about-container {
            width: 92%;
            max-width: 100%;
            overflow: hidden;
            padding: 0;
            box-sizing: border-box;
          }
          .about-main-title {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .about-right-col {
            padding-left: 20px;
            padding-right: 4px;
          }
          .timeline-connector-line {
            left: 3px;
          }
          .timeline-glowing-node {
            left: -20px;
            width: 12px;
            height: 12px;
          }
          .timeline-info-card {
            padding: 14px 12px;
            gap: 12px;
          }
          .icon-glow-circle {
            width: 36px;
            height: 36px;
          }
          .card-main-title {
            font-size: 1rem;
          }
          .card-desc-text {
            font-size: 0.82rem;
          }
          .arch-steps-track {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .step-connector {
            display: none !important;
          }
          .arch-step {
            min-width: 0 !important;
            width: 100% !important;
            padding: 8px 6px !important;
          }
          .tech-highlight-pill {
            padding: 5px 9px;
            font-size: 0.74rem;
          }
        }

        @media (max-width: 480px) {
          .about-container {
            width: 90%;
          }
          .about-right-col {
            padding-left: 24px;
            padding-right: 4px;
          }
          .timeline-connector-line {
            left: 7px;
            transform: translateX(-50%);
          }
          .timeline-glowing-node {
            left: -17px;
            transform: translateX(-50%);
          }
          .about-actions-row {
            flex-direction: column;
            width: 100%;
          }
          .btn-download-cv,
          .btn-get-touch-link {
            width: 100%;
            justify-content: center;
          }
          .stats-quick-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .stat-item-box {
            padding: 10px 8px;
          }
          .stat-big-number {
            font-size: 1.1rem;
          }
          .stat-tiny-label {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </section>
  );
}
