"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import BorderBeam from "./BorderBeam";
import "./About.css";

export default function About() {
  const cards = [
    {
      tag: "Work Experience",
      title: "Junior Backend Developer",
      desc: "Tensorik — AI EdTech, LMS Mobile & E-Commerce",
      badge: "01/2026 – 08/2026",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
          <polyline points="17 6 23 6 23 12"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
    },
    {
      tag: "Freelance Engineering",
      title: "Freelance Backend Developer",
      desc: "Clinic & Healthcare Systems · Express, Mongo, Stripe & Redis",
      badge: "01/2025 – 01/2026",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
    },
    {
      tag: "Education",
      title: "B.S. Information Systems",
      desc: "Faculty of Management Tech & IS, Port Said University",
      badge: "GPA 3.6 / 4.0 (Honors)",
      badgeIcon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
    },
    {
      tag: "Cloud Architecture",
      title: "AWS Cloud Track",
      desc: "Egypt's Digital Pioneers Initiative (EC2, RDS, IAM)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      ),
    },
    {
      tag: "Core Engineering",
      title: "DSA · OOP · SOLID · System Design",
      desc: "Scalable REST APIs, Redis Caching, BullMQ & Clean Architecture",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Column: Bio & Highlights & Architecture Visualizer */}
        <div className="about-left-col">
          <ScrollReveal>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>ABOUT ME</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="about-main-title">Who I Am</h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="about-tagline">
              Building reliable, scalable, and high-performance backend systems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="about-paragraphs">
              <p>
                I'm a <span className="cyan-highlight">Full-Stack Developer (Backend-Focused)</span> proficient in{" "}
                <span className="cyan-highlight">Node.js, NestJS, Express.js, TypeScript, Next.js, Mongoose, PostgreSQL, and Supabase</span>. Most recently, I served as a Junior Backend Developer at <span className="cyan-highlight">Tensorik</span>, owning backend architecture and REST APIs across an AI/tech education platform, a Flutter-based LMS mobile app, and an e-commerce platform, while contributing to frontend UI development in Next.js.
              </p>
              
              <p>
                I have a proven track record of independently designing, building, and deploying scalable end-to-end backend systems from requirement gathering to production. My engineering foundation is built on <span className="cyan-highlight">Data Structures & Algorithms</span>, <span className="cyan-highlight">Object-Oriented Programming (OOP)</span>, <span className="cyan-highlight">System Design</span>, relational database modeling, rate limiting, and asynchronous background jobs with <span className="cyan-highlight">BullMQ and Redis</span>.
              </p>

              <p>
                I hold a <span className="cyan-highlight">Bachelor's Degree in Information Systems (GPA: 3.6 / Honors)</span> from Port Said University. I deepened my cloud engineering knowledge through the <span className="cyan-highlight">AWS Cloud track</span> (EC2, RDS, IAM) with Egypt's Digital Pioneers Initiative and completed an intensive backend diploma at <span className="cyan-highlight">Route Academy</span>.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Backend Architecture Pipeline Flow */}
          <ScrollReveal delay={250}>
            <div className="arch-flow-box">
              <div className="arch-flow-header">
                <div className="arch-flow-badge">
                  <span className="flow-pulse"></span>
                  <span>SYSTEM DATA FLOW</span>
                </div>
                <span className="flow-sub">High Throughput Pipeline</span>
              </div>

              <div className="arch-steps-track">
                <div className="arch-step">
                  <span className="step-tag">Client</span>
                  <span className="step-name">App / Web</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step">
                  <span className="step-tag">Gateway</span>
                  <span className="step-name">Rate Limiter</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: 0.4, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step highlight-step">
                  <span className="step-tag">Service</span>
                  <span className="step-name">NestJS / Node</span>
                </div>
                <div className="step-connector">
                  <motion.span
                    className="flow-packet"
                    animate={{ x: [0, 24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, delay: 0.8, ease: "linear" }}
                  />
                  ➔
                </div>
                <div className="arch-step">
                  <span className="step-tag">Storage</span>
                  <span className="step-name">Postgres / Redis</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={400}>
            <div className="about-actions-row">
              <motion.a
                href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume_2026-09-01.pdf?updatedAt=1788257012808"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-download-cv"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Download Resume</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </motion.a>

              <motion.a 
                href="#contact" 
                className="btn-get-touch-link"
                whileHover={{ scale: 1.04, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get In Touch</span>
                <span className="arrow-icon">↗</span>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 3D Tilt Timeline Cards */}
        <div className="about-right-col">
          <div className="timeline-connector-line"></div>

          <div className="cards-timeline-stack">
            {cards.map((card, idx) => (
              <ScrollReveal key={card.title} delay={200 + idx * 100}>
                <div className="timeline-card-wrapper">
                  {/* Glowing Node Point */}
                  <div className="timeline-glowing-node">
                    <div className="inner-node-dot"></div>
                  </div>

                  {/* 3D Tilt Card Content */}
                  <TiltCard maxTilt={8} scale={1.02} style={{ width: "100%" }}>
                    <div className="timeline-info-card">
                      {idx === 0 && <BorderBeam duration={7} size={220} colorFrom="#00D2FF" colorTo="#3B82F6" />}
                      
                      <div className="card-left-icon">
                        <div className="icon-glow-circle">
                          {card.icon}
                        </div>
                      </div>

                      <div className="card-right-details">
                        <span className="card-category-tag">{card.tag}</span>
                        <h3 className="card-main-title">{card.title}</h3>
                        <p className="card-desc-text">{card.desc}</p>
                        {card.subline && <p className="card-subline-text">{card.subline}</p>}

                        {card.badge && (
                          <div className="card-impact-badge">
                            <span className="badge-icon-wrap">{card.badgeIcon}</span>
                            <span>{card.badge}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
