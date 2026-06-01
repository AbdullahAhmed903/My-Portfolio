"use client";
import ScrollReveal from "./ScrollReveal";

export default function GitHub() {
  const stats = [
    { icon: "⭐", label: "Repositories", value: "15+" },
    { icon: "🔀", label: "Total Commits", value: "750+" },
    { icon: "🌐", label: "Languages Used", value: "8+" },
    { icon: "📅", label: "Contributions 2024", value: "401" }
  ];

  const featuredRepos = [
    {
      name: "task-manager-nestjs",
      desc: "Full-featured backend system for managing tasks across teams with NestJS",
      language: "TypeScript",
      stars: "—",
      forks: "—"
    },
    {
      name: "doctor-system-express",
      desc: "Full-featured backend for managing doctor appointments and patient records",
      language: "JavaScript",
      stars: "—",
      forks: "—"
    },
    {
      name: "intern-hub-mern",
      desc: "Dynamic web app bridging interns and companies, with real-time chat",
      language: "JavaScript",
      stars: "—",
      forks: "—"
    }
  ];

  return (
    <section className="github-section">
      <div className="github-container">
        <ScrollReveal>
          <div className="github-label">
            <span className="label-line"></span>
            <span>OPEN SOURCE</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="github-heading">GitHub Activity</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="github-profile">
            <div className="github-profile-link">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
              </svg>
              <span>github.com/AbdullahAhmed903</span>
            </div>
            <a 
              href="https://github.com/AbdullahAhmed903" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-view-profile"
            >
              View Profile →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="github-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="github-stat">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="contribution-section">
            <div className="contribution-header">
              <span>Contribution activity · Last 52 weeks</span>
              <div className="contribution-legend">
                <span>Less</span>
                <div className="legend-squares">
                  <div className="legend-square l0"></div>
                  <div className="legend-square l1"></div>
                  <div className="legend-square l2"></div>
                  <div className="legend-square l3"></div>
                  <div className="legend-square l4"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            <div className="contribution-note">
              GitHub contribution graph visualization
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="github-repos">
            {featuredRepos.map((repo) => (
              <div key={repo.name} className="github-repo">
                <h3 className="repo-name">{repo.name}</h3>
                <p className="repo-desc">{repo.desc}</p>
                <div className="repo-meta">
                  <span className="repo-language">
                    <span className="language-dot"></span>
                    {repo.language}
                  </span>
                  <span className="repo-stars">⭐ {repo.stars}</span>
                  <span className="repo-forks">🔀 {repo.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .github-section {
          width: 100%;
          padding: 80px 0;
          background: #0a0a0f;
        }

        .github-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .github-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #00e5a0;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .label-line {
          width: 30px;
          height: 1px;
          background: #00e5a0;
        }

        .github-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 48px 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .github-profile {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 20px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
        }

        .github-profile-link {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #00e5a0;
        }

        .github-view-profile {
          color: #888888;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          font-family: 'Courier New', monospace;
        }

        .github-view-profile:hover {
          color: #00e5a0;
        }

        .github-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 32px;
        }

        .github-stat {
          background: #111118;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .github-stat::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: #00e5a0;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .github-stat:hover::after {
          transform: scaleX(1);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 8px;
          opacity: 0.15;
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.65rem;
          color: #888888;
          font-family: 'Courier New', monospace;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contribution-section {
          background: #111118;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .contribution-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          font-size: 0.7rem;
          color: #888888;
          font-family: 'Courier New', monospace;
        }

        .contribution-legend {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.65rem;
        }

        .legend-squares {
          display: flex;
          gap: 3px;
        }

        .legend-square {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .legend-square.l0 { background: #1a1a24; }
        .legend-square.l1 { background: rgba(0, 229, 160, 0.2); }
        .legend-square.l2 { background: rgba(0, 229, 160, 0.4); }
        .legend-square.l3 { background: rgba(0, 229, 160, 0.65); }
        .legend-square.l4 { background: #00e5a0; }

        .contribution-note {
          padding: 40px;
          text-align: center;
          color: #666666;
          font-style: italic;
          font-size: 0.85rem;
          border: 2px dashed rgba(255, 255, 255, 0.07);
          border-radius: 8px;
        }

        .github-repos {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .github-repo {
          background: #111118;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          padding: 1.2rem;
          transition: all 0.3s ease;
        }

        .github-repo:hover {
          border-color: #00e5a0;
          transform: translateY(-3px);
        }

        .repo-name {
          font-size: 1rem;
          font-weight: 700;
          color: #7c6aff;
          margin: 0 0 8px 0;
          font-family: 'Courier New', monospace;
        }

        .repo-desc {
          font-size: 0.82rem;
          color: #888888;
          line-height: 1.6;
          margin: 0 0 12px 0;
        }

        .repo-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.65rem;
          color: #666666;
          font-family: 'Courier New', monospace;
        }

        .repo-language {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .language-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00e5a0;
        }

        @media (max-width: 968px) {
          .github-heading {
            font-size: 2.5rem;
          }

          .github-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .github-repos {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .github-heading {
            font-size: 2rem;
          }

          .github-profile {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .contribution-header {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
