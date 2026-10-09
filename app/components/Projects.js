"use client";
import "./Projects.css";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";

export default function Projects() {

  const projects = [
    {
      number: "01",
      title: "Tiqora — Event & Sports Ticketing Platform",
      desc: "Architected an end-to-end event and sports ticketing platform, designing seamless event discovery workflows, secure multi-step checkout pipelines, and real-time booking confirmation workflows.",
      tags: ["Node.js", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "Resend", "Tailwind CSS", "Zod"],
      link: "https://tiqora-taupe.vercel.app/",
      linkLabel: "Live",
      isFeatured: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
          <path d="M13 5v2"/>
          <path d="M13 17v2"/>
          <path d="M13 11v2"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Tensorik — AI & Tech Education Platform",
      desc: "Constructed an ed-tech platform featuring gated cohort dashboards, structured milestone roadmaps, automated participant verification, interactive skill-building tools with real-time feedback, and administrative controls for bulk student onboarding.",
      tags: ["Node.js", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Razorpay", "Resend", "Tailwind CSS", "Zod", "Redis"],
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
      )
    },
    {
      number: "03",
      title: "MBT Mobile Learning App – Backend",
      desc: "Built an end-to-end LMS delivering live interactive sessions, on-demand course streaming, student progress tracking, and automated certification with device-restricted access controls and administrative dashboard.",
      tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "BullMQ", "Razorpay", "Resend", "FCM", "Redis", "Cloudinary", "Zoom API", "Twilio"],
      link: "https://github.com/AbdullahAhmed903",
      linkLabel: "Code",
      isFeatured: true,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
          <line x1="12" x2="12.01" y1="18" y2="18"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Khaja Mobile — E-Commerce Backend",
      desc: "E-commerce platform handling full-catalog browsing, inventory management, secure Razorpay checkout pipelines, Redis caching, and transactional email confirmations via Resend.",
      tags: ["Node.js", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Razorpay", "Resend", "Tailwind CSS", "Zod", "Redis"],
      link: "https://khajamobile.com/",
      linkLabel: "Live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"/>
          <circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
      )
    },
    {
      number: "05",
      title: "MBT Institute Platform",
      desc: "Comprehensive educational institute portal featuring student admission workflows, syllabus exploration, batch schedules, and administrative role management.",
      tags: ["Node.js", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Zod"],
      link: "https://www.mbtinstitute.in/",
      linkLabel: "Live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
        </svg>
      )
    },
    {
      number: "06",
      title: "Green Line Car Travels",
      desc: "Fleet transport and vehicle reservation platform providing scheduled route queries, seat availability, and multi-passenger booking confirmations.",
      tags: ["Node.js", "React.js", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Zod"],
      link: "https://greenlinecartravels.com/",
      linkLabel: "Live",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/>
          <circle cx="7" cy="17" r="2"/>
          <path d="M9 17h6"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      )
    },
    {
      number: "07",
      title: "Task Manager Backend (RBAC)",
      desc: "Enterprise task management system with role-based access control (RBAC), Prisma ORM data modeling, Swagger documentation, and automated email alerts.",
      tags: ["Node.js", "NestJS", "TypeScript", "MySQL", "Prisma ORM", "JWT", "Swagger", "Nodemailer"],
      link: "https://github.com/AbdullahAhmed903/TaskManager-nestjs-mysql.git",
      linkLabel: "Code",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      number: "08",
      title: "Doctor & Clinic Management System",
      desc: "Healthcare management backend with doctor-patient appointment scheduling, Redis locking for race condition prevention, medical records, Stripe billing, and BullMQ queues.",
      tags: ["Node.js", "Express.js", "JavaScript", "Mongoose", "Redis", "Joi", "Swagger", "Nodemailer", "JWT", "Stripe", "BullMQ"],
      link: "https://github.com/AbdullahAhmed903/DoctorSystem.git",
      linkLabel: "Code",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
          <circle cx="20" cy="10" r="2"/>
        </svg>
      )
    },
    {
      number: "09",
      title: "Intern Hub Real-Time Platform",
      desc: "Real-time platform connecting candidates and companies with live chat, WebSocket notifications, resume parsing, and asynchronous processing.",
      tags: ["Node.js", "Express.js", "JavaScript", "Mongoose", "Redis", "Joi", "WebSocket", "Nodemailer", "JWT", "BullMQ"],
      link: "https://github.com/AbdullahAhmed903/Intern-Hub-Api.git",
      linkLabel: "Code",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
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



      </section>
  );
}
