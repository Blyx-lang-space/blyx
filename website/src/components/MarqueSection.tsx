"use client";
import React from "react";
import MarqueeAlongSvgPath from "@/components/MarqueeAlongSvgPath";

/* A horizontal sine-wave path across a 1200×200 viewBox */
const SINE_PATH =
  "M0,100 C100,40 200,160 300,100 C400,40 500,160 600,100 C700,40 800,160 900,100 C1000,40 1100,160 1200,100";

const TAGS = [
  { label: "tensor<T,D1,D2>", color: "#e05d44" },
  { label: "gpu { }",          color: "#7c3aed" },
  { label: "actor",            color: "#2563eb" },
  { label: "let",              color: "#16a34a" },
  { label: "fn forward()",     color: "#e05d44" },
  { label: "blyxpkg",          color: "#0ea5e9" },
  { label: "blyxc",            color: "#f59e0b" },
  { label: "blyx-analyzer",    color: "#ec4899" },
  { label: "SPIR-V",           color: "#7c3aed" },
  { label: "BIR",              color: "#16a34a" },
  { label: "NVPTX",            color: "#2563eb" },
  { label: "blyxfmt",          color: "#e05d44" },
];

export default function MarqueSection() {
  return (
    <section style={{
      background: "#111827",
      borderTop: "1px solid #374151",
      borderBottom: "1px solid #374151",
      overflow: "hidden",
      padding: "clamp(48px,6vw,80px) 0",
    }}>
      {/* Label */}
      <div style={{
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(13px,1.5vw,15px)",
        color: "#4b5563",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "clamp(32px,5vw,56px)",
      }}>
        Built with the Blyx Ecosystem
      </div>

      {/* Marquee along sine wave path */}
      <div style={{ width: "100%", height: "clamp(160px,20vw,240px)", position: "relative" }}>
        <MarqueeAlongSvgPath
          path={SINE_PATH}
          viewBox="0 0 1200 200"
          width="100%"
          height="100%"
          baseVelocity={12}
          repeat={2}
          slowdownOnHover
          slowDownFactor={0.15}
          preserveAspectRatio="xMidYMid meet"
          enableRollingZIndex={false}
          className="w-full h-full"
        >
          {TAGS.map(({ label, color }) => (
            <div
              key={label}
              style={{
                transform: "translate(-50%, -50%)",
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: 700,
                fontSize: "clamp(13px,1.5vw,17px)",
                color,
                background: "rgba(17,24,39,0.92)",
                border: `1.5px solid ${color}`,
                borderRadius: "0",
                padding: "6px 16px",
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>

      {/* Second row — reverse direction */}
      <div style={{ width: "100%", height: "clamp(160px,20vw,240px)", position: "relative" }}>
        <MarqueeAlongSvgPath
          path={SINE_PATH}
          viewBox="0 0 1200 200"
          width="100%"
          height="100%"
          baseVelocity={10}
          direction="reverse"
          repeat={2}
          slowdownOnHover
          slowDownFactor={0.15}
          preserveAspectRatio="xMidYMid meet"
          enableRollingZIndex={false}
          className="w-full h-full"
        >
          {[
            { label: "Memory Safe",         color: "#e05d44" },
            { label: "Zero GC",             color: "#7c3aed" },
            { label: "GPU Native",          color: "#2563eb" },
            { label: "Actor Concurrent",    color: "#16a34a" },
            { label: "Compile-Time Safety", color: "#f59e0b" },
            { label: "Static Tensors",      color: "#ec4899" },
            { label: "LLVM Backend",        color: "#0ea5e9" },
            { label: "Zero Cost Abstractions", color: "#e05d44" },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                transform: "translate(-50%, -50%)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(13px,1.5vw,16px)",
                color: "#f9fafb",
                background: color,
                borderRadius: "0",
                padding: "6px 18px",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>
    </section>
  );
}
