"use client";
import ScrollReveal from "./ScrollReveal";

export default function GitHub() {
  const stats = [
    { icon: "📦", label: "Repositories", value: "15+" },
    { icon: "🔀", label: "Total Commits", value: "750+" },
    { icon: "⚡", label: "Primary Tech", value: "Node/Nest" },
    { icon: "📅", label: "Contributions (2024)", value: "400+" }
  ];

  return (
    <section className="github-section">
      <div className="github-container">
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>OPEN SOURCE</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="github-heading">GitHub Activity</h2>
        </ScrollReveal>

        {/* Contribution Graph Card */}
        <ScrollReveal delay={200}>
          <div className="contribution-card">
            <div className="contribution-graph-wrapper">
              <img
                src="https://ghchart.rshah.org/39d353/AbdullahAhmed903"
                alt="Abdullah Ahmed's GitHub contribution graph"
                className="graph-img"
                loading="lazy"
              />
            </div>
            <div className="contribution-footer">
              <span className="contribution-count">750+ contributions in the last year</span>
              <div className="contribution-legend">
                <span>Less</span>
                <div className="legend-cells">
                  <span className="cell c0"></span>
                  <span className="cell c1"></span>
                  <span className="cell c2"></span>
                  <span className="cell c3"></span>
                  <span className="cell c4"></span>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <ScrollReveal delay={300}>
          <div className="github-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="github-stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* GitHub Profile Button */}
        <ScrollReveal delay={400}>
          <div className="github-action-wrapper">
            <a
              href="https://github.com/AbdullahAhmed903"
              target="_blank"
              rel="noopener noreferrer"
              className="view-github-btn"
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
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .github-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .contribution-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 28px;
          box-shadow: var(--card-shadow);
          margin-bottom: 28px;
          transition: border-color 0.25s ease;
        }

        .contribution-card:hover {
          border-color: var(--card-border-hover);
        }

        .contribution-graph-wrapper {
          width: 100%;
          overflow-x: auto;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }

        .graph-img {
          max-width: 100%;
          height: auto;
          min-width: 700px;
        }

        .contribution-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--card-border);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 12px;
        }

        .contribution-legend {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend-cells {
          display: flex;
          gap: 3px;
        }

        .cell {
          width: 11px;
          height: 11px;
          border-radius: 2px;
        }

        .c0 { background: #161b22; border: 1px solid rgba(255,255,255,0.05); }
        .c1 { background: #0e4429; }
        .c2 { background: #006d32; }
        .c3 { background: #26a641; }
        .c4 { background: #39d353; }

        .github-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .github-stat-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 20px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .github-stat-card:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
        }

        .stat-icon {
          font-size: 1.3rem;
          margin-bottom: 8px;
        }

        .stat-value {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .github-action-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .view-github-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-radius: 10px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .view-github-btn:hover {
          border-color: #39d353;
          color: #39d353;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(57, 211, 83, 0.2);
        }

        .arrow {
          transition: transform 0.2s ease;
        }

        .view-github-btn:hover .arrow {
          transform: translate(3px, -3px);
        }
      `}</style>
    </section>
  );
}