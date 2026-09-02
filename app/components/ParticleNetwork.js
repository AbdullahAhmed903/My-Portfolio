"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const particles = useRef([]);
  
  const RADIUS = 1.6;

  function getSettings() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    return {
      count: isMobile ? 6 : 45,
      lineDist: isMobile ? 40 : 130,
      mouseDist: isMobile ? 0 : 160,
      maxOpacity: isMobile ? 0.03 : 0.12,
    };
  }

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
    const settings = getSettings();
    particles.current = Array.from({ length: settings.count }, () => {
      const angle = Math.random() * 2 * Math.PI;
      const speed = 0.2 + Math.random() * 0.3;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        baseVx: Math.cos(angle) * speed,
        baseVy: Math.sin(angle) * speed,
        hue: Math.random() > 0.5 ? "0, 210, 255" : "14, 165, 233"
      };
    });
  }

  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // Clear fully with transparent background so underlying CSS background gradient shows
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const mouse = mouseRef.current;
    const settings = getSettings();

    // Draw particle lines between each other
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const a = particles.current[i];
        const b = particles.current[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < settings.lineDist) {
          const opacity = (settings.maxOpacity * (1 - dist / settings.lineDist)).toFixed(3);
          ctx.strokeStyle = `rgba(${a.hue}, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Connect particles to mouse cursor when hovered
    if (mouse.active) {
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < settings.mouseDist) {
          const opacity = (0.2 * (1 - dist / settings.mouseDist)).toFixed(3);
          ctx.strokeStyle = `rgba(0, 210, 255, ${opacity})`;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Slight gentle magnetic pull
          p.x += dx * 0.008;
          p.y += dy * 0.008;
        }
      }
    }

    // Draw glowing particles
    for (const p of particles.current) {
      ctx.fillStyle = `rgba(${p.hue}, 0.8)`;
      ctx.shadowColor = `rgba(${p.hue}, 0.5)`;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, RADIUS, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
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
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
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
