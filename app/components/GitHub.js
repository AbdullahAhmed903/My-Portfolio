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
          <h2 className="section-heading">GitHub Activity</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="github-profile-card">
            <div className="profile-info">
              <div className="github-icon-wrap">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
                </svg>
              </div>
              <div className="profile-details">
                <span className="profile-user">@AbdullahAhmed903</span>
                <span className="profile-bio">Building backend services, scalable systems & APIs</span>
              </div>
            </div>
            <a
              href="https://github.com/AbdullahAhmed903"
              target="_blank"
              rel="noopener noreferrer"
              className="view-github-btn"
            >
              <span>View GitHub</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </ScrollReveal>

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

        <ScrollReveal delay={400}>
          <div className="contribution-card">
            <div className="contribution-header">
              <span>Contribution Activity (Last 52 Weeks)</span>
            </div>
            <div className="contribution-graph">
              <img
                src="https://ghchart.rshah.org/00d2ff/AbdullahAhmed903"
                alt="Abdullah Ahmed's GitHub contribution graph"
                className="graph-img"
                loading="lazy"
              />
            </div>
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

        .github-profile-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 20px 28px;
          margin-bottom: 24px;
          box-shadow: var(--card-shadow);
          flex-wrap: wrap;
          gap: 16px;
          transition: border-color 0.25s ease;
        }

        .github-profile-card:hover {
          border-color: var(--card-border-hover);
        }

        .profile-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .github-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .profile-user {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .profile-bio {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .view-github-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 8px;
          background: var(--accent-gradient);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .view-github-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
        }

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

        .contribution-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 24px;
          box-shadow: var(--card-shadow);
          overflow: hidden;
        }

        .contribution-header {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-weight: 600;
        }

        .contribution-graph {
          width: 100%;
          overflow-x: auto;
          display: flex;
          justify-content: center;
          padding: 8px 0;
        }

        .graph-img {
          max-width: 100%;
          height: auto;
          min-width: 650px;
        }
      `}</style>
    </section>
  );
}