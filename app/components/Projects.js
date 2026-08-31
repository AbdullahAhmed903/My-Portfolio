"use client";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Tensorik — AI & Tech Education Platform",
      desc: "Scalable backend platform with REST APIs serving 10,000+ users. Integrated Razorpay payments, rate limiting, and optimized PostgreSQL database schemas.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Supabase", "Razorpay"],
      link: "https://github.com/AbdullahAhmed903",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15"/>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 22V12"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "MBT Mobile Learning App – Backend",
      desc: "Backend for a Flutter-based LMS app with authentication, live classes, course progression, push notifications, and payment flows.",
      tags: ["NestJS", "Node.js", "PostgreSQL", "Supabase", "REST APIs"],
      link: "https://github.com/AbdullahAhmed903",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
          <line x1="12" x2="12.01" y1="18" y2="18"/>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Khajamobiles E-Commerce Backend",
      desc: "E-commerce backend handling catalogs, inventory, orders, payments, and database migrations with a scalable architecture.",
      tags: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      link: "https://github.com/AbdullahAhmed903",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
      ),
    },
    {
      number: "04",
      title: "Doctor Appointment & Medical System",
      desc: "Healthcare backend with appointment scheduling, medical records, Stripe payments, Redis caching, and BullMQ job queues.",
      tags: ["Node.js", "Express.js", "MongoDB", "Stripe", "Redis", "BullMQ"],
      link: "https://github.com/AbdullahAhmed903/DoctorSystem.git",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
          <circle cx="20" cy="10" r="2"/>
        </svg>
      ),
    },
    {
      number: "05",
      title: "Task Manager Backend (RBAC)",
      desc: "Enterprise task management system with role-based access control, JWT security, and clean modular architecture.",
      tags: ["NestJS", "TypeScript", "MySQL", "RBAC", "SOLID"],
      link: "https://github.com/AbdullahAhmed903/TaskManager-nestjs-mysql.git",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
    },
    {
      number: "06",
      title: "Intern Hub Real-Time Platform",
      desc: "Real-time platform connecting tech interns and companies with chat, notifications, and RESTful APIs.",
      tags: ["Node.js", "Express", "Socket.IO", "MongoDB"],
      link: "https://github.com/AbdullahAhmed903/Intern-Hub-Api.git",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>FEATURED WORK</span>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <h2 className="projects-main-heading">Projects & Systems</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="projects-subtitle">
            A collection of backend systems and platforms I've designed, built, and scaled for real-world impact.
          </p>
        </ScrollReveal>

        {/* 6 Projects Grid */}
        <div className="projects-cards-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.number} delay={200 + index * 80}>
              <div className="project-feature-card">
                <div className="card-top-row">
                  <div className="project-icon-badge">
                    {project.icon}
                  </div>
                  <span className="project-index-num">{project.number}</span>
                </div>
                
                <h3 className="project-item-title">{project.title}</h3>
                <p className="project-item-desc">{project.desc}</p>

                <div className="project-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tech-tag">{tag}</span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-cta-link"
                >
                  <span>View Project</span>
                  <span className="cta-arrow">↗</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner: Explore All Repositories */}
        <ScrollReveal delay={450}>
          <div className="explore-github-banner">
            <div className="banner-left-area">
              <div className="github-outer-ring">
                <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </div>

              <div className="banner-text-details">
                <span className="banner-label-tag">MORE TO EXPLORE</span>
                <h3 className="banner-headline">Explore All Repositories</h3>
                <p className="banner-subtext">
                  Discover more backend systems, architectural experiments, and open-source contributions on GitHub.
                </p>
              </div>
            </div>

            <a 
              href="https://github.com/AbdullahAhmed903" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="banner-cta-button"
            >
              <span>github.com/AbdullahAhmed903</span>
              <span className="cta-arrow">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .projects-section {
          width: 100%;
        }

        .projects-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
        }

        .projects-main-heading {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0 0 10px 0;
        }

        .projects-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0 0 40px 0;
        }

        /* ── 6 Projects Grid (2 rows x 3 cols) ────────── */
        .projects-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .project-feature-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .project-feature-card:hover {
          border-color: rgba(0, 210, 255, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 210, 255, 0.1);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .project-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .project-feature-card:hover .project-icon-badge {
          background: rgba(0, 210, 255, 0.14);
          border-color: #00D2FF;
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.3);
          transform: scale(1.08);
        }

        .project-index-num {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 700;
          color: #00D2FF;
          letter-spacing: 0.05em;
        }

        .project-item-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 10px 0;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        .project-item-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .project-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 22px;
        }

        .project-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--pill-text);
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 6px;
          padding: 4px 10px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .project-feature-card:hover .project-tech-tag {
          border-color: rgba(0, 210, 255, 0.3);
        }

        .project-cta-link {
          color: var(--text-primary);
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          width: fit-content;
          margin-top: auto;
        }

        .project-cta-link:hover {
          color: #00D2FF;
        }

        .cta-arrow {
          transition: transform 0.2s ease;
          display: inline-block;
          color: #00D2FF;
        }

        .project-feature-card:hover .cta-arrow {
          transform: translate(3px, -3px);
        }

        /* ── Bottom Banner ────────────────────────────── */
        .explore-github-banner {
          background: var(--card-bg);
          border: 1px solid rgba(0, 210, 255, 0.22);
          border-radius: 18px;
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 210, 255, 0.06);
          transition: all 0.25s ease;
          flex-wrap: wrap;
        }

        .explore-github-banner:hover {
          border-color: rgba(0, 210, 255, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 210, 255, 0.12);
        }

        .banner-left-area {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .github-outer-ring {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(0, 210, 255, 0.06);
          border: 1.5px dashed rgba(0, 210, 255, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .explore-github-banner:hover .github-outer-ring {
          border-color: #00D2FF;
          border-style: solid;
          transform: scale(1.06) rotate(6deg);
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.25);
        }

        .banner-text-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .banner-label-tag {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: #00D2FF;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .banner-headline {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .banner-subtext {
          font-size: 0.86rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.45;
        }

        .banner-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 12px;
          background: var(--background-subtle);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .banner-cta-button:hover {
          border-color: #00D2FF;
          color: #00D2FF;
          background: rgba(0, 210, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 210, 255, 0.2);
        }

        .banner-cta-button:hover .cta-arrow {
          transform: translate(3px, -3px);
        }

        /* ── Responsive Breakpoints ─────────────────── */
        @media (max-width: 1100px) {
          .projects-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-cards-grid {
            grid-template-columns: 1fr;
          }

          .explore-github-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }

          .banner-left-area {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }

          .banner-cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
