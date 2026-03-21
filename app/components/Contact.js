export default function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="contact-label">Contact</p>
          <h2 className="contact-heading">Get in Touch</h2>

          <a href="mailto:abdullahahmed02000@gmail.com" className="contact-email-pill">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
            </svg>
            <span>abdullahahmed02000@gmail.com</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-socials">
          <a href="https://github.com/AbdullahAhmed903" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/abdullah-ahmed8a6852250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <a href="mailto:abdullahahmed02000@gmail.com" aria-label="Email" className="footer-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.98 1.86l-7.02 4.68a2.25 2.25 0 0 1-2.5 0l-7.02-4.68a2.25 2.25 0 0 1-.98-1.86V6.75" />
            </svg>
          </a>
        </div>
        <p className="footer-copy">© 2026 Abdullah Ahmed</p>
      </footer>

      <style jsx>{`
        .contact-section {
          padding: 100px 0 80px 0;
          position: relative;
          z-index: 1;
          background: transparent;
        }
        .contact-inner {
          max-width: 800px;
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .contact-label {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          color: var(--text-very-muted);
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
        }
        .contact-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 2.5rem 0;
          line-height: 1.1;
        }
        .contact-email-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--pill-bg);
          border: 1px solid var(--pill-border);
          border-radius: 14px;
          padding: 16px 32px;
          color: var(--text-secondary);
          text-decoration: none;
          font-family: 'Courier New', Courier, monospace;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .contact-email-pill:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          background: rgba(0, 200, 117, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 200, 117, 0.15);
        }

        .site-footer {
          border-top: 1px solid var(--footer-border);
          padding: 48px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
          background: transparent;
        }
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .footer-icon {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-icon:hover { color: var(--text-primary); transform: translateY(-3px); }
        .footer-copy {
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.85rem;
          color: var(--text-very-muted);
          margin: 0;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .contact-email-pill {
            font-size: 0.85rem;
            padding: 14px 24px;
          }
        }
      `}</style>
    </>
  );
}
