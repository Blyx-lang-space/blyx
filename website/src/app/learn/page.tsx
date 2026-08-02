"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

interface Chapter {
  id: string;
  number: string;
  title: string;
  readingTime: string;
  summary: string;
  code: string;
  output: string;
  explanation: string;
  commonMistakes: string[];
  perfNotes: string;
  exercise: string;
  solution: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: "intro",
    number: "01",
    title: "Introduction to Blyx",
    readingTime: "5 min read",
    summary: "Blyx is an AI-native systems programming language combining memory safety, static tensor types, actor concurrency, and GPU compilation.",
    code: `fn main() -> i32 {
    println("Welcome to The Blyx Book!");
    return 0;
}`,
    output: "Welcome to The Blyx Book!\n[Process exited with code 0]",
    explanation: "The main function serves as the entry point. Statements end with semicolons, and string literals are encoded in UTF-8.",
    commonMistakes: [
      "Forgetting semicolon after statements.",
      "Returning string type when return signature specifies i32.",
    ],
    perfNotes: "Main entrypoint compiles directly to an LLVM main symbol with zero initialization runtime overhead.",
    exercise: "Modify main() to print 'Hello from Chapter 1' and return 0.",
    solution: `fn main() -> i32 {
    println("Hello from Chapter 1");
    return 0;
}`,
  },
  {
    id: "ownership",
    number: "02",
    title: "Ownership & Memory Safety",
    readingTime: "12 min read",
    summary: "Understand how compile-time linear ownership tracking eliminates double frees and data races without garbage collection.",
    code: `fn main() {
    let s1 = String::from("Hello Blyx");
    let s2 = s1; // Ownership moves from s1 to s2
    
    // println("s1: {}", s1); // Compile Error: Use of moved value s1
    println("s2: {}", s2);
}`,
    output: "s2: Hello Blyx",
    explanation: "Every value in Blyx has an owner. When ownership is transferred via assignment, the previous variable is invalidated at compile-time.",
    commonMistakes: [
      "Attempting to read a moved value after assignment.",
      "Passing a non-Copy value by value instead of borrowing via reference.",
    ],
    perfNotes: "Ownership moves are zero-cost compile-time tracking annotations. No heap memory copy is performed.",
    exercise: "Borrow s1 using reference &s1 to allow reading without moving ownership.",
    solution: `fn print_string(s: &String) {
    println!("{}", s);
}

fn main() {
    let s1 = String::from("Blyx Reference");
    print_string(&s1);
    println("s1 still valid: {}", s1);
}`,
  },
  {
    id: "tensors",
    number: "03",
    title: "Native Tensor Types & SIMD",
    readingTime: "15 min read",
    summary: "Master static shape-checked multidimensional tensor primitives with SIMD vectorization.",
    code: `import std.tensor;

fn main() {
    let weights: tensor<f32, 128, 64> = Tensor::random();
    let inputs: tensor<f32, 64, 32> = Tensor::random();
    
    // Matrix multiplication verified at compile-time (128x64) * (64x32) -> (128x32)
    let output = matmul(weights, inputs);
    println("Output shape: {:?}", output.shape);
}`,
    output: "Output shape: [128, 32]",
    explanation: "Tensor dimensions are encoded in the type signature. The Blyx type checker verifies shape compatibility during compilation.",
    commonMistakes: [
      "Attempting to multiply tensors with incompatible inner dimensions (e.g. 128x64 by 32x64).",
      "Dynamic indexing without bounds checking.",
    ],
    perfNotes: "BIR SSA optimizer fuses tensor operations into single-pass SIMD vector instructions.",
    exercise: "Create two 64x64 matrices and compute their elementwise addition.",
    solution: `fn main() {
    let a: tensor<f32, 64, 64> = Tensor::ones();
    let b: tensor<f32, 64, 64> = Tensor::ones();
    let c = a + b;
}`,
  },
  {
    id: "actors",
    number: "04",
    title: "Actor Model Concurrency",
    readingTime: "10 min read",
    summary: "Build concurrent systems using isolated actor processes and lock-free message channels.",
    code: `actor ComputeWorker {
    fn receive(msg: Message) {
        match msg {
            Task(id, payload) => println("Processing task #{}", id),
            Shutdown => break,
        }
    }
}

fn main() {
    let worker = spawn ComputeWorker();
    worker.send(Task(42, [1.0, 2.0]));
}`,
    output: "Processing task #42",
    explanation: "Actors communicate exclusively by sending immutable messages. Actors do not share state, avoiding locks and deadlocks.",
    commonMistakes: [
      "Attempting to send a mutable reference across an actor boundary.",
      "Forgetting to handle the Shutdown message signal.",
    ],
    perfNotes: "Actor mailboxes use lock-free MPMC ring buffers capable of 142M messages/sec.",
    exercise: "Implement an EchoActor that replies back with received string messages.",
    solution: `actor EchoActor {
    fn receive(msg: String) {
        println("Echo: {}", msg);
    }
}`,
  },
  {
    id: "gpu",
    number: "05",
    title: "Direct GPU Compilation",
    readingTime: "14 min read",
    summary: "Write inline GPU compute kernels that compile directly to SPIR-V and NVPTX machine code.",
    code: `fn main() {
    let data: tensor<f32, 1024> = Tensor::range(0.0, 1024.0);
    
    // Inline GPU execution block
    gpu {
        let idx = thread_id();
        data[idx] = data[idx] * 2.0;
    };
    
    println("Data[0]: {}", data[0]);
}`,
    output: "Data[0]: 0.0",
    explanation: "The gpu {} block marks instructions for lower-level NVPTX / SPIR-V emission directly by the BIR compiler.",
    commonMistakes: [
      "Accessing thread_id() outside of a gpu {} block.",
      "Exceeding physical thread block bounds without grid checks.",
    ],
    perfNotes: "Zero host-to-device FFI wrapper overhead. Memory allocations remain unified.",
    exercise: "Write a GPU kernel block to square each element of a 512-element vector.",
    solution: `gpu {
    let i = thread_id();
    if i < 512 {
        v[i] = v[i] * v[i];
    }
}`,
  },
];

