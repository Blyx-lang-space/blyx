import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[#00f2fe] text-xs font-semibold mb-6">
        ⚡ Blyx Beta v1.0 Release Candidate 1
      </div>
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-6">
        AI-Native Systems & Parallel Computing
      </h1>
      <p className="text-[#94a3b8] text-xl max-w-2xl mx-auto mb-10">
        Blyx is a high-performance systems language designed for memory safety without garbage collection, static tensor types, lock-free actor concurrency, and inline GPU execution.
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-16">
        <Link href="/download" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] text-black font-semibold shadow-lg shadow-[#00f2fe]/30 hover:opacity-95">
          Install Blyx
        </Link>
        <Link href="/play" className="px-8 py-3.5 rounded-xl bg-[#0f141d] text-white border border-[#00f2fe]/20 hover:border-[#00f2fe]">
          Open Playground
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
        <div className="p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/15">
          <div className="text-2xl mb-3">🔒</div>
          <h3 className="text-xl font-bold text-white mb-2">Memory Safety Without GC</h3>
          <p className="text-sm text-[#94a3b8]">Compile-time ownership verification enforces data race safety and automatic memory reclamation with zero garbage collection pause.</p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/15">
          <div className="text-2xl mb-3">𝚯</div>
          <h3 className="text-xl font-bold text-white mb-2">Native Static Tensors</h3>
          <p className="text-sm text-[#94a3b8]">Statically dimensioned tensor primitives <code>tensor&lt;T, D1, D2&gt;</code> catch matrix dimension mismatches at compile time.</p>
        </div>
        <div className="p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/15">
          <div className="text-2xl mb-3">🎭</div>
          <h3 className="text-xl font-bold text-white mb-2">Actor Concurrency Model</h3>
          <p className="text-sm text-[#94a3b8]">Dedicated lock-free <code>actor</code> declarations backed by work-stealing execution pools in the core <code>blyx</code> runtime.</p>
        </div>
      </div>
    </div>
  );
}
