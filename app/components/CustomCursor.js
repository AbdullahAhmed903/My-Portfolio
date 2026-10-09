"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);

  // Spring physics executed inside Framer Motion render loop (zero React re-renders on mousemove)
  const spotlightSpringX = useSpring(rawX, { damping: 35, stiffness: 250, mass: 0.5 });
  const spotlightSpringY = useSpring(rawY, { damping: 35, stiffness: 250, mass: 0.5 });
  const spotlightX = useTransform(spotlightSpringX, (val) => val - 200);
  const spotlightY = useTransform(spotlightSpringY, (val) => val - 200);

  const dotSpringX = useSpring(rawX, { damping: 25, stiffness: 400, mass: 0.1 });
  const dotSpringY = useSpring(rawY, { damping: 25, stiffness: 400, mass: 0.1 });
  const dotX = useTransform(dotSpringX, (val) => val - (isHovered ? 18 : 6));
  const dotY = useTransform(dotSpringY, (val) => val - (isHovered ? 18 : 6));

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    let hoverTimeout;
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive-hover");

      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(hoverTimeout);
    };
  }, [isVisible, rawX, rawY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Large Glow Spotlight */}
      <motion.div
        aria-hidden="true"
        className="custom-cursor-spotlight"
        style={{
          x: spotlightX,
          y: spotlightY,
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          opacity: 0.15,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Sharp Precision Inner Dot */}
      <motion.div
        aria-hidden="true"
        className={`custom-cursor-dot ${isHovered ? "is-hovered" : ""}`}
        style={{
          x: dotX,
          y: dotY,
          width: isHovered ? 36 : 12,
          height: isHovered ? 36 : 12,
        }}
        transition={{ duration: 0.15 }}
      />

      <style jsx global>{`
        .custom-cursor-spotlight {
          position: fixed;
          top: 0;
          left: 0;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.45) 0%, rgba(14, 165, 233, 0.25) 45%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: screen;
          will-change: transform;
        }

        :global(html.light-mode) .custom-cursor-spotlight {
          background: radial-gradient(circle, rgba(2, 132, 199, 0.3) 0%, rgba(37, 99, 235, 0.15) 45%, transparent 70%);
          mix-blend-mode: multiply;
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          background-color: #00D2FF;
          box-shadow: 0 0 8px #00D2FF;
          will-change: transform;
          transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .custom-cursor-dot.is-hovered {
          background-color: rgba(0, 210, 255, 0.15);
          border: 1.5px solid rgba(0, 210, 255, 0.8);
          box-shadow: 0 0 15px rgba(0, 210, 255, 0.6);
        }

        :global(html.light-mode) .custom-cursor-dot {
          background-color: #0284c7;
          box-shadow: 0 0 8px rgba(2, 132, 199, 0.8), 0 0 2px rgba(15, 23, 42, 0.2);
        }

        :global(html.light-mode) .custom-cursor-dot.is-hovered {
          background-color: rgba(2, 132, 199, 0.15);
          border: 1.5px solid #0284c7;
          box-shadow: 0 0 15px rgba(2, 132, 199, 0.5);
        }
      `}</style>
    </>
  );
}
