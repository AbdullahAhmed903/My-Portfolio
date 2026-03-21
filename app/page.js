"use client";
import ParticleNetwork from "./components/ParticleNetwork";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ParticleNetwork />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main className={styles.main}>
          <Hero />
          
          <section id="about" className={styles.section}>
            <div className={styles.sectionInner}>
              <About />
            </div>
          </section>

          <Skills />

          <section id="experience" className={styles.section}>
            <div className={styles.sectionInner}>
              <Experience />
            </div>
          </section>

          <section id="projects" className={styles.section}>
            <div className={styles.sectionInner}>
              <Projects />
            </div>
          </section>

          <Contact />
        </main>
      </div>
    </>
  );
}
