"use client";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <ScrollReveal>
          <div className="section-label">
            <span className="section-label-line"></span>
            <span>ABOUT ME</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading">Who I Am</h2>
        </ScrollReveal>

        <div className="about-grid">
          {/* Left Column - Text */}
          <div className="about-left">
            <ScrollReveal delay={200}>
              <div className="about-text">
                <p>
                  Backend Developer with hands-on production experience building and scaling an AI & tech 
                  education platform serving <em>10,000+ users</em>. Currently at <strong>Tensorik</strong>, where I've 
                  integrated payment systems, built admin dashboards, implemented rate limiting, and designed 
                  database schemas using <strong>Next.js</strong>, <strong>Supabase</strong>, and <strong>Node.js</strong>.
                </p>
                <p>
                  Experienced in <em>RESTful API design</em>, authentication, role-based access control, and 
                  collaborating on production codebases via Git. I've integrated <em>Razorpay payment gateway</em> for 
                  course enrollments, implemented API rate limiting to protect platform endpoints, and optimized 
                  <em>PostgreSQL</em> database schemas for high performance.
                </p>
                <p>
                  I hold a <em>Bachelor's Degree in Information Systems</em> (GPA: 3.6) from Port Said University 
                  and completed comprehensive backend training at <strong>Route Academy</strong>, where I built systems 
                  using Node.js, Express.js, Mongoose, and Socket.IO following <em>SOLID principles</em>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="about-tags">
                <span className="tag">RESTful APIs</span>
                <span className="tag">Clean Architecture</span>
                <span className="tag">AWS Cloud</span>
                <span className="tag">Real-time Apps</span>
                <span className="tag">Rate Limiting</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <a 
                href="https://ik.imagekit.io/abdullahAhmed/Abdullah_Ahmed_Resume%202026-05-30.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download 
                className="download-btn"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M7 10l5 5 5-5M12 4v11" />
                </svg>
                <span>Download Resume</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column - Highlight Cards */}
          <div className="about-right">
            <ScrollReveal delay={200}>
              <div className="stat-box">
                <div className="stat-badge">Current Role</div>
                <div className="stat-title">Backend Developer</div>
                <div className="stat-desc">Tensorik — Building & Scaling EdTech Backend (10K+ Users)</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="stat-box">
                <div className="stat-badge">Education</div>
                <div className="stat-title">GPA 3.6 / 4.0</div>
                <div className="stat-desc">B.S. Information Systems — Port Said University</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="stat-box">
                <div className="stat-badge">Specialization</div>
                <div className="stat-title">AWS Cloud Architect</div>
                <div className="stat-desc">Egypt's Digital Pioneers Initiative</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="stat-box">
                <div className="stat-badge">Activity</div>
                <div className="stat-title">750+ Commits</div>
                <div className="stat-desc">Production code, open-source repos & backend systems</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          width: 100%;
        }

        .about-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: start;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .about-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .about-text em {
          font-style: normal;
          color: var(--accent);
          font-weight: 500;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 6px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          color: var(--pill-text);
          font-weight: 500;
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 12px 24px;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.25s ease;
        }

        .download-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stat-box {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: var(--card-shadow);
          transition: all 0.25s ease;
        }

        .stat-box:hover {
          border-color: var(--card-border-hover);
          transform: translateY(-2px);
        }

        .stat-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .stat-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }

        .stat-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
