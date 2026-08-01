import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, MessageSquare, GitPullRequest, ShieldCheck, Award } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 text-[#8b5cf6] text-xs font-mono">
          OPEN SOURCE &bull; COMMUNITY DRIVEN
        </div>
        <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-6xl text-[#e8edf5]">
          Blyx Community & Governance
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b7a96] text-base sm:text-lg">
          Blyx is built in the open by everyone. Every RFC proposal, issue report, and pull request matters.
        </p>
      </div>

      {/* Creator Spotlight */}
      <div className="bg-[#0d1420] border border-[#00e5ff]/30 rounded-2xl p-8 sm:p-12 space-y-6 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#00e5ff] font-semibold tracking-wider uppercase">CREATOR & LEAD ARCHITECT</div>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl text-[#e8edf5]">Rahul Chaube</h2>
            <p className="text-sm text-[#6b7a96]">
              3rd year CSE @ SRM Institute &bull; Founder EverestQ &bull; Top 15 Red Bull Basement &bull; Top 27 SIH National Finalist
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2535] text-[#e8edf5] text-xs font-mono hover:text-[#00e5ff] transition-all"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://x.com/RahulChaube_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2535] text-[#e8edf5] text-xs font-mono hover:text-[#00e5ff] transition-all"
            >
              <Twitter className="w-4 h-4" /> X / Twitter
            </a>
            <a
              href="https://linkedin.com/in/rahulchaube1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2535] text-[#e8edf5] text-xs font-mono hover:text-[#00e5ff] transition-all"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Ways to Contribute */}
      <div className="space-y-8">
        <h2 className="font-['Space_Grotesk'] font-bold text-3xl text-[#e8edf5] border-b border-[#1a2535] pb-4">
          Ways to Contribute
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0d1420] border border-[#1a2535] rounded-xl p-6 space-y-3 hover:border-[#00e5ff]/40 transition-all">
            <GitPullRequest className="w-6 h-6 text-[#00e5ff]" />
            <h3 className="font-['Space_Grotesk'] font-bold text-lg text-[#e8edf5]">Submit Pull Requests</h3>
            <p className="text-xs text-[#6b7a96] leading-relaxed">
              Help build compiler passes, standard library collections, toolchain CLI commands, or ecosystem website components.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-xl p-6 space-y-3 hover:border-[#00e5ff]/40 transition-all">
            <MessageSquare className="w-6 h-6 text-[#8b5cf6]" />
            <h3 className="font-['Space_Grotesk'] font-bold text-lg text-[#e8edf5]">Propose Language RFCs</h3>
            <p className="text-xs text-[#6b7a96] leading-relaxed">
              Design new language syntax, tensor primitives, GPU acceleration blocks, or package manager features through GitHub RFCs.
            </p>
          </div>

          <div className="bg-[#0d1420] border border-[#1a2535] rounded-xl p-6 space-y-3 hover:border-[#00e5ff]/40 transition-all">
            <ShieldCheck className="w-6 h-6 text-[#00ff88]" />
            <h3 className="font-['Space_Grotesk'] font-bold text-lg text-[#e8edf5]">Report Security Issues</h3>
            <p className="text-xs text-[#6b7a96] leading-relaxed">
              Discover and report vulnerabilities per our security disclosure policy to keep the Blyx runtime safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
