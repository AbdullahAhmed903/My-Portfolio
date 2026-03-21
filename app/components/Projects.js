export default function Projects() {
  const projects = [
    {
      title: "Task-Manager (NodeJs,NestJs)",
      desc: "A full-featured backend system for managing Tasks across Team",
      img: "https://ik.imagekit.io/abdullahAhmed/Screenshot%202026-03-21%20041442.png",
      link: "https://github.com/AbdullahAhmed903/TaskManager-nestjs-mysql.git"
    },
    {
      title: "Doctor-System (NodeJs,Express)",
      desc: "A full-featured backend system for managing doctor appointments and patient records.",
      img: "https://ik.imagekit.io/abdullahAhmed/Screenshot%202026-01-25%20002232.png",
      link: "https://github.com/AbdullahAhmed903/DoctorSystem.git"
    },
    {
      title: "Intern-Hub (MERN-stack)",
      desc: "A dynamic web app bridging interns and companies, with real-time chat.",
      img: "https://abdullahahmed903.github.io/portfolio/assets/imgs/Screenshot%202024-09-12%20045505.png",
      link: "https://github.com/AbdullahAhmed903/Intern-Hub-Api.git"
    },
    {
      title: "Book-Buddy (React)",
      desc: "Interactive book library with search and categorization.",
      img: "https://abdullahahmed903.github.io/portfolio/assets/imgs/Screenshot%20(329).png",
      link: "https://github.com/AbdullahAhmed903/codeAplha-Task3.git"
    },
    {
      title: "Quick-Calc (JS)",
      desc: "User-friendly calculator for basic math operations.",
      img: "https://abdullahahmed903.github.io/portfolio/assets/imgs/Screenshot%202024-09-11%20222348.png",
      link: "https://github.com/AbdullahAhmed903/Calculator.git"
    },
    {
      title: "Age-Finder (JS)",
      desc: "Simple app to calculate age from birthdate.",
      img: "https://abdullahahmed903.github.io/portfolio/assets/imgs/Screenshot%202024-09-11%20230141.png",
      link: "https://github.com/AbdullahAhmed903/CodeAlpha-taskOne.git"
    },
    {
      title: "Beat-Box (JS)",
      desc: "Dynamic music player for uploading and playing music.",
      img: "https://abdullahahmed903.github.io/portfolio/assets/imgs/Screenshot%20(330).png",
      link: "https://github.com/AbdullahAhmed903/CodeAlpha-taskOne.git"
    }
  ];

  return (
    <section id="projects">
      <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: 700, marginBottom: 32, background: "linear-gradient(90deg, var(--accent) 0%, #8be9fd 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", letterSpacing: 1 }}>Projects</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
        {projects.map((p, i) => (
          <div key={i} style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: 320,
            transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "var(--card-border)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
            }}>
            <img src={p.img} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover", borderBottom: "1px solid var(--card-border)" }} />
            <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700, color: "#8be9fd" }}>{p.title}</h3>
              <p style={{ margin: "12px 0 20px 0", color: "var(--text-secondary)", flex: 1, fontSize: "0.95rem", lineHeight: 1.6 }}>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                color: "var(--accent)",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.9rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}>
                View Code <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
