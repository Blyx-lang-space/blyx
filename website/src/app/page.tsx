import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "#0a0e1a", color: "#e2e8f0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* HERO SECTION — Zoomed Big Logo (140x140px) */}
      <section
        style={{
          background: "linear-gradient(180deg, #0d162a 0%, #0a0e1a 100%)",
          padding: "100px max(20px, calc((100% - 1300px) / 2)) 90px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "500px",
            background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* BIG ZOOMED LOGO */}
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <Image
              src="/blyx.png"
              alt="Blyx Logo"
              width={140}
              height={140}
              priority
              style={{
                filter: "drop-shadow(0 0 25px rgba(59,130,246,0.4))",
              }}
            />
          </div>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(38px, 5.5vw, 64px)",
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              maxWidth: "840px",
              margin: "0 auto 24px",
            }}
          >
            A language empowering everyone<br />to build reliable and efficient AI systems.
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              color: "#94a3b8",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: 1.6,
            }}
          >
            Memory-safe. GPU-native. Actor-concurrent.<br />
            Zero garbage collector.
          </p>

          <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/download"
              style={{
                background: "#3b82f6",
                color: "#ffffff",
                padding: "16px 36px",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
              }}
            >
              Get Started
            </Link>
            <a
              href="https://github.com/Rahulchaube1/blyxxxx/releases/tag/v0.1.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#111827",
                color: "#60a5fa",
                padding: "16px 36px",
                borderRadius: "8px",
                border: "2px solid #3b82f6",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "17px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Version 0.1.0-alpha
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION — Responsive flex/grid with static text */}
      <section style={{ borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", background: "#111827", padding: "52px max(20px, calc((100% - 1300px) / 2))" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "36px" }}>
          {[
            { n: "2.8×", label: "faster than Python", sub: "matrix multiply" },
            { n: "142M", label: "actor msgs/sec", sub: "lock-free throughput" },
            { n: "48KB", label: "binary size", sub: "hello world" },
            { n: "7", label: "compiler stages", sub: "lex -> BIR -> LLVM" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: "#60a5fa", lineHeight: 1 }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#f1f5f9", marginTop: 10, fontWeight: 500 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#64748b", marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BLYX SECTION — 3 cards, text-only, responsive grid */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", background: "#0a0e1a" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#ffffff", marginBottom: "52px" }}>
          Why Blyx?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          <div style={{ padding: "36px", background: "#111827", borderRadius: "10px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#ffffff", marginBottom: "16px" }}>
              Performance
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", lineHeight: 1.7 }}>
              Blyx compiles to native machine code via LLVM with no garbage collector and no runtime overhead.
              The BIR optimizer applies tensor fusion and loop unrolling to produce fast binaries.
            </p>
          </div>

          <div style={{ padding: "36px", background: "#111827", borderRadius: "10px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#ffffff", marginBottom: "16px" }}>
              Safety
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", lineHeight: 1.7 }}>
              Static ownership eliminates data races and buffer overflows at compile time. Statically-dimensioned{" "}
              <code>tensor&lt;T, D1, D2&gt;</code> types catch matrix dimension mismatches before your program runs.
            </p>
          </div>

          <div style={{ padding: "36px", background: "#111827", borderRadius: "10px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#ffffff", marginBottom: "16px" }}>
              Productivity
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", lineHeight: 1.7 }}>
              A complete toolchain ships with every installation — <code>blyxpkg</code>, <code>blyxfmt</code>, an LSP server, and documentation generator. VS Code extension available from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CODE SHOWCASE — Static JSX syntax highlighted code block (No icons, text only) */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", background: "#111827", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#ffffff", marginBottom: "16px" }}>
            See Blyx in action
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#94a3b8", marginBottom: "36px", lineHeight: 1.6 }}>
            Native tensor types with compile-time dimension verification. If matrix dimensions do not match, it is a <em>compile error</em> — not a runtime crash.
          </p>

          <div style={{ background: "#0a0e1a", borderRadius: "10px", overflow: "hidden", border: "1px solid #1e293b" }}>
            <div style={{ background: "#1e293b", padding: "12px 20px", borderBottom: "1px solid #334155", color: "#94a3b8", fontSize: "14px", fontFamily: "'Source Code Pro', monospace" }}>
              neural_net.blyx
            </div>
            <pre style={{ margin: 0, padding: "28px", fontSize: "15px", lineHeight: "1.8", fontFamily: "'Source Code Pro', monospace", overflowX: "auto" }}>
              <code>
                <span style={{ color: "#6b7a96" }}>{"// Dimension-checked at compile time\n"}</span>
                <span style={{ color: "#c084fc" }}>{"fn "}</span>
                <span style={{ color: "#93c5fd" }}>{"forward"}</span>
                <span style={{ color: "#e2e8f0" }}>{"(\n"}</span>
                <span style={{ color: "#e2e8f0" }}>{"    w: "}</span>
                <span style={{ color: "#c084fc" }}>{"tensor"}</span>
                <span style={{ color: "#e2e8f0" }}>{"<"}</span>
                <span style={{ color: "#67e8f9" }}>{"f32"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"128"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"64"}</span>
                <span style={{ color: "#e2e8f0" }}>{">,\n    x: "}</span>
                <span style={{ color: "#c084fc" }}>{"tensor"}</span>
                <span style={{ color: "#e2e8f0" }}>{"<"}</span>
                <span style={{ color: "#67e8f9" }}>{"f32"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"64"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"32"}</span>
                <span style={{ color: "#e2e8f0" }}>{">,\n) -> "}</span>
                <span style={{ color: "#c084fc" }}>{"tensor"}</span>
                <span style={{ color: "#e2e8f0" }}>{"<"}</span>
                <span style={{ color: "#67e8f9" }}>{"f32"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"128"}</span>
                <span style={{ color: "#e2e8f0" }}>{", "}</span>
                <span style={{ color: "#fbbf24" }}>{"32"}</span>
                <span style={{ color: "#e2e8f0" }}>{"> {\n"}</span>
                <span style={{ color: "#e2e8f0" }}>{"    "}</span>
                <span style={{ color: "#c084fc" }}>{"let "}</span>
                <span style={{ color: "#e2e8f0" }}>{"out = w * x;\n"}</span>
                <span style={{ color: "#e2e8f0" }}>{"    "}</span>
                <span style={{ color: "#c084fc" }}>{"gpu "}</span>
                <span style={{ color: "#e2e8f0" }}>{"{ relu(out) };\n"}</span>
                <span style={{ color: "#e2e8f0" }}>{"    out\n}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* QUICK INSTALL SECTION — Text only */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", textAlign: "center", background: "#0a0e1a" }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#ffffff", marginBottom: "16px" }}>
          Get started in seconds
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#94a3b8", marginBottom: "36px" }}>
          Install the complete Blyx toolchain with a single terminal command.
        </p>

        <div style={{ maxWidth: "640px", margin: "0 auto 36px", background: "#111827", borderRadius: "8px", border: "1px solid #1e293b", textAlign: "left", padding: "20px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "15px", color: "#67e8f9" }}>
          curl -sSf https://blyx-lang.space/install.sh | sh
        </div>

        <Link
          href="/learn/book"
          style={{
            background: "#3b82f6",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: "8px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Read The Blyx Book {"->"}
        </Link>
      </section>

      <Footer />
    </div>
  );
}
