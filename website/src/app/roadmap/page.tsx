import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

export const metadata = {
  title: "Development Roadmap — Blyx Language",
  description: "Official development timeline for Blyx from Alpha to Beta v1.0 and Stable release candidate.",
};

const MILESTONES = [
  {
    phase: "v0.1.0-alpha",
    status: "Completed",
    title: "Language Foundation & BIR SSA",
    items: [
      "Recursive descent parser & AST lowering",
      "BIR SSA intermediate representation format",
      "Basic type inference engine & ownership tracking",
      "LLVM IR generation & static executable emitting",
    ],
  },
  {
    phase: "v0.1.0-beta",
    status: "Active (Final Sprint)",
    title: "Native Tensors & GPU Compilation",
    items: [
      "Multidimensional tensor type inference & shape checks",
      "Lock-free actor model concurrency runtime",
      "Direct NVPTX & SPIR-V GPU kernel lowering",
      "Official VS Code Marketplace extension (v1.1.0)",
    ],
  },
  {
    phase: "v1.0.0-stable",
    status: "Upcoming",
    title: "Production Release & Ecosystem",
    items: [
      "Standard library stabilization (std::tensor, std::actor)",
      "Package registry launch (blyx pkg)",
      "Formally verified memory safety model",
      "Commercial production support guarantees",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <Container size="lg" className="py-12 space-y-10">
      <Breadcrumb items={[{ label: "Development Roadmap" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          Blyx Development Roadmap
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Public release milestones tracking language stabilization and compiler architecture.
        </p>
      </div>

      <div className="space-y-6">
        {MILESTONES.map((m, idx) => (
          <Card key={idx} className="space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono font-bold text-lg text-[var(--accent)]">{m.phase}</span>
                <h3 className="font-['IBM_Plex_Sans'] font-semibold text-lg text-[var(--text-primary)]">
                  {m.title}
                </h3>
              </div>
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-semibold border ${
                m.status.includes("Completed")
                  ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                  : m.status.includes("Active")
                  ? "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20"
                  : "bg-[var(--bg-secondary)] text-[var(--text-muted)] border-[var(--border-color)]"
              }`}>
                {m.status}
              </span>
            </div>

            <ul className="grid md:grid-cols-2 gap-3 text-sm text-[var(--text-secondary)]">
              {m.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Container>
  );
}
