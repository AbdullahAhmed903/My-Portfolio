"use client";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <ScrollReveal>
            <div className="contact-label">LET'S TALK</div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="contact-heading">
              <span className="heading-normal">Get in </span>
              <span className="heading-italic">Touch</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="contact-desc">
              Open for opportunities, collaborations, or just a conversation
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <a href="mailto:abdullahahmed02000@gmail.com" className="contact-email">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
              </svg>
              <span>abdullahahmed02000@gmail.com</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="contact-socials">
              <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" className="social-link">
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/abdullah-ahmed-8a6852250/" target="_blank" rel="noopener noreferrer" className="social-link">
                LINKEDIN
              </a>
              <a href="mailto:abdullahahmed02000@gmail.com" className="social-link">
                EMAIL
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-copy">© 2026 Abdullah Ahmed Fathy. All rights reserved.</p>
          <p className="footer-built">
            Built with <span className="heart">♥</span> and Node.js
          </p>
        </div>
      </footer>

      <style jsx>{`
        .contact-section {
          padding: 100px 0 60px 0;
          position: relative;
          z-index: 1;
          background: #0a0a0f;
        }

        .contact-inner {
          max-width: 800px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
        }

        .contact-label {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          color: #00e5a0;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }

        .contact-heading {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.1;
          font-family: 'Arial Black', 'Arial Bold', sans-serif;
        }

        .heading-normal {
          color: #ffffff;
        }

        .heading-italic {
          font-family: 'Georgia', serif;
          font-style: italic;
          color: #00e5a0;
        }

        .contact-desc {
          font-size: 1rem;
          color: #888888;
          margin: 0;
          line-height: 1.6;
        }

        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 8px;
          padding: 16px 32px;
          color: #888888;
          text-decoration: none;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .contact-email:hover {
          border-color: #00e5a0;
          color: #00e5a0;
          background: rgba(0, 229, 160, 0.05);
        }

        .contact-socials {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-top: 16px;
        }

        .social-link {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #888888;
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.1em;
        }

        .social-link:hover {
          color: #00e5a0;
        }

        .site-footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding: 2rem 4rem;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-copy {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          color: #888888;
          margin: 0;
          letter-spacing: 0.06em;
        }

        .footer-built {
          font-family: 'Courier New', monospace;
          font-size: 0.68rem;
          color: #888888;
          margin: 0;
        }

        .heart {
          color: #00e5a0;
        }

        @media (max-width: 768px) {
          .contact-email {
            font-size: 0.75rem;
            padding: 14px 24px;
          }

          .contact-email span {
            display: none;
          }

          .contact-email::after {
            content: 'Email Me';
          }

          .contact-socials {
            flex-wrap: wrap;
            gap: 16px;
          }

          .contact-heading {
            font-size: 2rem;
          }

          .site-footer {
            padding: 1.5rem 2rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
