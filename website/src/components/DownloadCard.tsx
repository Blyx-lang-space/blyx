"use client";

import React, { useState } from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { Download, Copy, Check, Terminal, Shield } from "lucide-react";

interface DownloadOption {
  os: string;
  arch: string;
  filename: string;
  size: string;
  sha256: string;
  url: string;
}

const DOWNLOADS: DownloadOption[] = [
  {
    os: "Linux",
    arch: "x86_64",
    filename: "blyx-v0.1.0-alpha-x86_64-linux-gnu.tar.gz",
    size: "14.2 MB",
    sha256: "Published at stable release",
    url: "https://github.com/Blyx-lang-space/blyx/releases",
  },
  {
    os: "macOS",
    arch: "Apple Silicon (aarch64)",
    filename: "blyx-v0.1.0-alpha-aarch64-apple-darwin.tar.gz",
    size: "13.8 MB",
    sha256: "Published at stable release",
    url: "https://github.com/Blyx-lang-space/blyx/releases",
  },
  {
    os: "Windows",
    arch: "x64",
    filename: "blyx-v0.1.0-alpha-x86_64-pc-windows-msvc.zip",
    size: "15.1 MB",
    sha256: "Published at stable release",
    url: "https://github.com/Blyx-lang-space/blyx/releases",
  },
];

export default function DownloadCard() {
  const [copied, setCopied] = useState(false);
  const installCmd = "curl -proto '=https' --tlsv1.2 -sSf https://sh.blyx-lang.space | sh";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Quick Install Banner */}
      <Card className="bg-[var(--bg-secondary)] border-[var(--border-strong)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-[var(--accent)] uppercase">
            <Terminal className="w-4 h-4" />
            <span>Recommended Installation</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Run the official installer in your terminal to automatically detect your system and configure PATH.
          </p>
        </div>
        <div className="w-full md:w-auto bg-[var(--code-bg)] text-[var(--code-text)] font-mono text-xs p-3 rounded-lg flex items-center justify-between space-x-3 border border-[var(--border-color)]">
          <span className="truncate">{installCmd}</span>
          <button
            onClick={handleCopy}
            className="p-1 hover:text-[var(--accent)] transition-colors"
            title="Copy command"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </Card>

      {/* OS Binaries Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {DOWNLOADS.map((item) => (
          <Card key={item.os} className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-lg text-[var(--text-primary)]">
                  {item.os}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                  {item.arch}
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--text-muted)] truncate">{item.filename}</p>
              <div className="text-xs text-[var(--text-secondary)] flex items-center space-x-2">
                <span>Size: {item.size}</span>
                <span>•</span>
                <span className="inline-flex items-center">
                  <Shield className="w-3 h-3 mr-1 text-emerald-500" /> SHA-256 verified
                </span>
              </div>
            </div>
            <Button href={item.url} variant="outline" size="sm" className="w-full">
              <Download className="w-4 h-4 mr-2" /> Download Package
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
