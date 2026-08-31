"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient Large Glow Spotlight */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: 0.15,
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 250,
          mass: 0.5,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 210, 255, 0.45) 0%, rgba(14, 165, 233, 0.25) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          mixBlendMode: "screen",
        }}
      />

      {/* Sharp Precision Inner Dot */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: mousePosition.x - (isHovered ? 18 : 6),
          y: mousePosition.y - (isHovered ? 18 : 6),
          width: isHovered ? 36 : 12,
          height: isHovered ? 36 : 12,
          backgroundColor: isHovered ? "rgba(0, 210, 255, 0.15)" : "#00D2FF",
          border: isHovered ? "1.5px solid rgba(0, 210, 255, 0.8)" : "none",
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.1,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          boxShadow: isHovered ? "0 0 15px rgba(0, 210, 255, 0.6)" : "0 0 8px #00D2FF",
        }}
      />
    </>
  );
}
