"use client";
import { useEffect, useState, useRef } from "react";
import ElegantLogo from "./ElegantLogo";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const scrollRef = useRef(false);

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light-mode");
      document.body.classList.add("light-mode");
    } else {
      setIsDark(true);
      document.documentElement.classList.remove("light-mode");
      document.body.classList.remove("light-mode");
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.remove("light-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.add("light-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("portfolio-theme", "light");
    }
  }

  // Scroll Spy using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (scrollRef.current) return; // Ignore observer during manual scroll
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      scrollRef.current = true;
      setActive(id);
      el.scrollIntoView({ behavior: "smooth" });
      
      // Re-enable observer after scroll finishes
      setTimeout(() => {
        scrollRef.current = false;
      }, 800);
    }
  }

  return (
    <nav className={`custom-navbar${isDark ? "" : " light"}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} aria-label="Home">
            <ElegantLogo />
          </a>
        </div>
        <div className="navbar-links">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={active === item.id ? "active" : ""}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? "🌙" : "☀"}
          </button>
          <button
            className="navbar-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`navbar-mobile-menu${menuOpen ? " open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={active === item.id ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 100;
          background: rgba(10, 15, 10, 0.85);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 16px 40px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-sizing: border-box;
          transition: background 0.3s, border-bottom 0.3s;
        }
        .custom-navbar.light {
          background: rgba(240, 244, 240, 0.9);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }
        .navbar-logo {
          flex: 1 1 0;
          display: flex;
          align-items: center;
        }
        .navbar-links {
          flex: 2 1 0;
          display: flex;
          justify-content: center;
        }
        .navbar-links ul {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: color 0.2s, background 0.2s;
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 500;
        }
        .custom-navbar.light .navbar-links a {
          color: rgba(0, 0, 0, 0.65);
        }
        .navbar-links a:hover,
        .navbar-links a.active {
          color: #00c875 !important;
        }
        .custom-navbar.light .navbar-links a:hover,
        .custom-navbar.light .navbar-links a.active {
          color: #00a060 !important;
        }
        .navbar-actions {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
        }
        .theme-toggle-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: rgba(255, 255, 255, 0.8);
          padding: 0;
        }
        .theme-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .custom-navbar.light .theme-toggle-btn {
          border-color: rgba(0, 0, 0, 0.15);
          color: #0a0f0a;
        }
        .custom-navbar.light .theme-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.05);
        }
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: transparent;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
          padding: 0;
        }
        .navbar-hamburger:hover { background: rgba(255, 255, 255, 0.06); }
        .navbar-hamburger span {
          display: block;
          width: 18px;
          height: 2px;
          background: #fff;
          margin: 2px 0;
          border-radius: 2px;
          transition: background 0.3s;
        }
        .custom-navbar.light .navbar-hamburger span { background: #0a0f0a; }
        .navbar-mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          right: 24px;
          background: #0a0f0a;
          border-radius: 12px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
          padding: 24px;
          z-index: 200;
          min-width: 200px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-10px);
          transition: all 0.3s;
        }
        .custom-navbar.light .navbar-mobile-menu {
          background: #f0f4f0;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .navbar-mobile-menu.open {
          display: block;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .navbar-mobile-menu ul {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 20px;
        }
        .navbar-mobile-menu a {
          font-family: 'Courier New', Courier, monospace;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }
        .custom-navbar.light .navbar-mobile-menu a {
          color: rgba(0, 0, 0, 0.7);
        }
        .navbar-mobile-menu a.active,
        .navbar-mobile-menu a:hover { color: #00c875; }

        @media (max-width: 900px) {
          .navbar-inner { padding: 0 8px; }
        }
        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-hamburger { display: flex; }
          .custom-navbar { padding: 12px 24px; }
        }
      `}</style>
    </nav>
  );
}
