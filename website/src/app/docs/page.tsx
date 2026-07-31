import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blyx Documentation Portal',
  description: 'Official documentation guide for the Blyx Programming Language.',
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Blyx Documentation Portal
        </h1>
        <p className="text-[#94a3b8] text-lg">Guides, language specification, and API references.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20">
          <h2 className="text-xl font-bold text-[#00f2fe] mb-3">The Blyx Book</h2>
          <p className="text-sm text-[#94a3b8] mb-4">Step-by-step introduction to language features, static tensor types, and actor concurrency.</p>
          <Link href="/docs/book/01_introduction.md" className="text-xs text-[#00f2fe] hover:underline font-mono">Read Book →</Link>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20">
          <h2 className="text-xl font-bold text-[#00f2fe] mb-3">API Reference</h2>
          <p className="text-sm text-[#94a3b8] mb-4">Public APIs for <code>compiler/blyx_bir</code>, <code>library/blyx</code>, and <code>library/blyx-std</code>.</p>
          <Link href="/docs/api_reference.md" className="text-xs text-[#00f2fe] hover:underline font-mono">View API Docs →</Link>
        </div>
      </div>
    </div>
  );
}
