"use client";
import ScrollReveal from "./ScrollReveal";

export default function GitHub() {
  const languages = [
    { name: "TypeScript", percent: 45, color: "#3178C6" },
    { name: "JavaScript", percent: 30, color: "#F7DF1E" },
    { name: "SQL / Other", percent: 15, color: "#22C55E" },
    { name: "Other", percent: 10, color: "#64748B" },
  ];

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

        {/* Main Contribution Graph Card */}
        <ScrollReveal delay={200}>
          <div className="contribution-main-card">
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

            {/* Bottom Counter Bar */}
            <div className="card-bottom-bar">
              <div className="pulse-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <div className="counter-text">
                <strong className="counter-num">750+</strong>
                <span className="counter-desc">contributions in the last year</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 5-Card Stats Grid */}
        <div className="github-cards-grid">
          {/* Card 1: Repositories */}
          <ScrollReveal delay={250}>
            <div className="stat-metric-card">
              <div className="metric-icon-box green-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m7.5 4.27 9 5.15"/>
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                  <path d="m3.3 7 8.7 5 8.7-5"/>
                  <path d="M12 22V12"/>
                </svg>
              </div>
              <div className="metric-big-num green-text">15+</div>
              <div className="metric-label">Repositories</div>
              <div className="metric-subline">Open source repos created & maintained</div>
            </div>
          </ScrollReveal>

          {/* Card 2: Total Commits */}
          <ScrollReveal delay={300}>
            <div className="stat-metric-card">
              <div className="metric-icon-box cyan-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D2FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="metric-big-num cyan-text">750+</div>
              <div className="metric-label">Total Commits</div>
              <div className="metric-subline">Across all repositories</div>
            </div>
          </ScrollReveal>

          {/* Card 3: Primary Tech */}
          <ScrollReveal delay={350}>
            <div className="stat-metric-card">
              <div className="metric-icon-box purple-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <div className="metric-big-num purple-text">Node / Nest</div>
              <div className="metric-label">Primary Tech</div>
              <div className="metric-subline">Backend development with modern tools</div>
            </div>
          </ScrollReveal>

          {/* Card 4: Contributions (2024) */}
          <ScrollReveal delay={400}>
            <div className="stat-metric-card">
              <div className="metric-icon-box orange-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </div>
              <div className="metric-big-num orange-text">400+</div>
              <div className="metric-label">Contributions (2024)</div>
              <div className="metric-subline">Active contributor this year</div>
            </div>
          </ScrollReveal>

          {/* Card 5: Top Languages */}
          <ScrollReveal delay={450}>
            <div className="stat-metric-card lang-card">
              <div className="lang-header">Top Languages</div>
              <div className="lang-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="lang-row">
                    <div className="lang-info">
                      <span className="lang-dot" style={{ backgroundColor: lang.color }}></span>
                      <span className="lang-name">{lang.name}</span>
                    </div>
                    <div className="lang-percent">{lang.percent}%</div>
                    <div className="lang-bar-track">
                      <div 
                        className="lang-bar-fill" 
                        style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Center CTA Button */}
        <ScrollReveal delay={500}>
          <div className="github-cta-wrapper">
            <a
              href="https://github.com/AbdullahAhmed903"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-link-btn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
              <span>Visit github.com/AbdullahAhmed903</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
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
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 18px;
          padding: 24px 28px;
          box-shadow: var(--card-shadow);
          margin-bottom: 24px;
          transition: border-color 0.25s ease;
        }

        .contribution-main-card:hover {
          border-color: var(--card-border-hover);
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
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .legend-squares {
          display: flex;
          gap: 4px;
        }

        .l-sq {
          width: 11px;
          height: 11px;
          border-radius: 2.5px;
        }

        .sq-0 { background: #161b22; border: 1px solid rgba(255,255,255,0.06); }
        .sq-1 { background: #0e4429; }
        .sq-2 { background: #006d32; }
        .sq-3 { background: #26a641; }
        .sq-4 { background: #39d353; }

        .chart-viewport {
          width: 100%;
          overflow-x: auto;
          display: flex;
          justify-content: center;
          padding: 12px 0 16px;
        }

        .chart-img {
          max-width: 100%;
          height: auto;
          min-width: 720px;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
        }

        .card-bottom-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--card-border);
        }

        .pulse-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .counter-text {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }

        .counter-num {
          color: #22C55E;
          font-weight: 700;
        }

        .counter-desc {
          color: var(--text-muted);
        }

        /* ── 5-Card Stats Grid ─────────────────────────────────── */
        .github-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr) 1.5fr;
          gap: 16px;
          margin-bottom: 28px;
        }

        .stat-metric-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          padding: 22px 20px;
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          transition: all 0.25s ease;
        }

        .stat-metric-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
        }

        .metric-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .green-box {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .cyan-box {
          background: rgba(0, 210, 255, 0.1);
          border: 1px solid rgba(0, 210, 255, 0.25);
        }

        .purple-box {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.25);
        }

        .orange-box {
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.25);
        }

        .metric-big-num {
          font-family: var(--font-mono);
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .green-text { color: #22C55E; }
        .cyan-text { color: #00D2FF; }
        .purple-text { color: #A855F7; }
        .orange-text { color: #F97316; }

        .metric-label {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .metric-subline {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* ── Top Languages Card ───────────────────────────────── */
        .lang-card {
          justify-content: flex-start;
        }

        .lang-header {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lang-row {
          display: grid;
          grid-template-columns: 110px 38px 1fr;
          align-items: center;
          gap: 8px;
        }

        .lang-info {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lang-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .lang-name {
          font-size: 0.78rem;
          color: var(--text-secondary);
          font-weight: 500;
          white-space: nowrap;
        }

        .lang-percent {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: right;
        }

        .lang-bar-track {
          width: 100%;
          height: 5px;
          background: var(--background-subtle);
          border-radius: 9999px;
          overflow: hidden;
        }

        .lang-bar-fill {
          height: 100%;
          border-radius: 9999px;
        }

        /* ── CTA Button ───────────────────────────────────────── */
        .github-cta-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .github-profile-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 12px;
          background: var(--card-bg);
          border: 1px solid rgba(0, 210, 255, 0.25);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.25s ease;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .github-profile-link-btn:hover {
          border-color: #00D2FF;
          color: #00D2FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(0, 210, 255, 0.25);
        }

        .arrow {
          transition: transform 0.2s ease;
          color: #00D2FF;
        }

        .github-profile-link-btn:hover .arrow {
          transform: translate(3px, -3px);
        }

        /* ── Responsive ────────────────────────────────────────── */
        @media (max-width: 1200px) {
          .github-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .lang-card {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .contribution-main-card {
            padding: 18px 16px;
          }

          .github-cards-grid {
            grid-template-columns: 1fr;
          }

          .lang-row {
            grid-template-columns: 90px 35px 1fr;
          }
        }
      `}</style>
    </section>
  );
}