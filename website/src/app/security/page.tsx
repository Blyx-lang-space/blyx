import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { ShieldCheck, Lock, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Security Policy — Blyx Language",
  description: "Blyx security policy, vulnerability reporting guidelines, and memory safety invariants.",
};

export default function SecurityPage() {
  return (
    <Container size="lg" className="py-12 space-y-10">
      <Breadcrumb items={[{ label: "Security Policy" }]} />

      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl text-[var(--text-primary)]">
          Blyx Security Policy & Safety Invariants
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Guidelines for reporting security vulnerabilities in the Blyx compiler, standard library, and package registry.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="space-y-3">
          <div className="flex items-center space-x-2 text-emerald-500 font-['IBM_Plex_Sans'] font-bold text-xl">
            <ShieldCheck className="w-5 h-5" />
            <span>Memory Safety Guarantees</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            The Blyx compiler guarantees at compile time that safe Blyx code contains zero buffer overflows, double frees, use-after-free bugs, or data races across concurrent threads.
          </p>
        </Card>

        <Card className="space-y-3">
          <div className="flex items-center space-x-2 text-[var(--accent)] font-['IBM_Plex_Sans'] font-bold text-xl">
            <AlertTriangle className="w-5 h-5" />
            <span>Reporting Vulnerabilities</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            If you discover a security vulnerability or compiler soundness bug, please email <strong>rahulchaube1@gmail.com</strong> or submit a private disclosure on GitHub.
          </p>
        </Card>
      </div>
    </Container>
  );
}
