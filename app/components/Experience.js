"use client";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const workExperience = [
    {
      date: "06/2026 – 09/2026",
      role: "Junior Backend Developer",
      company: "Tensorik",
      desc: "Designed and developed production backend services and REST APIs for AI education, Flutter mobile LMS backend, and e-commerce using Node.js, NestJS, PostgreSQL, and Supabase.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
    },
    {
      date: "03/2026 – 06/2026",
      role: "Backend Developer Intern",
      company: "Tensorik",
      desc: "Implemented core REST APIs, database schemas, Razorpay payment workflows, API rate limiting, and backend business logic.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
    {
      date: "08/2024 – 10/2024",
      role: "Frontend Developer",
      company: "CodeAlpha",
      desc: "Built responsive interactive web applications with modern UI and client-side state management.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"/>
          <line x1="8" x2="16" y1="21" y2="21"/>
          <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>
      ),
    },
  ];

  const educationAndTracks = [
    {
      date: "09/2020 – 06/2024",
      role: "B.S. Information Systems",
      company: "Port Said University (GPA: 3.6)",
      desc: "Graduated with honors. Focused on database systems, software engineering, algorithms, and web architecture.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
          <circle cx="14" cy="15" r="2"/>
          <path d="m15.5 16.5 2 2"/>
        </svg>
      ),
    },
    {
      date: "07/2024 – 10/2024",
      role: "AWS Cloud Architect Track",
      company: "Egypt's Digital Pioneers Initiative",
      desc: "In-depth cloud infrastructure, EC2, S3, IAM, VPC, and scalable cloud application design.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
    },
    {
      date: "09/2022 – 01/2023",
      role: "Backend Diploma (Node.js)",
      company: "Route Academy",
      desc: "Comprehensive training in RESTful APIs, Express, MongoDB, Socket.IO, security, and SOLID principles.",
      badgeIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
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

                    {/* Card */}
                    <div className="journey-card">
                      <div className="journey-card-content">
                        <span className="journey-date-badge">{item.date}</span>
                        <h4 className="journey-role-title">{item.role}</h4>
                        <div className="journey-company-name">{item.company}</div>
                        <p className="journey-desc-text">{item.desc}</p>
                      </div>

                      <div className="journey-side-badge">
                        {item.badgeIcon}
                      </div>
                    </div>
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

                    {/* Card */}
                    <div className="journey-card">
                      <div className="journey-card-content">
                        <span className="journey-date-badge">{item.date}</span>
                        <h4 className="journey-role-title">{item.role}</h4>
                        <div className="journey-company-name">{item.company}</div>
                        <p className="journey-desc-text">{item.desc}</p>
                      </div>

                      <div className="journey-side-badge">
                        {item.badgeIcon}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.1);
        }

        .col-header-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* Timeline Stack */
        .timeline-stack {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-left: 24px;
        }

        .col-timeline-line {
          position: absolute;
          left: 0px;
          top: 30px;
          bottom: 30px;
          width: 2px;
          background: linear-gradient(to bottom, #00D2FF 0%, rgba(0, 210, 255, 0.15) 100%);
          box-shadow: 0 0 8px rgba(0, 210, 255, 0.35);
        }

        .timeline-entry-row {
          position: relative;
          display: flex;
          align-items: center;
        }

        /* Glowing Cyan Node */
        .timeline-node-point {
          position: absolute;
          left: -31px;
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

        .node-center-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFFFFF;
        }

        .timeline-entry-row:hover .timeline-node-point {
          transform: translateY(-50%) scale(1.3);
          box-shadow: 0 0 16px #00D2FF, 0 0 28px #00D2FF;
        }

        /* Journey Card */
        .journey-card {
          width: 100%;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 22px 24px;
          display: grid;
          grid-template-columns: 1fr 48px;
          gap: 16px;
          align-items: center;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .timeline-entry-row:hover .journey-card {
          border-color: rgba(0, 210, 255, 0.4);
          transform: translateX(4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 210, 255, 0.08);
        }

        .journey-card-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .journey-date-badge {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #38BDF8;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .journey-role-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .journey-company-name {
          font-size: 0.88rem;
          font-weight: 600;
          color: #00D2FF;
          margin-bottom: 4px;
        }

        .journey-desc-text {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0;
        }

        /* Right Side Badge */
        .journey-side-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 210, 255, 0.05);
          border: 1px solid rgba(0, 210, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .timeline-entry-row:hover .journey-side-badge {
          background: rgba(0, 210, 255, 0.12);
          border-color: #00D2FF;
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.25);
          transform: scale(1.06);
        }

        /* ── Responsive Breakpoints ─────────────────── */
        @media (max-width: 1024px) {
          .journey-columns-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .timeline-stack {
            padding-left: 20px;
          }

          .timeline-node-point {
            left: -27px;
          }

          .journey-card {
            grid-template-columns: 1fr;
            padding: 18px 16px;
          }

          .journey-side-badge {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
