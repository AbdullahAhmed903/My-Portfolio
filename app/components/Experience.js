"use client";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const workExperience = [
    {
      date: "03/2026 – Present",
      role: "Backend Developer (Node.js)",
      company: "Tensorik",
      desc: "Architecting backend services, payment processing with Razorpay, Supabase DB optimizations, and rate-limiting middleware.",
      active: true,
    },
    {
      date: "08/2024 – 10/2024",
      role: "Frontend Developer",
      company: "CodeAlpha",
      desc: "Built responsive interactive web applications with modern UI and client-side data state management.",
      active: false,
    },
  ];

  const education = [
    {
      date: "09/2020 – 06/2024",
      role: "B.S. Information Systems",
      company: "Port Said University (GPA: 3.6)",
      desc: "Graduated with honors. Focused on database systems, software engineering, algorithms, and web architecture.",
      active: false,
    },
  ];

  const certifications = [
    {
      date: "07/2024 – 10/2024",
      role: "AWS Cloud Architect Track",
      company: "Egypt's Digital Pioneers Initiative",
      desc: "In-depth cloud infrastructure, EC2, S3, IAM, VPC, and scalable cloud application design.",
      active: true,
    },
    {
      date: "09/2022 – 01/2023",
      role: "Backend Diploma (Node.js)",
      company: "Route Academy",
      desc: "Comprehensive training in RESTful APIs, Express, MongoDB, Socket.IO, security, and SOLID principles.",
      active: false,
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>EXPERIENCE & EDUCATION</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading">My Journey</h2>
        </ScrollReveal>

        <div className="experience-grid">
          {/* Work & Education Column */}
          <div className="experience-column">
            <ScrollReveal delay={200}>
              <div className="column-card">
                <div className="card-header">
                  <span className="header-icon">💼</span>
                  <h3 className="card-title">Work Experience</h3>
                </div>
                <div className="timeline">
                  {workExperience.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
                      <div className="timeline-content">
                        <span className={`timeline-date ${item.active ? 'active' : ''}`}>
                          {item.date}
                        </span>
                        <h4 className="timeline-role">{item.role}</h4>
                        <div className="timeline-company">{item.company}</div>
                        <p className="timeline-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="column-card" style={{ marginTop: '24px' }}>
                <div className="card-header">
                  <span className="header-icon">🎓</span>
                  <h3 className="card-title">Education</h3>
                </div>
                <div className="timeline">
                  {education.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <span className="timeline-date">{item.date}</span>
                        <h4 className="timeline-role">{item.role}</h4>
                        <div className="timeline-company">{item.company}</div>
                        <p className="timeline-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Certifications Column */}
          <div className="experience-column">
            <ScrollReveal delay={250}>
              <div className="column-card">
                <div className="card-header">
                  <span className="header-icon">📜</span>
                  <h3 className="card-title">Certifications & Training</h3>
                </div>
                <div className="timeline">
                  {certifications.map((item, index) => (
                    <div key={index} className="timeline-item">
                      <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
                      <div className="timeline-content">
                        <span className={`timeline-date ${item.active ? 'active' : ''}`}>
                          {item.date}
                        </span>
                        <h4 className="timeline-role">{item.role}</h4>
                        <div className="timeline-company">{item.company}</div>
                        <p className="timeline-desc">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          width: 100%;
        }

        .experience-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .column-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 28px;
          box-shadow: var(--card-shadow);
          transition: border-color 0.25s ease;
        }

        .column-card:hover {
          border-color: var(--card-border-hover);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--card-border);
        }

        .header-icon {
          font-size: 1.2rem;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .timeline {
          position: relative;
          padding-left: 20px;
          border-left: 2px solid var(--card-border);
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-dot {
          position: absolute;
          left: -27px;
          top: 4px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--card-bg);
          border: 2px solid var(--text-muted);
          transition: all 0.2s ease;
        }

        .timeline-dot.active {
          border-color: var(--accent);
          background: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }

        .timeline-date {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 4px;
        }

        .timeline-date.active {
          color: var(--accent);
          font-weight: 600;
        }

        .timeline-role {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 4px 0;
        }

        .timeline-company {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .timeline-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
