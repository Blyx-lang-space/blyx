import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { UserCheck, ShieldCheck, Cpu, Terminal } from "lucide-react";

export const metadata = {
  title: "About & Creator — Blyx Language",
  description: "Learn about the history, goals, compiler design philosophy, and creator of the Blyx programming language.",
};

export default function AboutPage() {
  return (
    <Container size="lg" className="py-12 space-y-12">
      <Breadcrumb items={[{ label: "About Blyx" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          About Blyx & Design Philosophy
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          Blyx was created to bridge the gap between high-level AI framework expressiveness and low-level bare-metal systems performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="space-y-4">
          <h2 className="font-['IBM_Plex_Sans'] font-bold text-2xl text-[var(--text-primary)]">
            Core Philosophy
          </h2>
          <ul className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
            <li><strong>Zero-Cost Abstractions:</strong> High-level tensor operations and actor messaging compile into optimal LLVM machine code without runtime overhead.</li>
            <li><strong>Compile-Time Verification:</strong> Memory safety, array bounds, and tensor dimensions are verified before execution.</li>
            <li><strong>Unified Compiler Toolchain:</strong> Single tool for compiling, packaging, testing, and formatting code.</li>
          </ul>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-['IBM_Plex_Sans'] font-bold text-2xl text-[var(--text-primary)]">
            Creator & Maintainer
          </h2>
          <div className="space-y-2">
            <h3 className="font-['IBM_Plex_Sans'] font-semibold text-lg text-[var(--text-primary)]">
              Rahul Chaube
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Principal compiler engineer and creator of Blyx. Designed the 7-stage deterministic compiler pipeline and BIR SSA IR.
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
}
