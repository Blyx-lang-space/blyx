'use client';

import React, { useState } from 'react';

export default function PlaygroundPage() {
  const [activeTab, setActiveTab] = useState<'stdout' | 'diag' | 'bir' | 'llvm'>('stdout');
  const [code, setCode] = useState(`// Blyx Interactive Playground (v1.0.0-rc.1)
#![feature(blyx_experimental)]

actor NetworkWorker {
    worker_id: u64,
}

fn main() {
    let weights: tensor<f32, 128, 64>;
    
    gpu {
        // Heterogeneous compute block
    };

    println!("Hello from Blyx play.blyx-lang.space!");
}`);

  const tabContents = {
    stdout: `=== Blyx Compiler Execution Output (blyxc v1.0.0-rc.1) ===\n\nCompiling target using \`blyxc main.blyx\`...\nOptimization Level: -O2\nTarget Triple: x86_64-pc-windows-msvc\n\nOutput:\nHello from Blyx play.blyx-lang.space!\n\nExecution finished cleanly with exit code 0.`,
    diag: `=== Blyx Compiler Diagnostics ===\n\n[00:00:01] INFO: Blyx parser initialized.\n[00:00:01] INFO: HIR lowering successful.\n[00:00:01] INFO: BIR optimization passes (O2) applied: 2 DCE passes, 1 ConstantFolding pass.\n[00:00:01] SUCCESS: Zero errors, zero warnings.`,
    bir: `=== Blyx Intermediate Representation (BIR) SSA Dump ===\n\nfn @main() -> void {\n  bb0:\n    %0 = allocate tensor<f32, 128, 64>\n    %1 = gpu_dispatch kernel_0\n    call @println("Hello from Blyx play.blyx-lang.space!")\n    return\n}`,
    llvm: `=== LLVM IR Emitter Dump ===\n\ndefine i32 @main() {\nentry:\n  %0 = call i32 @puts(i8* getelementptr inbounds ([38 x i8], [38 x i8]* @.str, i64 0, i64 0))\n  ret i32 0\n}`,
  };

  return (
    <div className="flex flex-col h-[calc(100vh-65px)] bg-[#07090e] text-white">
      <div className="flex items-center justify-between px-6 py-2 bg-[#0b0f17] border-b border-[#00f2fe]/15">
        <span className="font-mono text-xs text-[#00f2fe] font-semibold">play.blyx-lang.space</span>
        <button
          onClick={() => setActiveTab('stdout')}
          className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-black font-semibold text-xs hover:opacity-90"
        >
          ▶ Run Blyx Code
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-[#00f2fe]/15 flex flex-col">
          <div className="px-4 py-2 bg-[#0f141d] border-b border-white/10 text-xs font-mono text-[#94a3b8]">
            main.blyx
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 bg-[#07090e] text-[#38bdf8] font-mono text-sm resize-none outline-none leading-relaxed"
            spellCheck={false}
          />
        </div>

        <div className="w-1/2 flex flex-col bg-[#0f141d]">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#0b0f17] border-b border-white/10 text-xs font-mono">
            {(['stdout', 'diag', 'bir', 'llvm'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded ${
                  activeTab === tab
                    ? 'bg-[#00f2fe]/15 text-[#00f2fe] font-semibold'
                    : 'text-[#94a3b8] hover:text-white'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <pre className="flex-1 p-4 font-mono text-xs text-[#e2e8f0] overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {tabContents[activeTab]}
          </pre>
        </div>
      </div>
    </div>
  );
}
