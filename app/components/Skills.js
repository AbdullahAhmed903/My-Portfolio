"use client";
import ScrollReveal from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    label: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "SQL", highlight: true },
      { name: "HTML5 / CSS3", highlight: false },
    ],
  },
  {
    label: "Backend & Systems",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "NestJS", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "Socket.IO (Real-time)", highlight: false },
      { name: "Redis Caching", highlight: false },
      { name: "Rate Limiting & Security", highlight: false },
      { name: "Swagger / OpenAPI", highlight: false },
      { name: "Clean Architecture & SOLID", highlight: false },
    ],
  },
  {
    label: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "Supabase", highlight: false },
      { name: "Prisma ORM", highlight: false },
      { name: "Mongoose", highlight: false },
    ],
  },
  {
    label: "Frontend & Full Stack",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js (App Router)", highlight: true },
      { name: "Responsive UI", highlight: false },
      { name: "DOM Manipulation", highlight: false },
    ],
  },
  {
    label: "Cloud & Dev Tools",
    skills: [
      { name: "AWS (EC2, S3, IAM, RDS)", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Razorpay Gateway", highlight: false },
      { name: "Postman API Testing", highlight: false },
      { name: "Linux / Bash", highlight: false },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>TECH STACK</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="section-heading">Skills & Technologies</h2>
        </ScrollReveal>
        
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal key={group.label} delay={150 + index * 80}>
              <div className="skill-card">
                <div className="group-header">
                  <span className="group-prefix">//</span>
                  <h3 className="group-title">{group.label}</h3>
                </div>
                
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className={`skill-tag ${skill.highlight ? 'highlight' : ''}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          width: 100%;
        }

        .skills-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .skill-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 24px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .skill-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
        }

        .group-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .group-prefix {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .group-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          padding: 6px 12px;
          border-radius: 6px;
          background: var(--background-subtle);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          border-color: var(--accent);
          color: var(--text-primary);
        }

        .skill-tag.highlight {
          background: var(--pill-bg);
          border-color: var(--pill-border);
          color: var(--pill-text);
          font-weight: 600;
        }

        .skill-tag.highlight:hover {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}
