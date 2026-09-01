"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";
import ApiInspectorModal from "./ApiInspectorModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      number: "01",
      title: "Tensorik — AI & Tech Education Platform",
      desc: "Scalable backend platform with REST APIs serving 10,000+ users. Integrated Razorpay payments, rate limiting, and optimized PostgreSQL database schemas.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Supabase", "Razorpay"],
      link: "https://tensorik.in/",
      linkLabel: "Live",
      isFeatured: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15"/>
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
          <path d="m3.3 7 8.7 5 8.7-5"/>
          <path d="M12 22V12"/>
        </svg>
      ),
      endpoints: [
        { method: "POST", path: "/api/v1/payments/razorpay/create-order", description: "Initialize payment session & verify signature" },
        { method: "POST", path: "/api/v1/payments/webhook", description: "Handle asynchronous Razorpay payment captures with idempotency" },
        { method: "GET", path: "/api/v1/courses/progress", description: "Retrieve user course completion telemetry with Redis caching" }
      ],
      samplePayload: {
        orderId: "order_k92Jsh821",
        amount: 4999,
        currency: "INR",
        status: "captured",
        userId: "usr_991823",
        items: [{ courseId: "crs_backend_nest", title: "Mastering NestJS Architecture" }],
        meta: { rateLimitRemaining: 58, responseTimeMs: 19 }
      }
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
      endpoints: [
        { method: "POST", path: "/api/v1/auth/mobile/login", description: "Issue refresh tokens & JWT device sessions" },
        { method: "GET", path: "/api/v1/live-classes/active", description: "Real-time streaming status with WebSocket signaling" },
        { method: "PATCH", path: "/api/v1/user/lesson-sync", description: "Sync offline playback milestones" }
      ],
      samplePayload: {
        sessionId: "sess_mbt_8829",
        studentId: "std_4021",
        enrolledCourses: ["LMS-101", "FLUTTER-PRO"],
        liveClassUrl: "https://live.mbt-learning.com/room/492"
      }
    },
    {
      number: "03",
      title: "Khajamobiles E-Commerce Backend",
      desc: "E-commerce backend handling catalogs, inventory, orders, payments, and database migrations with a scalable architecture.",
      tags: ["Node.js", "Next.js", "TypeScript", "PostgreSQL", "Supabase"],
      link: "https://khajamobile.com/",
      linkLabel: "Live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
      ),
      endpoints: [
        { method: "GET", path: "/api/v1/products/search", description: "Full-text indexing with price & category facets" },
        { method: "POST", path: "/api/v1/cart/checkout", description: "Atomic inventory decrement transaction" }
      ]
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
      endpoints: [
        { method: "POST", path: "/api/v1/appointments/book", description: "Check doctor availability slot with Redis lock" },
        { method: "POST", path: "/api/v1/prescriptions/upload", description: "Encrypted patient document upload" }
      ]
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
      endpoints: [
        { method: "POST", path: "/api/v1/tasks/assign", description: "RBAC Guard check & audit log dispatch" },
        { method: "GET", path: "/api/v1/analytics/team-velocity", description: "Aggregated sprint metrics" }
      ]
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
      endpoints: [
        { method: "GET", path: "/api/v1/internships/feed", description: "Filter tech internships with pagination" },
        { method: "POST", path: "/api/v1/applications/submit", description: "Submit resume & alert hiring manager" }
      ]
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
            <ScrollReveal key={project.number} delay={150 + index * 70}>
              <TiltCard maxTilt={8} scale={1.02} style={{ height: "100%" }}>
                <div className="project-feature-card">
                  {project.isFeatured && (
                    <BorderBeam duration={9} size={240} colorFrom="#00D2FF" colorTo="#3B82F6" />
                  )}

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

                  <div className="project-action-links">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="btn-inspect-api"
                    >
                      <span className="inspect-dot"></span>
                      <span>Inspect Architecture</span>
                    </button>

                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-cta-link"
                    >
                      <span>{project.linkLabel || "Code"}</span>
                      <span className="cta-arrow">↗</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Banner: Explore All Repositories */}
        <ScrollReveal delay={450}>
          <TiltCard maxTilt={4} scale={1.01} style={{ width: "100%" }}>
            <div className="explore-github-banner">
              <BorderBeam duration={12} size={350} colorFrom="#0EA5E9" colorTo="#00D2FF" />

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

              <motion.a 
                href="https://github.com/AbdullahAhmed903" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="banner-cta-button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>github.com/AbdullahAhmed903</span>
                <span className="cta-arrow">↗</span>
              </motion.a>
            </div>
          </TiltCard>
        </ScrollReveal>
      </div>

      {/* Interactive API Schema Modal */}
      <ApiInspectorModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx global>{`
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

        /* ── 6 Projects Grid ───────────────────────────── */
        .projects-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .project-feature-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 26px 24px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          height: 100%;
          overflow: hidden;
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
        }

        .project-index-num {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-muted);
          opacity: 0.5;
        }

        .project-item-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin: 0 0 10px 0;
          line-height: 1.35;
        }

        .project-item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex: 1;
        }

        .project-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .project-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          background: rgba(0, 210, 255, 0.06);
          border: 1px solid rgba(0, 210, 255, 0.18);
          padding: 3px 10px;
          border-radius: 6px;
        }

        .project-action-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .btn-inspect-api {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.25);
          color: #38bdf8;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.76rem;
          font-family: var(--font-mono);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-inspect-api:hover {
          background: rgba(0, 210, 255, 0.18);
          border-color: #00d2ff;
          box-shadow: 0 0 12px rgba(0, 210, 255, 0.3);
        }

        .inspect-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00d2ff;
          box-shadow: 0 0 6px #00d2ff;
        }

        .project-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.82rem;
          transition: all 0.2s ease;
        }

        .project-cta-link:hover {
          color: var(--accent);
        }

        .cta-arrow {
          font-size: 0.95rem;
        }

        /* ── Explore GitHub Banner ────────────────────────────────── */
        .explore-github-banner {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 32px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .banner-left-area {
          display: flex;
          align-items: center;
          gap: 24px;
          flex: 1;
        }

        .github-outer-ring {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .banner-label-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .banner-headline {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 2px 0 6px 0;
          letter-spacing: -0.02em;
        }

        .banner-subtext {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          max-width: 580px;
        }

        .banner-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .banner-cta-button:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(0, 210, 255, 0.06);
          box-shadow: 0 0 16px rgba(0, 210, 255, 0.2);
        }

        @media (max-width: 968px) {
          .projects-cards-grid {
            grid-template-columns: 1fr;
          }
          .explore-github-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .projects-section {
            overflow: hidden;
          }
          .projects-main-heading {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .project-feature-card {
            padding: 18px 14px;
            border-radius: 14px;
          }
          .project-item-title {
            font-size: 1.05rem;
          }
          .project-item-desc {
            font-size: 0.82rem;
          }
          .project-action-links {
            flex-wrap: wrap;
            gap: 8px;
          }
          .explore-github-banner {
            padding: 20px 16px;
            border-radius: 16px;
          }
          .banner-left-area {
            gap: 14px;
          }
          .github-outer-ring {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
          .banner-headline {
            font-size: 1.15rem;
          }
          .banner-subtext {
            font-size: 0.82rem;
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
