"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeSnippet {
  id: string;
  label: string;
  filename: string;
  code: string;
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "hello",
    label: "Hello World",
    filename: "hello.blyx",
    code: `fn main() -> i32 {
    println("Hello, Blyx systems language!");
    return 0;
}`,
  },
  {
    id: "tensor",
    label: "Tensor Math",
    filename: "tensor.blyx",
    code: `import std.tensor;

fn main() {
    let a = Tensor::random<f32, [128, 64]>();
    let b = Tensor::random<f32, [64, 32]>();
    
    // Compile-time shape verified matrix multiplication
    let c = matmul(a, b); // Result type: Tensor<f32, [128, 32]>
    println("Matrix C shape: {:?}", c.shape);
}`,
  },
  {
    id: "actor",
    label: "Actor Model",
    filename: "actor.blyx",
    code: `actor Worker {
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
  },
  {
    id: "gpu",
    label: "GPU Kernel",
    filename: "kernel.blyx",
    code: `#[gpu_kernel]
fn vector_add(a: &[f32], b: &[f32], out: &mut [f32]) {
    let idx = thread_idx_x() + block_idx_x() * block_dim_x();
    if idx < a.len() {
        out[idx] = a[idx] + b[idx];
    }
}`,
  },
];

export default function CodeTabs() {
  const [activeId, setActiveId] = useState("hello");
  const [copied, setCopied] = useState(false);

  const activeSnippet = SNIPPETS.find((s) => s.id === activeId) || SNIPPETS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--code-bg)] border border-[var(--border-strong)] rounded-xl overflow-hidden shadow-sm">
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="flex space-x-1 overflow-x-auto">
          {SNIPPETS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors ${
                activeId === tab.id
                  ? "bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="p-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center space-x-1 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Display */}
      <div className="p-4 font-mono text-xs sm:text-sm text-[var(--code-text)] overflow-x-auto leading-relaxed">
        <pre>{activeSnippet.code}</pre>
      </div>
    </div>
  );
}
