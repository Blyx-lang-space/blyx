import React from 'react';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

export default function RoadmapPage() {
  const milestones = [
    {
      version: 'v0.1.0-alpha',
      status: 'Released 2026-07-31',
      badge: 'RELEASED',
      badgeColor: 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30',
      icon: <CheckCircle2 className="w-6 h-6 text-[#00ff88]" />,
      items: [
        'Native Blyx compiler frontend (blyx_lexer, blyx_parser, blyx_ast, blyx_semantic, blyx_typeck)',
        'Blyx Intermediate Representation SSA engine & -O3 pass manager (blyx_bir)',
        'Core lock-free actor runtime (blyx) & standard library collections (blyx-std)',
        'Ecosystem tools: blyxc, blyxpkg, blyxfmt, blyx-analyzer, blyxdoc, blyxup, blyxdbg, blyxprof',
        'Official VS Code extension (BLYX Language v1.1.0) & online interactive playground',
      ],
    },
    {
      version: 'v0.2.0-alpha',
      status: 'Target: Q4 2026',
      badge: 'IN PROGRESS',
      badgeColor: 'bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/30',
      icon: <Clock className="w-6 h-6 text-[#00e5ff]" />,
      items: [
        'BLAS / SIMD vectorization for tensor<T, D1, D2> matrix multiplication',
        'SPIR-V / NVPTX GPU kernel codegen block lowering in compiler',
        'Blyx Package Registry backend web server (https://blyx-lang.space/registry)',
        'Complete Language Server Protocol (LSP) textDocument/rename & code actions',
      ],
    },
    {
      version: 'v1.0.0-beta',
      status: 'Target: Q2 2027',
      badge: 'PLANNED',
      badgeColor: 'bg-[#8b5cf6]/10 text-[#8b5cf6] border-[#8b5cf6]/30',
      icon: <Calendar className="w-6 h-6 text-[#8b5cf6]" />,
      items: [
        'Language specification freeze & complete formal semantics reference',
        'Production actor runtime stabilization & async I/O epoll/kqueue event loop',
        'Cranelift & WebAssembly backend lowerings alongside LLVM IR',
        '100% test coverage across compiler, runtime, tools, and web ecosystem',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono">
          PUBLIC ROADMAP &bull; LANGUAGE SPECIFICATION TIMELINE
        </div>
        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl text-[#e8edf5]">
          Blyx Language Roadmap
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b7a96] text-base sm:text-lg">
          Transparent development timeline from initial Alpha release to production Beta v1.0.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#1a2535] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {milestones.map((m, idx) => (
          <div key={idx} className="relative space-y-4">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 bg-[#05080f] p-1 rounded-full border border-[#1a2535]">
              {m.icon}
            </div>

            <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-4 hover:border-[#00e5ff]/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1a2535] pb-4">
                <div>
                  <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#e8edf5]">{m.version}</h2>
                  <div className="text-xs text-[#6b7a96] font-mono">{m.status}</div>
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${m.badgeColor}`}>
                  {m.badge}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-[#6b7a96]">
                {m.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-[#00e5ff] font-bold">&bull;</span>
                    <span className="text-[#e8edf5]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
