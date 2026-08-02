"use client";

import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FeatureCard from "@/components/FeatureCard";
import CodeTabs from "@/components/CodeTabs";
import StatCounter from "@/components/StatCounter";
import {
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Terminal,
  ArrowRight,
  Download,
  BookOpen,
  Code2,
  Box,
  Globe2,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-24 py-12 sm:py-20">
      {/* HERO SECTION */}
      <section className="relative">
        <Container size="lg">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-mono text-[var(--accent)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Blyx Beta v1.0 Release Candidate</span>
              </div>
              <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl sm:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight">
                A systems programming language built for the AI era.
              </h1>
              <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-sans">
                Blyx combines memory safety without garbage collection, native static tensor types, lock-free actor concurrency, and direct GPU compilation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/download" size="lg" variant="primary">
                  <Download className="w-4 h-4 mr-2" />
                  Install Blyx
                </Button>
                <Button href="/docs" size="lg" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Documentation
                </Button>
              </div>
              <div className="text-xs font-mono text-[var(--text-muted)] pt-2 flex items-center space-x-4">
                <span>Version: v0.1.0-beta</span>
                <span>•</span>
                <span>License: Dual MIT / Apache-2.0</span>
              </div>
            </div>

            {/* Right Editor Showcase */}
            <div className="lg:col-span-5">
              <CodeTabs />
            </div>
          </div>
        </Container>
      </section>

      {/* THREE CORE PILLARS */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <Container size="lg">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-emerald-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-['IBM_Plex_Sans'] font-bold text-xl text-[var(--text-primary)]">
                Memory Safety
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Compile-time linear ownership tracking prevents data races, double frees, and null pointer dereferences without a runtime garbage collector.
              </p>
            </Card>
            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent)]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-['IBM_Plex_Sans'] font-bold text-xl text-[var(--text-primary)]">
                Native Tensor Types
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Multidimensional tensor primitives are built into the language frontend with compile-time shape verification and zero-copy slicing.
              </p>
            </Card>
            <Card className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-amber-500">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-['IBM_Plex_Sans'] font-bold text-xl text-[var(--text-primary)]">
                Direct GPU Compilation
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                BIR SSA intermediate representation compiles directly to PTX / NVPTX and SPIR-V without external C/C++ FFI wrappers or CUDA runtime overhead.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* LANGUAGE FEATURES GRID */}
      <section>
        <Container size="lg" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="font-['IBM_Plex_Sans'] font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
              Engineered for High-Performance Systems
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Blyx delivers the speed of C++, the memory safety of Rust, and native tensor primitives built for artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Lock className="w-5 h-5" />}
              title="Compile-time Safety"
              description="Zero runtime overhead. Memory allocations and array boundaries are validated at compile time."
            />
            <FeatureCard
              icon={<Layers className="w-5 h-5" />}
              title="Lock-free Actors"
              description="Built-in actor primitives pass messages across threads without locks or atomic contention."
            />
            <FeatureCard
              icon={<Box className="w-5 h-5" />}
              title="Static Shape Inference"
              description="Tensor dimensions are checked during compilation, catching dimension mismatch bugs early."
            />
            <FeatureCard
              icon={<Terminal className="w-5 h-5" />}
              title="Unified Toolchain"
              description="Single executable handles building, testing, package management, formatting, and linting."
            />
            <FeatureCard
              icon={<Globe2 className="w-5 h-5" />}
              title="Cross Platform"
              description="Target x86_64, ARM64, WebAssembly, and NVIDIA GPUs from a single source codebase."
            />
            <FeatureCard
              icon={<Code2 className="w-5 h-5" />}
              title="Zero-cost Abstractions"
              description="High-level tensor iterators and pattern matching compile down to optimal machine instructions."
            />
            <FeatureCard
              icon={<Zap className="w-5 h-5" />}
              title="Fast Compilation"
              description="Single-pass lexing and BIR SSA optimization pipeline delivers rapid edit-compile-test cycles."
            />
            <FeatureCard
              icon={<ShieldCheck className="w-5 h-5" />}
              title="Zero Dependencies"
              description="Standalone static binaries with no external runtime dependencies or shared libraries required."
            />
          </div>
        </Container>
      </section>

      {/* COMPILER PIPELINE PREVIEW */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <Container size="lg" className="space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="font-['IBM_Plex_Sans'] font-bold text-2xl sm:text-3xl text-[var(--text-primary)]">
                The BIR SSA Compiler Pipeline
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                From source code to LLVM machine instructions across 7 deterministic compilation stages.
              </p>
            </div>
            <Button href="/compiler" variant="outline" size="sm">
              Explore Compiler Specs <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
            {["1. Lexer", "2. Parser", "3. Semantic", "4. Type Check", "5. BIR SSA", "6. Optimizer", "7. LLVM IR"].map((stage, i) => (
              <div
                key={i}
                className="bg-[var(--bg-card)] border border-[var(--border-color)] p-4 rounded-lg font-mono text-xs font-semibold text-[var(--text-primary)] flex flex-col justify-center items-center space-y-1"
              >
                <span className="text-[var(--accent)]">{stage.split(".")[0]}</span>
                <span>{stage.split(".")[1]}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EMPIRICAL BENCHMARKS */}
      <section>
        <Container size="lg" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-['IBM_Plex_Sans'] font-bold text-3xl text-[var(--text-primary)]">
              Performance Comparison
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Empirical execution time on 1000x1000 matrix multiplication and 1M actor message passing benchmarks.
            </p>
          </div>

          <StatCounter />
        </Container>
      </section>

      {/* DOWNLOAD CALLOUT */}
      <section className="bg-[var(--bg-secondary)] py-16 border-y border-[var(--border-color)]">
        <Container size="md" className="text-center space-y-6">
          <h2 className="font-['IBM_Plex_Sans'] font-bold text-3xl sm:text-4xl text-[var(--text-primary)]">
            Ready to build with Blyx?
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-xl mx-auto">
            Get started in under 30 seconds with the official command-line installer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/download" size="lg" variant="primary">
              Download Blyx v0.1.0-beta
            </Button>
            <Button href="/docs" size="lg" variant="outline">
              Read Documentation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
