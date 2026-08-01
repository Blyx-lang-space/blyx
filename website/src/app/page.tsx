import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap, Cpu, Lock, Layers, Globe, Terminal as TerminalIcon } from 'lucide-react';
import BirStream from '@/components/BirStream';
import CodeBlock from '@/components/CodeBlock';
import StatCounter from '@/components/StatCounter';
import TerminalBlock from '@/components/TerminalBlock';

export default function HomePage() {
  const tools = [
    { name: 'blyxc', desc: 'Compiler Driver' },
    { name: 'blyxpkg', desc: 'Package Manager' },
    { name: 'blyxfmt', desc: 'Code Formatter' },
    { name: 'blyx-analyzer', desc: 'LSP Language Server' },
    { name: 'blyxdoc', desc: 'Documentation Generator' },
    { name: 'blyxup', desc: 'Toolchain Installer' },
    { name: 'blyxdbg', desc: 'Interactive Debugger' },
    { name: 'blyxprof', desc: 'Performance Profiler' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* SECTION 2: HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <BirStream />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono font-medium tracking-wider uppercase">
            <span>OPEN SOURCE</span> &bull; <span>AI-NATIVE</span> &bull; <span>v0.1.0α</span>
          </div>

          <h1 className="font-['Space_Grotesk'] font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#e8edf5] leading-[1.05]">
            The Language Built <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
              for the AI Era.
            </span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-[#6b7a96] font-['Inter'] leading-relaxed">
            Memory-safe. GPU-native. Actor-concurrent. <br className="hidden sm:inline" /> Zero garbage collector overhead.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/download"
              className="px-8 py-4 rounded-full bg-[#00e5ff] text-[#05080f] font-['Space_Grotesk'] font-bold text-base hover:bg-[#00e5ff]/90 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)]"
            >
              Install Blyx
            </Link>
            <Link
              href="/play"
              className="px-8 py-4 rounded-full bg-[#0d1420] text-[#e8edf5] border border-[#1a2535] font-['Space_Grotesk'] font-medium text-base hover:border-[#00e5ff]/50 hover:text-[#00e5ff] transition-all flex items-center gap-2"
            >
              Playground <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Syntax Highlighted Code Block Teaser */}
          <div className="pt-8 w-full flex justify-center">
            <CodeBlock />
          </div>

          <div className="text-xs text-[#6b7a96] pt-4 font-['Inter']">
            Used in open-source AI projects &bull; Dual MIT + Apache 2.0 &bull; Created by{' '}
            <a href="https://github.com/Rahulchaube1" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline font-medium">
              Rahul Chaube
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE PILLARS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-medium text-[#00e5ff] tracking-widest uppercase">WHY BLYX?</div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-5xl text-[#e8edf5]">
            Engineered for Maximum Throughput & Safety
          </h2>
        </div>

        <div className="space-y-8">
          {/* Pillar 01 */}
          <div className="relative overflow-hidden bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 sm:p-12 hover:border-[#00e5ff]/30 transition-all group">
            <div className="absolute left-4 top-2 text-[120px] font-['Space_Grotesk'] font-bold text-[#00e5ff]/5 select-none pointer-events-none">
              01
            </div>
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="text-xs font-mono font-semibold text-[#00e5ff] tracking-wider uppercase">01 PERFORMANCE</div>
              <h3 className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl text-[#e8edf5]">
                "Blazingly fast — without trading safety for speed."
              </h3>
              <p className="text-[#6b7a96] leading-relaxed">
                No GC pauses. No runtime overhead. Blyx compiles directly to native machine code via LLVM. The BIR pass manager applies tensor fusion, loop unrolling, LICM, and function inlining at -O3.
              </p>
              <div className="pt-2">
                <Link href="/benchmarks" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00e5ff] hover:underline">
                  View Benchmarks <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="relative overflow-hidden bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 sm:p-12 hover:border-[#00e5ff]/30 transition-all group">
            <div className="absolute left-4 top-2 text-[120px] font-['Space_Grotesk'] font-bold text-[#00e5ff]/5 select-none pointer-events-none">
              02
            </div>
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="text-xs font-mono font-semibold text-[#00e5ff] tracking-wider uppercase">02 SAFETY</div>
              <h3 className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl text-[#e8edf5]">
                Compile-time Verification & Zero Null Pointer Exceptions
              </h3>
              <p className="text-[#6b7a96] leading-relaxed">
                Static ownership and lifetime verification prevent data races and buffer overflows. Statically dimensioned <code className="text-[#00e5ff] font-mono">tensor&lt;T, D1, D2&gt;</code> types catch matrix dimension mismatch errors at compile time.
              </p>
              <div className="pt-2">
                <Link href="/docs" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00e5ff] hover:underline">
                  Read Type System Specs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="relative overflow-hidden bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 sm:p-12 hover:border-[#00e5ff]/30 transition-all group">
            <div className="absolute left-4 top-2 text-[120px] font-['Space_Grotesk'] font-bold text-[#00e5ff]/5 select-none pointer-events-none">
              03
            </div>
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="text-xs font-mono font-semibold text-[#00e5ff] tracking-wider uppercase">03 CONCURRENCY</div>
              <h3 className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl text-[#e8edf5]">
                Lock-Free Actors & Heterogeneous Compute
              </h3>
              <p className="text-[#6b7a96] leading-relaxed">
                Actors are first-class language primitives. Lock-free message queues and work-stealing thread schedulers ensure zero mutex contention and zero deadlocks.
              </p>
              <div className="pt-2">
                <Link href="/play" className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00e5ff] hover:underline">
                  Try Actor Example <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURE GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <div className="text-xs font-mono font-medium text-[#00e5ff] tracking-widest uppercase">FEATURES</div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#e8edf5]">
            Built for Modern AI & Parallel Workloads
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <Lock className="w-8 h-8 text-[#00e5ff]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">Memory Safety</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              Ownership and borrow checking at compile time. Zero garbage collector overhead, zero memory leaks.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <Layers className="w-8 h-8 text-[#8b5cf6]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">Native Tensors</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              First-class <code className="text-[#00e5ff] font-mono">tensor&lt;T, D1, D2&gt;</code> types verified statically to eliminate matrix shape runtime panics.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <Zap className="w-8 h-8 text-[#00ff88]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">Actor Concurrency</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              Lock-free message passing with <code className="text-[#00e5ff] font-mono">spawn</code>, <code className="text-[#00e5ff] font-mono">send</code>, and <code className="text-[#00e5ff] font-mono">join</code> backed by work-stealing pools.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <Cpu className="w-8 h-8 text-[#38bdf8]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">GPU Kernel Blocks</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              Inline <code className="text-[#00e5ff] font-mono">gpu &#123; ... &#125;</code> code blocks lowering directly to SPIR-V and NVPTX accelerator code.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#00e5ff]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">Zero-Cost Abstractions</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              High-level language syntax compiles to optimized LLVM machine instructions without performance penalties.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-7 hover:border-[#00e5ff]/40 hover:shadow-[0_0_24px_rgba(0,229,255,0.08)] transition-all space-y-3">
            <Globe className="w-8 h-8 text-[#8b5cf6]" />
            <h3 className="font-['Space_Grotesk'] font-medium text-xl text-[#e8edf5]">Multi-Target Output</h3>
            <p className="text-sm text-[#6b7a96] leading-relaxed">
              Cross-compile seamlessly to Linux, Windows, macOS, WebAssembly, and GPU targets.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: PERFORMANCE STATS BAR */}
      <section className="py-20 bg-[#05080f] border-y border-[#1a2535]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter value="2.8x" label="faster than Python" sublabel="on 1000x1000 matrix multiplication" />
            <StatCounter value="142M" label="actor msgs / sec" sublabel="lock-free message passing" />
            <StatCounter value="310 KB" label="binary size" sublabel="standalone Hello World binary" />
            <StatCounter value="7-stage" label="compiler pipeline" sublabel="Lexer -> BIR SSA -> LLVM IR" />
          </div>
          <div className="text-center text-xs text-[#6b7a96] mt-8 font-mono">
            * Benchmarks measured on x86_64 Linux. Full methodology at <Link href="/benchmarks" className="text-[#00e5ff] hover:underline">/benchmarks</Link>.
          </div>
        </div>
      </section>

      {/* SECTION 6: INSTALL BLOCK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-medium text-[#00e5ff] tracking-widest uppercase">GET STARTED</div>
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#e8edf5]">
            Install Blyx in Under 30 Seconds
          </h2>
        </div>

        <TerminalBlock />

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/download"
            className="px-6 py-3 rounded-full bg-[#00e5ff] text-[#05080f] font-['Space_Grotesk'] font-bold text-sm hover:bg-[#00e5ff]/90 transition-all"
          >
            Download Binaries
          </Link>
          <Link
            href="/docs"
            className="px-6 py-3 rounded-full bg-[#0d1420] text-[#e8edf5] border border-[#1a2535] font-['Space_Grotesk'] font-medium text-sm hover:border-[#00e5ff]/50 transition-all"
          >
            Read the Documentation
          </Link>
        </div>
      </section>

      {/* SECTION 7: ECOSYSTEM TOOLCHAIN STRIP */}
      <section className="py-16 bg-[#0d1420] border-t border-[#1a2535]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-['Space_Grotesk'] font-bold text-2xl text-[#e8edf5]">
              Complete Native Toolchain Suite
            </h3>
            <p className="text-xs text-[#6b7a96]">Everything you need to write, test, format, profile, and debug Blyx code</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((t) => (
              <div key={t.name} className="p-4 bg-[#05080f] border border-[#1a2535] rounded-xl text-center hover:border-[#00e5ff]/40 transition-all">
                <div className="font-mono text-sm font-semibold text-[#00e5ff]">{t.name}</div>
                <div className="text-[11px] text-[#6b7a96] mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CREATOR + COMMUNITY SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-10 sm:p-14 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-xs font-mono">
            COMMUNITY & GOVERNANCE
          </div>

          <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#e8edf5]">
            Built by Rahul Chaube & Open Source Contributors
          </h2>

          <p className="max-w-2xl mx-auto text-[#6b7a96] leading-relaxed">
            Blyx is created by <strong className="text-[#e8edf5]">Rahul Chaube</strong> and built entirely in the open. Every RFC, pull request, bug fix, and feature suggestion is community-driven.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1a2535] text-[#e8edf5] hover:text-[#00e5ff] text-sm font-medium transition-all"
            >
              GitHub (@Rahulchaube1)
            </a>
            <a
              href="https://x.com/RahulChaube_"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1a2535] text-[#e8edf5] hover:text-[#00e5ff] text-sm font-medium transition-all"
            >
              X / Twitter (@RahulChaube_)
            </a>
            <a
              href="https://linkedin.com/in/rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1a2535] text-[#e8edf5] hover:text-[#00e5ff] text-sm font-medium transition-all"
            >
              LinkedIn
            </a>
            <Link
              href="/community"
              className="px-5 py-2.5 rounded-full bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-sm font-medium hover:bg-[#00e5ff]/20 transition-all"
            >
              Contributing Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
