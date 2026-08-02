"use client";

import React, { useState, useEffect } from "react";

interface CodeExample {
  filename: string;
  code: string;
}

const EXAMPLES: CodeExample[] = [
  {
    filename: "tensor_math.blyx",
    code: `// Neural network forward pass
fn neural_forward(
    weights: tensor<f32, 128, 64>,
    input:   tensor<f32, 64,  32>,
) -> tensor<f32, 128, 32> {
    let output = weights * input;
    gpu { activate(output) };
    output
}`,
  },
  {
    filename: "actor_system.blyx",
    code: `// Lock-free concurrent actors
actor DataProcessor {
    queue_depth: u64,
}

fn main() {
    let proc = spawn DataProcessor {
        queue_depth: 0,
    };
    proc.send(ProcessBatch { size: 1024 });
    proc.send(Flush {});
    proc.join();
}`,
  },
  {
    filename: "gpu_kernel.blyx",
    code: `// Heterogeneous GPU compute
fn vector_multiply(n: usize) {
    let a: tensor<f32, 1024, 1> = tensor::random();
    let b: tensor<f32, 1024, 1> = tensor::random();

    gpu {
        for i in 0..n {
            result[i] = a[i] * b[i];
        }
    };
    println!("Done: {} elements", n);
}`,
  },
];

function highlight(code: string): string {
  const keywords = ["fn", "let", "const", "return", "if", "else", "while", "for", "in", "match", "pub", "use", "impl", "trait", "struct", "enum", "actor", "gpu", "parallel", "tensor", "spawn", "async", "await", "mut"];
  const types = ["f32", "f64", "i32", "i64", "u32", "u64", "u8", "u16", "i8", "i16", "bool", "str", "usize", "isize"];

  let result = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Comments
  result = result.replace(
    /(\/\/[^\n]*)/g,
    '<span style="color:#6b7a96">$1</span>'
  );

  // Strings
  result = result.replace(
    /("(?:[^"\\]|\\.)*")/g,
    '<span style="color:#f5a742">$1</span>'
  );

  // Keywords
  keywords.forEach((kw) => {
    result = result.replace(
      new RegExp(`\\b(${kw})\\b`, "g"),
      '<span style="color:#8b5cf6">$1</span>'
    );
  });

  // Types
  types.forEach((t) => {
    result = result.replace(
      new RegExp(`\\b(${t})\\b`, "g"),
      '<span style="color:#00e5ff">$1</span>'
    );
  });

  // Numbers
  result = result.replace(
    /\b(\d+(?:\.\d+)?)\b/g,
    '<span style="color:#00ff88">$1</span>'
  );

  // Function names (word before open paren)
  result = result.replace(
    /\b([a-z_][a-z0-9_]*)(?=\()/g,
    '<span style="color:#7dd3fc">$1</span>'
  );

  return result;
}

export default function CodeBlock() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % EXAMPLES.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = EXAMPLES[active];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "#0d1420",
        border: "1px solid #1a2535",
        borderRadius: "12px",
        overflow: "hidden",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "13px",
        lineHeight: "1.65",
        boxShadow: "0 0 40px rgba(0,229,255,0.06)",
      }}
    >
      {/* Traffic light row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid #1a2535",
          background: "#090e18",
        }}
      >
        <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: 10, color: "#6b7a96", fontSize: "12px" }}>
            {current.filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          style={{
            background: "none",
            border: "1px solid #1a2535",
            borderRadius: "6px",
            color: "#6b7a96",
            fontSize: "11px",
            padding: "3px 10px",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "color 0.2s",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Example selector tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #1a2535", background: "#090e18" }}>
        {EXAMPLES.map((ex, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); }}
            style={{
              background: "none",
              border: "none",
              borderBottom: i === active ? "2px solid #00e5ff" : "2px solid transparent",
              color: i === active ? "#00e5ff" : "#6b7a96",
              fontSize: "11px",
              padding: "6px 14px",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "color 0.2s",
            }}
          >
            {ex.filename}
          </button>
        ))}
      </div>

      {/* Code content */}
      <div
        style={{
          padding: "20px 24px",
          overflowX: "auto",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.4s ease",
          minHeight: "180px",
        }}
        dangerouslySetInnerHTML={{ __html: highlight(current.code) }}
      />
    </div>
  );
}
