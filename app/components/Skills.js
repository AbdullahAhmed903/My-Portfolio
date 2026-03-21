const SKILL_GROUPS = [
  {
    label: "LANGUAGES",
    skills: ["JavaScript (ES6)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "BACKEND",
    skills: ["Node.js", "Express.js", "NestJS", "Redis", "Swagger", "Prisma", "REST APIs", "Socket.io", "OOP", "Error Handling & Validation"],
  },
  {
    label: "DATABASES",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    label: "FRONTEND",
    skills: ["React.js", "Next.js", "Bootstrap", "DOM Manipulation"],
  },
  {
    label: "TOOLS & PLATFORMS",
    skills: ["Git", "GitHub", "AWS (EC2, RDS, IAM)", "GitHub Projects (Trello-style)"],
  },
  {
    label: "SOFT SKILLS",
    skills: ["Teamwork", "Effective Communication", "Problem-Solving", "Self-Learner", "Work Under Pressure", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="section-content">
        <div className="skills-label">What I know</div>
        <h2 className="skills-heading">Skills</h2>
        <div className="skills-groups">
          {SKILL_GROUPS.map((group, i) => (
            <div key={group.label} className="skills-group">
              <div className="skills-category">{group.label}</div>
              <div className="skills-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
              {i !== SKILL_GROUPS.length - 1 && <hr className="skills-divider" />}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-section {
          padding: 80px 0;
          position: relative;
          z-index: 1;
          background: transparent;
        }
        .section-content {
          max-width: 800px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skills-label {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--text-very-muted);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        .skills-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .skills-groups {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .skills-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skills-category {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .skills-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .skill-pill {
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 999px;
          padding: 8px 18px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          cursor: default;
        }
        .skill-pill:hover {
          background: rgba(0, 200, 117, 0.1);
          border-color: var(--accent);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        .skills-divider {
          width: 100%;
          border: none;
          border-top: 1px solid var(--footer-border);
          margin: 32px 0 0 0;
        }
      `}</style>
    </section>
  );
}
