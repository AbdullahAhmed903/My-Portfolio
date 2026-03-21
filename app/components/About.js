export default function About() {
  return (
    <>
      <h2 style={{
        textAlign: "center", 
        fontSize: "2.2rem", 
        fontWeight: 700, 
        marginBottom: 24, 
        background: "linear-gradient(90deg, var(--accent) 0%, #8be9fd 100%)", 
        WebkitBackgroundClip: "text", 
        WebkitTextFillColor: "transparent", 
        backgroundClip: "text", 
        letterSpacing: 1
      }}>About</h2>
      <h3 style={{margin: "0 0 12px 0", color: "#8be9fd", fontWeight: 600}}>Who am I?</h3>
      <p style={{marginTop: 0, lineHeight: 1.8, color: "var(--text-secondary)"}}>
        I am a backend developer specializing in Node.js and Mongoose, with a solid foundation built through practical experience and formal education. I completed a comprehensive course at Route Academy, where I honed my skills in building scalable backend systems. I have worked on several projects using Node.js, Mongoose, and additional technologies like Socket.IO to create dynamic, real-time applications.
      </p>
      <p style={{marginTop: 16, lineHeight: 1.8, color: "var(--text-secondary)"}}>
        To broaden my skill set, I interned for three months at CodeAlpha as a web development intern, where I improved my frontend capabilities working with HTML, CSS, JavaScript, and React.js.
      </p>
      <p style={{marginTop: 16, marginBottom: 28, lineHeight: 1.8, color: "var(--text-secondary)"}}>
        Currently, I am further expanding my expertise by taking a course in AWS Cloud through Egypt{"'"}s Digital Pioneers Initiative, and working as a Backend Developer (Node.js) at Tensorik.
      </p>
      <a href="https://ik.imagekit.io/abdullahAhmed/Abdullah-Ahmed-Fathy-Nodejs(cv)-20260217.pdf" target="_blank" rel="noopener noreferrer" download style={{
        display: "inline-block",
        padding: "10px 28px",
        background: "linear-gradient(90deg, var(--accent) 0%, #8be9fd 100%)",
        color: "#fff",
        fontWeight: 700,
        borderRadius: 8,
        textDecoration: "none",
        fontSize: "1.08rem",
        letterSpacing: 0.5,
        boxShadow: "0 4px 12px rgba(0, 200, 117, 0.15)"
      }}>Download My CV</a>
    </>
  );
}
