"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value, duration = 1.3, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px 0px 0px 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  // Extract pure number from string if provided like "10" or "750"
  const numericValue = typeof value === "number" ? value : parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      // easeOutExpo
      const progress = frame === totalFrames ? 1 : 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = Math.round(start + (end - start) * progress);
      setDisplayValue(current);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? displayValue : 0}
      {suffix}
    </span>
  );
}
