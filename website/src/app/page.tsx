import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "#0a0e1a", color: "#e2e8f0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* HERO SECTION — Fix Bug 1: CSS gradient only, zero BIR stream */}
      <section
        style={{
          background: "linear-gradient(135deg, #0a0e1a 0%, #0d1f3c 50%, #0a0e1a 100%)",
          padding: "100px max(24px, calc((100% - 1100px) / 2)) 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle radial glow behind hero text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(0,102,204,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <Image
            src="/blyx.png"
            alt="Blyx Logo"
            width={64}
            height={64}
            priority
            style={{ marginBottom: 24, display: "inline-block" }}
          />

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#f1f5f9",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              maxWidth: "720px",
              margin: "0 auto 20px",
            }}
          >
            A language empowering everyone<br />to build reliable and efficient AI systems.
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              color: "#94a3b8",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.5,
            }}
          >
            Memory-safe. GPU-native. Actor-concurrent.<br />
            Zero garbage collector.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/download"
              style={{
                background: "#3b82f6",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Started
            </Link>
            <a
              href="https://github.com/Rahulchaube1/blyxxxx/releases/tag/v0.1.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "#60a5fa",
                padding: "14px 32px",
                borderRadius: "6px",
                border: "2px solid #3b82f6",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Version 0.1.0-alpha
            </a>
          </div>
        </div>
      </section>

      {/* STATS SECTION — Fix Bug 3: Static numbers, zero IntersectionObserver */}
      <section style={{ borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", background: "#111827", padding: "48px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px" }}>
          {[
            { n: "2.8×", label: "faster than Python", sub: "matrix multiply" },
            { n: "142M", label: "actor msgs/sec", sub: "lock-free throughput" },
            { n: "48KB", label: "binary size", sub: "hello world" },
            { n: "7", label: "compiler stages", sub: "lex → BIR → LLVM" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(32px, 4vw, 48px)", color: "#60a5fa", lineHeight: 1 }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#e2e8f0", marginTop: 8 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#64748b", marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BLYX SECTION */}
      <section style={{ padding: "80px max(24px, calc((100% - 1100px) / 2))", background: "#0a0e1a" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "32px", color: "#f1f5f9", marginBottom: "48px" }}>
          Why Blyx?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          <div style={{ padding: "32px", background: "#111827", borderRadius: "8px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#f1f5f9", marginBottom: "16px" }}>
              Performance
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94a3b8", lineHeight: 1.7 }}>
              Blyx compiles to native machine code via LLVM with no garbage collector and no runtime overhead.
              The BIR optimizer applies tensor fusion and loop unrolling to produce fast binaries.
            </p>
          </div>

          <div style={{ padding: "32px", background: "#111827", borderRadius: "8px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#f1f5f9", marginBottom: "16px" }}>
              Safety
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94a3b8", lineHeight: 1.7 }}>
              Static ownership eliminates data races and buffer overflows at compile time. Statically-dimensioned{" "}
              <code>tensor&lt;T, D1, D2&gt;</code> types catch matrix dimension mismatches before your program runs.
            </p>
          </div>

          <div style={{ padding: "32px", background: "#111827", borderRadius: "8px", border: "1px solid #1e293b" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#f1f5f9", marginBottom: "16px" }}>
              Productivity
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#94a3b8", lineHeight: 1.7 }}>
              A complete toolchain ships with every installation — <code>blyxpkg</code>, <code>blyxfmt</code>, an LSP server, and documentation generator. VS Code extension available from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CODE SHOWCASE — Fix Bug 2: Static JSX color spans, zero dangerouslySetInnerHTML */}
      <section style={{ padding: "80px max(24px, calc((100% - 1100px) / 2))", background: "#111827", borderTop: "1px solid #1e293b" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "32px", color: "#f1f5f9", marginBottom: "16px" }}>
            See Blyx in action
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", marginBottom: "32px", lineHeight: 1.6 }}>
            Native tensor types with compile-time dimension verification. If the matrix dimensions don&apos;t match, it&apos;s a <em>compile error</em> — not a runtime crash.
          </p>

          <div style={{ background: "#0a0e1a", borderRadius: "8px", overflow: "hidden", border: "1px solid #1e293b" }}>
            <div style={{ background: "#1e293b", padding: "10px 16px", borderBottom: "1px solid #334155", color: "#94a3b8", fontSize: "13px", fontFamily: "'Source Code Pro', monospace" }}>
              neural_net.blyx
            </div>
            <pre style={{ margin: 0, padding: "24px", fontSize: "14px", lineHeight: "1.8", fontFamily: "'Source Code Pro', monospace", overflowX: "auto" }}>
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

      {/* QUICK INSTALL SECTION */}
      <section style={{ padding: "80px max(24px, calc((100% - 1100px) / 2))", textAlign: "center", background: "#0a0e1a" }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "32px", color: "#f1f5f9", marginBottom: "16px" }}>
          Get started in seconds
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#94a3b8", marginBottom: "32px" }}>
          Install the complete Blyx toolchain with a single command.
        </p>

        <div style={{ maxWidth: "600px", margin: "0 auto 32px", background: "#111827", borderRadius: "8px", border: "1px solid #1e293b", textAlign: "left", padding: "16px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "14px", color: "#67e8f9" }}>
          curl -sSf https://blyx-lang.space/install.sh | sh
        </div>

        <Link
          href="/learn/book"
          style={{
            background: "#3b82f6",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "6px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Read The Blyx Book →
        </Link>
      </section>

      <Footer />
    </div>
  );
}
