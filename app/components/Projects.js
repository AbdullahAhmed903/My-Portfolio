"use client";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Task Manager Backend",
      desc: "A scalable enterprise backend system for managing tasks and workflows. Includes RBAC (Role-Based Access Control), real-time event updates, and MySQL database optimization.",
      tags: ["NestJS", "TypeScript", "MySQL", "RBAC"],
      link: "https://github.com/AbdullahAhmed903/TaskManager-nestjs-mysql.git"
    },
    {
      number: "02",
      title: "Doctor Appointment System",
      desc: "Full-featured healthcare backend for managing appointments, patient medical records, scheduling logic, and secure JWT authentication.",
      tags: ["Node.js", "Express", "MongoDB", "Auth"],
      link: "https://github.com/AbdullahAhmed903/DoctorSystem.git"
    },
    {
      number: "03",
      title: "Intern Hub Platform",
      desc: "A dynamic full-stack platform connecting interns with tech companies, featuring real-time messaging and chat powered by Socket.IO.",
      tags: ["Node.js", "Socket.IO", "MongoDB", "React"],
      link: "https://github.com/AbdullahAhmed903/Intern-Hub-Api.git"
    },
    {
      number: "04",
      title: "Book Buddy Library",
      desc: "Interactive digital library application with fast search, dynamic categorization, and local reading lists.",
      tags: ["React", "JavaScript", "REST APIs"],
      link: "https://github.com/AbdullahAhmed903/codeAplha-Task3.git"
    },
    {
      number: "05",
      title: "Beat Box Audio App",
      desc: "Dynamic web audio player featuring custom UI controls, playlist queue management, and HTML5 Audio API integration.",
      tags: ["JavaScript", "HTML5 Audio", "CSS3"],
      link: "https://github.com/AbdullahAhmed903/CodeAlpha-taskOne.git"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>FEATURED WORK</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="section-heading">Projects</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.number} className="project-card">
                <div className="project-header">
                  <span className="project-number">PROJECT #{project.number}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <span>View Repository</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            ))}

            <div className="project-card project-more">
              <div className="project-header">
                <span className="project-number">MORE CODE</span>
              </div>
              <h3 className="project-title">Explore All Repositories</h3>
              <p className="project-desc">
                Discover more backend systems, architectural experiments, and open-source contributions on GitHub.
              </p>
              <a 
                href="https://github.com/AbdullahAhmed903" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <span>github.com/AbdullahAhmed903</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .projects-section {
          width: 100%;
        }

        .projects-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
          position: relative;
        }

        .project-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-3px);
        }

        .project-header {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }

        .project-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 10px 0;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .project-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .project-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--pill-text);
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 6px;
          padding: 4px 10px;
          font-weight: 500;
        }

        .project-link {
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: none;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          width: fit-content;
          margin-top: auto;
        }

        .project-link:hover {
          color: var(--accent);
        }

        .arrow {
          transition: transform 0.2s ease;
          display: inline-block;
          font-size: 1rem;
        }

        .project-card:hover .arrow {
          transform: translate(3px, -3px);
        }

        .project-more {
          background: var(--background-subtle);
          border-style: dashed;
        }

        .project-more:hover {
          border-style: solid;
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
