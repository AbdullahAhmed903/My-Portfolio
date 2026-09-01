"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const CATEGORIES = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    desc: "Core programming languages I work with.",
    accentGlow: "rgba(49, 120, 198, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      {
        name: "JavaScript",
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
    id: "backend",
    number: "02",
    title: "Backend & Systems",
    desc: "Building robust APIs, services and scalable backend systems.",
    accentGlow: "rgba(0, 210, 255, 0.15)",
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
        name: "Socket.IO",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="#010101" stroke="#00D2FF" strokeWidth="1.5"/>
            <path d="M13.5 4.5L7 13.5h5l-1.5 6 6.5-9h-5l1.5-6z" fill="#00D2FF"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases & ORM",
    desc: "Databases and ORM tools I use for data modeling.",
    accentGlow: "rgba(34, 197, 94, 0.15)",
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
        name: "Prisma ORM",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22h20L12 2z"/>
            <path d="M12 6v12"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "cloud",
    number: "04",
    title: "Cloud & DevOps",
    desc: "Tools and platforms that power development and deployment.",
    accentGlow: "rgba(255, 153, 0, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    skills: [
      {
        name: "AWS",
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
        name: "Redis",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M22 8.5L12 3 2 8.5 12 14l10-5.5z" fill="#D82C20"/>
            <path d="M2 14.5L12 20l10-5.5v-2L12 18 2 12.5v2z" fill="#A81D13"/>
            <path d="M2 18.5L12 24l10-5.5v-2L12 22 2 16.5v2z" fill="#75130C"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "fullstack",
    number: "05",
    title: "Frontend & Tools",
    desc: "Building responsive and dynamic user experiences.",
    accentGlow: "rgba(97, 218, 251, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="3" rx="2"/>
        <line x1="8" x2="16" y1="21" y2="21"/>
        <line x1="12" x2="12" y1="15" y2="21"/>
      </svg>
    ),
    skills: [
      {
        name: "React",
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
        name: "Next.js",
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
        name: "Tailwind CSS",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
          </svg>
        ),
      },
      {
        name: "TypeScript",
        highlight: false,
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
    id: "tools",
    number: "06",
    title: "Other Tools",
    desc: "Workflow utilities, payment processing and testing tools.",
    accentGlow: "rgba(0, 210, 255, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    skills: [
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
        name: "Postman",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
            <path d="M15.5 8.5l-7 3.5 3 1.5 4-5z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "Razorpay",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#0C2340"/>
            <path d="M14 6l-6 12h4l4-8h-3l1-4z" fill="#00BAF2"/>
          </svg>
        ),
      },
      {
        name: "BullMQ",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
    ],
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "languages", label: "Languages" },
  { id: "fullstack", label: "Full Stack" },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = activeFilter === "all" 
    ? CATEGORIES 
    : CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Left Column: Heading & 3D Layer Graphic */}
        <div className="skills-left-col">
          <div className="skills-header-top-row">
            <div className="skills-header-text">
              <ScrollReveal>
                <div className="section-label">
                  <span className="section-label-line"></span>
                  <span>TECH STACK</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="skills-main-title">
                  Skills & <br className="desktop-break" />
                  <span className="gradient-tech-text">Technologies</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="skills-subtitle">
                  A collection of technologies and tools I use to build scalable, secure and high-performance applications.
                </p>
              </ScrollReveal>
            </div>

            {/* Mobile Header Orbit Graphic */}
            <div className="mobile-orbit-graphic">
              <div className="orbit-circle orbit-outer">
                <span className="orbit-dot dot-1"></span>
              </div>
              <div className="orbit-circle orbit-inner">
                <span className="orbit-dot dot-2"></span>
                <span className="orbit-dot dot-3"></span>
              </div>
              <div className="orbit-center-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills (Desktop) */}
          <ScrollReveal delay={250}>
            <div className="filter-tabs-stack desktop-only">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`filter-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                  {activeFilter === tab.id && (
                    <motion.div 
                      layoutId="activeSkillTab"
                      className="active-tab-indicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* 3D Isometric Stack Graphic (Desktop) */}
          <ScrollReveal delay={350}>
            <div className="isometric-stack-wrap desktop-only">
              <div className="stack-layer layer-4"></div>
              <div className="stack-layer layer-3"></div>
              <div className="stack-layer layer-2"></div>
              <div className="stack-layer layer-1"></div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Dynamic Category Cards on Desktop / Vertical Timeline on Mobile */}
        <div className="skills-right-col">
          {/* Vertical timeline line for mobile */}
          <div className="mobile-timeline-track"></div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="categories-motion-grid"
            >
              {filteredCategories.map((cat, index) => (
                <ScrollReveal key={cat.number} delay={100 + index * 60}>
                  <div className="timeline-category-entry">
                    {/* Glowing Cyan Point on the Vertical Line */}
                    <div className="timeline-cyan-dot"></div>

                    <TiltCard maxTilt={6} scale={1.01} style={{ width: "100%" }}>
                      <div className="category-row-card" style={{ boxShadow: `0 10px 30px -10px ${cat.accentGlow}` }}>
                        {/* Circular Glowing Icon Badge */}
                        <div className="category-icon-box">
                          {cat.icon}
                        </div>

                        {/* Middle: Title, Number, and Description (Desktop) */}
                        <div className="category-info-box">
                          <div className="category-header">
                            <span className="cat-num">{cat.number}</span>
                            <h3 className="cat-title">{cat.title}</h3>
                          </div>
                          <p className="cat-desc">{cat.desc}</p>
                        </div>

                        {/* Mobile Header Row with Chevron */}
                        <div className="mobile-category-header">
                          <div className="mobile-cat-title-group">
                            <span className="cat-num">{cat.number}</span>
                            <h3 className="cat-title">{cat.title}</h3>
                          </div>
                          <span className="cat-chevron">›</span>
                        </div>

                        {/* Skill pills with real icons & spring physics */}
                        <div className="category-skills-box">
                          {cat.skills.map((skill) => (
                            <motion.div 
                              key={skill.name} 
                              className={`skill-pill-item ${skill.highlight ? 'highlight' : ''}`}
                              whileHover={{ scale: 1.06, y: -2 }}
                              whileTap={{ scale: 0.96 }}
                            >
                              <span className="skill-icon-svg">{skill.icon}</span>
                              <span className="skill-name-txt">{skill.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Banner (Always learning. Always building.) */}
          <ScrollReveal delay={450}>
            <div className="skills-bottom-banner">
              <div className="banner-cube-icon">
                <svg width="42" height="42" viewBox="0 0 64 64" fill="none">
                  {/* Isometric Cubes */}
                  <polygon points="32,4 52,15 32,26 12,15" fill="#38BDF8" opacity="0.9"/>
                  <polygon points="12,15 32,26 32,50 12,39" fill="#0284C7"/>
                  <polygon points="52,15 32,26 32,50 52,39" fill="#0369A1"/>

                  <polygon points="16,28 32,37 16,46 0,37" fill="#00D2FF" opacity="0.8"/>
                  <polygon points="0,37 16,46 16,62 0,53" fill="#0284C7"/>
                  <polygon points="32,37 16,46 16,62 32,53" fill="#1D4ED8"/>

                  <polygon points="48,28 64,37 48,46 32,37" fill="#38BDF8" opacity="0.8"/>
                  <polygon points="32,37 48,46 48,62 32,53" fill="#0284C7"/>
                  <polygon points="64,37 48,46 48,62 64,53" fill="#1E40AF"/>

                  {/* Sparkle particles */}
                  <circle cx="8" cy="18" r="1.5" fill="#00D2FF"/>
                  <circle cx="56" cy="12" r="1.5" fill="#38BDF8"/>
                  <circle cx="62" cy="44" r="1.5" fill="#00D2FF"/>
                  <circle cx="2" cy="48" r="1.5" fill="#38BDF8"/>
                </svg>
              </div>
              <div className="banner-text-details">
                <h4 className="banner-title">Always learning. Always building.</h4>
                <p className="banner-subtext">Exploring new technologies to solve real-world problems.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx global>{`
        .skills-section {
          width: 100%;
        }

        .skills-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 320px 1fr;
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

        .skills-header-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .skills-header-text {
          flex: 1;
        }

        .skills-main-title {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .gradient-tech-text {
          background: linear-gradient(135deg, #00d2ff 0%, #38bdf8 50%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .skills-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        /* Mobile Orbit Planetary Graphic (Hidden on Desktop) */
        .mobile-orbit-graphic {
          display: none;
        }

        /* ── Filter Tabs Stack ───────────────────────── */
        .filter-tabs-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .filter-tab-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
        }

        .filter-tab-btn:hover {
          color: var(--text-primary);
        }

        .filter-tab-btn.active {
          color: #00d2ff;
          border-color: rgba(0, 210, 255, 0.35);
        }

        .active-tab-indicator {
          position: absolute;
          inset: 0;
          background: rgba(0, 210, 255, 0.12);
          border-radius: 8px;
          border: 1px solid rgba(0, 210, 255, 0.4);
          z-index: -1;
        }

        /* ── 3D Isometric Stack Graphic ──────────────── */
        .isometric-stack-wrap {
          position: relative;
          width: 220px;
          height: 140px;
          margin: 10px auto 0;
          perspective: 800px;
        }

        .stack-layer {
          position: absolute;
          width: 140px;
          height: 70px;
          border-radius: 12px;
          transform: rotateX(60deg) rotateZ(-45deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .layer-1 {
          bottom: 0;
          left: 40px;
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.4), rgba(59, 130, 246, 0.2));
          border: 1px solid rgba(0, 210, 255, 0.6);
        }

        .layer-2 {
          bottom: 24px;
          left: 40px;
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.35), rgba(37, 99, 235, 0.2));
          border: 1px solid rgba(14, 165, 233, 0.5);
        }

        .layer-3 {
          bottom: 48px;
          left: 40px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(29, 78, 216, 0.2));
          border: 1px solid rgba(37, 99, 235, 0.4);
        }

        .layer-4 {
          bottom: 72px;
          left: 40px;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.5), rgba(0, 210, 255, 0.3));
          border: 1px solid rgba(56, 189, 248, 0.7);
        }

        /* ── Right Column: Categories ────────────────── */
        .skills-right-col {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .categories-motion-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .timeline-category-entry {
          position: relative;
          width: 100%;
        }

        .mobile-timeline-track,
        .timeline-cyan-dot {
          display: none;
        }

        .category-row-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 56px 200px 1fr;
          gap: 24px;
          align-items: center;
          box-shadow: var(--card-shadow);
          transition: border-color 0.25s ease;
        }

        .category-row-card:hover {
          border-color: var(--card-border-hover);
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
          flex-shrink: 0;
        }

        .category-row-card:hover .category-icon-box {
          border-color: var(--accent);
          background: var(--pill-bg);
          box-shadow: 0 0 14px var(--pill-border);
        }

        /* Middle Info Box (Desktop) */
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
        }

        .cat-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .cat-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.45;
        }

        .mobile-category-header {
          display: none;
        }

        /* Right: Skills Box */
        .category-skills-box {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .skill-pill-item {
          display: inline-flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 7px !important;
          padding: 6px 13px !important;
          background: rgba(15, 17, 23, 0.7) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 8px !important;
          font-family: var(--font-mono) !important;
          font-size: 0.8rem !important;
          font-weight: 500 !important;
          color: var(--text-secondary) !important;
          white-space: nowrap !important;
          cursor: default;
          box-sizing: border-box;
          transition: all 0.2s ease !important;
        }

        :global(html.light-mode) .skill-pill-item {
          background: #ffffff !important;
          border-color: #e2e8f0 !important;
        }

        .skill-pill-item:hover {
          border-color: var(--accent) !important;
          color: var(--text-primary) !important;
          background: rgba(0, 210, 255, 0.08) !important;
          box-shadow: 0 0 12px rgba(0, 210, 255, 0.2) !important;
        }

        .skill-icon-svg {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          width: 16px;
          height: 16px;
        }

        .skill-name-txt {
          white-space: nowrap !important;
          display: inline-block !important;
        }

        /* ── Bottom Banner (Always learning. Always building.) ── */
        .skills-bottom-banner {
          display: flex;
          align-items: center;
          gap: 18px;
          background: rgba(15, 17, 23, 0.7);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: 16px;
          padding: 18px 24px;
          margin-top: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        :global(html.light-mode) .skills-bottom-banner {
          background: #ffffff;
          border-color: rgba(2, 132, 199, 0.25);
        }

        .banner-cube-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .banner-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 3px 0;
        }

        .banner-subtext {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ── Mobile / Tablet Layout (< 968px) ─────────────────────── */
        @media (max-width: 968px) {
          .skills-container {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .skills-left-col {
            position: static;
          }

          .desktop-only {
            display: none !important;
          }

          .desktop-break {
            display: none;
          }

          .skills-header-top-row {
            align-items: center;
            gap: 16px;
          }

          /* Mobile Orbit Graphic Display */
          .mobile-orbit-graphic {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            width: 100px;
            height: 100px;
            flex-shrink: 0;
          }

          .orbit-circle {
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(0, 210, 255, 0.2);
          }

          .orbit-outer {
            width: 96px;
            height: 96px;
            animation: spinOrbit 16s linear infinite;
          }

          .orbit-inner {
            width: 68px;
            height: 68px;
            border-color: rgba(0, 210, 255, 0.35);
            animation: spinOrbitRev 10s linear infinite;
          }

          .orbit-dot {
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #00d2ff;
            box-shadow: 0 0 8px #00d2ff;
          }

          .dot-1 { top: -2.5px; left: 45px; }
          .dot-2 { top: 12px; right: -2.5px; }
          .dot-3 { bottom: 12px; left: -2.5px; }

          .orbit-center-icon {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #090c13;
            border: 1.5px solid #00d2ff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 16px rgba(0, 210, 255, 0.4);
            z-index: 2;
          }

          @keyframes spinOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spinOrbitRev {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          /* Vertical Timeline Layout on Mobile */
          .skills-section {
            overflow: hidden;
          }

          .skills-container {
            width: 92%;
            max-width: 100%;
            overflow: hidden;
          }

          .skills-right-col {
            position: relative;
            padding-left: 56px;
            width: 100%;
            box-sizing: border-box;
          }

          .mobile-timeline-track {
            display: block;
            position: absolute;
            left: 20px;
            top: 24px;
            bottom: 60px;
            width: 2px;
            background: linear-gradient(180deg, #00d2ff 0%, rgba(0, 210, 255, 0.4) 60%, transparent 100%);
          }

          .timeline-category-entry {
            position: relative;
            display: flex;
            align-items: flex-start;
            width: 100%;
          }

          .timeline-cyan-dot {
            display: block;
            position: absolute;
            left: -38px;
            top: 20px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #00d2ff;
            box-shadow: 0 0 10px #00d2ff;
            z-index: 3;
          }

          .category-row-card {
            display: flex;
            flex-direction: column;
            background: transparent;
            border: none;
            box-shadow: none !important;
            padding: 4px 0 20px 0;
            gap: 12px;
            position: relative;
            width: 100%;
          }

          /* Glowing Double-ring Circular Badge placed along the timeline */
          .category-icon-box {
            position: absolute;
            left: -56px;
            top: 2px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #0a0d14;
            border: 1.5px solid #00d2ff;
            box-shadow: 0 0 16px rgba(0, 210, 255, 0.35);
            z-index: 4;
          }

          :global(html.light-mode) .category-icon-box {
            background: #ffffff;
            border-color: #0284c7;
            box-shadow: 0 0 14px rgba(2, 132, 199, 0.3);
          }

          .category-info-box {
            display: none;
          }

          .mobile-category-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding-left: 2px;
          }

          .mobile-cat-title-group {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .mobile-cat-title-group .cat-num {
            font-size: 1rem;
            font-weight: 700;
            color: #00d2ff;
          }

          .mobile-cat-title-group .cat-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-primary);
          }

          .cat-chevron {
            font-size: 1.25rem;
            color: var(--text-muted);
            line-height: 1;
          }

          .category-skills-box {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
          }

          .skill-pill-item {
            background: rgba(15, 17, 23, 0.85) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            padding: 6px 12px !important;
            border-radius: 8px !important;
            font-size: 0.78rem !important;
          }

          .skills-bottom-banner {
            margin-left: -56px;
            width: calc(100% + 56px);
            max-width: calc(100% + 56px);
            box-sizing: border-box;
            padding: 16px;
            gap: 14px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .skills-main-title {
            font-size: 2rem;
          }
          .skills-subtitle {
            font-size: 0.86rem;
            line-height: 1.5;
          }
          .mobile-orbit-graphic {
            width: 80px;
            height: 80px;
          }
          .orbit-outer {
            width: 76px;
            height: 76px;
          }
          .orbit-inner {
            width: 54px;
            height: 54px;
          }
          .orbit-center-icon {
            width: 36px;
            height: 36px;
          }
          .skills-right-col {
            padding-left: 48px;
          }
          .mobile-timeline-track {
            left: 17px;
          }
          .timeline-cyan-dot {
            left: -33px;
          }
          .category-icon-box {
            left: -48px;
            width: 38px;
            height: 38px;
          }
          .mobile-cat-title-group .cat-title {
            font-size: 1rem;
          }
          .skill-pill-item {
            padding: 5px 10px !important;
            font-size: 0.75rem !important;
          }
          .skills-bottom-banner {
            margin-left: -48px;
            width: calc(100% + 48px);
            max-width: calc(100% + 48px);
            padding: 14px 12px;
            gap: 12px;
          }
          .banner-title {
            font-size: 0.88rem;
          }
          .banner-subtext {
            font-size: 0.76rem;
          }
        }
      `}</style>
    </section>
  );
}
