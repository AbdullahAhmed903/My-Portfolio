"use client";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const workExperience = [
    {
      date: "03/2026 – Present",
      role: "Backend Developer (Node.js)",
      company: "Tensorik",
      active: true,
    },
    {
      date: "08/2024 – 10/2024",
      role: "Frontend Developer",
      company: "CodeAlpha",
      active: false,
    },
  ];

  const education = [
    {
      date: "09/2020 – 06/2024",
      role: "Bachelor's Degree in Information Systems",
      company: "Port Said University (GPA: 3.6)",
      active: false,
    },
  ];

  const courses = [
    {
      date: "07/2024 – 10/2024",
      role: "AWS Cloud",
      company: "Egypt's Digital Pioneers Initiative",
      active: true,
    },
    {
      date: "09/2022 – 01/2023",
      role: "Backend (Node.js)",
      company: "Route Academy",
      active: false,
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <ScrollReveal>
          <div className="experience-label">
            <span className="label-line"></span>
            <span>MY JOURNEY</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="experience-heading">Experience</h2>
        </ScrollReveal>

        <div className="experience-grid">
          {/* Left Column */}
          <div className="experience-column">
            <ScrollReveal delay={200}>
              <div className="column-section">
                <h3 className="section-title">WORK EXPERIENCE</h3>
                <div className="timeline">
                  {workExperience.map((item, index) => (
                    <div 
                      key={index} 
                      className={`timeline-item ${index === workExperience.length - 1 ? 'last' : ''}`}
                    >
                      <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
                      <div className="timeline-content">
                        <div className={`timeline-date ${item.active ? 'active' : ''}`}>
                          {item.date}
                        </div>
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-company">{item.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="column-section">
                <h3 className="section-title">EDUCATION</h3>
                <div className="timeline">
                  {education.map((item, index) => (
                    <div 
                      key={index} 
                      className={`timeline-item ${index === education.length - 1 ? 'last' : ''}`}
                    >
                      <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
                      <div className="timeline-content">
                        <div className={`timeline-date ${item.active ? 'active' : ''}`}>
                          {item.date}
                        </div>
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-company">{item.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="experience-column">
            <ScrollReveal delay={350}>
              <div className="column-section">
                <h3 className="section-title">COURSES & TRAINING</h3>
                <div className="timeline">
                  {courses.map((item, index) => (
                    <div 
                      key={index} 
                      className={`timeline-item ${index === courses.length - 1 ? 'last' : ''}`}
                    >
                      <div className={`timeline-dot ${item.active ? 'active' : ''}`}></div>
                      <div className="timeline-content">
                        <div className={`timeline-date ${item.active ? 'active' : ''}`}>
                          {item.date}
                        </div>
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-company">{item.company}</div>
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
          padding: 80px 0;
          background: #111118;
        }

        .experience-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .experience-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #00e5a0;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .label-line {
          width: 30px;
          height: 1px;
          background: #00e5a0;
        }

        .experience-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 48px 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .experience-column {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .column-section {
          display: flex;
          flex-direction: column;
        }

        .section-title {
          font-family: 'Courier New', monospace;
          font-size: 0.7rem;
          color: #00e5a0;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          margin: 0 0 1.5rem 0;
          font-weight: 600;
        }

        .timeline {
          display: flex;
          flex-direction: column;
        }

        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2.5rem;
          border-left: 1px solid rgba(255, 255, 255, 0.07);
        }

        .timeline-item.last {
          border-left-color: transparent;
          padding-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -5px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #888888;
          border: 2px solid #111118;
          z-index: 1;
        }

        .timeline-dot.active {
          background: #00e5a0;
          box-shadow: 0 0 12px rgba(0, 229, 160, 0.6);
        }

        .timeline-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .timeline-date {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: #888888;
          letter-spacing: 0.06em;
        }

        .timeline-date.active {
          color: #00e5a0;
        }

        .timeline-role {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }

        .timeline-company {
          font-family: 'Courier New', monospace;
          font-size: 0.78rem;
          color: #888888;
        }

        @media (max-width: 968px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .experience-heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .experience-heading {
            font-size: 2rem;
          }

          .timeline-item {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
