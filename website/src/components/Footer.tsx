import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[#00f2fe]/15 bg-[#07090e] py-12 px-6 text-sm text-[#94a3b8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-[#00f2fe] mb-3">
            <img src="/blyx.png" alt="Blyx" className="w-6 h-6 rounded" />
            <span>Blyx</span>
          </div>
          <p className="text-xs text-[#64748b]">AI-native systems programming language for high-performance, memory-safe parallel computing.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[#f8fafc] mb-3">Language</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/docs">Documentation</Link></li>
            <li><Link href="/play">Playground</Link></li>
            <li><Link href="/compiler">Compiler Architecture</Link></li>
            <li><Link href="/benchmarks">Benchmarks</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#f8fafc] mb-3">Ecosystem</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/download">Download Center</Link></li>
            <li><Link href="/packages">Package Registry</Link></li>
            <li><Link href="/vscode">VS Code Extension</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[#f8fafc] mb-3">Community</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="https://github.com/Blyx-lang-space/blyx" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><Link href="/community">Governance & Maintainers</Link></li>
            <li><Link href="/blog">Engineering Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-[#64748b]">
        © 2026 The Blyx Project (<a href="https://blyx-lang.space" className="text-[#00f2fe]">blyx-lang.space</a>). Distributed under MIT / Apache-2.0 licenses.
      </div>
    </footer>
  );
}