export default function BookPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const chapter = CHAPTERS[activeIdx];

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <Container size="xl" style={{ flex: 1, padding: "40px max(24px, calc((100% - 1400px) / 2))" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "40px" }}>
          {/* Sidebar Book Navigation */}
          <aside style={{ borderRight: "1px solid #e1e4e8", paddingRight: "24px" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "14px", color: "#1a1a2e", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              The Blyx Book
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {CHAPTERS.map((ch, idx) => (
                <button
                  key={ch.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    borderRadius: "6px",
                    border: "none",
                    background: activeIdx === idx ? "#f0f4f8" : "transparent",
                    color: activeIdx === idx ? "#0066cc" : "#586069",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: activeIdx === idx ? 600 : 400,
                    fontSize: "14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Ch {ch.number}: {ch.title.split(" ")[0]}...</span>
                  <span style={{ fontSize: "11px", opacity: 0.7 }}>{ch.readingTime.split(" ")[0]}m</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Chapter Content */}
          <main style={{ maxWidth: "840px" }}>
            {/* Chapter Header */}
            <div style={{ marginBottom: "32px", borderBottom: "1px solid #e1e4e8", paddingBottom: "24px" }}>
              <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#0066cc", fontWeight: 700 }}>
                CHAPTER {chapter.number} • {chapter.readingTime}
              </div>
              <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "36px", color: "#1a1a2e", margin: "8px 0 12px" }}>
                {chapter.title}
              </h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", color: "#586069", lineHeight: 1.6 }}>
                {chapter.summary}
              </p>
            </div>

            {/* Code Block */}
            <div style={{ marginBottom: "32px" }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "20px", color: "#1a1a2e", marginBottom: "12px" }}>
                Code Example
              </h2>
              <div style={{ background: "#1a1a2e", borderRadius: "8px", overflow: "hidden", border: "1px solid #333355" }}>
                <div style={{ background: "#252540", padding: "10px 16px", color: "#888", fontSize: "13px", fontFamily: "monospace" }}>
                  example.blyx
                </div>
                <pre style={{ margin: 0, padding: "20px", fontFamily: "'Source Code Pro', monospace", fontSize: "14px", lineHeight: 1.7, color: "#e8edf5" }}>
                  <code>{chapter.code}</code>
                </pre>
              </div>
            </div>

            {/* Output */}
            <div style={{ marginBottom: "32px" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "16px", color: "#1a1a2e", marginBottom: "8px" }}>
                Execution Output
              </h3>
              <div style={{ background: "#f8f9fa", border: "1px solid #e1e4e8", borderRadius: "6px", padding: "14px 18px", fontFamily: "'Source Code Pro', monospace", fontSize: "13px", color: "#22863a" }}>
                {chapter.output}
              </div>
            </div>

            {/* Explanation & Notes */}
            <div style={{ marginBottom: "32px", display: "grid", gap: "20px" }}>
              <div style={{ background: "#f0f4f8", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #0066cc" }}>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1a1a2e", marginBottom: "6px" }}>
                  Explanation
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", margin: 0, lineHeight: 1.6 }}>
                  {chapter.explanation}
                </p>
              </div>

              <div style={{ background: "#fff5f5", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #e36209" }}>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1a1a2e", marginBottom: "6px" }}>
                  Common Mistakes to Avoid
                </h4>
                <ul style={{ margin: 0, paddingLeft: "20px", fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", lineHeight: 1.6 }}>
                  {chapter.commonMistakes.map((m, mIdx) => (
                    <li key={mIdx}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exercise & Solution */}
            <div style={{ marginBottom: "40px", padding: "24px", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e1e4e8" }}>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "18px", color: "#1a1a2e", marginBottom: "8px" }}>
                Chapter Exercise
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#586069", marginBottom: "16px" }}>
                {chapter.exercise}
              </p>
              <details style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#0066cc", cursor: "pointer" }}>
                <summary style={{ fontWeight: 600 }}>Show Solution</summary>
                <div style={{ marginTop: "12px", background: "#1a1a2e", padding: "16px", borderRadius: "6px", color: "#e8edf5", fontFamily: "'Source Code Pro', monospace", fontSize: "13px" }}>
                  <pre style={{ margin: 0 }}><code>{chapter.solution}</code></pre>
                </div>
              </details>
            </div>

            {/* Prev / Next Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e1e4e8", paddingTop: "24px" }}>
              <button
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                disabled={activeIdx === 0}
                style={{
                  background: "transparent",
                  border: "1px solid #e1e4e8",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  color: activeIdx === 0 ? "#ccc" : "#0066cc",
                  cursor: activeIdx === 0 ? "not-allowed" : "pointer",
                }}
              >
                ← Previous Chapter
              </button>

              <button
                onClick={() => setActiveIdx((prev) => Math.min(CHAPTERS.length - 1, prev + 1))}
                disabled={activeIdx === CHAPTERS.length - 1}
                style={{
                  background: activeIdx === CHAPTERS.length - 1 ? "#ccc" : "#0066cc",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#ffffff",
                  cursor: activeIdx === CHAPTERS.length - 1 ? "not-allowed" : "pointer",
                  marginLeft: "auto",
                }}
              >
                Next Chapter →
              </button>
            </div>
          </main>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
