"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #00D2FF 0%, #0EA5E9 50%, #2563EB 100%)",
        boxShadow: "0 0 12px rgba(0, 210, 255, 0.8), 0 0 24px rgba(14, 165, 233, 0.5)",
        zIndex: 9999,
        pointerEvents: "none"
      }}
    />
  );
}
