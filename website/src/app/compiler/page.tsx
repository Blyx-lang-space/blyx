import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompilerPage() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "60px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Compiler Architecture
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Compiler Architecture & BIR SSA
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "48px" }}>
            The Blyx compiler uses a 7-stage pipeline centered around BIR (Blyx Intermediate Representation), a strongly-typed SSA IR that lowers directly to LLVM and GPU PTX.
          </p>

          {/* 7 Pipeline Stages */}
          <div style={{ marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a2e", marginBottom: "24px" }}>
              7-Stage Deterministic Pipeline
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
              {[
                { stage: "01", title: "Lexer", desc: "Zero-copy streaming tokenization." },
                { stage: "02", title: "Parser", desc: "Recursive descent AST generation." },
                { stage: "03", title: "Semantic", desc: "Scope binding & linear ownership analysis." },
                { stage: "04", title: "Type Check", desc: "Compile-time static tensor dimension inference." },
                { stage: "05", title: "BIR Lowering", desc: "SSA register allocation & intermediate IR emission." },
                { stage: "06", title: "BIR Optimizer", desc: "Kernel fusion, dead code removal & loop unrolling." },
                { stage: "07", title: "LLVM Backend", desc: "Machine code generation for x86_64, ARM64 & PTX." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "20px",
                    background: "#f8f9fa",
                    borderRadius: "8px",
                    border: "1px solid #e1e4e8",
                  }}
                >
                  <span style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#0066cc", fontWeight: 700 }}>
                    {item.stage}
                  </span>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "16px", color: "#1a1a2e", margin: "4px 0 8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#586069", margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BIR SSA IR Code Box */}
          <div>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a2e", marginBottom: "16px" }}>
              BIR SSA Format
            </h2>
            <div
              style={{
                background: "#1a1a2e",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #333355",
              }}
            >
              <div style={{ background: "#252540", padding: "10px 16px", borderBottom: "1px solid #333355", color: "#888", fontSize: "13px", fontFamily: "monospace" }}>
                bir_dump.ir
              </div>
              <pre style={{ margin: 0, padding: "20px 24px", fontFamily: "'Source Code Pro', monospace", fontSize: "14px", lineHeight: 1.7, color: "#e8edf5" }}>
                <code>
                  <span style={{ color: "#888" }}>{"// BIR SSA Stream Output\n"}</span>
                  <span style={{ color: "#7c3aed" }}>%0 </span>= <span style={{ color: "#79b8ff" }}>alloc</span> tensor&lt;<span style={{ color: "#005cc5" }}>f32</span>, <span style={{ color: "#e36209" }}>128</span>, <span style={{ color: "#e36209" }}>64</span>&gt;{"\n"}
                  <span style={{ color: "#7c3aed" }}>%1 </span>= <span style={{ color: "#79b8ff" }}>alloc</span> tensor&lt;<span style={{ color: "#005cc5" }}>f32</span>, <span style={{ color: "#e36209" }}>64</span>, <span style={{ color: "#e36209" }}>32</span>&gt;{"\n"}
                  <span style={{ color: "#7c3aed" }}>%2 </span>= <span style={{ color: "#79b8ff" }}>matmul</span> %0, %1 : (tensor&lt;f32, 128, 64&gt;, tensor&lt;f32, 64, 32&gt;) -&gt; tensor&lt;f32, 128, 32&gt;{"\n"}
                  <span style={{ color: "#7c3aed" }}>ret </span>%2
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
