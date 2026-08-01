import React from 'react';

export const metadata = {
  title: 'Security Policy — Blyx Language',
  description: 'Security vulnerability disclosure policy and reporting guidelines for Blyx.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-6 text-center">
        Blyx Security Policy
      </h1>
      <div className="p-8 rounded-2xl bg-[#0f141d] border border-[#00f2fe]/20 text-[#cbd5e1] text-sm space-y-4">
        <h2 className="text-xl font-bold text-[#00f2fe]">Reporting Vulnerabilities</h2>
        <p>
          If you discover a security vulnerability in the Blyx compiler, runtime, or standard library, please report it directly to:
        </p>
        <div className="p-4 rounded-lg bg-[#07090e] font-mono text-xs text-[#38bdf8]">
          security@blyx-lang.space
        </div>
        <p>
          We pledge to acknowledge reports within 48 hours and work with researchers to coordinate responsible disclosure.
        </p>
      </div>
    </div>
  );
}
