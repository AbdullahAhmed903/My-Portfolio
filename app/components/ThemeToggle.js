"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (savedTheme === "light" || (!savedTheme && prefersLight)) {
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    } else {
      setIsLight(false);
      document.documentElement.classList.remove("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    const nextState = !isLight;
    setIsLight(nextState);
    if (nextState) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  if (!mounted) {
    return <div className="theme-toggle-placeholder" />;
  }

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      type="button"
    >
      {isLight ? (
        // Moon icon for switching to dark
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        // Sun icon for switching to light
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
      <span className="dock-tooltip">{isLight ? "Dark mode" : "Light mode"}</span>

      <style jsx>{`
        .theme-toggle-placeholder {
          width: 38px;
          height: 38px;
        }

        .theme-toggle-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
          transform: scale(1.1);
        }

        :global(html.light-mode) .theme-toggle-btn:hover {
          background: rgba(0, 0, 0, 0.06);
        }

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

        .theme-toggle-btn:hover .dock-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        @media (max-width: 600px) {
          .theme-toggle-placeholder,
          .theme-toggle-btn {
            width: 34px;
            height: 34px;
          }

          .dock-tooltip {
            top: -36px;
          }
        }
      `}</style>
    </button>
  );
}
