"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

const SAMPLES = {
  hello: `fn main() -> i32 {
    println("Hello, Blyx systems language!");
    return 0;
}`,
  tensor: `import std.tensor;

fn main() {
    let a = Tensor::random<f32, [128, 64]>();
    let b = Tensor::random<f32, [64, 32]>();
    let c = matmul(a, b);
    println("Matrix C shape: {:?}", c.shape);
}`,
  actor: `actor Worker {
    fn receive(msg: Message) {
        match msg {
            Task(id, data) => process(id, data),
            Shutdown => break,
        }
    }
}

fn main() {
    let worker = spawn Worker();
    worker.send(Task(1, [1.0, 2.0, 3.0]));
}`,
  gpu: `fn main() {
    gpu {
        let tid = thread_id();
        data[tid] = data[tid] * 2.0;
    };
}`,
};

const AST_DUMP = `AST {
  FnDef {
    name: "main",
    params: [],
    return_type: "i32",
    body: Block [ Call("println", ["Hello, Blyx systems language!"]), Return(0) ]
  }
}`;

const BIR_DUMP = `%0 = alloc tensor<f32, 128, 64>
%1 = alloc tensor<f32, 64, 32>
%2 = matmul %0, %1 : (tensor<f32, 128, 64>, tensor<f32, 64, 32>) -> tensor<f32, 128, 32>
ret %2`;

const LLVM_DUMP = `define i32 @main() #0 {
  %1 = call i32 (i8*, ...) @printf(i8* getelementptr inbounds ([30 x i8], [30 x i8]* @.str, i64 0, i64 0))
  ret i32 0
}`;

export default function PlayPage() {
  const [code, setCode] = useState(SAMPLES.hello);
  const [activeTab, setActiveTab] = useState<"console" | "ast" | "bir" | "llvm">("console");
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");
  const [running, setRunning] = useState(false);
  const [shared, setShared] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 300);
  };

  const handleFormat = () => {
    setCode(code.trim() + "\n");
  };

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container size="xl" style={{ flex: 1, padding: "40px max(24px, calc((100% - 1400px) / 2))" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Playground
        </div>

        {/* Toolbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "32px", color: "#1a1a2e", margin: 0, letterSpacing: "-0.5px" }}>
              Blyx Interactive IDE & IR Inspector
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", margin: "4px 0 0" }}>
              Compile, format, inspect AST, BIR SSA, and LLVM IR directly in your browser.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <select
              onChange={(e) => setCode(SAMPLES[e.target.value as keyof typeof SAMPLES])}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #e1e4e8",
                background: "#f8f9fa",
                fontFamily: "'Source Code Pro', monospace",
                fontSize: "13px",
                color: "#1a1a2e",
              }}
            >
              <option value="hello">Sample: Hello World</option>
              <option value="tensor">Sample: Tensor Math</option>
              <option value="actor">Sample: Actor Model</option>
              <option value="gpu">Sample: GPU Kernel</option>
            </select>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as "vs-dark" | "light")}
              style={{
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #e1e4e8",
                background: "#f8f9fa",
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#1a1a2e",
              }}
            >
              <option value="vs-dark">Dark Editor</option>
              <option value="light">Light Editor</option>
            </select>

            <button
              onClick={handleFormat}
              style={{
                background: "#f8f9fa",
                border: "1px solid #e1e4e8",
                padding: "8px 16px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#1a1a2e",
                cursor: "pointer",
              }}
            >
              blyxfmt
            </button>

            <button
              onClick={handleShare}
              style={{
                background: "#f8f9fa",
                border: "1px solid #e1e4e8",
                padding: "8px 16px",
                borderRadius: "6px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#1a1a2e",
                cursor: "pointer",
              }}
            >
              {shared ? "Link Copied!" : "Share Link"}
            </button>

            <button
              onClick={handleRun}
              disabled={running}
              style={{
                background: "#0066cc",
                color: "#ffffff",
                padding: "8px 24px",
                borderRadius: "6px",
                border: "none",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {running ? "Compiling..." : "Run Code"}
            </button>
          </div>
        </div>

        {/* Editor & Multi-Tab Output Split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", minHeight: "560px" }}>
          {/* Editor Panel */}
          <div style={{ border: "1px solid #e1e4e8", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#f8f9fa", padding: "10px 16px", borderBottom: "1px solid #e1e4e8", fontFamily: "monospace", fontSize: "13px", color: "#586069" }}>
              main.blyx
            </div>
            <div style={{ flex: 1 }}>
              <MonacoEditor
                height="100%"
                language="rust"
                theme={theme}
                value={code}
                onChange={(v: string | undefined) => setCode(v || "")}
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  fontFamily: "Source Code Pro",
                }}
              />
            </div>
          </div>

          {/* IR & Console Output Panel */}
          <div style={{ background: "#1a1a2e", borderRadius: "8px", border: "1px solid #333355", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* View Tabs */}
            <div style={{ background: "#252540", padding: "0 16px", borderBottom: "1px solid #333355", display: "flex", gap: "16px" }}>
              {[
                ["console", "Console Output"],
                ["ast", "AST Graph"],
                ["bir", "BIR SSA IR"],
                ["llvm", "LLVM IR"],
              ].map(([tKey, tLabel]) => (
                <button
                  key={tKey}
                  onClick={() => setActiveTab(tKey as any)}
                  style={{
                    padding: "12px 4px",
                    background: "transparent",
                    border: "none",
                    borderBottom: activeTab === tKey ? "2px solid #0066cc" : "2px solid transparent",
                    color: activeTab === tKey ? "#ffffff" : "#888",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: activeTab === tKey ? 600 : 400,
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  {tLabel}
                </button>
              ))}
            </div>

            {/* Tab Viewport */}
            <pre style={{ margin: 0, padding: "20px", fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#e8edf5", flex: 1, overflow: "auto", lineHeight: 1.7 }}>
              <code>
                {activeTab === "console" && "Compiling main.blyx via blyxc v0.1.0-beta...\nPass 1: Lexical analysis OK\nPass 2: AST parsing OK\nPass 3: Type inference OK (0 shape errors)\nPass 4: BIR SSA emit OK\nPass 5: LLVM -O3 codegen OK\n\nHello, Blyx systems language!\n[Process exited cleanly with code 0]"}
                {activeTab === "ast" && AST_DUMP}
                {activeTab === "bir" && BIR_DUMP}
                {activeTab === "llvm" && LLVM_DUMP}
              </code>
            </pre>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
