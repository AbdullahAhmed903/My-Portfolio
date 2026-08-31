"use client";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const dockIcons = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
      setScrolled(scrollPos > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // Scroll Spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (scrollRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    dockIcons.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      scrollRef.current = true;
      setActive(id);
      el.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        scrollRef.current = false;
      }, 800);
    }
  }

  return (
    <header className="navbar-container">
      <nav className={`navbar-pill ${scrolled ? 'is-scrolled' : 'is-top'}`}>
        {/* Brand Group (Visible on Top state) */}
        <div className="brand-group">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="brand-link">
            <img 
              src="https://i.ibb.co/3592vhkV/384A7585.jpg" 
              alt="Abdullah" 
              className="brand-avatar" 
            />
            <span className="brand-name">Abdullah Ahmed</span>
          </a>
        </div>

        {/* Nav Links: Full Text at Top / Round Icons when Scrolled */}
        <div className="nav-items-group">
          {dockIcons.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link-btn ${active === item.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, item.id)}
              aria-label={item.label}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <span className="dock-tooltip">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="dock-divider"></div>

        {/* Actions & Socials */}
        <div className="actions-group">
          <a
            href="https://github.com/AbdullahAhmed903"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn"
            aria-label="GitHub"
          >
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
            </svg>
            <span className="dock-tooltip">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-icon-btn"
            aria-label="LinkedIn"
          >
            <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="dock-tooltip">LinkedIn</span>
          </a>

          <ThemeToggle />
        </div>
      </nav>

      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 20px;
          left: 0;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          pointer-events: none;
          padding: 0 20px;
        }

        .navbar-pill {
          pointer-events: auto;
          display: flex;
          align-items: center;
          background: rgba(15, 17, 23, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--card-border);
          border-radius: 9999px;
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06);
          transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      max-width 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      padding 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      gap 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.45s ease;
        }

        :global(html.light-mode) .navbar-pill {
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 12px 30px -5px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.06);
        }

        /* ── Top state: 85% width length ─────────────────── */
        .navbar-pill.is-top {
          width: 85vw !important;
          max-width: 1150px !important;
          justify-content: space-between !important;
          padding: 10px 24px !important;
          gap: 16px !important;
        }

        .navbar-pill.is-top .brand-group {
          display: flex !important;
          align-items: center !important;
          opacity: 1 !important;
          visibility: visible !important;
          transition: all 0.35s ease;
        }

        .navbar-pill.is-top .nav-label {
          display: inline !important;
        }

        .navbar-pill.is-top .nav-icon {
          display: none !important;
        }

        .navbar-pill.is-top .dock-tooltip {
          display: none !important;
        }

        .navbar-pill.is-top .nav-link-btn {
          padding: 8px 18px !important;
          border-radius: 20px !important;
          width: auto !important;
          height: auto !important;
          font-size: 0.92rem !important;
          font-weight: 500 !important;
        }

        .navbar-pill.is-top .nav-items-group {
          gap: 6px !important;
        }

        /* ── Scrolled state: Decreased length into compact dock ── */
        .navbar-pill.is-scrolled {
          width: auto !important;
          max-width: max-content !important;
          justify-content: center !important;
          padding: 6px 10px !important;
          gap: 6px !important;
          box-shadow: 0 16px 40px -5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 210, 255, 0.15) !important;
        }

        .navbar-pill.is-scrolled .brand-group {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          width: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .navbar-pill.is-scrolled .nav-label {
          display: none !important;
        }

        .navbar-pill.is-scrolled .nav-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .navbar-pill.is-scrolled .nav-link-btn {
          width: 38px !important;
          height: 38px !important;
          border-radius: 50% !important;
          padding: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        /* Brand & Avatar */
        .brand-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .brand-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid var(--accent);
        }

        .brand-name {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        /* Navigation Items */
        .nav-items-group {
          display: flex;
          align-items: center;
        }

        .nav-link-btn {
          position: relative;
          color: var(--text-secondary);
          background: transparent;
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .nav-link-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        :global(html.light-mode) .nav-link-btn:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        .nav-link-btn.active {
          color: var(--accent);
          background: var(--pill-bg);
          font-weight: 600;
        }

        /* Actions & Socials */
        .actions-group {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .action-icon-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: transparent;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .action-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          transform: scale(1.08);
        }

        :global(html.light-mode) .action-icon-btn:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        /* Tooltips for scrolled dock mode */
        .dock-tooltip {
          position: absolute;
          top: 48px;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          padding: 4px 10px;
          border-radius: 6px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.15s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .navbar-pill.is-scrolled .nav-link-btn:hover .dock-tooltip,
        .action-icon-btn:hover .dock-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dock-divider {
          width: 1px;
          height: 22px;
          background: var(--card-border);
          margin: 0 4px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .navbar-pill.is-top {
            width: 92vw !important;
            padding: 8px 16px !important;
          }

          .navbar-pill.is-top .nav-link-btn {
            padding: 6px 12px !important;
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 768px) {
          .navbar-pill.is-top .brand-name {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .navbar-container {
            top: auto;
            bottom: 16px;
          }

          .navbar-pill.is-top,
          .navbar-pill.is-scrolled {
            width: auto !important;
            max-width: 95vw !important;
            padding: 4px 8px !important;
            gap: 2px !important;
          }

          .brand-group {
            display: none !important;
          }

          .nav-label {
            display: none !important;
          }

          .nav-icon {
            display: flex !important;
          }

          .nav-link-btn,
          .action-icon-btn {
            width: 34px !important;
            height: 34px !important;
          }

          .dock-tooltip {
            top: -36px;
          }
        }
      `}</style>
    </header>
  );
}
