"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

export default function Experience() {
  const workExperience = [
    {
      date: "01/2026 – 08/2026",
      role: "Junior Backend Developer",
      company: "Tensorik · India",
      desc: "Engineered production backend services and REST APIs for Tensorik's AI/tech education platform, MBT Institute, Flutter LMS mobile app, and e-commerce. Architected PostgreSQL/Supabase schemas, rate limiting, Redis caching, BullMQ jobs, and Razorpay payments.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      tags: ["Node.js", "NestJS", "PostgreSQL", "Supabase", "Redis", "BullMQ", "Razorpay"]
    },
    {
      date: "01/2025 – 01/2026",
      role: "Freelance Backend Developer",
      company: "Self-Employed · Remote",
      desc: "Designed and developed backend systems and REST APIs for multiple freelance projects, including a doctor/clinic management system. Built patient records, appointment scheduling, RBAC, MongoDB schemas, Stripe payment processing, and Redis caching.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Stripe", "Redis", "RBAC"]
    },
    {
      date: "08/2024 – 10/2024",
      role: "Frontend Developer",
      company: "CodeAlpha · India",
      desc: "Built three projects, including a Weather Website and Book Library, using HTML5, CSS3, and core JavaScript, with a focus on responsive static interfaces and fundamental DOM manipulation.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" x2="16" y1="21" y2="21"/>
          <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>
      ),
      tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"]
    },
  ];

  const educationAndTracks = [
    {
      date: "09/2020 – 06/2024",
      role: "Bachelor of Information Systems (GPA: 3.6)",
      company: "Faculty of Management Technology and Information Systems, Port Said University",
      desc: "Graduated with honors (GPA: 3.6). Comprehensive focus on database systems, software engineering, data structures, algorithms, and web architecture.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
          <circle cx="14" cy="15" r="2"/>
          <path d="m15.5 16.5 2 2"/>
        </svg>
      ),
      tags: ["Honors GPA: 3.6", "Information Systems", "Database Systems", "Software Eng"]
    },
    {
      date: "07/2024 – 10/2024",
      role: "AWS Cloud Track",
      company: "Egypt's Digital Pioneers Initiative",
      desc: "Gained foundational AWS cloud knowledge, including EC2 for scalable hosting, RDS for database management, and IAM for secure access control to support backend solutions.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
      tags: ["AWS EC2", "AWS RDS", "AWS IAM", "Cloud Solutions"]
    },
    {
      date: "09/2022 – 01/2023",
      role: "Backend Diploma (Node.js)",
      company: "Route Academy",
      desc: "Developed backend projects, including an e-commerce platform and real-time applications, using Node.js, Express.js, Mongoose, and Socket.IO, with Joi-based validation and clean architecture following SOLID principles.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      tags: ["Node.js", "Express.js", "Mongoose", "Socket.IO", "SOLID Principles"]
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>EXPERIENCE & EDUCATION</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="experience-heading">My Journey</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="experience-subtitle">
            A timeline of my professional experience and education that shaped my path as a backend developer.
          </p>
        </ScrollReveal>

        {/* 2-Column Grid */}
        <div className="journey-columns-grid">
          {/* Work Experience Column */}
          <div className="journey-col">
            <ScrollReveal delay={200}>
              <div className="col-header-wrap">
                <div className="col-header-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 className="col-header-title">Work Experience</h3>
              </div>
            </ScrollReveal>

            <div className="timeline-stack">
              <div className="col-timeline-line"></div>

              {workExperience.map((item, idx) => (
                <ScrollReveal key={item.date} delay={250 + idx * 100}>
                  <div className="timeline-entry-row">
                    {/* Glowing Cyan Node */}
                    <div className="timeline-node-point">
                      <div className="node-center-dot"></div>
                    </div>

                    {/* 3D Tilt Card */}
                    <TiltCard maxTilt={6} scale={1.02} style={{ width: "100%" }}>
                      <div className="journey-card">
                        {item.isCurrent && <BorderBeam duration={8} size={200} colorFrom="#00D2FF" colorTo="#22C55E" />}
                        
                        <div className="journey-card-content">
                          <div className="journey-badge-row">
                            <span className="journey-date-badge">{item.date}</span>
                            {item.isCurrent && (
                              <span className="live-current-tag">
                                <span className="live-dot-green"></span>
                                Current Role
                              </span>
                            )}
                          </div>
                          
                          <h4 className="journey-role-title">{item.role}</h4>
                          <div className="journey-company-name">{item.company}</div>
                          <p className="journey-desc-text">{item.desc}</p>

                          <div className="journey-tags-list">
                            {item.tags.map((t) => (
                              <span key={t} className="journey-micro-tag">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div className="journey-side-badge">
                          {item.badgeIcon}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Education & Tracks Column */}
          <div className="journey-col">
            <ScrollReveal delay={250}>
              <div className="col-header-wrap">
                <div className="col-header-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h3 className="col-header-title">Education & Tracks</h3>
              </div>
            </ScrollReveal>

            <div className="timeline-stack">
              <div className="col-timeline-line"></div>

              {educationAndTracks.map((item, idx) => (
                <ScrollReveal key={item.date} delay={300 + idx * 100}>
                  <div className="timeline-entry-row">
                    {/* Glowing Cyan Node */}
                    <div className="timeline-node-point">
                      <div className="node-center-dot"></div>
                    </div>

                    {/* 3D Tilt Card */}
                    <TiltCard maxTilt={6} scale={1.02} style={{ width: "100%" }}>
                      <div className="journey-card">
                        <div className="journey-card-content">
                          <span className="journey-date-badge">{item.date}</span>
                          <h4 className="journey-role-title">{item.role}</h4>
                          <div className="journey-company-name">{item.company}</div>
                          <p className="journey-desc-text">{item.desc}</p>

                          <div className="journey-tags-list">
                            {item.tags.map((t) => (
                              <span key={t} className="journey-micro-tag">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div className="journey-side-badge">
                          {item.badgeIcon}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .experience-section {
          width: 100%;
        }

        .experience-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
        }

        .experience-heading {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0 0 10px 0;
        }

        .experience-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0 0 40px 0;
        }

        /* ── 2-Column Grid ────────────────────────────── */
        .journey-columns-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .journey-col {
          display: flex;
          flex-direction: column;
        }

        .col-header-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .col-header-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .col-header-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* ── Timeline Stack & Spine ──────────────────── */
        .timeline-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-left: 28px;
        }

        .col-timeline-line {
          position: absolute;
          left: 7px;
          top: 15px;
          bottom: 15px;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #00d2ff 0%, rgba(0, 210, 255, 0.15) 80%, transparent 100%);
        }

        .timeline-entry-row {
          position: relative;
          display: flex;
          align-items: center;
        }

        .timeline-node-point {
          position: absolute;
          left: -21px;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(0, 210, 255, 0.15);
          border: 2px solid #00d2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.6);
        }

        .node-center-dot {
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
        }

        /* ── Journey Card ────────────────────────────── */
        .journey-card {
          position: relative;
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 22px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .journey-card-content {
          flex: 1;
        }

        .journey-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .journey-date-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          padding: 2px 10px;
          border-radius: 6px;
          width: fit-content;
        }

        .live-current-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #22c55e;
          font-weight: 700;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 2px 8px;
          border-radius: 9999px;
        }

        .live-dot-green {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px #22c55e;
        }

        .journey-role-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
        }

        .journey-company-name {
          font-size: 0.88rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .journey-desc-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0 0 12px 0;
        }

        .journey-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .journey-micro-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .journey-side-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 968px) {
          .journey-columns-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .experience-heading {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .timeline-stack {
            padding-left: 24px;
          }
          .col-timeline-line {
            left: 7px;
            transform: translateX(-50%);
          }
          .timeline-node-point {
            left: -17px;
            transform: translateX(-50%);
            width: 12px;
            height: 12px;
          }
          .journey-card {
            padding: 16px 14px;
            gap: 12px;
          }
          .journey-side-badge {
            width: 34px;
            height: 34px;
          }
          .journey-role-title {
            font-size: 1rem;
          }
          .journey-desc-text {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
