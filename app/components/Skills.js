"use client";
import ScrollReveal from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    label: "// LANGUAGES",
    variant: "green",
    skills: [
      { name: "JavaScript (ES6)", accent: true },
      { name: "TypeScript", accent: false },
      { name: "HTML5", accent: false },
      { name: "CSS3", accent: false },
    ],
  },
  {
    label: "// BACKEND",
    variant: "green",
    skills: [
      { name: "Node.js", accent: true },
      { name: "Express.js", accent: true },
      { name: "NestJS", accent: true },
      { name: "Redis", accent: false },
      { name: "Swagger", accent: false },
      { name: "Prisma", accent: false },
      { name: "REST APIs", accent: false },
      { name: "Socket.io", accent: false },
      { name: "OOP", accent: false },
      { name: "Error Handling & Validation", accent: false },
    ],
  },
  {
    label: "// DATABASES",
    variant: "default",
    skills: [
      { name: "MongoDB", accent: false },
      { name: "Mongoose", accent: false },
      { name: "MySQL", accent: false },
      { name: "Supabase", accent: false },
    ],
  },
  {
    label: "// FRONTEND",
    variant: "purple",
    skills: [
      { name: "React.js", accent: true },
      { name: "Next.js", accent: true },
      { name: "Bootstrap", accent: false },
      { name: "DOM Manipulation", accent: false },
    ],
  },
  {
    label: "// TOOLS & PLATFORMS",
    variant: "default",
    skills: [
      { name: "Git", accent: false },
      { name: "GitHub", accent: false },
      { name: "Razorpay", accent: false },
      { name: "AWS (EC2, RDS, IAM)", accent: false },
      { name: "GitHub Projects", accent: false },
      { name: "Postman", accent: false },
      { name: "Notion", accent: false },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <ScrollReveal>
          <div className="skills-label">
            <span className="label-line"></span>
            <span>WHAT I KNOW</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="skills-heading">Skills</h2>
        </ScrollReveal>
        
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <ScrollReveal key={group.label} delay={200 + index * 100}>
              <div className="skill-group">
                <div className="group-label">{group.label}</div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className={`skill-tag ${group.variant} ${skill.accent ? 'accent' : ''}`}
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
          padding: 80px 0;
          position: relative;
          z-index: 1;
          background: #0a0a0f;
        }

        .skills-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .skills-label {
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

        .skills-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 48px 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .skill-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .group-label {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          color: #888888;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: #888888;
          padding: 0.5rem 1.1rem;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.78rem;
          transition: all 0.3s ease;
          cursor: default;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .skill-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #00e5a0;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: -1;
        }

        .skill-tag:hover::before {
          transform: translateX(0);
        }

        .skill-tag:hover {
          color: #000000;
          border-color: #00e5a0;
        }

        /* Green variant - Languages & Backend */
        .skill-tag.green.accent {
          border-color: rgba(0, 229, 160, 0.3);
          color: #00e5a0;
        }

        /* Purple variant - Frontend */
        .skill-tag.purple.accent {
          border-color: rgba(124, 106, 255, 0.3);
          color: #7c6aff;
        }

        .skill-tag.purple::before {
          background: #7c6aff;
        }

        .skill-tag.purple:hover {
          border-color: #7c6aff;
        }

        @media (max-width: 768px) {
          .skills-heading {
            font-size: 2.5rem;
          }

          .skill-tag {
            font-size: 0.7rem;
            padding: 0.4rem 0.9rem;
          }

          .skills-grid {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
