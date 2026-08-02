import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#24292e", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* SECTION 1 — HERO (Exact Rust-Lang.org Layout) */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Large Centered Logo */}
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <Image
              src="/blyx.png"
              alt="Blyx Logo"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 5.5vw, 60px)",
              color: "#24292e",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: "0 auto 20px",
            }}
          >
            A language empowering everyone<br />to build reliable and efficient software.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(20px, 3vw, 24px)",
              fontWeight: 500,
              color: "#586069",
              margin: "0 auto 40px",
            }}
          >
            Performance. Safety. Productivity.
          </p>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/download"
              style={{
                background: "#d34516",
                color: "#ffffff",
                padding: "16px 36px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "17px",
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
                background: "#ffffff",
                color: "#24292e",
                padding: "16px 36px",
                borderRadius: "6px",
                border: "1px solid #e1e4e8",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
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

      {/* SECTION 2 — WHY BLYX? (3 Cards matching Rust's Performance, Reliability, Productivity) */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px 24px",
          borderTop: "1px solid #e1e4e8",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              color: "#24292e",
              marginBottom: "56px",
            }}
          >
            Why Blyx?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Performance Card */}
            <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#24292e", marginBottom: "16px" }}>
                Performance
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#586069", lineHeight: 1.7 }}>
                Blyx is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical AI services, run on embedded devices, and easily integrate with existing C/C++ code.
              </p>
            </div>

            {/* Reliability Card */}
            <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#24292e", marginBottom: "16px" }}>
                Reliability
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#586069", lineHeight: 1.7 }}>
                Blyx’s rich type system and linear ownership model guarantee memory-safety and thread-safety — enabling you to eliminate data races and buffer overflows at compile-time.
              </p>
            </div>

            {/* Productivity Card */}
            <div style={{ padding: "36px", background: "#ffffff", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#24292e", marginBottom: "16px" }}>
                Productivity
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#586069", lineHeight: 1.7 }}>
                Blyx has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager (<code>blyxpkg</code>), smart multi-editor support (<code>blyx-analyzer</code>), and auto-formatter (<code>blyxfmt</code>).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BUILD IT IN BLYX (4 Use Cases matching Rust's Build With Rust) */}
      <section
        style={{
          background: "#f6f8fa",
          padding: "80px 24px",
          borderTop: "1px solid #e1e4e8",
          borderBottom: "1px solid #e1e4e8",
        }}
      >
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "36px",
              color: "#24292e",
              marginBottom: "56px",
            }}
          >
            Build it in Blyx
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px" }}>
            {/* AI & Machine Learning */}
            <div style={{ background: "#ffffff", padding: "32px", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#24292e", marginBottom: "12px" }}>
                AI & Machine Learning
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "20px" }}>
                First-class <code style={{ background: "#f6f8fa" }}>tensor&lt;T, D1, D2&gt;</code> primitives with static shape checking at compile time.
              </p>
              <Link href="/learn/book/ch12-tensors-ai" style={{ color: "#d34516", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Building AI Models →
              </Link>
            </div>

            {/* Systems & CLI */}
            <div style={{ background: "#ffffff", padding: "32px", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#24292e", marginBottom: "12px" }}>
                Command Line
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "20px" }}>
                Build fast, small CLI tools with Blyx&apos;s robust standard library and zero runtime overhead.
              </p>
              <Link href="/docs" style={{ color: "#d34516", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Building CLI Tools →
              </Link>
            </div>

            {/* Networking & Web */}
            <div style={{ background: "#ffffff", padding: "32px", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#24292e", marginBottom: "12px" }}>
                Networking
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "20px" }}>
                Predictable performance, tiny resource footprint, and actor-based lock-free concurrency.
              </p>
              <Link href="/learn/book/ch11-actors-concurrency" style={{ color: "#d34516", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                Networking in Blyx →
              </Link>
            </div>

            {/* GPU Compute */}
            <div style={{ background: "#ffffff", padding: "32px", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#24292e", marginBottom: "12px" }}>
                GPU Compute
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.6, marginBottom: "20px" }}>
                Write inline <code style={{ background: "#f6f8fa" }}>gpu &#123; &#125;</code> blocks compiled directly to SPIR-V and NVPTX.
              </p>
              <Link href="/learn/book/ch13-gpu-compute" style={{ color: "#d34516", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                GPU Programming →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CODE SHOWCASE */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "36px", color: "#24292e", marginBottom: "16px" }}>
            See Blyx in action
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#586069", marginBottom: "36px", lineHeight: 1.6 }}>
            Native static tensor types check inner matrix dimensions at compile time. Matrix dimension mismatches produce clear compile errors instead of runtime crashes.
          </p>

          <div style={{ background: "#f6f8fa", borderRadius: "8px", overflow: "hidden", border: "1px solid #e1e4e8" }}>
            <div style={{ background: "#eaecef", padding: "12px 20px", borderBottom: "1px solid #e1e4e8", color: "#24292e", fontSize: "14px", fontFamily: "'Source Code Pro', monospace", fontWeight: 600 }}>
              neural_net.blyx
            </div>
            <pre style={{ margin: 0, padding: "28px", fontSize: "15px", lineHeight: "1.8", fontFamily: "'Source Code Pro', monospace", overflowX: "auto", color: "#24292e" }}>
              <code>
                <span style={{ color: "#6a737d" }}>{"// Checked at compile time\n"}</span>
                <span style={{ color: "#d34516" }}>{"fn "}</span>
                <span style={{ color: "#005cc5" }}>{"forward"}</span>
                <span style={{ color: "#24292e" }}>{"(\n"}</span>
                <span style={{ color: "#24292e" }}>{"    w: "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#24292e" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>{"f32"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"128"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"64"}</span>
                <span style={{ color: "#24292e" }}>{">,\n    x: "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#24292e" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>{"f32"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"64"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"32"}</span>
                <span style={{ color: "#24292e" }}>{">,\n) -> "}</span>
                <span style={{ color: "#d34516" }}>{"tensor"}</span>
                <span style={{ color: "#24292e" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>{"f32"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"128"}</span>
                <span style={{ color: "#24292e" }}>{", "}</span>
                <span style={{ color: "#b93c12" }}>{"32"}</span>
                <span style={{ color: "#24292e" }}>{"> {\n"}</span>
                <span style={{ color: "#24292e" }}>{"    "}</span>
                <span style={{ color: "#d34516" }}>{"let "}</span>
                <span style={{ color: "#24292e" }}>{"out = w * x;\n"}</span>
                <span style={{ color: "#24292e" }}>{"    "}</span>
                <span style={{ color: "#d34516" }}>{"gpu "}</span>
                <span style={{ color: "#24292e" }}>{"{ relu(out) };\n"}</span>
                <span style={{ color: "#24292e" }}>{"    out\n}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 5 — GET STARTED IN SECONDS */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "#f6f8fa", borderTop: "1px solid #e1e4e8" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "36px", color: "#24292e", marginBottom: "16px" }}>
            Get started in seconds
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#586069", marginBottom: "36px" }}>
            Install the complete Blyx toolchain with a single terminal command.
          </p>

          <div style={{ maxWidth: "640px", margin: "0 auto 36px", background: "#ffffff", borderRadius: "6px", border: "1px solid #e1e4e8", textAlign: "left", padding: "20px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "15px", color: "#24292e" }}>
            curl -sSf https://blyx-lang.space/install.sh | sh
          </div>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/learn/book"
              style={{
                background: "#d34516",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read The Blyx Book {"->"}
            </Link>
            <Link
              href="/play"
              style={{
                background: "#ffffff",
                color: "#24292e",
                padding: "14px 32px",
                borderRadius: "6px",
                border: "1px solid #e1e4e8",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Try Playground
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
