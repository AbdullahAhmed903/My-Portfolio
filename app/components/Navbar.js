"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const dockIcons = [
  {
    id: "home",
    label: "Home",
    href: "#home",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
      setScrolled(scrollPos > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, []);

  // Scroll Spy
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  function handleNavClick(e, id) {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header className="navbar-container">
        {/* Desktop Floating Pill Dock (100% untouched for desktop) */}
        <nav className={`navbar-pill desktop-nav ${scrolled ? 'is-scrolled' : 'is-top'}`}>
          {/* Brand Group (Visible on Top state) */}
          <div className="brand-group">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="brand-link">
              <img 
                src="/avatar-small.webp" 
                alt="Abdullah" 
                width={36}
                height={36}
                className="brand-avatar"
                onError={(e) => {
                  e.currentTarget.src = "/profile.webp";
                }}
              />
              <span className="brand-name">Abdullah Ahmed</span>
            </a>
          </div>

          {/* Nav Links */}
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

        {/* Mobile Top Header Pill (< 768px) */}
        <div className="mobile-top-bar">
          <div className="mobile-top-pill">
            <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="mobile-brand-link">
              <img 
                src="/avatar-small.webp" 
                alt="Abdullah" 
                width={34}
                height={34}
                className="mobile-avatar" 
                onError={(e) => {
                  e.currentTarget.src = "/profile.webp";
                }}
              />
              <span className="mobile-brand-text">Abdullah</span>
            </a>

            <div className="mobile-top-actions">
              <ThemeToggle />
              <button 
                type="button" 
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <span className="ham-line"></span>
                <span className="ham-line"></span>
                <span className="ham-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen High-Impact Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Drawer Top Row */}
            <div className="drawer-header">
              <div className="drawer-brand">
                <img 
                  src="/avatar-small.webp" 
                  alt="Abdullah" 
                  width={44}
                  height={44}
                  className="drawer-avatar" 
                  onError={(e) => {
                    e.currentTarget.src = "/profile.webp";
                  }}
                />
                <div className="drawer-name-stack">
                  <span className="drawer-title">Abdullah Ahmed</span>
                  <span className="drawer-sub">Full-Stack Developer (Backend-Focused)</span>
                </div>
              </div>

              <div className="drawer-actions">
                <ThemeToggle />
                <button 
                  type="button"
                  className="drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Links List */}
            <div className="drawer-links-stack">
              {dockIcons.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`drawer-link-card ${active === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.2 }}
                >
                  <div className="drawer-link-left">
                    <span className="drawer-link-icon">{item.icon}</span>
                    <span className="drawer-link-label">{item.label}</span>
                  </div>
                  <div className="drawer-link-right">
                    {active === item.id ? (
                      <span className="drawer-active-pill">CURRENT</span>
                    ) : (
                      <span className="drawer-arrow">›</span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Drawer Footer Socials */}
            <div className="drawer-footer">
              <div className="drawer-socials-row">
                <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="GitHub">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                  </svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/" target="_blank" rel="noopener noreferrer" className="drawer-social-btn" aria-label="LinkedIn">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .navbar-container {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          width: 100%;
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

        .navbar-pill.is-top .nav-items-group {
          gap: 6px !important;
        }

        .navbar-pill.is-top .nav-link-btn {
          width: auto !important;
          height: auto !important;
          padding: 7px 16px !important;
          border-radius: 8px !important;
          background: transparent !important;
          border: 1px solid transparent !important;
          font-family: var(--font-sans) !important;
          font-size: 0.9rem !important;
          font-weight: 500 !important;
          color: var(--nav-link) !important;
        }

        .navbar-pill.is-top .nav-link-btn:hover {
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }

        .navbar-pill.is-top .nav-link-btn.active {
          color: #00d2ff !important;
          font-weight: 600 !important;
          background: rgba(0, 210, 255, 0.1) !important;
          border-color: rgba(0, 210, 255, 0.3) !important;
        }

        .navbar-pill.is-top .nav-icon {
          display: none !important;
        }

        .navbar-pill.is-top .nav-label {
          display: inline-block !important;
        }

        .navbar-pill.is-top .dock-tooltip {
          display: none !important;
        }

        /* ── Scrolled state: Compact macOS floating dock ──── */
        .navbar-pill.is-scrolled {
          width: auto !important;
          max-width: 580px !important;
          justify-content: center !important;
          padding: 6px 14px !important;
          gap: 6px !important;
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 210, 255, 0.15) !important;
        }

        .navbar-pill.is-scrolled .brand-group {
          display: none !important;
        }

        .navbar-pill.is-scrolled .nav-items-group {
          gap: 6px !important;
        }

        .navbar-pill.is-scrolled .nav-link-btn {
          width: 38px !important;
          height: 38px !important;
          padding: 0 !important;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          color: var(--nav-link) !important;
        }

        .navbar-pill.is-scrolled .nav-link-btn:hover {
          color: #00d2ff !important;
          background: rgba(0, 210, 255, 0.12) !important;
          border-color: rgba(0, 210, 255, 0.35) !important;
          transform: translateY(-2px);
        }

        .navbar-pill.is-scrolled .nav-link-btn.active {
          color: #00d2ff !important;
          background: rgba(0, 210, 255, 0.18) !important;
          border-color: #00d2ff !important;
          box-shadow: 0 0 14px rgba(0, 210, 255, 0.35) !important;
        }

        .navbar-pill.is-scrolled .nav-icon {
          display: flex !important;
        }

        .navbar-pill.is-scrolled .nav-label {
          display: none !important;
        }

        /* ── Brand Link ──────────────────────────────────── */
        .brand-group {
          display: flex;
          align-items: center;
        }

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
          border: 1.5px solid var(--accent);
          object-fit: cover;
          object-position: center 20%;
          box-shadow: 0 0 10px rgba(0, 210, 255, 0.3);
        }

        .brand-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .nav-items-group {
          display: flex;
          align-items: center;
        }

        .nav-link-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }

        .actions-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .action-icon-btn {
          position: relative;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--nav-link);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .action-icon-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(0, 210, 255, 0.1);
          transform: translateY(-2px);
        }

        .dock-tooltip {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #0f1117;
          padding: 4px 10px;
          border-radius: 6px;
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

        /* ── Mobile Top Header Bar (< 768px) ─────────────── */
        .mobile-top-bar {
          display: none;
          position: relative;
          width: 100%;
          max-width: 440px;
          pointer-events: auto;
        }

        .mobile-top-pill {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(11, 15, 25, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 210, 255, 0.3);
          border-radius: 9999px;
          padding: 6px 14px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 210, 255, 0.15);
        }

        :global(html.light-mode) .mobile-top-pill {
          background: rgba(255, 255, 255, 0.95);
          border-color: #cbd5e1;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.1);
        }

        .mobile-brand-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .mobile-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--accent);
          object-fit: cover;
          object-position: center 20%;
        }

        .mobile-brand-text {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .mobile-top-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mobile-toggle-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4.5px;
          cursor: pointer;
        }

        .ham-line {
          width: 16px;
          height: 1.5px;
          background: var(--text-primary);
          border-radius: 1px;
        }

        /* ── Full-Screen Mobile Drawer Overlay ───────────── */
        .mobile-drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background-color: #060911 !important;
          background: #060911 !important;
          z-index: 999999 !important;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 20px env(safe-area-inset-bottom, 24px);
          overflow-y: auto;
        }

        :global(html.light-mode) .mobile-drawer-overlay {
          background-color: #ffffff !important;
          background: #ffffff !important;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global(html.light-mode) .drawer-header {
          border-bottom-color: rgba(0, 0, 0, 0.08);
        }

        .drawer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .drawer-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #00d2ff;
          object-fit: cover;
          object-position: center 20%;
        }

        .drawer-name-stack {
          display: flex;
          flex-direction: column;
        }

        .drawer-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .drawer-sub {
          font-size: 0.72rem;
          color: #00d2ff;
          font-family: var(--font-mono);
        }

        .drawer-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .drawer-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          cursor: pointer;
        }

        .drawer-links-stack {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 20px 0;
        }

        .drawer-link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #0d121f !important;
          background: #0d121f !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 14px 18px;
          text-decoration: none;
          color: #f1f5f9;
          transition: all 0.2s ease;
        }

        :global(html.light-mode) .drawer-link-card {
          background-color: #f8fafc !important;
          background: #f8fafc !important;
          border-color: #e2e8f0;
          color: #1e293b;
        }

        .drawer-link-card:active,
        .drawer-link-card.active {
          background-color: rgba(0, 210, 255, 0.12) !important;
          background: rgba(0, 210, 255, 0.12) !important;
          border-color: #00d2ff !important;
          color: #00d2ff !important;
        }

        .drawer-link-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .drawer-link-icon {
          color: #00d2ff;
          display: flex;
          align-items: center;
        }

        .drawer-link-label {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .drawer-active-pill {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: #00d2ff;
          background: rgba(0, 210, 255, 0.15);
          border: 1px solid rgba(0, 210, 255, 0.35);
          padding: 2px 8px;
          border-radius: 6px;
        }

        .drawer-arrow {
          font-size: 1.3rem;
          color: var(--text-muted);
          line-height: 1;
        }

        .drawer-footer {
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        :global(html.light-mode) .drawer-footer {
          border-top-color: rgba(0, 0, 0, 0.08);
        }

        .drawer-socials-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .drawer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px;
          background-color: #0d121f !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
        }

        :global(html.light-mode) .drawer-social-btn {
          background-color: #f8fafc !important;
          border-color: #e2e8f0;
          color: #334155;
        }

        .drawer-social-btn:hover {
          color: #00d2ff;
          border-color: #00d2ff;
        }

        /* ── Responsive Switch ────────────────────────────── */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-top-bar {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
