import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1420] border-t border-[#1a2535] py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#e8edf5]">◈ Blyx</span>
          </div>
          <p className="text-sm text-[#6b7a96] leading-relaxed">
            AI-native systems programming language designed for high-performance, parallel, and heterogeneous compute workloads.
          </p>
          <div className="text-xs text-[#6b7a96]">
            Created with passion by{' '}
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e5ff] hover:underline font-medium"
            >
              Rahul Chaube
            </a>
          </div>
        </div>

        {/* Language Column */}
        <div className="space-y-3">
          <h4 className="font-['Inter'] font-semibold text-xs text-[#00e5ff] tracking-wider uppercase">Language</h4>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><Link href="/docs" className="hover:text-[#e8edf5] transition-colors">Documentation</Link></li>
            <li><Link href="/play" className="hover:text-[#e8edf5] transition-colors">Playground</Link></li>
            <li><Link href="/benchmarks" className="hover:text-[#e8edf5] transition-colors">Benchmarks</Link></li>
            <li><Link href="/roadmap" className="hover:text-[#e8edf5] transition-colors">Roadmap</Link></li>
          </ul>
        </div>

        {/* Ecosystem Column */}
        <div className="space-y-3">
          <h4 className="font-['Inter'] font-semibold text-xs text-[#00e5ff] tracking-wider uppercase">Ecosystem</h4>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><Link href="/download" className="hover:text-[#e8edf5] transition-colors">Download Compiler</Link></li>
            <li><a href="https://marketplace.visualstudio.com/items?itemName=RahulChaube.blyx-language" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8edf5] transition-colors">VS Code Extension</a></li>
            <li><Link href="/blog" className="hover:text-[#e8edf5] transition-colors">Engineering Blog</Link></li>
            <li><a href="https://github.com/Blyx-lang-space/blyx" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8edf5] transition-colors">GitHub Repository</a></li>
          </ul>
        </div>

        {/* Community Column */}
        <div className="space-y-3">
          <h4 className="font-['Inter'] font-semibold text-xs text-[#00e5ff] tracking-wider uppercase">Community</h4>
          <ul className="space-y-2 text-sm text-[#6b7a96]">
            <li><a href="https://github.com/Blyx-lang-space/blyx" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8edf5] transition-colors">GitHub Discussions</a></li>
            <li><a href="https://x.com/RahulChaube_" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8edf5] transition-colors">X / Twitter (@RahulChaube_)</a></li>
            <li><a href="https://linkedin.com/in/rahulchaube1" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8edf5] transition-colors">LinkedIn</a></li>
            <li><Link href="/community" className="hover:text-[#e8edf5] transition-colors">Contributing Guide</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1a2535] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7a96] gap-4">
        <div>
          MIT + Apache 2.0 Open Source License &bull; Copyright &copy; 2026 Rahul Chaube
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Blyx-lang-space/blyx" target="_blank" rel="noopener noreferrer" className="hover:text-[#00e5ff] transition-colors font-mono">
            github.com/Blyx-lang-space/blyx
          </a>
        </div>
      </div>
    </footer>
  );
}
