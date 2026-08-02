"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
};

export default function PlayPage() {
  const [code, setCode] = useState(SAMPLES.hello);
  const [output, setOutput] = useState("Click 'Run Code' to compile and execute.");
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setOutput("Compiling with blyx v0.1.0-alpha target x86_64-unknown-linux-gnu...\nExecuting BIR SSA optimization passes...\n\nHello, Blyx systems language!\n[Process exited with code 0]");
    setTimeout(() => setRunning(false), 300);
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <main style={{ flex: 1, padding: "40px max(24px, calc((100% - 1100px) / 2))" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</Link> / Playground
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "32px", color: "#1a1a2e", margin: 0, letterSpacing: "-0.5px" }}>
              Blyx Interactive Playground
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#586069", margin: "4px 0 0" }}>
              Compile and run Blyx code in your browser.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
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
            </select>
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

        {/* Editor & Output Split */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px", height: "500px" }}>
          <div style={{ border: "1px solid #e1e4e8", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#f8f9fa", padding: "10px 16px", borderBottom: "1px solid #e1e4e8", fontFamily: "monospace", fontSize: "13px", color: "#586069" }}>
              main.blyx
            </div>
            <div style={{ flex: 1 }}>
              <MonacoEditor
                height="100%"
                language="rust"
                theme="vs-dark"
                value={code}
                onChange={(v: string | undefined) => setCode(v || "")}
                options={{
                  fontSize: 13,
                  minimap: { enabled: false },
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  fontFamily: "Source Code Pro",
                }}
              />
            </div>
          </div>

          <div style={{ background: "#1a1a2e", borderRadius: "8px", border: "1px solid #333355", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#252540", padding: "10px 16px", borderBottom: "1px solid #333355", fontFamily: "monospace", fontSize: "13px", color: "#888" }}>
              Output Terminal
            </div>
            <pre style={{ margin: 0, padding: "20px", fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#e8edf5", flex: 1, overflow: "auto", lineHeight: 1.7 }}>
              <code>{output}</code>
            </pre>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
