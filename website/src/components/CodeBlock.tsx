'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExample {
  title: string;
  filename: string;
  code: string;
}

const examples: CodeExample[] = [
  {
    title: 'Tensor Math',
    filename: 'tensor_math.blyx',
    code: `// Neural network forward pass — Blyx tensor_math.blyx
fn neural_forward(
    weights: tensor<f32, 128, 64>,
    input:   tensor<f32, 64,  32>,
) -> tensor<f32, 128, 32> {
    let output = weights * input;   // dimension-checked at compile time
    gpu { activate(output) };       // inline GPU execution
    output
}`,
  },
  {
    title: 'Actor Concurrency',
    filename: 'actor_system.blyx',
    code: `// Lock-free concurrent actors — actor_system.blyx
actor DataProcessor {
    queue_depth: u64,
}

fn main() {
    let proc = spawn DataProcessor { queue_depth: 0 };
    proc.send(ProcessBatch { size: 1024 });  // zero-copy message passing
    proc.send(Flush {});
    proc.join();
}`,
  },
  {
    title: 'GPU Compute Kernel',
    filename: 'gpu_kernel.blyx',
    code: `// Heterogeneous compute — gpu_kernel.blyx
fn vector_multiply(n: usize) {
    let a: tensor<f32, 1024, 1> = tensor::random();
    let b: tensor<f32, 1024, 1> = tensor::random();
    
    gpu {                           // compiles to SPIR-V / NVPTX
        for i in 0..n {
            result[i] = a[i] * b[i];
        }
    };
    println!("Done: {} elements", n);
}`,
  },
];

export default function CodeBlock() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % examples.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = examples[activeIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightBlyx = (code: string) => {
    return code
      .split('\n')
      .map((line, lineIdx) => {
        if (line.trim().startsWith('//')) {
          return (
            <div key={lineIdx} className="text-[#6b7a96]">
              {line}
            </div>
          );
        }

        const parts = line.split(/(\b(?:fn|let|gpu|actor|spawn|parallel|actor_system|tensor|f32|u64|usize|i32|main|println!)\b|(?:\/\/.+$))/g);

        return (
          <div key={lineIdx} className="whitespace-pre">
            {parts.map((part, pIdx) => {
              if (part.startsWith('//')) {
                return <span key={pIdx} className="text-[#6b7a96]">{part}</span>;
              }
              if (['fn', 'let', 'gpu', 'actor', 'spawn', 'parallel'].includes(part)) {
                return <span key={pIdx} className="text-[#8b5cf6] font-semibold">{part}</span>;
              }
              if (['tensor', 'f32', 'u64', 'usize', 'i32'].includes(part)) {
                return <span key={pIdx} className="text-[#00e5ff]">{part}</span>;
              }
              if (['neural_forward', 'vector_multiply', 'main'].includes(part)) {
                return <span key={pIdx} className="text-[#7dd3fc]">{part}</span>;
              }
              if (['println!'].includes(part)) {
                return <span key={pIdx} className="text-[#00ff88]">{part}</span>;
              }
              return <span key={pIdx} className="text-[#e8edf5]">{part}</span>;
            })}
          </div>
        );
      });
  };

  return (
    <div className="w-full max-w-2xl bg-[#0d1420] border border-[#1a2535] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#05080f]/80 border-b border-[#1a2535]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-[#6b7a96]">{current.filename}</span>
        </div>
        <div className="flex items-center gap-2">
          {examples.map((ex, idx) => (
            <button
              key={ex.title}
              onClick={() => setActiveIdx(idx)}
              className={`px-2 py-0.5 text-xs font-mono rounded transition-all ${
                activeIdx === idx
                  ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40'
                  : 'text-[#6b7a96] hover:text-[#e8edf5]'
              }`}
            >
              {ex.title}
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="p-1 text-[#6b7a96] hover:text-[#00e5ff] transition-colors ml-2"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-[#00ff88]" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[220px]">
        {highlightBlyx(current.code)}
      </div>
    </div>
  );
}
