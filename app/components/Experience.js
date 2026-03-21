export default function Experience() {
  return (
    <section id="experience">
      <h2 style={{
        textAlign: "center",
        fontSize: "2.2rem",
        fontWeight: 700,
        marginBottom: 32,
        background: "linear-gradient(90deg, var(--accent) 0%, #8be9fd 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        letterSpacing: 1
      }}>Experience</h2>

      {/* Work Experience */}
      <h3 style={{ margin: "0 0 16px 0", color: "#8be9fd", fontWeight: 700, fontSize: "1.25rem" }}>Work Experience</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        <li style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: "20px 24px",
          lineHeight: 1.7,
          color: "var(--foreground)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <b style={{ color: "var(--accent)", display: "block", marginBottom: 4 }}>03/2026 – Present:</b>
          <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Backend Developer (Node.js)</span><br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Tensorik</span>
        </li>
        <li style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: "20px 24px",
          lineHeight: 1.7,
          color: "var(--foreground)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <b style={{ color: "var(--accent)", display: "block", marginBottom: 4 }}>08/2024 – 10/2024</b>
          <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Web Development Intern</span><br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>CodeAlpha (3 months)</span>
        </li>
      </ul>

      {/* Education */}
      <h3 style={{ margin: "0 0 16px 0", color: "#8be9fd", fontWeight: 700, fontSize: "1.25rem" }}>Education</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        <li style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: "20px 24px",
          lineHeight: 1.7,
          color: "var(--foreground)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <b style={{ color: "var(--accent)", display: "block", marginBottom: 4 }}>09/2020 – 06/2024</b>
          <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>B.E Information Systems and Technology</span><br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Faculty of Management Technology and Information Systems (M.T.I.S) at Port Said University &mdash; GPA: A</span>
        </li>
      </ul>

      {/* Courses & Training */}
      <h3 style={{ margin: "0 0 16px 0", color: "#8be9fd", fontWeight: 700, fontSize: "1.25rem" }}>Courses &amp; Training</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
        <li style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: "20px 24px",
          lineHeight: 1.7,
          color: "var(--foreground)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <b style={{ color: "var(--accent)", display: "block", marginBottom: 4 }}>07/2024 – 10/2024:</b>
          <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>AWS Cloud Architecting</span><br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Completed AWS Cloud Practitioner certification, then AWS Cloud Architecting at Egypt's Digital Pioneers</span>
        </li>
        <li style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          borderRadius: 12,
          padding: "20px 24px",
          lineHeight: 1.7,
          color: "var(--foreground)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <b style={{ color: "var(--accent)", display: "block", marginBottom: 4 }}>09/2022 – 01/2023</b>
          <span style={{ fontSize: "1.1rem", fontWeight: 600 }}>Back-end Developer</span><br />
          <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Completed intensive training at Route Academy, specializing in backend development using Node.js and Mongoose</span>
        </li>
      </ul>
    </section>
  );
}
