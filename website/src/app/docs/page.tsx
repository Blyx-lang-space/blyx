import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar, { SidebarSection } from "@/components/Sidebar";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { BookOpen, ArrowRight, ShieldCheck, Cpu, Terminal } from "lucide-react";

export const metadata = {
  title: "Documentation Hub — Blyx Language",
  description: "Official documentation for the Blyx programming language. Guides, reference manuals, BIR SSA architecture, actor concurrency, and GPU compilation.",
};

const DOC_SECTIONS: SidebarSection[] = [
  {
    title: "Getting Started",
    links: [
      { label: "Overview & Installation", href: "/docs" },
      { label: "Your First Program", href: "/docs" },
      { label: "Package Manager (blyx pkg)", href: "/docs" },
    ],
  },
  {
    title: "Language Reference",
    links: [
      { label: "Syntax & Primitives", href: "/docs" },
      { label: "Ownership & Lifetimes", href: "/docs" },
      { label: "Static Tensor Types", href: "/docs" },
      { label: "Actor Concurrency", href: "/docs" },
    ],
  },
  {
    title: "Compiler Architecture",
    links: [
      { label: "BIR SSA Format", href: "/compiler" },
      { label: "GPU PTX/SPIR-V Lowering", href: "/compiler" },
      { label: "LLVM Backend Emitted IR", href: "/compiler" },
    ],
  },
];

export default function DocsPage() {
  return (
    <Container size="xl" className="py-10">
      <Breadcrumb items={[{ label: "Documentation" }]} />

      <div className="flex gap-10">
        <Sidebar sections={DOC_SECTIONS} />

        <div className="flex-1 space-y-10 max-w-4xl">
          <div className="space-y-4 border-b border-[var(--border-color)] pb-8">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[var(--accent)]">
              <span>Blyx v0.1.0-beta Documentation</span>
            </div>
            <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
              Blyx Documentation & Guide Hub
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Welcome to the official documentation for the Blyx programming language. Here you will find language specifications, standard library references, and compiler architecture guides.
            </p>
          </div>

          {/* Quick Start Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)]">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)]">
                Quick Start & Installation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Install the Blyx compiler and build your first standalone binary in 30 seconds.
              </p>
              <Link href="/download" className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center">
                Get Started →
              </Link>
            </Card>

            <Card className="space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-emerald-500">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="font-['IBM_Plex_Sans'] font-bold text-lg text-[var(--text-primary)]">
                Compiler & BIR SSA Specs
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Explore the 7-stage deterministic compiler pipeline and static single assignment intermediate IR.
              </p>
              <Link href="/compiler" className="text-xs font-medium text-[var(--accent)] hover:underline inline-flex items-center">
                Explore Specs →
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
