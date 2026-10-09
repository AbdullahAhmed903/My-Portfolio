"use client";
import "./BorderBeam.css";

export default function BorderBeam({
  duration = 8,
  size = 200,
  colorFrom = "#00D2FF",
  colorTo = "#3B82F6",
  borderWidth = 1.5,
  anchor = 90
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
        padding: `${borderWidth}px`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude"
      }}
    >
      <div
        className="border-beam-line"
        style={{
          position: "absolute",
          aspectRatio: "1/1",
          width: `${size}px`,
          background: `conic-gradient(from ${anchor}deg at 50% 50%, transparent 0deg, ${colorFrom} 40deg, ${colorTo} 80deg, transparent 100deg)`,
          animation: `beamSpin ${duration}s linear infinite`,
          offsetPath: "rect(0 auto auto 0 round inherit)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
      </div>
  );
}
