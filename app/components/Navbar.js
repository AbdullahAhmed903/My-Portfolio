"use client";
import { useEffect, useState, useRef } from "react";

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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
            <span className="logo-text">Abdullah</span>
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
            <span className="status-text">Available for work</span>
          </div>
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
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul>
          {navItems.map((item, index) => (
            <li key={item.id} style={{ animationDelay: `${index * 0.05}s` }}>
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
        <div className="mobile-status">
          <span className="status-dot"></span>
          <span className="status-text">Available for work</span>
        </div>
      </div>

      <style jsx>{`
        .custom-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 60px;
          z-index: 100;
          background: rgba(10, 10, 15, 0.85);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .custom-navbar.scrolled {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        .navbar-logo a {
          display: flex;
          align-items: center;
          text-decoration: none;
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 0.9rem;
        }

        .logo-text {
          color: #00e5a0;
        }

        .logo-dot {
          color: #888888;
          transition: color 0.2s ease;
        }

        .navbar-logo a:hover .logo-dot {
          color: #00e5a0;
        }

        .navbar-links {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .navbar-links ul {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-links a {
          font-family: 'Syne', 'Arial', sans-serif;
          font-size: 0.75rem;
          color: #888888;
          text-decoration: none;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s ease;
          position: relative;
        }

        .navbar-links a:hover {
          color: #f0ede8;
        }

        .navbar-links a.active {
          color: #00e5a0;
        }

        .navbar-links a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 2px;
          background: #00e5a0;
          border-radius: 50%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #00e5a0;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .status-text {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
          font-size: 0.7rem;
          color: #00e5a0;
        }

        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: none;
          background: transparent;
          cursor: pointer;
          gap: 4px;
          padding: 0;
        }

        .navbar-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.6);
          transition: background 0.2s ease;
        }

        .navbar-hamburger:hover span {
          background: #00e5a0;
        }

        .navbar-mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(10, 10, 15, 0.98);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .navbar-mobile-menu.open {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 1;
          pointer-events: auto;
        }

        .close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: #888888;
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .close-btn:hover {
          color: #00e5a0;
        }

        .navbar-mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .navbar-mobile-menu li {
          opacity: 0;
          transform: translateY(-20px);
        }

        .navbar-mobile-menu.open li {
          animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .navbar-mobile-menu a {
          font-family: 'Syne', 'Arial', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .navbar-mobile-menu a.active {
          color: #00e5a0;
        }

        .mobile-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 3rem;
        }

        @media (max-width: 968px) {
          .navbar-inner {
            padding: 0 2rem;
          }

          .navbar-links {
            display: none;
          }

          .status-indicator {
            display: none;
          }

          .navbar-hamburger {
            display: flex;
          }

          .custom-navbar {
            height: 56px;
          }
        }

        @media (max-width: 640px) {
          .navbar-inner {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}
