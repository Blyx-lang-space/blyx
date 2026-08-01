import React from 'react';

export const metadata = {
  title: 'About The Blyx Project — blyx-lang.space',
  description: 'Learn about the mission, architecture, and team behind the Blyx Programming Language.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-6 text-center">
        About The Blyx Project
      </h1>
      <p className="text-[#94a3b8] text-lg mb-8 text-center">
        Empowering AI-native workloads, systems performance, and parallel computing without memory overhead.
      </p>

      <div className="p-8 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20 space-y-6 text-[#cbd5e1] text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-[#00f2fe]">Mission</h2>
        <p>
          Blyx was created to bridge the gap between high-performance systems programming and modern machine learning workloads. By providing first-class static tensor types, lock-free actor concurrency, and inline GPU execution blocks, Blyx delivers unprecedented developer productivity with zero garbage collection pauses.
        </p>

        <h2 className="text-xl font-bold text-[#00f2fe]">Compiler Design</h2>
        <p>
          Operating through the Blyx Intermediate Representation (<code>compiler/blyx_bir</code>), Blyx compiles down to optimized native assembly via typed LLVM IR emission.
        </p>
      </div>
    </div>
  );
}
