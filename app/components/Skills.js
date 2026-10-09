"use client";
import "./Skills.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const CATEGORIES = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    desc: "Core programming languages for robust application systems.",
    accentGlow: "rgba(49, 120, 198, 0.15)",
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
    id: "backend",
    number: "02",
    title: "Backend & Systems",
    desc: "Building robust APIs, microservices and scalable distributed systems.",
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
      {
        name: "BullMQ",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases & Caching",
    desc: "PostgreSQL, Supabase, document stores, and in-memory caches.",
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
        name: "Supabase",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M13.4 2.2c-.6-.7-1.7-.3-1.7.6v8.4H4.5c-.8 0-1.2.9-.7 1.5l8.9 10.1c.6.7 1.7.3 1.7-.6v-8.4h7.2c.8 0 1.2-.9.7-1.5L13.4 2.2z" fill="#3ECF8E"/>
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
        name: "Redis",
        highlight: true,
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
    id: "architecture",
    number: "04",
    title: "Architecture & Practices",
    desc: "Data structures, OOP paradigms, system design, and clean architecture.",
    accentGlow: "rgba(168, 85, 247, 0.18)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: [
      {
        name: "Data Structures & Algorithms",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="3"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="18" r="3"/>
            <path d="M12 8v4M9.5 15L7.5 13M14.5 15l2-2"/>
          </svg>
        ),
      },
      {
        name: "OOP",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        ),
      },
      {
        name: "System Design",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="8" height="8" rx="2"/>
            <rect x="14" y="2" width="8" height="8" rx="2"/>
            <rect x="8" y="14" width="8" height="8" rx="2"/>
            <path d="M6 10v2a2 2 0 0 0 2 2h4"/>
            <path d="M18 10v2a2 2 0 0 1-2 2"/>
          </svg>
        ),
      },
      {
        name: "SOLID Principles",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        ),
      },
      {
        name: "Error Handling & Validation",
        highlight: false,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "cloud",
    number: "05",
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure, containerization, and automated CI/CD.",
    accentGlow: "rgba(0, 210, 255, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
      </svg>
    ),
    skills: [
      {
        name: "AWS (EC2, RDS, IAM)",
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
    ],
  },
  {
    id: "fullstack",
    number: "06",
    title: "Frontend & UI",
    desc: "Modern reactive user interfaces, component design, and styling.",
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
        name: "Tailwind CSS",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
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
    ],
  },
  {
    id: "integrations",
    number: "07",
    title: "Payments & Integrations",
    desc: "Payment gateways, third-party integrations, and API tooling.",
    accentGlow: "rgba(0, 210, 255, 0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
      </svg>
    ),
    skills: [
      {
        name: "Stripe",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#635BFF"/>
            <path d="M14.5 10.4c0-.7-.6-1.1-1.6-1.1-1.4 0-3.1.5-4.4 1.2V7.1c1.5-.6 3.1-.9 4.6-.9 3.5 0 5.6 1.8 5.6 4.7 0 4.6-6.2 3.9-6.2 5.9 0 .8.7 1.2 1.8 1.2 1.6 0 3.6-.7 5-1.5v3.4c-1.6.7-3.4 1-5.1 1-3.6 0-6-1.8-6-4.8 0-4.9 6.3-4.1 6.3-5.7z" fill="#FFF"/>
          </svg>
        ),
      },
      {
        name: "Razorpay",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#0C2340"/>
            <path d="M14 6l-6 12h4l4-8h-3l1-4z" fill="#00BAF2"/>
          </svg>
        ),
      },
      {
        name: "Third-party APIs",
        highlight: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
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
        name: "Postman",
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

const FILTER_TABS = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases & Caching" },
  { id: "architecture", label: "Architecture & DSA" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "languages", label: "Languages" },
  { id: "fullstack", label: "Frontend" },
  { id: "integrations", label: "Payments & APIs" },
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
          <div className="skills-mobile-timeline-track"></div>

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

      </section>
  );
}
