"use client";
import "./GitHub.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import Counter from "./Counter";
import BorderBeam from "./BorderBeam";

const DEFAULT_LANGUAGES = [
  { name: "JavaScript", percent: 45, color: "#F7DF1E" },
  { name: "TypeScript", percent: 30, color: "#3178C6" },
  { name: "PostgreSQL / SQL", percent: 15, color: "#22C55E" },
  { name: "CSS / HTML", percent: 10, color: "#38BDF8" },
];

const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#38BDF8",
  Python: "#3776AB",
  SQL: "#22C55E",
  PostgreSQL: "#22C55E",
  Shell: "#89E051",
  Other: "#64748B",
};

export default function GitHub() {
  const currentYear = new Date().getFullYear();
  const chartViewportRef = useRef(null);
  const [stats, setStats] = useState({
    publicRepos: 23,
    totalContributions: 1650,
    lastYearContributions: 1220,
    currentYearContributions: 1218,
    languages: DEFAULT_LANGUAGES,
  });

  const scrollToRight = () => {
    if (chartViewportRef.current) {
      chartViewportRef.current.scrollLeft = chartViewportRef.current.scrollWidth;
    }
  };

  const handleScroll = (direction) => {
    if (chartViewportRef.current) {
      const scrollAmount = direction === "left" ? -260 : 260;
      chartViewportRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubData() {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) return;
        const data = await res.json();
        if (!isMounted) return;

        setStats((prev) => ({
          publicRepos: data.publicRepos || prev.publicRepos,
          totalContributions: data.totalContributions || prev.totalContributions,
          lastYearContributions: data.lastYearContributions || prev.lastYearContributions,
          currentYearContributions: data.currentYearContributions || prev.currentYearContributions,
          languages: data.languages || prev.languages,
        }));
      } catch (err) {
        console.error("Error loading live GitHub statistics:", err);
      }
    }

    loadGitHubData();

    return () => {
      isMounted = false;
    };
  }, [currentYear]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToRight();
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="github-section" id="github">
      <div className="github-container">
        {/* Header */}
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>OPEN SOURCE</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="github-heading">GitHub Activity</h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="github-subtitle">
            Consistent commits and contributions to open source.
          </p>
        </ScrollReveal>

        {/* Main Contribution Graph Card with 3D Tilt */}
        <ScrollReveal delay={200}>
          <TiltCard maxTilt={5} scale={1.01} style={{ width: "100%", marginBottom: "24px" }}>
            <div className="contribution-main-card">
              <BorderBeam duration={10} size={280} colorFrom="#22C55E" colorTo="#00D2FF" />

              <div className="contribution-card-header">
                <div className="header-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                  </svg>
                  <span className="card-title">GitHub Contribution Graph</span>
                </div>

                <div className="header-legend">
                  <span className="legend-txt">Less</span>
                  <div className="legend-squares">
                    <span className="l-sq sq-0"></span>
                    <span className="l-sq sq-1"></span>
                    <span className="l-sq sq-2"></span>
                    <span className="l-sq sq-3"></span>
                    <span className="l-sq sq-4"></span>
                  </div>
                  <span className="legend-txt">More</span>
                </div>
              </div>

              {/* Contribution Image Graphic Wrapper */}
              <div className="chart-container-wrapper">
                <div className="chart-viewport" ref={chartViewportRef}>
                  <img
                    src="https://ghchart.rshah.org/39d353/AbdullahAhmed903"
                    alt="Abdullah Ahmed's GitHub contribution graph"
                    className="chart-img"
                    onLoad={scrollToRight}
                    loading="lazy"
                  />
                </div>
                <div className="chart-scroll-hint">
                  <button
                    type="button"
                    className="scroll-arrow-btn"
                    onClick={() => handleScroll("left")}
                    aria-label="Scroll chart left"
                  >
                    ‹
                  </button>
                  <span className="scroll-hint-text">Swipe or scroll to view full year</span>
                  <button
                    type="button"
                    className="scroll-arrow-btn"
                    onClick={() => handleScroll("right")}
                    aria-label="Scroll chart right"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* 5-Card Stats Grid (Desktop) */}
        <div className="github-cards-grid">
          {/* Card 1: Repositories */}
          <ScrollReveal delay={250}>
            <TiltCard maxTilt={8} scale={1.03}>
              <div className="stat-metric-card">
                <div className="metric-icon-box green-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7.5 4.27 9 5.15"/>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                  </svg>
                </div>
                <div className="metric-big-num green-text">
                  <Counter value={stats.publicRepos} suffix="+" />
                </div>
                <div className="metric-label">Repositories</div>
                <div className="metric-subline">Open source repos created & maintained</div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 2: Total Contributions */}
          <ScrollReveal delay={300}>
            <TiltCard maxTilt={8} scale={1.03}>
              <div className="stat-metric-card">
                <div className="metric-icon-box cyan-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div className="metric-big-num cyan-text">
                  <Counter value={stats.totalContributions} suffix="+" />
                </div>
                <div className="metric-label">Total Contributions</div>
                <div className="metric-subline">Across all repositories</div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 3: Primary Tech */}
          <ScrollReveal delay={350}>
            <TiltCard maxTilt={8} scale={1.03}>
              <div className="stat-metric-card">
                <div className="metric-icon-box blue-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <div className="metric-big-num blue-text">Node / Nest</div>
                <div className="metric-label">Primary Tech</div>
                <div className="metric-subline">Backend development with modern tools</div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 4: Contributions (Year) */}
          <ScrollReveal delay={400}>
            <TiltCard maxTilt={8} scale={1.03}>
              <div className="stat-metric-card">
                <div className="metric-icon-box orange-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                </div>
                <div className="metric-big-num orange-text">
                  <Counter value={stats.currentYearContributions} suffix="+" />
                </div>
                <div className="metric-label">{`Contributions (${currentYear})`}</div>
                <div className="metric-subline">Active contributor this year</div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Card 5: Top Languages with Animated Progress Bars */}
          <ScrollReveal delay={450}>
            <TiltCard maxTilt={8} scale={1.03}>
              <div className="stat-metric-card lang-card">
                <div className="lang-header">Top Languages</div>
                <div className="lang-list">
                  {stats.languages.map((lang) => (
                    <div key={lang.name} className="lang-row">
                      <div className="lang-info">
                        <span className="lang-dot" style={{ backgroundColor: lang.color }}></span>
                        <span className="lang-name">{lang.name}</span>
                      </div>
                      <div className="lang-percent">{lang.percent}%</div>
                      <div className="lang-bar-track">
                        <motion.div 
                          className="lang-bar-fill" 
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Center CTA Button (Desktop) */}
        <ScrollReveal delay={500}>
          <div className="github-cta-wrapper">
            <motion.a
              href="https://github.com/AbdullahAhmed903"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
              <span>Visit github.com/AbdullahAhmed903</span>
              <span className="arrow">↗</span>
            </motion.a>
          </div>
        </ScrollReveal>

        {/* Mobile Redesign View (rendered only on <= 768px screens) */}
        <div className="mobile-github-redesign">
          {/* Section 1: MY IMPACT */}
          <div className="mobile-impact-header">
            <span className="mobile-impact-line"></span>
            <span className="mobile-impact-title">MY IMPACT</span>
          </div>

          <div className="github-mobile-timeline-container">
            <div className="github-mobile-timeline-track"></div>

            {/* Impact Item 1: Repositories */}
            <div className="github-mobile-timeline-item">
              <div className="github-mobile-hex-wrapper green-hex">
                <svg className="github-mobile-hex-svg" viewBox="0 0 100 100">
                  <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                </svg>
                <div className="github-mobile-hex-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m7.5 4.27 9 5.15"/>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                    <path d="m3.3 7 8.7 5 8.7-5"/>
                    <path d="M12 22V12"/>
                  </svg>
                </div>
              </div>
              <div className="github-mobile-timeline-content">
                <div className="mobile-metric-val green-text">
                  <Counter value={stats.publicRepos} suffix="+" />
                </div>
                <div className="mobile-metric-title">Repositories</div>
                <div className="mobile-metric-sub">Open source repos created & maintained</div>
              </div>
            </div>

            {/* Impact Item 2: Total Contributions */}
            <div className="github-mobile-timeline-item">
              <div className="github-mobile-hex-wrapper cyan-hex">
                <svg className="github-mobile-hex-svg" viewBox="0 0 100 100">
                  <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                </svg>
                <div className="github-mobile-hex-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
              </div>
              <div className="github-mobile-timeline-content">
                <div className="mobile-metric-val cyan-text">
                  <Counter value={stats.totalContributions} suffix="+" />
                </div>
                <div className="mobile-metric-title">Total Contributions</div>
                <div className="mobile-metric-sub">Across all repositories</div>
              </div>
            </div>

            {/* Impact Item 3: Primary Tech */}
            <div className="github-mobile-timeline-item">
              <div className="github-mobile-hex-wrapper blue-hex">
                <svg className="github-mobile-hex-svg" viewBox="0 0 100 100">
                  <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                </svg>
                <div className="github-mobile-hex-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
              </div>
              <div className="github-mobile-timeline-content">
                <div className="mobile-metric-val blue-text">Node / Nest</div>
                <div className="mobile-metric-title">Primary Tech</div>
                <div className="mobile-metric-sub">Backend development with modern tools</div>
              </div>
            </div>

            {/* Impact Item 4: Contributions (2026) */}
            <div className="github-mobile-timeline-item">
              <div className="github-mobile-hex-wrapper orange-hex">
                <svg className="github-mobile-hex-svg" viewBox="0 0 100 100">
                  <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
                </svg>
                <div className="github-mobile-hex-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                    <line x1="16" x2="16" y1="2" y2="6"/>
                    <line x1="8" x2="8" y1="2" y2="6"/>
                    <line x1="3" x2="21" y1="10" y2="10"/>
                  </svg>
                </div>
              </div>
              <div className="github-mobile-timeline-content">
                <div className="mobile-metric-val orange-text">
                  <Counter value={stats.currentYearContributions} suffix="+" />
                </div>
                <div className="mobile-metric-title">{`Contributions (${currentYear})`}</div>
                <div className="mobile-metric-sub">Active contributor this year</div>
              </div>
            </div>
          </div>

          {/* Section 2: TOP LANGUAGES */}
          <div className="mobile-impact-header" style={{ marginTop: "36px" }}>
            <span className="mobile-impact-line"></span>
            <span className="mobile-impact-title">TOP LANGUAGES</span>
          </div>

          <div className="mobile-langs-container">
            {stats.languages.map((lang) => {
              let badgeText = lang.name.substring(0, 2).toUpperCase();
              if (lang.name.toLowerCase().includes("javascript")) badgeText = "JS";
              else if (lang.name.toLowerCase().includes("typescript")) badgeText = "TS";
              else if (lang.name.toLowerCase().includes("html")) badgeText = "5";
              else if (lang.name.toLowerCase().includes("css")) badgeText = "3";
              else if (lang.name.toLowerCase().includes("sql")) badgeText = "DB";

              return (
                <div key={lang.name} className="mobile-lang-card">
                  <div className="mobile-lang-badge" style={{ backgroundColor: `${lang.color}20`, borderColor: lang.color, color: lang.color }}>
                    {badgeText}
                  </div>
                  <div className="mobile-lang-main">
                    <div className="mobile-lang-row">
                      <span className="mobile-lang-name">{lang.name}</span>
                      <span className="mobile-lang-pct">{lang.percent}%</span>
                    </div>
                    <div className="mobile-lang-track">
                      <motion.div
                        className="mobile-lang-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section 3: Visit my GitHub CTA Box */}
          <a
            href="https://github.com/AbdullahAhmed903"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-github-card-btn"
          >
            <div className="mobile-cta-left">
              <div className="mobile-cta-avatar">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </div>
              <div className="mobile-cta-texts">
                <span className="mobile-cta-head">Visit my GitHub</span>
                <span className="mobile-cta-link">github.com/AbdullahAhmed903</span>
              </div>
            </div>
            <div className="mobile-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        </div>
      </div>

      </section>
  );
}