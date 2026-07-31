import React from 'react';

export const metadata = {
  title: 'Official VS Code Extension — Blyx Language',
  description: 'Official Visual Studio Code extension providing syntax highlighting, autocomplete, diagnostics, formatting, and hover support for Blyx.',
};

export default function VSCodePage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/20 text-[#00f2fe] text-xs font-semibold mb-6">
          Official IDE Integration
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx for Visual Studio Code
        </h1>
        <p className="text-[#94a3b8] text-lg mb-8">
          Rich language support powered by the stdio JSON-RPC LSP server (<code>blyx-analyzer</code>).
        </p>

        <div className="p-8 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20 text-left mb-12 shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <span className="font-mono text-sm text-[#00f2fe]">editors/code/package.json</span>
            <span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-300 font-medium">Coming Soon to Marketplace</span>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-[#f8fafc]">Extension Features</h2>
          <ul className="space-y-3 text-sm text-[#cbd5e1] list-disc list-inside mb-8">
            <li><strong>Syntax Highlighting</strong>: Full grammar support for <code>actor</code>, <code>tensor&lt;T, D1, D2&gt;</code>, and <code>gpu &#123; ... &#125;</code> constructs.</li>
            <li><strong>Auto-Completion</strong>: Real-time completion items for standard library modules (<code>blyx-std</code>).</li>
            <li><strong>Diagnostics & Error Hints</strong>: Real-time inline type errors powered by <code>blyx-analyzer</code>.</li>
            <li><strong>Document Formatting</strong>: On-save formatting integration with <code>blyxfmt</code>.</li>
            <li><strong>Hover Documentation</strong>: Type signature and docstring hover tooltips.</li>
          </ul>

          <div className="p-4 rounded-lg bg-[#07090e] border border-white/5 font-mono text-xs text-[#38bdf8]">
            code --install-extension editors/code
          </div>
        </div>
      </div>
    </div>
  );
}
