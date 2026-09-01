"use client";
import { useState, useEffect } from "react";
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
  const [stats, setStats] = useState({
    publicRepos: 23,
    totalContributions: 1650,
    lastYearContributions: 1220,
    currentYearContributions: 1218,
    languages: DEFAULT_LANGUAGES,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubData() {
      try {
        // 1. Fetch user data (public repos count)
        const userPromise = fetch("https://api.github.com/users/AbdullahAhmed903")
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null);

        // 2. Fetch contributions breakdown across years
        const contribPromise = fetch("https://github-contributions-api.jogruber.de/v4/AbdullahAhmed903")
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null);

        // 3. Fetch public repos for language distribution
        const reposPromise = fetch("https://api.github.com/users/AbdullahAhmed903/repos?per_page=100&sort=updated")
          .then((res) => (res.ok ? res.json() : null))
          .catch(() => null);

        const [userData, contribData, reposData] = await Promise.all([
          userPromise,
          contribPromise,
          reposPromise,
        ]);

        if (!isMounted) return;

        setStats((prev) => {
          let updatedRepos = prev.publicRepos;
          let updatedLastYear = prev.lastYearContributions;
          let updatedTotal = prev.totalContributions;
          let updatedCurrentYear = prev.currentYearContributions;
          let updatedLanguages = prev.languages;

          if (userData?.public_repos) {
            updatedRepos = userData.public_repos;
          }

          if (contribData?.total) {
            if (contribData.total.lastYear) {
              updatedLastYear = contribData.total.lastYear;
            }
            if (contribData.total[currentYear]) {
              updatedCurrentYear = contribData.total[currentYear];
            }
            const allYearsSum = Object.entries(contribData.total)
              .filter(([key]) => key !== "lastYear")
              .reduce((acc, [, val]) => acc + (typeof val === "number" ? val : 0), 0);
            if (allYearsSum > 0) {
              updatedTotal = allYearsSum;
            }
          }

          if (Array.isArray(reposData) && reposData.length > 0) {
            const langCounts = {};
            let totalCount = 0;
            reposData.forEach((repo) => {
              if (repo.language) {
                langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
                totalCount++;
              }
            });

            if (totalCount > 0) {
              const sortedLangs = Object.entries(langCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 4);

              const computedLanguages = sortedLangs.map(([name, count]) => ({
                name,
                percent: Math.round((count / totalCount) * 100),
                color: LANG_COLORS[name] || "#00D2FF",
              }));

              if (computedLanguages.length > 0) {
                updatedLanguages = computedLanguages;
              }
            }
          }

          return {
            publicRepos: updatedRepos,
            totalContributions: updatedTotal,
            lastYearContributions: updatedLastYear,
            currentYearContributions: updatedCurrentYear,
            languages: updatedLanguages,
          };
        });
      } catch (err) {
        console.error("Error loading live GitHub statistics:", err);
      }
    }

    loadGitHubData();

    return () => {
      isMounted = false;
    };
  }, [currentYear]);

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
                  <span className="card-title">Contributions in the last year</span>
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

              {/* Contribution Image Graphic */}
              <div className="chart-viewport">
                <img
                  src="https://ghchart.rshah.org/39d353/AbdullahAhmed903"
                  alt="Abdullah Ahmed's GitHub contribution graph"
                  className="chart-img"
                  loading="lazy"
                />
              </div>

              {/* Bottom Counter Bar with Live Animated Counter */}
              <div className="card-bottom-bar">
                <div className="pulse-icon-box">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div className="counter-text">
                  <strong className="counter-num">
                    <Counter value={stats.lastYearContributions} suffix="+" />
                  </strong>
                  <span className="counter-desc">contributions in the last year</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* 5-Card Stats Grid */}
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

        {/* Center CTA Button */}
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
      </div>

      <style jsx global>{`
        .github-section {
          width: 100%;
        }

        .github-container {
          max-width: 1250px;
          width: 92%;
          margin: 0 auto;
        }

        .github-heading {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin: 0 0 10px 0;
        }

        .github-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin: 0 0 32px 0;
        }

        /* ── Main Contribution Graph Card ────────────────────────── */
        .contribution-main-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 24px 28px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .contribution-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-primary);
        }

        .card-title {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .header-legend {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend-txt {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .legend-squares {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .l-sq {
          width: 10px;
          height: 10px;
          border-radius: 2px;
        }

        .sq-0 { background: #1e293b; }
        .sq-1 { background: #0e4429; }
        .sq-2 { background: #006d32; }
        .sq-3 { background: #26a641; }
        .sq-4 { background: #39d353; }

        .chart-viewport {
          width: 100%;
          overflow-x: auto;
          margin-bottom: 16px;
        }

        .chart-img {
          width: 100%;
          min-width: 650px;
          height: auto;
          display: block;
        }

        .card-bottom-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .pulse-icon-box {
          display: flex;
          align-items: center;
        }

        .counter-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .counter-num {
          font-family: var(--font-mono);
          color: #22c55e;
          font-weight: 800;
        }

        /* ── 5-Card Stats Grid ────────────────────────────────────── */
        .github-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-metric-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--card-shadow);
          height: 100%;
        }

        .metric-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .green-box { background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.25); }
        .cyan-box { background: rgba(0, 210, 255, 0.1); border: 1px solid rgba(0, 210, 255, 0.25); }
        .blue-box { background: rgba(14, 165, 233, 0.1); border: 1px solid rgba(14, 165, 233, 0.25); }
        .orange-box { background: rgba(249, 115, 22, 0.1); border: 1px solid rgba(249, 115, 22, 0.25); }

        .metric-big-num {
          font-size: 1.6rem;
          font-weight: 800;
          font-family: var(--font-mono);
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .green-text { color: #22c55e; }
        .cyan-text { color: #00d2ff; }
        .blue-text { color: #38bdf8; font-size: 1.25rem; }
        .orange-text { color: #fb923c; }

        .metric-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .metric-subline {
          font-size: 0.74rem;
          color: var(--text-muted);
          line-height: 1.35;
        }

        /* Lang Card */
        .lang-card {
          padding: 16px;
        }

        .lang-header {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .lang-row {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .lang-info {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lang-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .lang-name {
          font-size: 0.72rem;
          color: var(--text-secondary);
          flex: 1;
        }

        .lang-percent {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
          align-self: flex-end;
          margin-top: -16px;
        }

        .lang-bar-track {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          overflow: hidden;
        }

        .lang-bar-fill {
          height: 100%;
          border-radius: 2px;
        }

        /* ── Center CTA Button ────────────────────────────────────── */
        .github-cta-wrapper {
          display: flex;
          justify-content: center;
        }

        .github-profile-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.92rem;
          box-shadow: var(--card-shadow);
        }

        .github-profile-link-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(0, 210, 255, 0.06);
          box-shadow: 0 0 20px rgba(0, 210, 255, 0.2);
        }

        .arrow {
          font-size: 1.1rem;
        }

        @media (max-width: 1100px) {
          .github-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .github-heading {
            font-size: clamp(2rem, 7vw, 2.8rem);
          }
          .github-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .contribution-main-card {
            padding: 18px 14px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .github-cards-grid {
            grid-template-columns: 1fr;
          }
          .github-profile-link-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}