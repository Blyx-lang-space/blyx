import React from 'react';
import Link from 'next/link';
import { BookOpen, Rocket, Cpu } from 'lucide-react';

export default function DocsPage() {
  const chapters = [
    { num: '01', title: 'Introduction to Blyx', desc: 'Overview of AI-native systems programming and core goals' },
    { num: '02', title: 'Installation & Toolchain', desc: 'Setting up blyxc, blyxpkg, blyxup, and editor plugins' },
    { num: '03', title: 'Variables & Value Types', desc: 'Primitive scalar types, arrays, slices, and immutable values' },
    { num: '04', title: 'Functions & Control Flow', desc: 'Functions, match pattern matching, loops, and return types' },
    { num: '05', title: 'Memory Model & Ownership', desc: 'Compile-time ownership rules, borrowing, and zero-GC semantics' },
    { num: '06', title: 'Static Tensor Types', desc: 'tensor<T, D1, D2> type system and static shape validation' },
    { num: '07', title: 'Lock-Free Actor Model', desc: 'Spawning actors, message channels, and work-stealing pools' },
    { num: '08', title: 'GPU Compute Kernel Blocks', desc: 'Inline gpu { ... } blocks, SPIR-V, and NVPTX target lowering' },
    { num: '09', title: 'Package Management', desc: 'Blyx.toml manifest, dependency resolution, and publishing' },
    { num: '10', title: 'Compiler Intermediate Rep (BIR)', desc: 'Understanding BIR SSA instructions, CFG, and pass manager' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono">
          DOCUMENTATION PORTAL &bull; V0.1.0-ALPHA
        </div>
        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl text-[#e8edf5]">
          Learn the Blyx Language
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b7a96] text-base sm:text-lg">
          Master AI-native systems programming with guides, API specifications, and architectural documentation.
        </p>
      </div>

      {/* 3 Pillars of Learning */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-4 hover:border-[#00e5ff]/30 transition-all">
          <Rocket className="w-8 h-8 text-[#00e5ff]" />
          <h2 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5]">🚀 Get Started</h2>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><Link href="/download" className="hover:text-[#00e5ff] transition-colors">Installation Guide</Link></li>
            <li><Link href="/play" className="hover:text-[#00e5ff] transition-colors">Interactive Playground</Link></li>
            <li><a href="#book" className="hover:text-[#00e5ff] transition-colors">Hello World Tutorial</a></li>
          </ul>
        </div>

        <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-4 hover:border-[#00e5ff]/30 transition-all">
          <BookOpen className="w-8 h-8 text-[#8b5cf6]" />
          <h2 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5]">📖 Grow with Blyx</h2>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><a href="https://github.com/Blyx-lang-space/blyx/tree/main/examples" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5ff] transition-colors">Standard Code Examples</a></li>
            <li><Link href="/blog" className="hover:text-[#00e5ff] transition-colors">Engineering Deep Dives</Link></li>
            <li><Link href="/metrics" className="hover:text-[#00e5ff] transition-colors">Performance Methodology</Link></li>
          </ul>
        </div>

        <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-4 hover:border-[#00e5ff]/30 transition-all">
          <Cpu className="w-8 h-8 text-[#00ff88]" />
          <h2 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5]">🔬 Master Blyx</h2>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><a href="https://github.com/Blyx-lang-space/blyx/tree/main/docs" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5ff] transition-colors">Language Spec & BIR RFCs</a></li>
            <li><a href="https://github.com/Blyx-lang-space/blyx" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5ff] transition-colors">Compiler Architecture</a></li>
            <li><Link href="/community" className="hover:text-[#00e5ff] transition-colors">Contributing Guide</Link></li>
          </ul>
        </div>
      </div>

      {/* The Blyx Book Chapter Grid */}
      <div id="book" className="space-y-8">
        <div className="border-b border-[#1a2535] pb-4">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl text-[#e8edf5]">The Blyx Book</h2>
          <p className="text-sm text-[#6b7a96]">The official comprehensive guide to the Blyx programming language</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((ch) => (
            <div key={ch.num} className="bg-[#0d1420] border border-[#1a2535] rounded-xl p-6 hover:border-[#00e5ff]/40 transition-all flex items-start gap-4">
              <span className="font-mono text-xl font-bold text-[#00e5ff] bg-[#00e5ff]/10 px-3 py-1 rounded-lg border border-[#00e5ff]/20">
                {ch.num}
              </span>
              <div className="space-y-1">
                <h3 className="font-['Space_Grotesk'] font-bold text-lg text-[#e8edf5]">{ch.title}</h3>
                <p className="text-xs text-[#6b7a96] leading-relaxed">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
