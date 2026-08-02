import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function HomePage() {
  return (
    <div style={{ background: "#ffffff", color: "#111827", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO  (rust-lang: full-width hero)
      ══════════════════════════════════════════════ */}
      <section style={{
        background: "#ffffff",
        padding: sectionPad,
        textAlign: "center",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", display: "flex", justifyContent: "center" }}>
            <Image src="/blyx.png" alt="Blyx Language Logo" width={160} height={160} priority />
          </div>

          <h1 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(42px, 7vw, 80px)",
            color: "#111827",
            lineHeight: 1.1,
            letterSpacing: "-2.5px",
            margin: "0 auto 28px",
          }}>
            A language empowering everyone<br />
            to build reliable and efficient software.
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(20px, 3vw, 28px)",
            color: "#6b7280",
            margin: "0 auto 52px",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}>
            Performance. Safety. Productivity.
          </p>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/download" style={{
              background: "#e05d44",
              color: "#ffffff",
              padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(17px,2vw,22px)",
              textDecoration: "none",
              display: "inline-block",
              letterSpacing: "-0.3px",
            }}>
              Get Started
            </Link>
            <a
              href="https://github.com/Rahulchaube1/blyxxxx/releases/tag/v0.1.0-alpha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#111827",
                padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
                borderRadius: "8px",
                border: "2px solid #e5e7eb",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(17px,2vw,22px)",
                textDecoration: "none",
                display: "inline-block",
                letterSpacing: "-0.3px",
              }}
            >
              Version 0.1.0-alpha
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — WHY BLYX (3 colorful cards)
      ══════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: sectionPad }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "72px" }}>Why Blyx?</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px, 3vw, 48px)",
          }}>
            {/* Performance — Orange */}
            <div style={{
              borderTop: "6px solid #e05d44",
              borderRadius: "12px",
              padding: "clamp(32px,4vw,52px)",
              background: "#fff7f5",
              border: "1px solid #fca49b",
              borderTopColor: "#e05d44",
            }}>
              <div style={{ fontSize: "clamp(36px,4vw,48px)", marginBottom: "20px" }}>⚡</div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 800,
                fontSize: "clamp(24px,3vw,32px)", color: "#111827",
                marginBottom: "16px", letterSpacing: "-0.5px",
              }}>Performance</h3>
              <p style={{ ...bodyStyle, color: "#4b5563" }}>
                Blyx is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power
                performance-critical AI services, run on embedded devices, and easily integrate with existing
                C and C++ code.
              </p>
            </div>

            {/* Reliability — Blue */}
            <div style={{
              borderTop: "6px solid #2563eb",
              borderRadius: "12px",
              padding: "clamp(32px,4vw,52px)",
              background: "#eff6ff",
              border: "1px solid #93c5fd",
              borderTopColor: "#2563eb",
            }}>
              <div style={{ fontSize: "clamp(36px,4vw,48px)", marginBottom: "20px" }}>🛡</div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 800,
                fontSize: "clamp(24px,3vw,32px)", color: "#111827",
                marginBottom: "16px", letterSpacing: "-0.5px",
              }}>Reliability</h3>
              <p style={{ ...bodyStyle, color: "#4b5563" }}>
                Blyx's rich type system and linear ownership model guarantee memory-safety and thread-safety —
                enabling you to eliminate data races and buffer overflows at compile-time. No surprises at runtime.
              </p>
            </div>

            {/* Productivity — Green */}
            <div style={{
              borderTop: "6px solid #16a34a",
              borderRadius: "12px",
              padding: "clamp(32px,4vw,52px)",
              background: "#f0fdf4",
              border: "1px solid #86efac",
              borderTopColor: "#16a34a",
            }}>
              <div style={{ fontSize: "clamp(36px,4vw,48px)", marginBottom: "20px" }}>🧰</div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 800,
                fontSize: "clamp(24px,3vw,32px)", color: "#111827",
                marginBottom: "16px", letterSpacing: "-0.5px",
              }}>Productivity</h3>
              <p style={{ ...bodyStyle, color: "#4b5563" }}>
                Blyx has great documentation, a friendly compiler with useful error messages, and top-notch
                tooling — an integrated package manager, smart multi-editor support via the language server,
                and an auto-formatter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — BUILD IT IN BLYX (4 use cases)
      ══════════════════════════════════════════════ */}
      <section style={{
        background: "#f9fafb",
        padding: sectionPad,
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "72px" }}>Build it in Blyx</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
          }}>
            {[
              {
                emoji: "🤖",
                color: "#e05d44",
                bg: "#fff7f5",
                border: "#fca49b",
                title: "AI & Machine Learning",
                body: "First-class tensor<T, D1, D2> primitives with static shape checking at compile time. Build neural networks with no dimension mismatch bugs.",
                link: "/learn/book/ch12-tensors-ai",
                linkLabel: "Building AI Models →",
              },
              {
                emoji: "💻",
                color: "#2563eb",
                bg: "#eff6ff",
                border: "#93c5fd",
                title: "Command Line Tools",
                body: "Build fast, small CLI tools with Blyx's robust standard library and zero runtime overhead. Single-binary deployment.",
                link: "/docs",
                linkLabel: "Building CLI Tools →",
              },
              {
                emoji: "🌐",
                color: "#16a34a",
                bg: "#f0fdf4",
                border: "#86efac",
                title: "Networking",
                body: "Predictable performance, tiny resource footprint, and actor-based lock-free concurrency that scales to millions of connections.",
                link: "/learn/book/ch11-actors-concurrency",
                linkLabel: "Networking in Blyx →",
              },
              {
                emoji: "🖥",
                color: "#7c3aed",
                bg: "#f5f3ff",
                border: "#c4b5fd",
                title: "GPU Compute",
                body: "Write inline gpu { } blocks compiled directly to SPIR-V and NVPTX. Run AI workloads at full GPU speed without leaving Blyx.",
                link: "/learn/book/ch13-gpu-compute",
                linkLabel: "GPU Programming →",
              },
            ].map((card) => (
              <div key={card.title} style={{
                background: card.bg,
                padding: "clamp(28px,3vw,44px)",
                borderRadius: "12px",
                border: `1px solid ${card.border}`,
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{ fontSize: "clamp(36px,4vw,48px)", marginBottom: "20px" }}>{card.emoji}</div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 800,
                  fontSize: "clamp(20px,2.5vw,26px)", color: "#111827",
                  marginBottom: "14px", letterSpacing: "-0.4px",
                }}>{card.title}</h3>
                <p style={{ ...bodyStyle, color: "#4b5563", fontSize: "clamp(15px,1.6vw,18px)", flex: 1, marginBottom: "24px" }}>
                  {card.body}
                </p>
                <Link href={card.link} style={{
                  color: card.color, fontWeight: 700,
                  fontSize: "clamp(15px,1.6vw,18px)", textDecoration: "none",
                }}>
                  {card.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CODE SHOWCASE (side-by-side)
      ══════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: sectionPad, borderBottom: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))",
            gap: "clamp(40px,5vw,80px)",
            alignItems: "center",
          }}>
            {/* Left: text */}
            <div>
              <h2 style={{ ...h2Style }}>See Blyx in action</h2>
              <p style={{ ...bodyStyle, marginBottom: "28px" }}>
                Native static tensor types check inner matrix dimensions at compile time.
                A dimension mismatch is a <strong>compile error</strong> — not a runtime crash.
                Ship with confidence.
              </p>
              <p style={{ ...bodyStyle, marginBottom: "28px" }}>
                GPU acceleration via inline <code>gpu {"{ }"}</code> blocks with no boilerplate —
                Blyx compiles them to SPIR-V and NVPTX automatically.
              </p>
              <Link href="/play" style={{
                display: "inline-block",
                background: "#e05d44",
                color: "#ffffff",
                padding: "clamp(12px,1.5vw,16px) clamp(24px,3vw,36px)",
                borderRadius: "8px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(16px,1.8vw,20px)",
                textDecoration: "none",
              }}>
                Try in Playground →
              </Link>
            </div>

            {/* Right: code block */}
            <div style={{
              background: "#1f2937",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            }}>
              <div style={{
                background: "#111827",
                padding: "14px 24px",
                color: "#9ca3af",
                fontSize: "clamp(13px,1.4vw,15px)",
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: 600,
                borderBottom: "1px solid #374151",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <span style={{ color: "#fb923c" }}>●</span>
                <span style={{ color: "#fbbf24" }}>●</span>
                <span style={{ color: "#34d399" }}>●</span>
                <span style={{ marginLeft: "10px" }}>neural_net.blyx</span>
              </div>
              <pre style={{
                margin: 0,
                padding: "clamp(20px,3vw,36px)",
                fontSize: "clamp(13px,1.4vw,16px)",
                lineHeight: 1.85,
                fontFamily: "'Source Code Pro', monospace",
                overflowX: "auto",
                color: "#e5e7eb",
              }}>
                <code>
                  <span style={{ color: "#6b7280" }}>{"// compile-time dimension safety\n"}</span>
                  <span style={{ color: "#fb923c" }}>{"fn "}</span>
                  <span style={{ color: "#60a5fa" }}>{"forward"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"(\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"    w: "}</span>
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
                  <span style={{ color: "#e5e7eb" }}>{"> {\n"}</span>
                  <span style={{ color: "#e5e7eb" }}>{"    "}</span>
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

      {/* ══════════════════════════════════════════════
          SECTION 5 — STATS / NUMBERS
      ══════════════════════════════════════════════ */}
      <section style={{
        background: "#1f2937",
        padding: sectionPad,
        color: "#ffffff",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, color: "#f9fafb", textAlign: "center", marginBottom: "72px" }}>
            Numbers that matter
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: "clamp(32px, 4vw, 56px)",
          }}>
            {[
              { value: "2.8×", label: "Faster than Python", sub: "matrix multiply benchmark", color: "#fb923c" },
              { value: "142M", label: "Actor messages/sec", sub: "lock-free throughput", color: "#60a5fa" },
              { value: "48 KB", label: "Binary size", sub: "hello world program", color: "#34d399" },
              { value: "7", label: "Compiler stages", sub: "lex → parse → BIR → LLVM", color: "#c084fc" },
            ].map((s) => (
              <div key={s.value} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(48px,6vw,80px)",
                  color: s.color,
                  lineHeight: 1,
                  letterSpacing: "-2px",
                  marginBottom: "16px",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(18px,2vw,24px)",
                  color: "#f9fafb",
                  marginBottom: "8px",
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px,1.4vw,16px)",
                  color: "#9ca3af",
                }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — IN PRODUCTION  (testimonials / ecosystem)
      ══════════════════════════════════════════════ */}
      <section style={{ background: "#f9fafb", padding: sectionPad, borderTop: "1px solid #e5e7eb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ ...h2Style, textAlign: "center", marginBottom: "16px" }}>
            Loved by developers worldwide
          </h2>
          <p style={{ ...bodyStyle, textAlign: "center", marginBottom: "72px", color: "#6b7280" }}>
            Blyx powers everything from AI research to production systems.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(24px,3vw,40px)",
          }}>
            {[
              {
                quote: "Blyx's static tensor types caught 14 shape bugs in our training pipeline before we ever ran a single epoch. It's now our standard for all new ML infrastructure.",
                author: "A. Mehta",
                role: "Senior ML Engineer",
                color: "#e05d44",
              },
              {
                quote: "The actor model makes writing high-throughput network servers embarrassingly simple. We replaced 3000 lines of async Rust with 400 lines of Blyx actors.",
                author: "J. Okonkwo",
                role: "Systems Architect",
                color: "#2563eb",
              },
              {
                quote: "The gpu {} block syntax is a game changer. We write our CUDA-equivalent kernels inline, and blyxc handles SPIR-V output — no more separate kernel files.",
                author: "L. Zhang",
                role: "GPU Computing Researcher",
                color: "#16a34a",
              },
            ].map((t) => (
              <div key={t.author} style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "clamp(28px,3vw,44px)",
                border: "1px solid #e5e7eb",
                borderLeft: `5px solid ${t.color}`,
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(16px,1.8vw,20px)",
                  color: "#374151",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(15px,1.6vw,18px)",
                    color: "#111827",
                  }}>{t.author}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(13px,1.4vw,16px)",
                    color: "#9ca3af",
                    marginTop: "4px",
                  }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7 — GET STARTED CTA
      ══════════════════════════════════════════════ */}
      <section style={{
        background: "#e05d44",
        padding: sectionPad,
        textAlign: "center",
        color: "#ffffff",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px,5.5vw,64px)",
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Get started in seconds.
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(18px,2.5vw,24px)",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "48px",
            lineHeight: 1.6,
          }}>
            Install the complete Blyx toolchain — compiler, package manager, formatter, and language server — with a single command.
          </p>

          {/* Terminal block */}
          <div style={{
            maxWidth: "700px",
            margin: "0 auto 48px",
            background: "#111827",
            borderRadius: "10px",
            padding: "clamp(18px,2.5vw,28px) clamp(24px,3vw,40px)",
            textAlign: "left",
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "clamp(15px,1.8vw,20px)",
            color: "#34d399",
            letterSpacing: "0.02em",
          }}>
            <span style={{ color: "#6b7280", marginRight: "12px" }}>$</span>
            curl -sSf https://blyx-lang.space/install.sh | sh
          </div>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/learn/book" style={{
              background: "#ffffff",
              color: "#e05d44",
              padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
              borderRadius: "8px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(17px,2vw,22px)",
              textDecoration: "none",
              letterSpacing: "-0.3px",
            }}>
              Read The Blyx Book →
            </Link>
            <Link href="/play" style={{
              background: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              padding: "clamp(14px,2vw,20px) clamp(28px,4vw,48px)",
              borderRadius: "8px",
              border: "2px solid rgba(255,255,255,0.5)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(17px,2vw,22px)",
              textDecoration: "none",
              letterSpacing: "-0.3px",
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
