"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

const PIPELINE_STAGES = [
  {
    id: "lexer",
    name: "01. Lexer",
    desc: "Zero-copy UTF-8 character stream tokenization.",
    input: "fn main() { let x = 42; }",
    output: "[Token::Fn, Token::Ident(\"main\"), Token::LParen, Token::RParen, Token::LBrace, Token::Let, Token::Ident(\"x\"), Token::Equal, Token::Int(42), Token::Semicolon, Token::RBrace]",
  },
  {
    id: "parser",
    name: "02. Parser & AST",
    desc: "Recursive descent parser producing strongly-typed Abstract Syntax Trees.",
    input: "[Tokens]",
    output: "FnDef {\n  name: \"main\",\n  body: Block [\n    LetStmt { name: \"x\", value: Literal(42) }\n  ]\n}",
  },
  {
    id: "typecheck",
    name: "03. Type Checker & Tensor Shapes",
    desc: "Verifies memory lifetimes, linear ownership, and multidimensional matrix dimensions.",
    input: "LetStmt { name: \"x\", value: Literal(42) }",
    output: "CheckedType: LetStmt { name: \"x\", inferred_type: i32, shape: [] }",
  },
  {
    id: "bir",
    name: "04. BIR SSA Intermediate IR",
    desc: "Blyx Intermediate Representation: strongly-typed SSA instructions.",
    input: "Checked AST",
    output: "%0 = alloc i32\nstore i32 42, %0\nret void",
  },
  {
    id: "llvm",
    name: "05. LLVM Code Generation",
    desc: "Lowers BIR SSA into target-native machine code (x86_64, ARM64, PTX, SPIR-V).",
    input: "BIR SSA",
    output: "define i32 @main() #0 {\n  ret i32 0\n}",
  },
];

export default function CompilerPage() {
  const [selectedIdx, setSelectedIdx] = useState(3);
  const stage = PIPELINE_STAGES[selectedIdx];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container size="xl" style={{ flex: 1, padding: "60px max(24px, calc((100% - 1400px) / 2))" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "24px" }}>
            <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Compiler Architecture
          </div>

          <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "40px", color: "#1a1a2e", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Interactive Compiler Architecture & BIR Pipeline
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", color: "#586069", lineHeight: 1.6, marginBottom: "40px" }}>
            Click through the stages below to inspect how Blyx source code transforms into optimized machine code and GPU assembly.
          </p>

          {/* Pipeline Interactive Tabs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "36px" }}>
            {PIPELINE_STAGES.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => setSelectedIdx(idx)}
                style={{
                  padding: "16px",
                  borderRadius: "8px",
                  border: selectedIdx === idx ? "2px solid #0066cc" : "1px solid #e1e4e8",
                  background: selectedIdx === idx ? "#f0f4f8" : "#f8f9fa",
                  color: selectedIdx === idx ? "#0066cc" : "#1a1a2e",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px" }}>
                  {st.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#586069", marginTop: "4px" }}>
                  {st.desc.slice(0, 45)}...
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Inspection Box */}
          <div style={{ padding: "32px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "24px", color: "#1a1a2e", marginBottom: "8px" }}>
              {stage.name}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", marginBottom: "24px", lineHeight: 1.6 }}>
              {stage.desc}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1a1a2e", marginBottom: "8px" }}>
                  Stage Input
                </div>
                <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "6px", color: "#e8edf5", fontFamily: "'Source Code Pro', monospace", fontSize: "13px" }}>
                  {stage.input}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "14px", color: "#1a1a2e", marginBottom: "8px" }}>
                  Stage Output Transformation
                </div>
                <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "6px", color: "#e8edf5", fontFamily: "'Source Code Pro', monospace", fontSize: "13px" }}>
                  <pre style={{ margin: 0 }}><code>{stage.output}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
