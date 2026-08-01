'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Download, Terminal, ShieldAlert, CheckCircle, Cpu, HardDrive } from 'lucide-react';

export default function DownloadPage() {
  const [activePlatform, setActivePlatform] = useState<'linux' | 'windows' | 'macos'>('linux');

  const tools = [
    { name: 'blyxc', version: '0.1.0-alpha', desc: 'Compiler Driver (LLVM IR frontend)' },
    { name: 'blyxpkg', version: '0.1.0-alpha', desc: 'Package Manager & Build System' },
    { name: 'blyxfmt', version: '0.1.0-alpha', desc: 'Automated Code Formatter' },
    { name: 'blyx-analyzer', version: '0.1.0-alpha', desc: 'Language Server Protocol Server' },
    { name: 'blyxdoc', version: '0.1.0-alpha', desc: 'Documentation Generator' },
    { name: 'blyxup', version: '0.1.0-alpha', desc: 'Toolchain Channel Manager' },
    { name: 'blyxdbg', version: '0.1.0-alpha', desc: 'Interactive Debugger' },
    { name: 'blyxprof', version: '0.1.0-alpha', desc: 'Performance Profiler' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono">
          OFFICIAL COMPILER DOWNLOAD &bull; v0.1.0-alpha
        </div>
        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl text-[#e8edf5]">
          Install Blyx Compiler & Toolchain
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b7a96] text-base sm:text-lg">
          Download the official Blyx compiler driver, package manager, language server, and ecosystem tools.
        </p>
      </div>

      {/* Recommended Install via blyxup */}
      <div className="bg-[#0d1420] border border-[#00e5ff]/40 rounded-2xl p-8 space-y-6 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        <div className="flex items-center gap-3">
          <Terminal className="w-6 h-6 text-[#00e5ff]" />
          <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#e8edf5]">
            Install via blyxup (Recommended)
          </h2>
        </div>
        <p className="text-sm text-[#6b7a96]">
          The official <code className="text-[#00e5ff]">blyxup</code> installer downloads and manages compiler channels (<code className="text-[#00e5ff]">stable</code>, <code className="text-[#00e5ff]">beta</code>, <code className="text-[#00e5ff]">nightly</code>) automatically.
        </p>

        <div className="bg-[#020509] border border-[#1a2535] rounded-xl p-5 font-mono text-sm space-y-2">
          <div className="text-[#6b7a96]"># Run the single-line installation script:</div>
          <div>
            <span className="text-[#00ff88] font-bold">$ </span>
            <span className="text-[#e8edf5]">curl -sSf https://blyx-lang.space/install.sh | sh</span>
          </div>
          <div>
            <span className="text-[#00ff88] font-bold">$ </span>
            <span className="text-[#e8edf5]">blyxup install stable</span>
          </div>
        </div>
      </div>

      {/* Direct Download Platforms */}
      <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#1a2535]">
          <div>
            <h3 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5]">Direct Binary Releases</h3>
            <p className="text-xs text-[#6b7a96]">Standalone compiler driver binaries for manual installation</p>
          </div>

          <div className="flex items-center gap-2 bg-[#05080f] p-1 rounded-xl border border-[#1a2535]">
            {(['linux', 'windows', 'macos'] as const).map((p) => (
              <button
                key={p}
                onClick={() => setActivePlatform(p)}
                className={`px-4 py-2 text-xs font-mono rounded-lg capitalize transition-all ${
                  activePlatform === p
                    ? 'bg-[#00e5ff] text-[#05080f] font-bold'
                    : 'text-[#6b7a96] hover:text-[#e8edf5]'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Platform Downloads Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm font-mono">
            <thead>
              <tr className="border-b border-[#1a2535] text-[#00e5ff] text-xs">
                <th className="pb-3 font-semibold">Platform Target</th>
                <th className="pb-3 font-semibold">Executable Binary</th>
                <th className="pb-3 font-semibold">Size</th>
                <th className="pb-3 font-semibold">Release Status</th>
                <th className="pb-3 font-semibold text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a2535] text-[#6b7a96]">
              {activePlatform === 'linux' && (
                <tr>
                  <td className="py-4 text-[#e8edf5]">Linux x86_64 (glibc ≥ 2.17)</td>
                  <td className="py-4 font-semibold text-[#00e5ff]">blyxc-linux-x86_64</td>
                  <td className="py-4">~14.2 MB</td>
                  <td className="py-4 text-xs text-[#8b5cf6]">Status: Alpha build — SHA256 checksums published at stable release</td>
                  <td className="py-4 text-right">
                    <a href="https://github.com/Blyx-lang-space/blyx/releases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-xs font-bold hover:bg-[#00e5ff]/20 transition-all">
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </td>
                </tr>
              )}

              {activePlatform === 'windows' && (
                <tr>
                  <td className="py-4 text-[#e8edf5]">Windows x86_64 (10 / 11)</td>
                  <td className="py-4 font-semibold text-[#00e5ff]">blyxc-windows-x86_64.exe</td>
                  <td className="py-4">~15.1 MB</td>
                  <td className="py-4 text-xs text-[#8b5cf6]">Status: Alpha build — SHA256 checksums published at stable release</td>
                  <td className="py-4 text-right">
                    <a href="https://github.com/Blyx-lang-space/blyx/releases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-xs font-bold hover:bg-[#00e5ff]/20 transition-all">
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </td>
                </tr>
              )}

              {activePlatform === 'macos' && (
                <tr>
                  <td className="py-4 text-[#e8edf5]">macOS ARM64 (Apple Silicon / Monterey+)</td>
                  <td className="py-4 font-semibold text-[#00e5ff]">blyxc-macos-aarch64</td>
                  <td className="py-4">~13.8 MB</td>
                  <td className="py-4 text-xs text-[#8b5cf6]">Status: Alpha build — SHA256 checksums published at stable release</td>
                  <td className="py-4 text-right">
                    <a href="https://github.com/Blyx-lang-space/blyx/releases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00e5ff]/10 text-[#00e5ff] border border-[#00e5ff]/30 text-xs font-bold hover:bg-[#00e5ff]/20 transition-all">
                      <Download className="w-3.5 h-3.5" /> Download
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* What's Included Toolchain */}
      <div className="space-y-6">
        <h3 className="font-['Space_Grotesk'] font-bold text-2xl text-[#e8edf5]">What&apos;s Included in the Toolchain Suite</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div key={t.name} className="p-5 bg-[#0d1420] border border-[#1a2535] rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-[#00e5ff]">{t.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1a2535] text-[#6b7a96]">{t.version}</span>
              </div>
              <p className="text-xs text-[#6b7a96] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* System Requirements */}
      <div className="bg-[#0d1420] border border-[#1a2535] rounded-2xl p-8 space-y-4">
        <h3 className="font-['Space_Grotesk'] font-bold text-xl text-[#e8edf5]">System Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#6b7a96]">
          <div className="space-y-1">
            <strong className="text-[#e8edf5] block">Linux</strong>
            <div>Kernel &ge; 4.18, glibc &ge; 2.17</div>
            <div>Architecture: x86_64, aarch64</div>
          </div>
          <div className="space-y-1">
            <strong className="text-[#e8edf5] block">Windows</strong>
            <div>Windows 10 / 11 (64-bit)</div>
            <div>MSVC C++ Build Tools Runtime</div>
          </div>
          <div className="space-y-1">
            <strong className="text-[#e8edf5] block">macOS</strong>
            <div>macOS 12.0+ (Monterey or later)</div>
            <div>Apple Silicon (M1/M2/M3/M4) or Intel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
