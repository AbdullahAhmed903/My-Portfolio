"use client";
import { useEffect, useState, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "GitHub", href: "#github", id: "github" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef(false);

  // Detect scroll for subtle border/shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      
      setTimeout(() => {
        scrollRef.current = false;
      }, 800);
    }
  }

  return (
    <nav className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} aria-label="Home">
            <span className="logo-symbol">&lt;</span>
            <span className="logo-text">Abdullah</span>
            <span className="logo-dot">.</span>
            <span className="logo-symbol">/&gt;</span>
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
          <div className="status-indicator">
            <span className="status-dot"></span>
            <span className="status-text">Available</span>
          </div>

          <ThemeToggle />

          <button
            className="navbar-hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
            <span className={`bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
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
          height: 70px;
          z-index: 1000;
          background: var(--navbar-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--navbar-border);
          transition: all 0.3s ease;
        }

        .custom-navbar.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .navbar-inner {
          max-width: 1200px;
          width: 90%;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo a {
          display: flex;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .logo-symbol {
          color: var(--accent);
          opacity: 0.8;
        }

        .logo-text {
          margin: 0 2px;
        }

        .logo-dot {
          color: var(--accent);
        }

        .navbar-links ul {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .navbar-links a {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--nav-link);
          padding: 6px 0;
          position: relative;
          transition: color 0.2s ease;
        }

        .navbar-links a:hover {
          color: var(--nav-link-hover);
        }

        .navbar-links a.active {
          color: var(--accent);
          font-weight: 600;
        }

        .navbar-links a.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-gradient);
          border-radius: 2px;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--pill-text);
          font-weight: 500;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulseGlow 2s infinite ease-in-out;
        }

        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 36px;
          height: 36px;
          padding: 8px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          cursor: pointer;
        }

        .bar {
          width: 100%;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .bar.open:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .bar.open:nth-child(2) {
          opacity: 0;
        }

        .bar.open:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .navbar-mobile-menu {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          width: 100vw;
          background: var(--navbar-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--navbar-border);
          padding: 24px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .navbar-mobile-menu.open {
          display: block;
        }

        .navbar-mobile-menu ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .navbar-mobile-menu a {
          font-size: 1.1rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .navbar-mobile-menu a.active {
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .navbar-links {
            display: none;
          }

          .navbar-hamburger {
            display: flex;
          }

          .status-indicator {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
