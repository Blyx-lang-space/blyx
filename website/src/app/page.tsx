import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#1f1f1f", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* HERO SECTION — Rust White & Clean Neutral Design System */}
      <section
        style={{
          background: "#ffffff",
          padding: "100px max(20px, calc((100% - 1300px) / 2)) 90px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* BIG ZOOMED BLYX LOGO */}
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <Image
              src="/blyx.png"
              alt="Blyx Logo"
              width={140}
              height={140}
              priority
            />
          </div>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(38px, 5.5vw, 64px)",
              color: "#1f1f1f",
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
              color: "#616161",
              maxWidth: "620px",
              margin: "0 auto 44px",
              lineHeight: 1.6,
            }}
          >
            Memory-safe. GPU-native. Actor-concurrent.<br />
            Zero garbage collector.
          </p>

          <div style={{ display: "flex", gap: "18px", justifyContent: "center", flexWrap: "wrap" }}>
            {/* Primary Button — Rust Orange (#D34516) */}
            <Link
              href="/download"
              style={{
                background: "#d34516",
                color: "#ffffff",
                padding: "16px 36px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get Started
            </Link>

            {/* Secondary Button — White Background, Gray Border */}
            <a
              href="https://github.com/Rahulchaube1/blyxxxx/releases/tag/v0.1.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#1f1f1f",
                padding: "16px 36px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
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

      {/* STATS SECTION — Very Light Gray Surface (#FAFAFA) with Rust Orange numbers */}
      <section style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", background: "#fafafa", padding: "52px max(20px, calc((100% - 1300px) / 2))" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "36px" }}>
          {[
            { n: "2.8×", label: "faster than Python", sub: "matrix multiply" },
            { n: "142M", label: "actor msgs/sec", sub: "lock-free throughput" },
            { n: "48KB", label: "binary size", sub: "hello world" },
            { n: "7", label: "compiler stages", sub: "lex -> BIR -> LLVM" },
          ].map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "clamp(36px, 4.5vw, 52px)", color: "#d34516", lineHeight: 1 }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#1f1f1f", marginTop: 10, fontWeight: 600 }}>
                {s.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#616161", marginTop: 4 }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BLYX SECTION — White cards with Light Gray borders */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", background: "#ffffff" }}>
        <h2 style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#1f1f1f", marginBottom: "52px" }}>
          Why Blyx?
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1f1f1f", marginBottom: "16px" }}>
              Performance
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#616161", lineHeight: 1.7 }}>
              Blyx compiles to native machine code via LLVM with no garbage collector and no runtime overhead.
              The BIR optimizer applies tensor fusion and loop unrolling to produce fast binaries.
            </p>
          </div>

          <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1f1f1f", marginBottom: "16px" }}>
              Safety
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#616161", lineHeight: 1.7 }}>
              Static ownership eliminates data races and buffer overflows at compile time. Statically-dimensioned{" "}
              <code style={{ background: "#f6f8fa", color: "#1f1f1f", border: "1px solid #e5e7eb", padding: "2px 6px", borderRadius: "4px" }}>tensor&lt;T, D1, D2&gt;</code> types catch matrix dimension mismatches before your program runs.
            </p>
          </div>

          <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "22px", color: "#1f1f1f", marginBottom: "16px" }}>
              Productivity
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#616161", lineHeight: 1.7 }}>
              A complete toolchain ships with every installation — <code style={{ background: "#f6f8fa", color: "#1f1f1f", border: "1px solid #e5e7eb", padding: "2px 6px", borderRadius: "4px" }}>blyxpkg</code>, <code style={{ background: "#f6f8fa", color: "#1f1f1f", border: "1px solid #e5e7eb", padding: "2px 6px", borderRadius: "4px" }}>blyxfmt</code>, an LSP server, and documentation generator. VS Code extension available from day one.
            </p>
          </div>
        </div>
      </section>

      {/* CODE SHOWCASE — Light Gray Code Background (#F6F8FA) */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", background: "#fafafa", borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#1f1f1f", marginBottom: "16px" }}>
            See Blyx in action
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#616161", marginBottom: "36px", lineHeight: 1.6 }}>
            Native tensor types with compile-time dimension verification. If matrix dimensions do not match, it is a <em>compile error</em> — not a runtime crash.
          </p>

          <div style={{ background: "#f6f8fa", borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
            <div style={{ background: "#f1f3f4", padding: "12px 20px", borderBottom: "1px solid #e5e7eb", color: "#616161", fontSize: "14px", fontFamily: "'Source Code Pro', monospace", fontWeight: 600 }}>
              neural_net.blyx
            </div>
            <pre style={{ margin: 0, padding: "28px", fontSize: "15px", lineHeight: "1.8", fontFamily: "'Source Code Pro', monospace", overflowX: "auto", color: "#1f1f1f" }}>
              <code>
                <span style={{ color: "#5f6368" }}>{"// Dimension-checked at compile time\n"}</span>
                <span style={{ color: "#d34516" }}>{"fn "}</span>
                <span style={{ color: "#1a73e8" }}>{"forward"}</span>
                <span style={{ color: "#1f1f1f" }}>{"(\n"}</span>
                <span style={{ color: "#1f1f1f" }}>{"    w: "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#1f1f1f" }}>{"<"}</span>
                <span style={{ color: "#0077c2" }}>{"f32"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"128"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"64"}</span>
                <span style={{ color: "#1f1f1f" }}>{">,\n    x: "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#1f1f1f" }}>{"<"}</span>
                <span style={{ color: "#0077c2" }}>{"f32"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"64"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"32"}</span>
                <span style={{ color: "#1f1f1f" }}>{">,\n) -> "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#1f1f1f" }}>{"<"}</span>
                <span style={{ color: "#0077c2" }}>{"f32"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"128"}</span>
                <span style={{ color: "#1f1f1f" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"32"}</span>
                <span style={{ color: "#1f1f1f" }}>{"> {\n"}</span>
                <span style={{ color: "#1f1f1f" }}>{"    "}</span>
                <span style={{ color: "#d34516" }}>{"let "}</span>
                <span style={{ color: "#1f1f1f" }}>{"out = w * x;\n"}</span>
                <span style={{ color: "#1f1f1f" }}>{"    "}</span>
                <span style={{ color: "#d34516" }}>{"gpu "}</span>
                <span style={{ color: "#1f1f1f" }}>{"{ relu(out) };\n"}</span>
                <span style={{ color: "#1f1f1f" }}>{"    out\n}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* QUICK INSTALL SECTION */}
      <section style={{ padding: "90px max(20px, calc((100% - 1300px) / 2))", textAlign: "center", background: "#ffffff" }}>
        <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#1f1f1f", marginBottom: "16px" }}>
          Get started in seconds
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#616161", marginBottom: "36px" }}>
          Install the complete Blyx toolchain with a single terminal command.
        </p>

        <div style={{ maxWidth: "640px", margin: "0 auto 36px", background: "#f6f8fa", borderRadius: "6px", border: "1px solid #e5e7eb", textAlign: "left", padding: "20px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "15px", color: "#1f1f1f" }}>
          curl -sSf https://blyx-lang.space/install.sh | sh
        </div>

        <Link
          href="/learn/book"
          style={{
            background: "#d34516",
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
          Read The Blyx Book {"->"}
        </Link>
      </section>

      <Footer />
    </div>
  );
}
