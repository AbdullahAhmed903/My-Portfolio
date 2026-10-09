"use client";
import "./CustomCursor.css";
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

      </>
  );
}
