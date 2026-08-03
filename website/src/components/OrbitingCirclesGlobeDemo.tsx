"use client";
import React from "react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

/*
 * 1:1 port of the user's Tailwind component → pure inline styles
 *
 * Tailwind → px mapping used here:
 *   w-75  = 300px   w-110 = 440px   w-145 = 580px
 *   w-150 = 600px   w-180 = 720px   w-220 = 880px
 *   w-265 = 1060px  h-110 = 440px   h-160 = 640px
 *   ml-8  = 32px    mt-8  = 32px    p-3   = 12px
 */

const orbits = [
  {
    /* ring 1: w-110 h-110 md:w-180 md:h-180  → clamp(440px … 720px) */
    sizePx:   "clamp(440px, 58vw, 720px)",
    duration: 18,
    cw:       true,
    icons: [
      { src: "https://images.shadcnspace.com/assets/svgs/supabase.svg", alt: "Supabase", angle: -60 },
      { src: "https://images.shadcnspace.com/assets/svgs/gemini.svg",   alt: "Gemini",   angle:   0 },
      { src: "https://images.shadcnspace.com/assets/svgs/make.svg",     alt: "Make",     angle:  60 },
    ],
  },
  {
    /* ring 2: w-150 h-150 md:w-220 md:h-220  → clamp(600px … 880px) */
    sizePx:   "clamp(600px, 70vw, 880px)",
    duration: 24,
    cw:       false,
    icons: [
      { src: "https://images.shadcnspace.com/assets/svgs/figma.svg", alt: "Figma", angle:   0 },
      { src: "https://images.shadcnspace.com/assets/svgs/slack.svg", alt: "Slack", angle: -90 },
    ],
  },
  {
    /* ring 3: w-180 h-180 md:w-265 md:h-265  → clamp(720px … 1060px) */
    sizePx:   "clamp(720px, 82vw, 1060px)",
    duration: 30,
    cw:       true,
    icons: [
      { src: "https://images.shadcnspace.com/assets/svgs/clude.svg",  alt: "Claude", angle: -60 },
      { src: "https://images.shadcnspace.com/assets/svgs/react.svg",  alt: "React",  angle:   0 },
      { src: "https://images.shadcnspace.com/assets/svgs/python.svg", alt: "Python", angle:  60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    /* outer wrapper: relative, full-width, h-110 md:h-160 → clamp(440px…640px), overflow-hidden, flex, justify-center */
    <div style={{
      position: "relative",
      width: "100%",
      height: "clamp(440px, 55vw, 640px)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      background: "#111827",
    }}>
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
      `}</style>

      {/* Section label — above the sphere */}
      <div style={{
        position: "absolute",
        top: "clamp(24px,4vw,48px)",
        left: 0, right: 0,
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(11px,1.2vw,13px)",
        color: "#4b5563",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        zIndex: 20,
      }}>
        Built with the Blyx Ecosystem
      </div>

      {/* Center particle globe
          absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square
          w-75 md:w-145 → clamp(300px…580px) */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 50%)",
        width: "clamp(300px, 40vw, 580px)",
        aspectRatio: "1 / 1",
        pointerEvents: "none",
        zIndex: 10,
      }}>
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const orbitAnim   = orbit.cw ? "orbit-cw"   : "orbit-ccw";
        const counterAnim = orbit.cw ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          /* absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
             rounded-full border border-border  */
          <div
            key={index}
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translate(-50%, 50%)",
              width: orbit.sizePx,
              height: orbit.sizePx,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.10)",
              flexShrink: 0,
            }}
          >
            {allIcons.map((iconData, iconIndex) => (
              /* absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center */
              <div
                key={iconIndex}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  height: "50%",
                  marginLeft: "-32px",  /* -ml-8 */
                  transformOrigin: "bottom center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  /* CSS custom props via style cast */
                  ["--start-angle" as string]: `${iconData.angle}deg`,
                  animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                } as React.CSSProperties}
              >
                {/* p-3 border border-border rounded-full bg-background -mt-8 relative z-10 */}
                <div
                  style={{
                    padding: "12px",           /* p-3 */
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "50%",        /* rounded-full */
                    background: "#1f2937",      /* bg-background (dark) */
                    marginTop: "-32px",         /* -mt-8 */
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    /* counter-rotation */
                    ["--counter-offset" as string]: `${-iconData.angle}deg`,
                    animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconData.src}
                    alt={iconData.alt}
                    width={32}
                    height={32}
                    style={{
                      width: "clamp(24px,2.5vw,32px)",   /* w-6 md:w-8 */
                      height: "clamp(24px,2.5vw,32px)",  /* h-6 md:h-8 */
                      display: "block",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
