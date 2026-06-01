"use client";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <ScrollReveal>
          <div className="about-label">
            <span className="label-line"></span>
            <span>ABOUT ME</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="about-heading">Who I am</h2>
        </ScrollReveal>

        <div className="about-grid">
          {/* Left Column - Text */}
          <div className="about-left">
            <ScrollReveal delay={200}>
              <div className="about-text">
                <p>
                  Backend Developer with hands-on production experience building and scaling an AI & tech 
                  education platform serving <em>10,000+ users</em>. Currently at <em>Tensorik</em>, where I've 
                  integrated payment systems, built admin dashboards, implemented rate limiting, and designed 
                  database schemas using <em>Next.js</em>, <em>Supabase</em>, and <em>Node.js</em>.
                </p>
                <p>
                  Experienced in <em>RESTful API design</em>, authentication, role-based access control, and 
                  collaborating on production codebases via Git. I've integrated <em>Razorpay payment gateway</em> for 
                  course enrollments, implemented API rate limiting to protect platform endpoints, and optimized 
                  <em>PostgreSQL</em> database schemas for performance.
                </p>
                <p>
                  I hold a <em>Bachelor's Degree in Information Systems</em> (GPA: 3.6) from Port Said University 
                  and completed comprehensive backend training at <em>Route Academy</em>, where I built projects 
                  using Node.js, Express.js, Mongoose, and Socket.IO following <em>SOLID principles</em>.
                </p>
                <p>
                  Passionate about building scalable, reliable backend systems that solve real problems. 
                  Continuously expanding my expertise with <em>AWS Cloud</em> through Egypt's Digital Pioneers Initiative.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="about-tags">
                <span className="tag">RESTful APIs</span>
                <span className="tag">Clean Architecture</span>
                <span className="tag">AWS Cloud</span>
                <span className="tag">Real-time Apps</span>
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
                Download CV
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column - Stats */}
          <div className="about-right">
            <ScrollReveal delay={200}>
              <div className="stat-box">
                <div className="stat-title">03/2026</div>
                <div className="stat-desc">Currently at Tensorik - Backend Developer</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="stat-box">
                <div className="stat-title">GPA 3.6</div>
                <div className="stat-desc">B.S. Information Systems — Port Said University</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="stat-box">
                <div className="stat-title">AWS</div>
                <div className="stat-desc">Cloud Architect — Egypt Digital Pioneers</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="stat-box">
                <div className="stat-title">750+</div>
                <div className="stat-desc">GitHub contributions across projects</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 80px 0;
          background: #111118;
        }

        .about-container {
          max-width: 1200px;
          width: 90%;
          margin: 0 auto;
        }

        .about-label {
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

        .about-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 48px 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .about-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-text p {
          line-height: 1.9;
          color: #999999;
          margin: 0;
          font-size: 0.95rem;
        }

        .about-text em {
          color: #f0ede8;
          font-style: normal;
          font-weight: 500;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .tag {
          background: transparent;
          border: 1px solid rgba(124, 106, 255, 0.25);
          color: #7c6aff;
          padding: 8px 16px;
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }

        .tag:hover {
          background: rgba(124, 106, 255, 0.08);
          border-color: rgba(124, 106, 255, 0.4);
        }

        .download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: #ffffff;
          font-weight: 600;
          border-radius: 6px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          width: fit-content;
          font-family: 'Courier New', monospace;
        }

        .download-btn:hover {
          border-color: #00e5a0;
          color: #00e5a0;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stat-box {
          background: transparent;
          border-left: 2px solid #00e5a0;
          padding: 16px 0 16px 1.5rem;
          transition: all 0.3s ease;
        }

        .stat-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .stat-desc {
          font-size: 0.72rem;
          color: #888888;
          line-height: 1.5;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.06em;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-heading {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .about-heading {
            font-size: 2rem;
          }

          .download-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
