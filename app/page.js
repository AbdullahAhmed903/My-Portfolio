"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHub from "./components/GitHub";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          
          <section id="about" className={`${styles.section} about-section-wrapper`}>
            <About />
          </section>

          <Skills />

          <section id="experience" className={`${styles.section} experience-section-wrapper`}>
            <Experience />
          </section>

          <section id="github" className={styles.section}>
            <div className={styles.sectionInner}>
              <GitHub />
            </div>
          </section>

          <section id="projects" className={`${styles.section} projects-section-wrapper`}>
            <Projects />
          </section>

          <Contact />
        </main>
      </div>
    </>
  );
}
