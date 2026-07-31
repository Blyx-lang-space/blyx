import React from 'react';

export const metadata = {
  title: 'Package Registry — Blyx Ecosystem',
  description: 'Official package registry for the Blyx Programming Language (blyxpkg).',
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx Package Registry
        </h1>
        <p className="text-[#94a3b8] text-lg mb-8">
          Discover and publish libraries for <code>blyxpkg</code>.
        </p>

        <div className="p-6 rounded-xl bg-[#0f141d] border border-[#00f2fe]/20 mb-8 text-left">
          <input
            type="text"
            placeholder="Search packages (e.g. blyx-tensor, blyx-http)..."
            className="w-full px-4 py-3 rounded-lg bg-[#07090e] border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#00f2fe]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-5 rounded-xl bg-[#0f141d] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-base font-bold text-[#00f2fe]">blyx-std</span>
              <span className="text-xs text-[#64748b]">v1.0.0-rc.1</span>
            </div>
            <p className="text-xs text-[#94a3b8]">Core standard library providing tensor, gpu, actor, and I/O abstractions.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#0f141d] border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-base font-bold text-[#00f2fe]">blyx-tensor-nn</span>
              <span className="text-xs text-[#64748b]">v0.2.0</span>
            </div>
            <p className="text-xs text-[#94a3b8]">Deep learning layers and neural network operators built on static tensors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
