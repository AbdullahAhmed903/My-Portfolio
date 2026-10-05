import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHub from "./components/GitHub";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import ParticleNetwork from "./components/ParticleNetwork";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", overflowX: "hidden" }}>
      {/* Top laser reading beam */}
      <ScrollProgress />

      {/* Interactive glowing spotlight cursor */}
      <CustomCursor />

      {/* Interactive electric background network */}
      <ParticleNetwork />

      {/* Navigation Header */}
      <Navbar />

      <main className={styles.main}>
        <Hero />
        
        <section id="about" className={styles.section}>
          <About />
        </section>

        <section id="skills" className={styles.section}>
          <Skills />
        </section>

        <section id="experience" className={styles.section}>
          <Experience />
        </section>

        <section id="github" className={styles.section}>
          <GitHub />
        </section>

        <section id="projects" className={styles.section}>
          <Projects />
        </section>

        <section id="contact" className={styles.section}>
          <Contact />
        </section>
      </main>
    </div>
  );
}
