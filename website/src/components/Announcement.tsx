"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Announcement() {
  return (
    <div className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)] text-xs text-[var(--text-secondary)] py-2 px-4 text-center flex items-center justify-center space-x-2">
      <span className="inline-flex items-center px-2 py-0.5 rounded font-mono font-semibold bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/20">
        <Sparkles className="w-3 h-3 mr-1 inline" /> BETA V1.0 SPRINT
      </span>
      <span>Blyx Beta v1.0 final engineering sprint is active.</span>
      <Link
        href="/roadmap"
        className="font-medium text-[var(--accent)] hover:underline inline-flex items-center space-x-1"
      >
        <span>View Roadmap</span>
        <ArrowRight className="w-3 h-3 ml-0.5" />
      </Link>
    </div>
  );
}
