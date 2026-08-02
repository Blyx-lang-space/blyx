import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* SECTION 2 — HERO */}
      <section
        style={{
          background: "linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
          textAlign: "center",
        }}
      >
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
            color: "#1a1a2e",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: "700px",
            margin: "0 auto 20px",
          }}
        >
          A language built for<br />the AI era.
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "20px",
            color: "#586069",
            maxWidth: "540px",
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
              background: "#0066cc",
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
              color: "#0066cc",
              padding: "14px 32px",
              borderRadius: "6px",
              border: "2px solid #0066cc",
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
      </section>

      {/* SECTION 3 — WHY BLYX? */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#1a1a2e",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          Why Blyx?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Card 1: Performance */}
          <div
            style={{
              padding: "32px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e1e4e8",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1a1a2e",
                marginBottom: "16px",
              }}
            >
              Performance
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#586069",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Blyx compiles to native machine code via LLVM with no garbage collector and no runtime overhead.
              The BIR optimizer applies tensor fusion, loop unrolling, and inlining at -O3 to produce fast binaries.
            </p>
          </div>

          {/* Card 2: Safety */}
          <div
            style={{
              padding: "32px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e1e4e8",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1a1a2e",
                marginBottom: "16px",
              }}
            >
              Safety
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#586069",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Static ownership eliminates data races and buffer overflows at compile time. Statically-dimensioned{" "}
              <code
                style={{
                  background: "#f0f4f8",
                  padding: "1px 5px",
                  borderRadius: "3px",
                  fontFamily: "monospace",
                  fontSize: "13px",
                }}
              >
                tensor&lt;T, D1, D2&gt;
              </code>{" "}
              types catch matrix dimension mismatches before your program runs.
            </p>
          </div>

          {/* Card 3: Productivity */}
          <div
            style={{
              padding: "32px",
              background: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e1e4e8",
            }}
          >
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: "#1a1a2e",
                marginBottom: "16px",
              }}
            >
              Productivity
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#586069",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A complete toolchain ships with every installation —{" "}
              <code style={{ background: "#f0f4f8", padding: "1px 5px", borderRadius: "3px", fontFamily: "monospace", fontSize: "13px" }}>
                blyxpkg
              </code>
              ,{" "}
              <code style={{ background: "#f0f4f8", padding: "1px 5px", borderRadius: "3px", fontFamily: "monospace", fontSize: "13px" }}>
                blyxfmt
              </code>
              , an LSP server, debugger, profiler, and documentation generator. A VS Code extension with syntax highlighting is available from day one.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BUILD IT IN BLYX */}
      <section
        style={{
          background: "#f8f9fa",
          borderTop: "1px solid #e1e4e8",
          borderBottom: "1px solid #e1e4e8",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#1a1a2e",
            marginBottom: "48px",
          }}
        >
          Build it in Blyx
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "40px" }}>
          {/* AI & ML */}
          <div style={{ textAlign: "center" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ marginBottom: "20px" }}>
              <rect x="10" y="10" width="18" height="18" rx="3" fill="#0066cc" opacity="0.15" />
              <rect x="31" y="10" width="18" height="18" rx="3" fill="#0066cc" opacity="0.3" />
              <rect x="52" y="10" width="18" height="18" rx="3" fill="#0066cc" opacity="0.15" />
              <rect x="10" y="31" width="18" height="18" rx="3" fill="#0066cc" opacity="0.3" />
              <rect x="31" y="31" width="18" height="18" rx="3" fill="#0066cc" opacity="0.7" />
              <rect x="52" y="31" width="18" height="18" rx="3" fill="#0066cc" opacity="0.3" />
              <rect x="10" y="52" width="18" height="18" rx="3" fill="#0066cc" opacity="0.15" />
              <rect x="31" y="52" width="18" height="18" rx="3" fill="#0066cc" opacity="0.3" />
              <rect x="52" y="52" width="18" height="18" rx="3" fill="#0066cc" opacity="0.15" />
            </svg>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              AI & Machine Learning
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
              Native <code style={{ background: "#f0f4f8", padding: "1px 4px", borderRadius: "3px", fontFamily: "monospace" }}>tensor&lt;T, D1, D2&gt;</code> types with compile-time dimension checking. Inline GPU blocks. Zero-overhead neural network layers.
            </p>
            <Link href="/docs" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Building ML Models →
            </Link>
          </div>

          {/* Systems / CLI */}
          <div style={{ textAlign: "center" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ marginBottom: "20px" }}>
              <rect x="8" y="18" width="64" height="44" rx="4" fill="#0066cc" opacity="0.1" stroke="#0066cc" strokeWidth="1.5" />
              <rect x="8" y="18" width="64" height="12" rx="4" fill="#0066cc" opacity="0.2" />
              <circle cx="18" cy="24" r="3" fill="#e36209" />
              <circle cx="28" cy="24" r="3" fill="#22863a" />
              <circle cx="38" cy="24" r="3" fill="#0066cc" />
              <path d="M18 42 L26 46 L18 50" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" fill="none" />
              <line x1="30" y1="50" x2="50" y2="50" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            </svg>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              Systems & CLI Tools
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
              Build fast, reliable command-line tools and system software. Blyx produces small, self-contained binaries with no runtime dependency. Cross-compile to any target.
            </p>
            <Link href="/docs" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Building CLI Tools →
            </Link>
          </div>

          {/* Networking / Servers */}
          <div style={{ textAlign: "center" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ marginBottom: "20px" }}>
              <circle cx="40" cy="40" r="8" fill="#0066cc" opacity="0.7" />
              <circle cx="16" cy="24" r="6" fill="#0066cc" opacity="0.3" />
              <circle cx="64" cy="24" r="6" fill="#0066cc" opacity="0.3" />
              <circle cx="16" cy="56" r="6" fill="#0066cc" opacity="0.3" />
              <circle cx="64" cy="56" r="6" fill="#0066cc" opacity="0.3" />
              <line x1="22" y1="27" x2="33" y2="34" stroke="#0066cc" strokeWidth="1.5" opacity="0.5" />
              <line x1="58" y1="27" x2="47" y2="34" stroke="#0066cc" strokeWidth="1.5" opacity="0.5" />
              <line x1="22" y1="53" x2="33" y2="46" stroke="#0066cc" strokeWidth="1.5" opacity="0.5" />
              <line x1="58" y1="53" x2="47" y2="46" stroke="#0066cc" strokeWidth="1.5" opacity="0.5" />
            </svg>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              Networking & Servers
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
              Actor-based concurrency means no shared state, no deadlocks, and predictable performance. Build network services that scale without the complexity of async frameworks.
            </p>
            <Link href="/docs" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Working on Servers →
            </Link>
          </div>

          {/* GPU / Parallel Compute */}
          <div style={{ textAlign: "center" }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ marginBottom: "20px" }}>
              <rect x="20" y="20" width="40" height="40" rx="4" fill="#0066cc" opacity="0.1" stroke="#0066cc" strokeWidth="1.5" />
              <rect x="28" y="28" width="24" height="24" rx="2" fill="#0066cc" opacity="0.3" />
              <line x1="10" y1="30" x2="20" y2="30" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="38" x2="20" y2="38" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
              <line x1="10" y1="46" x2="20" y2="46" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="30" x2="70" y2="30" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="38" x2="70" y2="38" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
              <line x1="60" y1="46" x2="70" y2="46" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              GPU & Parallel Compute
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6, marginBottom: "16px" }}>
              Write GPU kernels inline with <code style={{ background: "#f0f4f8", padding: "1px 4px", borderRadius: "3px", fontFamily: "monospace" }}>gpu &#123; &#125;</code> blocks that compile to SPIR-V and NVPTX. Blyx handles memory transfers automatically.
            </p>
            <Link href="/docs" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              GPU Programming →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ONE WORKING CODE EXAMPLE */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            See Blyx in action
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#586069",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}
          >
            Native tensor types with compile-time dimension verification. If the matrix dimensions don&apos;t match, it&apos;s a <em>compile error</em> — not a runtime crash.
          </p>

          <div
            style={{
              background: "#1a1a2e",
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid #e1e4e8",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "#252540",
                padding: "10px 16px",
                borderBottom: "1px solid #333355",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 8, color: "#888", fontSize: "13px", fontFamily: "'Source Code Pro', monospace" }}>
                neural_net.blyx
              </span>
            </div>

            {/* Code */}
            <pre
              style={{
                margin: 0,
                padding: "24px",
                fontSize: "14px",
                lineHeight: "1.7",
                overflowX: "auto",
                fontFamily: "'Source Code Pro', 'Courier New', monospace",
              }}
            >
              <code>
                <span style={{ color: "#888" }}>{"// Neural network forward pass — dimensions checked at compile time\n"}</span>
                <span style={{ color: "#7c3aed" }}>fn </span>
                <span style={{ color: "#79b8ff" }}>neural_forward</span>
                <span style={{ color: "#e8edf5" }}>(</span>
                <span style={{ color: "#e8edf5" }}>{"\n    weights: "}</span>
                <span style={{ color: "#7c3aed" }}>tensor</span>
                <span style={{ color: "#e8edf5" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>f32</span>
                <span style={{ color: "#e8edf5" }}>{", "}</span>
                <span style={{ color: "#e36209" }}>128</span>
                <span style={{ color: "#e8edf5" }}>{", "}</span>
                <span style={{ color: "#e36209" }}>64</span>
                <span style={{ color: "#e8edf5" }}>{">,\n    input:   "}</span>
                <span style={{ color: "#7c3aed" }}>tensor</span>
                <span style={{ color: "#e8edf5" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>f32</span>
                <span style={{ color: "#e8edf5" }}>{", "}</span>
                <span style={{ color: "#e36209" }}>64</span>
                <span style={{ color: "#e8edf5" }}>{",  "}</span>
                <span style={{ color: "#e36209" }}>32</span>
                <span style={{ color: "#e8edf5" }}>{">,\n) -> "}</span>
                <span style={{ color: "#7c3aed" }}>tensor</span>
                <span style={{ color: "#e8edf5" }}>{"<"}</span>
                <span style={{ color: "#005cc5" }}>f32</span>
                <span style={{ color: "#e8edf5" }}>{", "}</span>
                <span style={{ color: "#e36209" }}>128</span>
                <span style={{ color: "#e8edf5" }}>{", "}</span>
                <span style={{ color: "#e36209" }}>32</span>
                <span style={{ color: "#e8edf5" }}>{"> {\n"}</span>
                <span style={{ color: "#888" }}>{"    // (128×64) × (64×32) → (128×32) — verified by the compiler\n"}</span>
                <span style={{ color: "#e8edf5" }}>{"    "}</span>
                <span style={{ color: "#7c3aed" }}>let </span>
                <span style={{ color: "#e8edf5" }}>output = weights * input;\n</span>
                <span style={{ color: "#e8edf5" }}>{"    "}</span>
                <span style={{ color: "#7c3aed" }}>gpu </span>
                <span style={{ color: "#e8edf5" }}>{"{ "}</span>
                <span style={{ color: "#79b8ff" }}>activate</span>
                <span style={{ color: "#e8edf5" }}>(output) &#125;;\n</span>
                <span style={{ color: "#e8edf5" }}>{"    output\n}"}</span>
              </code>
            </pre>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginTop: "16px" }}>
            Try it yourself in the{" "}
            <Link href="/play" style={{ color: "#0066cc", textDecoration: "none" }}>
              interactive playground →
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 6 — INSTALL TERMINAL */}
      <section
        style={{
          background: "#f8f9fa",
          borderTop: "1px solid #e1e4e8",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#1a1a2e",
            marginBottom: "16px",
          }}
        >
          Get started in 30 seconds
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#586069", marginBottom: "40px" }}>
          One command installs the full Blyx toolchain.
        </p>

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 32px",
            background: "#1a1a2e",
            borderRadius: "8px",
            overflow: "hidden",
            textAlign: "left",
            border: "1px solid #333355",
          }}
        >
          <div
            style={{
              background: "#252540",
              padding: "10px 16px",
              borderBottom: "1px solid #333355",
              display: "flex",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <pre
            style={{
              margin: 0,
              padding: "20px 24px",
              fontFamily: "'Source Code Pro', monospace",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "#e8edf5",
            }}
          >
            <span style={{ color: "#22863a" }}>$</span> <span style={{ color: "#e8edf5" }}>curl -sSf https://blyx-lang.space/install.sh | sh{"\n"}</span>
            <span style={{ color: "#888" }}>Installing Blyx 0.1.0-alpha...{"\n"}</span>
            <span style={{ color: "#22863a" }}>$</span> <span style={{ color: "#e8edf5" }}>blyxpkg new hello &amp;&amp; cd hello &amp;&amp; blyxpkg run{"\n"}</span>
            <span style={{ color: "#888" }}>Hello, World from Blyx!</span>
          </pre>
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/download"
            style={{
              background: "#0066cc",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "6px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Download Blyx
          </Link>
          <Link
            href="/docs"
            style={{
              background: "transparent",
              color: "#0066cc",
              padding: "12px 28px",
              borderRadius: "6px",
              border: "2px solid #0066cc",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            Read the Docs
          </Link>
        </div>
      </section>

      {/* SECTION 7 — GET INVOLVED */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px max(24px, calc((100% - 1100px) / 2))",
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "32px",
            color: "#1a1a2e",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          Get involved
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              Read Blyx
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.7, marginBottom: "16px" }}>
              The Blyx Book walks you through the language from first principles. RFCs explain every design decision. Engineering blog covers compiler internals.
            </p>
            <Link href="/docs" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Read the Book →
            </Link>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              Try the Playground
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.7, marginBottom: "16px" }}>
              Write Blyx code in your browser, see syntax highlighting, and explore the language without installing anything. Multiple example programs included.
            </p>
            <Link href="/play" style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
              Open Playground →
            </Link>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "18px", color: "#1a1a2e", marginBottom: "12px" }}>
              Contribute to Blyx
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", lineHeight: 1.7, marginBottom: "16px" }}>
              Blyx is open source and community-driven. Created by Rahul Chaube. Every issue, RFC, and pull request helps shape the language.
            </p>
            <a
              href="https://github.com/Rahulchaube1/blyxxxx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0066cc", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
            >
              GitHub Repository →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
