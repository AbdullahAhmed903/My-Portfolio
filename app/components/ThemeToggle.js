"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("toggle-theme", { detail: { light } }));
  }, [light]);

  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle dark/light mode"
      type="button"
    >
      {/* Unicode crescent moon for dark, sun for light */}
      <span style={{ fontSize: 16, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", width: 20, height: 20 }}>
        {light ? "☀" : "" /* Unicode crescent moon */}
      </span>
      <style jsx>{`
        .theme-toggle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
          margin-left: 0;
        }
        .theme-toggle-btn:hover {
          background: rgba(255,255,255,0.08);
        }
      `}</style>
    </button>
  );
}
