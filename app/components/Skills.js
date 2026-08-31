"use client";
import ScrollReveal from "./ScrollReveal";

const CATEGORIES = [
  {
    number: "01",
    title: "Languages",
    desc: "Core programming languages I work with.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      {
        name: "JavaScript (ES6+)",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
            <path d="M7 17.5c.5.8 1.4 1.3 2.5 1.3 1.4 0 2.2-.8 2.2-2.3V8h2.3v8.5c0 2.8-1.7 4.3-4.5 4.3-2.2 0-3.6-1-4.2-2.4l1.7-.9zm8.2-.2c.7.9 1.8 1.5 3.2 1.5 1.4 0 2.3-.7 2.3-1.7 0-1.1-.9-1.6-2.6-2.2-2.4-.8-3.9-1.9-3.9-4 0-2.3 1.8-4 4.3-4 1.9 0 3.2.7 4 2l-1.8 1.2c-.5-.8-1.2-1.3-2.2-1.3-1.2 0-2 .7-2 1.5 0 .9.8 1.4 2.5 2 2.6.9 4 2 4 4.2 0 2.6-2 4.1-4.7 4.1-2.4 0-4-1-4.8-2.6l1.7-.7z" fill="#000"/>
          </svg>
        ),
      },
      {
        name: "TypeScript",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#3178C6"/>
            <path d="M4.5 10.5h6v2.3H8.7V20H6.3v-7.2H4.5v-2.3zm10.7 7c.6.8 1.5 1.3 2.7 1.3 1.2 0 1.9-.6 1.9-1.4 0-.9-.7-1.3-2.2-1.8-2.1-.7-3.4-1.6-3.4-3.4 0-1.9 1.5-3.3 3.6-3.3 1.6 0 2.7.6 3.4 1.7l-1.6 1.1c-.4-.7-1-1-1.8-1-1 0-1.6.6-1.6 1.2 0 .7.6 1.1 2.1 1.6 2.2.8 3.5 1.7 3.5 3.6 0 2.2-1.7 3.5-4 3.5-2 0-3.4-.8-4.1-2.2l1.5-1z" fill="#FFF"/>
          </svg>
        ),
      },
    ],
  },
  {
    number: "02",
    title: "Backend & Systems",
    desc: "Building robust APIs, services and scalable backend systems.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
        <line x1="6" x2="6.01" y1="6" y2="6"/>
        <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
    skills: [
      {
        name: "Node.js",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z" fill="#5FA04E"/>
            <path d="M12 4.3L4.5 8.6v8.6L12 21.5l7.5-4.3V8.6L12 4.3z" fill="#333"/>
            <path d="M12 7.2l4.8 2.8v5.6L12 18.4l-4.8-2.8v-5.6L12 7.2z" fill="#5FA04E"/>
          </svg>
        ),
      },
      {
        name: "Express.js",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="4"/>
            <path d="M7 15l4-6M11 15l-4-6M15 15h4M15 9h4M15 12h3"/>
          </svg>
        ),
      },
      {
        name: "NestJS",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M22.5 7.4c-.2-.7-.7-1.3-1.4-1.6L13.8 2.2c-.8-.4-1.8-.4-2.6 0L4 5.8c-.7.3-1.2.9-1.4 1.6C2 9.5 2 14.5 4 17.6c.3.5.7.9 1.2 1.2l6.8 3.5c.8.4 1.8.4 2.6 0l6.8-3.5c.5-.3.9-.7 1.2-1.2 2-3.1 2-8.1-.1-10.2z" fill="#EA2845"/>
            <path d="M12 6.5l3.8 2.2v4.4L12 15.3l-3.8-2.2V8.7L12 6.5z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "REST APIs",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3"/>
            <circle cx="6" cy="6" r="3"/>
            <path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v3a2 2 0 0 0 2 2h5"/>
          </svg>
        ),
      },
      {
        name: "Socket.IO (Real-time)",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="#010101" stroke="#00D2FF" strokeWidth="1.5"/>
            <path d="M13.5 4.5L7 13.5h5l-1.5 6 6.5-9h-5l1.5-6z" fill="#00D2FF"/>
          </svg>
        ),
      },
      {
        name: "Redis Caching",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M22 8.5L12 3 2 8.5 12 14l10-5.5z" fill="#D82C20"/>
            <path d="M2 14.5L12 20l10-5.5v-2L12 18 2 12.5v2z" fill="#A81D13"/>
            <path d="M2 18.5L12 24l10-5.5v-2L12 22 2 16.5v2z" fill="#75130C"/>
          </svg>
        ),
      },
      {
        name: "Rate Limiting & Security",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        ),
      },
      {
        name: "Swagger / OpenAPI",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="#85EA2D"/>
            <circle cx="12" cy="12" r="6" fill="#000"/>
            <circle cx="12" cy="12" r="3" fill="#85EA2D"/>
          </svg>
        ),
      },
      {
        name: "BullMQ (Job Queues)",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
      {
        name: "Clean Architecture & SOLID",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
            <polyline points="2 17 12 22 22 17"/>
            <polyline points="2 12 12 17 22 12"/>
          </svg>
        ),
      },
    ],
  },
  {
    number: "03",
    title: "Databases & ORMs",
    desc: "Databases and ORM tools I use for data modeling.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      {
        name: "PostgreSQL",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5C22 6.5 17.5 2 12 2z" fill="#336791"/>
          </svg>
        ),
      },
      {
        name: "MongoDB",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 1.5C10.5 4.5 6 9.5 6 14.5c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5-4.5-10-6-13z" fill="#47A248"/>
            <path d="M12 1.5v19c3.3 0 6-2.7 6-6 0-5-4.5-10-6-13z" fill="#499D4A"/>
          </svg>
        ),
      },
      {
        name: "SQL",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
          </svg>
        ),
      },
      {
        name: "MySQL",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#00758F"/>
            <path d="M6 16.5l3-9h2.2l3 9H12l-.6-2.2H8.6L8 16.5H6zm3.1-4.2h2.2L10.2 9h-.1l-1 3.3z" fill="#F29111"/>
          </svg>
        ),
      },
      {
        name: "Supabase",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M21.36 10.37L13.12 1.15a1.2 1.2 0 0 0-2.1.81V10H3.84a1.2 1.2 0 0 0-.9 2l8.24 9.22a1.2 1.2 0 0 0 2.1-.81V14h7.18a1.2 1.2 0 0 0 .9-2z" fill="#3ECF8E"/>
          </svg>
        ),
      },
      {
        name: "Prisma ORM",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22h20L12 2z"/>
            <path d="M12 6v12"/>
          </svg>
        ),
      },
      {
        name: "Mongoose",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#880000"/>
            <path d="M8 8h8v8H8z" fill="#FFF"/>
          </svg>
        ),
      },
    ],
  },
  {
    number: "04",
    title: "Frontend & Full Stack",
    desc: "Building responsive and dynamic user experiences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="3" rx="2"/>
        <line x1="8" x2="16" y1="21" y2="21"/>
        <line x1="12" x2="12" y1="15" y2="21"/>
      </svg>
    ),
    skills: [
      {
        name: "React.js",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.6"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)"/>
            <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          </svg>
        ),
      },
      {
        name: "Next.js (App Router)",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="#000" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
            <path d="M15 8v8M9 8v8l7-8" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: "HTML5",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M2.5 1.5h19l-1.7 19.3L12 23l-7.8-2.2L2.5 1.5z" fill="#E34F26"/>
            <path d="M12 3.2v17.6l6.2-1.7 1.4-15.9H12z" fill="#EF652A"/>
            <path d="M12 7.7H7.4l.3 3.2h4.3v-3.2zm0 6.4h-2.1l-.1-1.6H7.7l.3 3.4h4v-1.8z" fill="#EBEBEB"/>
            <path d="M12 7.7v3.2h3.9l-.3 3.2-3.6 1v1.9l5.6-1.5.7-7.8H12z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "CSS3",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M2.5 1.5h19l-1.7 19.3L12 23l-7.8-2.2L2.5 1.5z" fill="#1572B6"/>
            <path d="M12 3.2v17.6l6.2-1.7 1.4-15.9H12z" fill="#33A9DC"/>
            <path d="M12 7.7H7.4l.3 3.2h4.3v-3.2zm0 6.4h-2.1l-.1-1.6H7.7l.3 3.4h4v-1.8z" fill="#EBEBEB"/>
            <path d="M12 7.7v3.2h3.9l-.3 3.2-3.6 1v1.9l5.6-1.5.7-7.8H12z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "Responsive UI",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" x2="16" y1="21" y2="21"/>
            <line x1="12" x2="12" y1="17" y2="21"/>
          </svg>
        ),
      },
      {
        name: "DOM Manipulation",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        ),
      },
    ],
  },
  {
    number: "05",
    title: "Cloud & Dev Tools",
    desc: "Tools and platforms that power development and deployment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    skills: [
      {
        name: "AWS (EC2, S3, IAM, RDS)",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#232F3E"/>
            <path d="M7 15c2.5 1.5 7.5 1.5 10 0" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <path d="M16 14.5l1.5.5-1 1.2" stroke="#FF9900" strokeWidth="1.5" fill="#FF9900"/>
          </svg>
        ),
      },
      {
        name: "Docker",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M13 10.5h2v2h-2v-2zm-3 0h2v2h-2v-2zm-3 0h2v2H7v-2zm6-3h2v2h-2V7.5zm-3 0h2v2h-2V7.5zm-3 0h2v2H7V7.5zm6-3h2v2h-2V4.5zm-3 0h2v2h-2V4.5zM22.5 12c-.3-.2-1.3-.3-2.1.2-.2-.6-.7-1.1-1.3-1.4l-.5-.2-.3.4c-.6.9-.7 2-.5 3-.7.4-1.9.4-2.8.4H3c-.6 0-1.1.5-1.1 1.1 0 2.2.8 4.4 2.3 5.9C6.1 23.3 8.7 24 12 24c6.3 0 10.9-3.9 11.5-10.4.1-.4 0-.7-.2-.9-.2-.3-.5-.5-.8-.7z" fill="#2496ED"/>
          </svg>
        ),
      },
      {
        name: "GitHub Actions",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#2088FF"/>
            <path d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm3.5 10.5L11 11V7h2v3.2l3.7 2.8z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "Git & GitHub",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M21.6 10.9L13.1 2.4a1.7 1.7 0 0 0-2.4 0L8.3 4.8l3 3a1.9 1.9 0 0 1 2.4 2.4l2.9 2.9a1.9 1.9 0 1 1-1.2 1.2l-2.7-2.7v6.8a1.9 1.9 0 1 1-1.7 0V11.5a1.9 1.9 0 0 1-1-2.5l-3-3-4.8 4.8a1.7 1.7 0 0 0 0 2.4l8.5 8.5a1.7 1.7 0 0 0 2.4 0l8.3-8.3a1.7 1.7 0 0 0 0-2.5z" fill="#F05032"/>
          </svg>
        ),
      },
      {
        name: "Razorpay Gateway",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#0C2340"/>
            <path d="M14 6l-6 12h4l4-8h-3l1-4z" fill="#00BAF2"/>
          </svg>
        ),
      },
      {
        name: "Postman API Testing",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
            <path d="M15.5 8.5l-7 3.5 3 1.5 4-5z" fill="#FFF"/>
          </svg>
        ),
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Left Column: Heading & 3D Layer Graphic */}
        <div className="skills-left-col">
          <ScrollReveal>
            <div className="section-label">
              <span className="section-label-line"></span>
              <span>TECH STACK</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="skills-main-title">
              Skills & <br />Technologies
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="skills-subtitle">
              A collection of technologies and tools I use to build scalable, secure and high-performance applications.
            </p>
          </ScrollReveal>

          {/* 3D Isometric Stack Graphic */}
          <ScrollReveal delay={300}>
            <div className="isometric-stack-wrap">
              <div className="stack-layer layer-4"></div>
              <div className="stack-layer layer-3"></div>
              <div className="stack-layer layer-2"></div>
              <div className="stack-layer layer-1"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 5 Category Rows */}
        <div className="skills-right-col">
          {CATEGORIES.map((cat, index) => (
            <ScrollReveal key={cat.number} delay={150 + index * 80}>
              <div className="category-row-card">
                {/* Left side category icon button */}
                <div className="category-icon-box">
                  {cat.icon}
                </div>

                {/* Middle: Title, Number, and Description */}
                <div className="category-info-box">
                  <div className="category-header">
                    <span className="cat-num">{cat.number}</span>
                    <h3 className="cat-title">{cat.title}</h3>
                  </div>
                  <p className="cat-desc">{cat.desc}</p>
                </div>

                {/* Right: Skill pills with real icons */}
                <div className="category-skills-box">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`skill-pill-item ${skill.highlight ? 'highlight' : ''}`}
                    >
                      <span className="skill-icon-svg">{skill.icon}</span>
                      <span className="skill-name-txt">{skill.name}</span>
                    </div>
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
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 60px;
          align-items: start;
        }

        /* ── Left Column ────────────────────────────── */
        .skills-left-col {
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 100px;
        }

        .skills-main-title {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        .skills-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 36px;
        }

        /* 3D Isometric Stack Graphic */
        .isometric-stack-wrap {
          position: relative;
          width: 220px;
          height: 180px;
          margin-top: 10px;
        }

        .stack-layer {
          position: absolute;
          width: 170px;
          height: 90px;
          border-radius: 16px;
          border: 1px solid rgba(0, 210, 255, 0.25);
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%);
          backdrop-filter: blur(8px);
          transform: rotateX(60deg) rotateZ(-45deg);
          box-shadow: 0 8px 25px rgba(0, 210, 255, 0.1);
          transition: all 0.4s ease;
        }

        .layer-1 { top: 0px; left: 20px; z-index: 4; border-color: rgba(0, 210, 255, 0.4); }
        .layer-2 { top: 25px; left: 20px; z-index: 3; opacity: 0.8; }
        .layer-3 { top: 50px; left: 20px; z-index: 2; opacity: 0.6; }
        .layer-4 { top: 75px; left: 20px; z-index: 1; opacity: 0.4; }

        .isometric-stack-wrap:hover .layer-1 { transform: rotateX(60deg) rotateZ(-45deg) translateZ(20px); }
        .isometric-stack-wrap:hover .layer-2 { transform: rotateX(60deg) rotateZ(-45deg) translateZ(10px); }

        /* ── Right Column: Category Rows ─────────────── */
        .skills-right-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .category-row-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 56px 210px 1fr;
          gap: 24px;
          align-items: center;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .category-row-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 210, 255, 0.08);
        }

        /* Icon Box on the Left */
        .category-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: var(--background-subtle);
          border: 1px solid var(--card-border);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .category-row-card:hover .category-icon-box {
          border-color: var(--accent);
          background: var(--pill-bg);
          box-shadow: 0 0 14px var(--pill-border);
        }

        /* Middle Info Box */
        .category-info-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .category-header {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .cat-num {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--accent);
          position: relative;
        }

        .cat-num::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          border-radius: 1px;
        }

        .cat-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin: 0;
        }

        .cat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
        }

        /* Right Skills Box */
        .category-skills-box {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .skill-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          border-radius: 8px;
          background: var(--background-subtle);
          border: 1px solid var(--card-border);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-pill-item:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          transform: translateY(-1px);
        }

        .skill-pill-item.highlight {
          background: var(--pill-bg);
          border-color: var(--pill-border);
          color: var(--pill-text);
          font-weight: 600;
        }

        .skill-pill-item.highlight:hover {
          background: var(--accent);
          color: #08090C;
          border-color: var(--accent);
        }

        .skill-icon-svg {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .category-row-card {
            grid-template-columns: 56px 1fr;
            gap: 16px;
          }

          .category-skills-box {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 900px) {
          .skills-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .skills-left-col {
            position: static;
          }

          .isometric-stack-wrap {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .category-row-card {
            padding: 18px 16px;
          }

          .category-icon-box {
            width: 46px;
            height: 46px;
          }

          .cat-title {
            font-size: 1rem;
          }

          .skill-pill-item {
            font-size: 0.75rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </section>
  );
}
