"use client";
import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

/* Blyx-relevant tech icons from public CDN */
const orbits = [
  {
    /* inner ring — smallest, fastest */
    radiusPx:  { mobile: 120, desktop: 190 },
    durationS: 18,
    cw: true,
    icons: [
      { src: "https://cdn.simpleicons.org/python/white",     alt: "Python",  angle: -60 },
      { src: "https://cdn.simpleicons.org/llvm/white",       alt: "LLVM",    angle:   0 },
      { src: "https://cdn.simpleicons.org/rust/white",       alt: "Rust",    angle:  60 },
    ],
  },
  {
    /* middle ring */
    radiusPx:  { mobile: 170, desktop: 255 },
    durationS: 26,
    cw: false,
    icons: [
      { src: "https://cdn.simpleicons.org/nvidia/white",     alt: "CUDA/GPU", angle:   0 },
      { src: "https://cdn.simpleicons.org/react/white",      alt: "React",    angle: -90 },
    ],
  },
  {
    /* outer ring — largest, slowest */
    radiusPx:  { mobile: 220, desktop: 320 },
    durationS: 34,
    cw: true,
    icons: [
      { src: "https://cdn.simpleicons.org/cplusplus/white",  alt: "C++",      angle: -60 },
      { src: "https://cdn.simpleicons.org/webassembly/white",alt: "Wasm",     angle:   0 },
      { src: "https://cdn.simpleicons.org/linux/white",      alt: "Linux",    angle:  60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  /* Sphere sits at the bottom-centre; rings emerge from it */
  const sphereSize = { mobile: 200, desktop: 280 };

  return (
    <section style={{
      background: "#111827",
      borderTop: "1px solid #1f2937",
      borderBottom: "1px solid #1f2937",
      padding: "clamp(56px,7vw,96px) clamp(20px,5vw,80px)",
      overflow: "hidden",
    }}>
      {/* Section label */}
      <div style={{
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(11px,1.2vw,13px)",
        color: "#4b5563",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: "clamp(40px,5vw,64px)",
      }}>
        Built with the Blyx Ecosystem
      </div>

      {/* Orbit stage */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "clamp(360px,45vw,580px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        overflow: "hidden",
      }}>
        {/* Keyframe styles */}
        <style>{`
          @keyframes orbit-cw {
            from { transform: rotate(var(--start-angle)); }
            to   { transform: rotate(calc(var(--start-angle) + 360deg)); }
          }
          @keyframes orbit-ccw {
            from { transform: rotate(var(--start-angle)); }
            to   { transform: rotate(calc(var(--start-angle) - 360deg)); }
          }
          @keyframes counter-cw {
            from { transform: rotate(var(--counter-offset, 0deg)); }
            to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)); }
          }
          @keyframes counter-ccw {
            from { transform: rotate(var(--counter-offset, 0deg)); }
            to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)); }
          }
          .orbit-icon-btn:hover img { filter: brightness(1.3); }
        `}</style>

        {/* Particle sphere — anchored to bottom-centre, half hidden below fold */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 50%)",
          width: `clamp(${sphereSize.mobile}px, 25vw, ${sphereSize.desktop}px)`,
          aspectRatio: "1 / 1",
          pointerEvents: "none",
          zIndex: 10,
        }}>
          <ParticleSphereAnimation />
        </div>

        {/* Rings */}
        {orbits.map((orbit, oi) => {
          const orbitAnim   = orbit.cw ? "orbit-cw"   : "orbit-ccw";
          const counterAnim = orbit.cw ? "counter-cw" : "counter-ccw";

          /* Mirror icons: original + 180° offset copies */
          const allIcons = [
            ...orbit.icons,
            ...orbit.icons.map(ic => ({ ...ic, angle: ic.angle + 180, alt: `${ic.alt}-m` })),
          ];

          const D = `clamp(${orbit.radiusPx.mobile * 2}px, ${orbit.radiusPx.desktop / 5.5}vw, ${orbit.radiusPx.desktop * 2}px)`;

          return (
            <div
              key={oi}
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 50%)",
                width: D,
                height: D,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {allIcons.map((ic, ii) => (
                <div
                  key={ii}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    height: "50%",
                    marginLeft: "-20px",
                    transformOrigin: "bottom center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    /* @ts-ignore */
                    "--start-angle": `${ic.angle}deg`,
                    animation: `${orbitAnim} ${orbit.durationS}s linear infinite`,
                  } as React.CSSProperties}
                >
                  <div
                    className="orbit-icon-btn"
                    style={{
                      padding: "clamp(8px,1vw,14px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "50%",
                      background: "rgba(17,24,39,0.9)",
                      marginTop: "-20px",
                      position: "relative",
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      /* @ts-ignore */
                      "--counter-offset": `${-ic.angle}deg`,
                      animation: `${counterAnim} ${orbit.durationS}s linear infinite`,
                    } as React.CSSProperties}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={ic.src}
                      alt={ic.alt}
                      width={28}
                      height={28}
                      style={{
                        width: "clamp(20px,2.2vw,32px)",
                        height: "clamp(20px,2.2vw,32px)",
                        display: "block",
                        filter: "brightness(0.9)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Legend row */}
      <div style={{
        marginTop: "clamp(32px,4vw,56px)",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(16px,3vw,40px)",
        flexWrap: "wrap",
      }}>
        {[
          { label: "Python",  color: "#3b82f6" },
          { label: "LLVM",    color: "#e05d44" },
          { label: "Rust",    color: "#fb923c" },
          { label: "GPU/CUDA",color: "#a78bfa" },
          { label: "C++",     color: "#34d399" },
          { label: "Wasm",    color: "#60a5fa" },
        ].map(({ label, color }) => (
          <div key={label} style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(12px,1.3vw,14px)",
            color: "#9ca3af",
            display: "flex", alignItems: "center", gap: "7px",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0 }} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}
