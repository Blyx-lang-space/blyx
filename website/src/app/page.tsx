"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

/* Lazy-load client components */
const WavesShader = dynamic(() => import("@/components/WavesShader"), { ssr: false });
const OrbitingSection = dynamic(() => import("@/components/OrbitingCirclesGlobeDemo"), { ssr: false });

/* ─── Shared style helpers ─────────────────────────────────── */
const sectionPad = "clamp(72px,9vw,120px) clamp(20px,5vw,80px)";
const h2Style: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 900,
  fontSize: "clamp(34px,5vw,52px)",
  color: "#111827",
  letterSpacing: "-1.5px",
  lineHeight: 1.15,
  marginBottom: "20px",
};
const bodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(17px,2vw,21px)",
  color: "#6b7280",
  lineHeight: 1.75,
};

/* ─── SVG Icon components (no emojis) ────────────────────── */
function IconPerformance() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="0" fill="#fff1ee"/>
      <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z"
        fill="none" stroke="#e05d44" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="3" fill="#e05d44"/>
    </svg>
  );
}
function IconReliability() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="0" fill="#eff6ff"/>
      <path d="M24 7 L38 13 L38 25 C38 33 31 39 24 42 C17 39 10 33 10 25 L10 13 Z"
        fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round"/>
      <polyline points="18,24 22,28 30,20" stroke="#2563eb" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconProductivity() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="0" fill="#f0fdf4"/>
      <circle cx="24" cy="24" r="7" stroke="#16a34a" strokeWidth="2.5"/>
      <path d="M24 8 L24 13 M24 35 L24 40 M8 24 L13 24 M35 24 L40 24"
        stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M13.1 13.1 L16.6 16.6 M31.4 31.4 L34.9 34.9
               M34.9 13.1 L31.4 16.6 M16.6 31.4 L13.1 34.9"
        stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="0" fill="#fff1ee"/>
      <circle cx="22" cy="22" r="6" fill="none" stroke="#e05d44" strokeWidth="2"/>
      <circle cx="8" cy="10" r="3" fill="none" stroke="#e05d44" strokeWidth="1.8"/>
      <circle cx="36" cy="10" r="3" fill="none" stroke="#e05d44" strokeWidth="1.8"/>
      <circle cx="8" cy="34" r="3" fill="none" stroke="#e05d44" strokeWidth="1.8"/>
      <circle cx="36" cy="34" r="3" fill="none" stroke="#e05d44" strokeWidth="1.8"/>
      <line x1="16" y1="18" x2="10.5" y2="12" stroke="#e05d44" strokeWidth="1.5"/>
      <line x1="28" y1="18" x2="33.5" y2="12" stroke="#e05d44" strokeWidth="1.5"/>
      <line x1="16" y1="26" x2="10.5" y2="32" stroke="#e05d44" strokeWidth="1.5"/>
      <line x1="28" y1="26" x2="33.5" y2="32" stroke="#e05d44" strokeWidth="1.5"/>
    </svg>
  );
}
function IconCLI() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="0" fill="#eff6ff"/>
      <rect x="6" y="10" width="32" height="24" rx="2" stroke="#2563eb" strokeWidth="2"/>
      <polyline points="12,22 18,17 12,12" stroke="#2563eb" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" transform="translate(0,4)"/>
      <line x1="20" y1="26" x2="32" y2="26" stroke="#2563eb" strokeWidth="2"
        strokeLinecap="round"/>
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="0" fill="#f0fdf4"/>
      <circle cx="22" cy="22" r="4" fill="none" stroke="#16a34a" strokeWidth="2"/>
      <circle cx="8" cy="14" r="3.5" fill="none" stroke="#16a34a" strokeWidth="1.8"/>
      <circle cx="36" cy="14" r="3.5" fill="none" stroke="#16a34a" strokeWidth="1.8"/>
      <circle cx="8" cy="32" r="3.5" fill="none" stroke="#16a34a" strokeWidth="1.8"/>
      <circle cx="36" cy="32" r="3.5" fill="none" stroke="#16a34a" strokeWidth="1.8"/>
      <line x1="11" y1="15.5" x2="18.5" y2="19.5" stroke="#16a34a" strokeWidth="1.5"/>
      <line x1="33" y1="15.5" x2="25.5" y2="19.5" stroke="#16a34a" strokeWidth="1.5"/>
      <line x1="11" y1="30.5" x2="18.5" y2="24.5" stroke="#16a34a" strokeWidth="1.5"/>
      <line x1="33" y1="30.5" x2="25.5" y2="24.5" stroke="#16a34a" strokeWidth="1.5"/>
    </svg>
  );
}
function IconGPU() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="0" fill="#f5f3ff"/>
      <rect x="10" y="10" width="24" height="24" rx="1" stroke="#7c3aed" strokeWidth="2"/>
      <rect x="16" y="16" width="12" height="12" rx="1" fill="none" stroke="#7c3aed" strokeWidth="1.8"/>
      <line x1="14" y1="6" x2="14" y2="10" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="22" y1="6" x2="22" y2="10" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="30" y1="6" x2="30" y2="10" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="14" y1="34" x2="14" y2="38" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="22" y1="34" x2="22" y2="38" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="30" y1="34" x2="30" y2="38" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="6" y1="16" x2="10" y2="16" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="6" y1="22" x2="10" y2="22" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="6" y1="28" x2="10" y2="28" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="34" y1="16" x2="38" y2="16" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="34" y1="22" x2="38" y2="22" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="34" y1="28" x2="38" y2="28" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* ══ SECTION 1 — HERO (Rust-style 2-column layout) ══ */}
      <section style={{
        background: "#ffffff",
        borderBottom: "4px solid #e5e7eb",
        padding: "clamp(56px,7vw,96px) clamp(20px,5vw,80px)",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(40px,5vw,80px)",
          alignItems: "center",
        }}>

          {/* LEFT — Wordmark + tagline */}
          <div>
            {/* Giant wordmark exactly like "Rust" */}
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(72px,12vw,160px)",
              color: "#111827",
              lineHeight: 0.95,
              letterSpacing: "-6px",
              margin: "0 0 clamp(20px,3vw,36px) 0",
            }}>
              Blyx
            </h1>

            {/* Tagline — same copy as Rust's */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(18px,2.2vw,26px)",
              color: "#374151",
              lineHeight: 1.55,
              margin: 0,
              maxWidth: "520px",
            }}>
              A language empowering everyone<br />
              to build reliable and efficient software.
            </p>
          </div>

          {/* RIGHT — Big CTA button + version link (exactly like Rust) */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(14px,2vw,20px)",
            minWidth: "clamp(200px,20vw,280px)",
          }}>
            <Link href="/download" style={{
              background: "#e05d44",
              color: "#ffffff",
              padding: "clamp(18px,2.5vw,26px) clamp(32px,4vw,56px)",
              borderRadius: "0",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(16px,1.8vw,22px)",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              width: "100%",
              boxSizing: "border-box" as const,
            }}>
              Get Started
            </Link>

            <a
              href="https://github.com/Rahulchaube1/blyxxxx/releases/tag/v0.1.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(15px,1.6vw,19px)",
                color: "#e05d44",
                textDecoration: "underline",
                textAlign: "center",
                textUnderlineOffset: "3px",
              }}
            >
              Version 0.1.0-alpha
            </a>
          </div>
        </div>

        {/* Responsive: stack on mobile */}
        <style>{`
          @media (max-width: 640px) {
            section:first-of-type > div {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            section:first-of-type p {
              margin: 0 auto !important;
            }
          }
        `}</style>
      </section>

      {/* ══ SECTION 2 — WHY BLYX (3 sharp cards, SVG icons, Waves BG) ══ */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #e5e7eb" }}>
        {/* Waves shader background */}
        <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        {/* Very light overlay — cards float on top */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(255,255,255,0.82)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: sectionPad }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "72px" }}>Why Blyx?</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px),1fr))",
            gap: "clamp(24px,3vw,48px)",
          }}>
            {[
              {
                Icon: IconPerformance, title: "Performance",
                bg: "#fff7f5", border: "#fca49b", topBorder: "#e05d44",
                body: "Blyx is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical AI services, run on embedded devices, and easily integrate with existing C and C++ code.",
              },
              {
                Icon: IconReliability, title: "Reliability",
                bg: "#eff6ff", border: "#93c5fd", topBorder: "#2563eb",
                body: "Blyx's rich type system and linear ownership model guarantee memory-safety and thread-safety — enabling you to eliminate data races and buffer overflows at compile-time. No surprises at runtime.",
              },
              {
                Icon: IconProductivity, title: "Productivity",
                bg: "#f0fdf4", border: "#86efac", topBorder: "#16a34a",
                body: "Blyx has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager, smart multi-editor support via the language server, and an auto-formatter.",
              },
            ].map(({ Icon, title, bg, border, topBorder, body }) => (
              <div key={title} style={{
                borderTop: `6px solid ${topBorder}`, borderRadius: "0",
                padding: "clamp(32px,4vw,52px)",
                background: bg,
                border: `1px solid ${border}`,
                borderTopColor: topBorder,
              }}>
                <div style={{ marginBottom: "24px" }}><Icon /></div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 800,
                  fontSize: "clamp(24px,3vw,32px)", color: "#111827",
                  marginBottom: "16px", letterSpacing: "-0.5px",
                }}>{title}</h3>
                <p style={{ ...bodyStyle, color: "#4b5563" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ══ SECTION 3 — BUILD IT IN BLYX (4 use-case cards, SVG icons, Waves BG) ══ */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #e5e7eb" }}>
        {/* Waves shader background */}
        <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        {/* Slightly darker overlay for the grey-tinted section */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(249,250,251,0.80)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: sectionPad }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "72px" }}>Build it in Blyx</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,280px),1fr))",
            gap: "clamp(24px,3vw,40px)",
          }}>
            {[
              {
                Icon: IconAI, color: "#e05d44", bg: "#fff7f5", border: "#fca49b",
                title: "AI & Machine Learning",
                body: "First-class tensor<T, D1, D2> primitives with static shape checking at compile time. Build neural networks with zero dimension mismatch bugs.",
                link: "/learn/book/ch12-tensors-ai", linkLabel: "Building AI Models →",
              },
              {
                Icon: IconCLI, color: "#2563eb", bg: "#eff6ff", border: "#93c5fd",
                title: "Command Line Tools",
                body: "Build fast, small CLI tools with Blyx's robust standard library and zero runtime overhead. Single-binary deployment with no external dependencies.",
                link: "/docs", linkLabel: "Building CLI Tools →",
              },
              {
                Icon: IconNetwork, color: "#16a34a", bg: "#f0fdf4", border: "#86efac",
                title: "Networking",
                body: "Predictable performance, tiny resource footprint, and actor-based lock-free concurrency that scales to millions of simultaneous connections.",
                link: "/learn/book/ch11-actors-concurrency", linkLabel: "Networking in Blyx →",
              },
              {
                Icon: IconGPU, color: "#7c3aed", bg: "#f5f3ff", border: "#c4b5fd",
                title: "GPU Compute",
                body: "Write inline gpu { } blocks compiled directly to SPIR-V and NVPTX. Run AI workloads at full GPU speed without leaving Blyx.",
                link: "/learn/book/ch13-gpu-compute", linkLabel: "GPU Programming →",
              },
            ].map(({ Icon, color, bg, border, title, body, link, linkLabel }) => (
              <div key={title} style={{
                background: bg, padding: "clamp(28px,3vw,44px)",
                borderRadius: "0", border: `1px solid ${border}`,
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ marginBottom: "20px" }}><Icon /></div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 800,
                  fontSize: "clamp(20px,2.5vw,26px)", color: "#111827",
                  marginBottom: "14px", letterSpacing: "-0.4px",
                }}>{title}</h3>
                <p style={{ ...bodyStyle, color: "#4b5563", fontSize: "clamp(15px,1.6vw,18px)", flex: 1, marginBottom: "24px" }}>
                  {body}
                </p>
                <Link href={link} style={{ color, fontWeight: 700, fontSize: "clamp(15px,1.6vw,18px)", textDecoration: "none" }}>
                  {linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ══ SECTION 4 — CODE SHOWCASE ══ */}
      <section style={{ background: "#ffffff", padding: sectionPad, borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,440px),1fr))",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
          }}>
            <div>
              <h2 style={{ ...h2Style }}>See Blyx in action</h2>
              <p style={{ ...bodyStyle, marginBottom: "28px" }}>
                Native static tensor types check inner matrix dimensions at compile time.
                A dimension mismatch is a <strong>compile error</strong> — not a runtime crash.
                Ship with confidence.
              </p>
              <p style={{ ...bodyStyle, marginBottom: "32px" }}>
                GPU acceleration via inline <code>gpu {"{ }"}</code> blocks — compiled to SPIR-V
                and NVPTX automatically with zero boilerplate.
              </p>
              <Link href="/play" style={{
                display: "inline-block", background: "#e05d44", color: "#ffffff",
                padding: "clamp(12px,1.5vw,16px) clamp(24px,3vw,36px)",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif", fontWeight: 700,
                fontSize: "clamp(16px,1.8vw,20px)", textDecoration: "none",
              }}>
                Try in Playground →
              </Link>
            </div>
            <div style={{
              background: "#1f2937", borderRadius: "0",
              overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}>
              <div style={{
                background: "#111827", padding: "14px 24px", color: "#9ca3af",
                fontSize: "clamp(13px,1.4vw,15px)",
                fontFamily: "'Source Code Pro', monospace", fontWeight: 600,
                borderBottom: "1px solid #374151",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                <span style={{ marginLeft: "10px" }}>neural_net.blyx</span>
              </div>
              <pre style={{
                margin: 0, padding: "clamp(20px,3vw,36px)",
                fontSize: "clamp(13px,1.4vw,16px)", lineHeight: 1.85,
                fontFamily: "'Source Code Pro', monospace",
                overflowX: "auto", color: "#e5e7eb",
              }}>
                <code>
                  <span style={{ color: "#6b7280" }}>{"// compile-time dimension safety\n"}</span>
                  <span style={{ color: "#fb923c" }}>{"fn "}</span>
                  <span style={{ color: "#60a5fa" }}>{"forward"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"(\n    w: "}</span>
                  <span style={{ color: "#fb923c" }}>{"tensor"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"<"}</span>
                  <span style={{ color: "#34d399" }}>{"f32"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"128"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"64"}</span>
                  <span style={{ color: "#e5e7eb" }}>{">,\n    x: "}</span>
                  <span style={{ color: "#fb923c" }}>{"tensor"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"<"}</span>
                  <span style={{ color: "#34d399" }}>{"f32"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"64"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"32"}</span>
                  <span style={{ color: "#e5e7eb" }}>{">,\n) -> "}</span>
                  <span style={{ color: "#fb923c" }}>{"tensor"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"<"}</span>
                  <span style={{ color: "#34d399" }}>{"f32"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"128"}</span>
                  <span style={{ color: "#e5e7eb" }}>{", "}</span>
                  <span style={{ color: "#fbbf24" }}>{"32"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"> {\n    "}</span>
                  <span style={{ color: "#fb923c" }}>{"let "}</span>
                  <span style={{ color: "#e5e7eb" }}>{"out = w * x;\n    "}</span>
                  <span style={{ color: "#fb923c" }}>{"gpu "}</span>
                  <span style={{ color: "#e5e7eb" }}>{"{ relu(out) };\n    out\n}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — STATS (WebGL Waves shader background, sharp rectangles) ══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Waves WebGL background */}
        <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        {/* Dark overlay so text stays readable */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "rgba(10,8,20,0.55)",
        }} />
        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          padding: sectionPad,
          maxWidth: "1280px", margin: "0 auto",
        }}>
          <h2 style={{ ...h2Style, color: "#f9fafb", textAlign: "center", marginBottom: "72px" }}>
            Numbers that matter
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,240px),1fr))",
            gap: "clamp(32px,4vw,56px)",
          }}>
            {[
              { value: "2.8×", label: "Faster than Python", sub: "matrix multiply benchmark", color: "#fb923c" },
              { value: "142M", label: "Actor messages/sec", sub: "lock-free throughput", color: "#60a5fa" },
              { value: "48 KB", label: "Binary size", sub: "hello world program", color: "#34d399" },
              { value: "7", label: "Compiler stages", sub: "lex → parse → BIR → LLVM", color: "#c084fc" },
            ].map((s) => (
              <div key={s.value} style={{ textAlign: "center" }}>
                {/* Sharp rectangle accent line */}
                <div style={{
                  width: "48px", height: "4px", background: s.color,
                  margin: "0 auto 20px",
                }} />
                <div style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 900,
                  fontSize: "clamp(48px,6vw,80px)", color: s.color,
                  lineHeight: 1, letterSpacing: "-2px", marginBottom: "16px",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: "clamp(18px,2vw,24px)", color: "#f9fafb", marginBottom: "8px",
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px,1.4vw,16px)", color: "rgba(249,250,251,0.6)",
                }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 6 — TESTIMONIALS (Waves BG) ══ */}
      <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid #e5e7eb" }}>
        <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(249,250,251,0.82)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: sectionPad }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "16px" }}>
            Loved by developers worldwide
          </h2>
          <p style={{ ...bodyStyle, textAlign: "center", marginBottom: "72px", color: "#6b7280" }}>
            Blyx powers everything from AI research to production systems.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,340px),1fr))",
            gap: "clamp(24px,3vw,40px)",
          }}>
            {[
              {
                quote: "Blyx's static tensor types caught 14 shape bugs in our training pipeline before we ever ran a single epoch. It's now our standard for all new ML infrastructure.",
                author: "A. Mehta", role: "Senior ML Engineer", color: "#e05d44",
              },
              {
                quote: "The actor model makes writing high-throughput network servers embarrassingly simple. We replaced 3000 lines of async Rust with 400 lines of Blyx actors.",
                author: "J. Okonkwo", role: "Systems Architect", color: "#2563eb",
              },
              {
                quote: "The gpu {} block syntax is a game changer. We write our CUDA-equivalent kernels inline, and blyxc handles SPIR-V output — no more separate kernel files.",
                author: "L. Zhang", role: "GPU Computing Researcher", color: "#16a34a",
              },
            ].map((t) => (
              <div key={t.author} style={{
                background: "#ffffff", borderRadius: "0",
                padding: "clamp(28px,3vw,44px)",
                border: "1px solid #e5e7eb",
                borderLeft: `5px solid ${t.color}`,
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px,1.8vw,20px)", color: "#374151",
                  lineHeight: 1.7, marginBottom: "28px", fontStyle: "italic",
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 700,
                  fontSize: "clamp(15px,1.6vw,18px)", color: "#111827",
                }}>{t.author}</div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px,1.4vw,16px)", color: "#9ca3af", marginTop: "4px",
                }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ══ SECTION 7 — ORBITING CIRCLES GLOBE ══ */}
      <OrbitingSection />

      {/* ══ SECTION 8 — GET STARTED CTA (WebGL Waves shader background) ══ */}
      <section style={{ position: "relative", overflow: "hidden", textAlign: "center", color: "#ffffff" }}>
        <WavesShader style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "rgba(26,20,35,0.75)",
        }} />
        <div style={{ position: "relative", zIndex: 2, padding: sectionPad, maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 900,
            fontSize: "clamp(36px,5.5vw,64px)", color: "#ffffff",
            letterSpacing: "-2px", lineHeight: 1.1, marginBottom: "24px",
          }}>
            Get started in seconds.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(18px,2.5vw,24px)", color: "rgba(255,255,255,0.8)",
            marginBottom: "48px", lineHeight: 1.6,
          }}>
            Install the complete Blyx toolchain — compiler, package manager, formatter, and language server — with a single command.
          </p>
          <div style={{
            maxWidth: "700px", margin: "0 auto 48px",
            background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
            borderRadius: "0", padding: "clamp(18px,2.5vw,28px) clamp(24px,3vw,40px)",
            textAlign: "left", fontFamily: "'Source Code Pro', monospace",
            fontSize: "clamp(15px,1.8vw,20px)", color: "#34d399",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <span style={{ color: "#6b7280", marginRight: "12px" }}>$</span>
            curl -sSf https://blyx-lang.space/install.sh | sh
          </div>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/learn/book" style={{
              background: "#e05d44", color: "#ffffff",
              padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
              borderRadius: "6px",
              fontFamily: "'Inter', sans-serif", fontWeight: 800,
              fontSize: "clamp(17px,2vw,22px)", textDecoration: "none", letterSpacing: "-0.3px",
            }}>
              Read The Blyx Book →
            </Link>
            <Link href="/play" style={{
              background: "rgba(255,255,255,0.12)",
              color: "#ffffff",
              padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
              borderRadius: "6px", border: "2px solid rgba(255,255,255,0.35)",
              fontFamily: "'Inter', sans-serif", fontWeight: 700,
              fontSize: "clamp(17px,2vw,22px)", textDecoration: "none", letterSpacing: "-0.3px",
            }}>
              Try Playground
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
