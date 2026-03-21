"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particles = useRef([]);
  const PARTICLE_COUNT = 120;
  const RADIUS = 2.5;
  const LINE_DIST = 160;
  const MAX_OPACITY = 0.25;

  function resizeCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function initParticles() {
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = 0.3 + Math.random() * 0.25;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      };
    });
  }

  function getColors() {
    const isLight = document.documentElement.classList.contains("light-mode") ||
                    document.body.classList.contains("light-mode");
    return isLight
      ? { dot: "#1a7a40", line: "26,122,64", bg: "#f0f4f0" }
      : { dot: "#39ff6e", line: "57,255,110", bg: "#0a0f0a" };
  }

  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const { dot, line, bg } = getColors();
    
    // Clear with theme background color to avoid trails but allow overlay
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw lines
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const a = particles.current[i];
        const b = particles.current[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINE_DIST) {
          const opacity = MAX_OPACITY * (1 - dist / LINE_DIST);
          ctx.strokeStyle = `rgba(${line},${opacity.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    ctx.fillStyle = dot;
    for (const p of particles.current) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, RADIUS, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Move particles
    for (const p of particles.current) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < RADIUS) { p.x = RADIUS; p.vx *= -1; }
      else if (p.x > window.innerWidth - RADIUS) { p.x = window.innerWidth - RADIUS; p.vx *= -1; }
      if (p.y < RADIUS) { p.y = RADIUS; p.vy *= -1; }
      else if (p.y > window.innerHeight - RADIUS) { p.y = window.innerHeight - RADIUS; p.vy *= -1; }
    }

    animationRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
    initParticles();
    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => { resizeCanvas(canvas); initParticles(); };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
