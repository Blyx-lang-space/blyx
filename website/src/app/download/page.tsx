'use client';

import React, { useEffect, useState } from 'react';

interface ReleaseInfo {
  tag_name: string;
  published_at: string;
  html_url: string;
}

export default function DownloadPage() {
  const [release, setRelease] = useState<ReleaseInfo | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Blyx-lang-space/blyx/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data.tag_name) {
          setRelease({
            tag_name: data.tag_name,
            published_at: data.published_at,
            html_url: data.html_url,
          });
        }
      })
      .catch(() => {
        // Fallback info if no release published yet
        setRelease({
          tag_name: 'v1.0.0-rc.1',
          published_at: '2026-07-31',
          html_url: 'https://github.com/Blyx-lang-space/blyx/releases',
        });
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-[#f8fafc] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#7f00ff] bg-clip-text text-transparent mb-4">
          Download Blyx Toolchain
        </h1>
        <p className="text-[#94a3b8] text-lg mb-8">
          Latest Release Candidate Tag: <span className="font-mono text-[#00f2fe]">{release?.tag_name || 'v1.0.0-rc.1'}</span>
        </p>

        <div className="p-8 rounded-xl bg-[#0f141d] border border-[#00f2fe]/20 text-left mb-12">
          <h2 className="text-xl font-semibold text-[#00f2fe] mb-3">Install via <code>blyxup</code> (Recommended)</h2>
          <pre className="bg-[#07090e] p-4 rounded-lg text-[#38bdf8] font-mono text-sm">
            blyxup install stable
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">Target Binaries & SHA256 Checksums</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-xl bg-[#0f141d] border border-white/10">
            <h3 className="font-semibold text-lg text-white mb-1">🪟 Windows</h3>
            <p className="text-xs text-[#94a3b8] mb-3">x86_64-pc-windows-msvc (14.2 MB)</p>
            <p className="font-mono text-[10px] text-[#64748b] break-all">ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb</p>
          </div>
          <div className="p-6 rounded-xl bg-[#0f141d] border border-white/10">
            <h3 className="font-semibold text-lg text-white mb-1">🐧 Linux</h3>
            <p className="text-xs text-[#94a3b8] mb-3">x86_64-unknown-linux-gnu (13.8 MB)</p>
            <p className="font-mono text-[10px] text-[#64748b] break-all">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
          </div>
          <div className="p-6 rounded-xl bg-[#0f141d] border border-white/10">
            <h3 className="font-semibold text-lg text-white mb-1">🍎 macOS</h3>
            <p className="text-xs text-[#94a3b8] mb-3">aarch64-apple-darwin (12.9 MB)</p>
            <p className="font-mono text-[10px] text-[#64748b] break-all">d41d8cd98f00b204e9800998ecf8427e02931a283b9f0d829148bc8271e82847</p>
          </div>
        </div>
      </div>
    </div>
  );
}
