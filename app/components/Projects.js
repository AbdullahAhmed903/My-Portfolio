"use client";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Task-Manager",
      desc: "A full-featured backend system for managing tasks across teams. Includes role-based access, real-time notifications, and project boards.",
      tags: ["NestJS", "TypeScript", "MySQL"],
      link: "https://github.com/AbdullahAhmed903/TaskManager-nestjs-mysql.git"
    },
    {
      number: "02",
      title: "Doctor-System",
      desc: "A full-featured backend system for managing doctor appointments and patient records with authentication and scheduling.",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/AbdullahAhmed903/DoctorSystem.git"
    },
    {
      number: "03",
      title: "Intern-Hub",
      desc: "A dynamic MERN stack web app bridging interns and companies, featuring real-time chat powered by Socket.IO.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/AbdullahAhmed903/Intern-Hub-Api.git"
    },
    {
      number: "04",
      title: "Book-Buddy",
      desc: "Interactive book library with search, categorization, and reading lists. Clean UI with fast filtering and dynamic rendering.",
      tags: ["React", "JavaScript"],
      link: "https://github.com/AbdullahAhmed903/codeAplha-Task3.git"
    },
    {
      number: "05",
      title: "Beat-Box",
      desc: "A dynamic music player for uploading and playing music with a custom-built UI and playlist management system.",
      tags: ["JavaScript", "HTML5 Audio"],
      link: "https://github.com/AbdullahAhmed903/CodeAlpha-taskOne.git"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <ScrollReveal>
          <div className="projects-label">
            <span className="label-line"></span>
            <span>WHAT I'VE BUILT</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="projects-heading">Projects</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.number} className="project-card">
                <div className="project-number">{project.number} —</div>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  <span>View Code</span>
                  <span className="arrow">↗</span>
                </a>
              </div>
            ))}

            <div className="project-card project-more">
              <div className="project-number">More →</div>
              <h3 className="project-title">See All</h3>
              <p className="project-desc">
                More projects on GitHub including smaller experiments and open source contributions.
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
          padding: 80px 0;
          background: #111118;
        }

        .projects-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .projects-label {
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

        .projects-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 48px 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: rgba(255, 255, 255, 0.07);
          padding: 1.5px;
          border-radius: 8px;
        }

        .project-card {
          background: #111118;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.25s ease;
          position: relative;
        }

        .project-card:hover {
          background: #1a1a24;
        }

        .project-number {
          font-family: 'Courier New', monospace;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.15);
          letter-spacing: 0.1em;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .project-tag {
          font-family: 'Courier New', monospace;
          font-size: 0.6rem;
          color: #00e5a0;
          background: rgba(0, 229, 160, 0.08);
          border: 1px solid rgba(0, 229, 160, 0.15);
          border-radius: 2px;
          padding: 0.2rem 0.5rem;
          letter-spacing: 0.04em;
        }

        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.82rem;
          color: #666666;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }

        .project-link {
          color: #888888;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.72rem;
          font-family: 'Courier New', monospace;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .arrow {
          transition: transform 0.2s ease;
          display: inline-block;
        }

        .project-card:hover .arrow {
          transform: translate(3px, -3px);
        }

        .project-more {
          background: rgba(0, 229, 160, 0.03);
          border: 1px solid rgba(0, 229, 160, 0.1);
        }

        .project-more .project-number {
          color: #00e5a0;
        }

        .project-more .project-title {
          color: #00e5a0;
        }

        .project-more .project-link {
          color: #00e5a0;
        }

        .project-more:hover {
          background: rgba(0, 229, 160, 0.05);
        }

        @media (max-width: 968px) {
          .projects-heading {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-heading {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
