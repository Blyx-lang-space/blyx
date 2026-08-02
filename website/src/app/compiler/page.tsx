import React from "react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Card from "@/components/ui/Card";
import { Cpu, Layers, Terminal, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
  title: "Compiler Architecture — Blyx",
  description: "Detailed specification of the Blyx 7-stage compiler architecture, BIR SSA intermediate representation, and LLVM backend code generation.",
};

const STAGES = [
  {
    step: "01",
    name: "Lexical Analysis",
    desc: "Converts raw Blyx source code into a streaming token stream with zero string allocations.",
  },
  {
    step: "02",
    name: "Recursive Descent Parsing",
    desc: "Parses tokens into an Abstract Syntax Tree (AST) validating statement structure.",
  },
  {
    step: "03",
    name: "Semantic Analysis",
    desc: "Performs scope resolution, symbol binding, and lifetime allocation validation.",
  },
  {
    step: "04",
    name: "Type Checking & Shape Inference",
    desc: "Verifies static types and multidimensional tensor shapes at compile time.",
  },
  {
    step: "05",
    name: "BIR SSA Lowering",
    desc: "Transforms AST into Blyx Intermediate Representation (BIR) in Static Single Assignment form.",
  },
  {
    step: "06",
    name: "BIR SSA Optimization",
    desc: "Applies dead code elimination, constant folding, vectorization, and loop unrolling.",
  },
  {
    step: "07",
    name: "LLVM IR Generation",
    desc: "Emits clean LLVM IR and invokes LLVM backend to produce native standalone executables.",
  },
];

export default function CompilerPage() {
  return (
    <Container size="lg" className="py-12 space-y-12">
      <Breadcrumb items={[{ label: "Compiler Architecture" }]} />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="font-['IBM_Plex_Sans'] font-bold text-4xl sm:text-5xl text-[var(--text-primary)]">
          Compiler Architecture & BIR SSA
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          The Blyx compiler is designed as a deterministic 7-stage pipeline centered around BIR (Blyx Intermediate Representation), a strongly-typed SSA intermediate format.
        </p>
      </div>

      {/* Pipeline Diagram */}
      <div className="grid md:grid-cols-7 gap-3">
        {STAGES.map((s) => (
          <Card key={s.step} className="p-4 space-y-2 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] font-bold">{s.step}</span>
              <h3 className="font-['IBM_Plex_Sans'] font-semibold text-sm text-[var(--text-primary)] mt-1">
                {s.name}
              </h3>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-normal">{s.desc}</p>
          </Card>
        ))}
      </div>

      {/* BIR SSA Sample Code Block */}
      <div className="space-y-4">
        <h2 className="font-['IBM_Plex_Sans'] font-bold text-2xl text-[var(--text-primary)]">
          BIR SSA Instruction Format
        </h2>
        <p className="text-sm text-[var(--text-secondary)]">
          BIR uses linear register assignment with explicit tensor shapes and allocation scopes:
        </p>

        <div className="bg-[var(--code-bg)] border border-[var(--border-strong)] rounded-xl p-4 font-mono text-xs text-[var(--code-text)] overflow-x-auto">
          <pre>{`// Blyx Intermediate Representation (BIR) SSA Stream
%0 = alloc tensor<f32, [128, 64]>
%1 = alloc tensor<f32, [64, 32]>
%2 = matmul %0, %1 : (tensor<f32, [128, 64]>, tensor<f32, [64, 32]>) -> tensor<f32, [128, 32]>
%3 = spawn_actor WorkerActor
send %3, %2
ret %2`}</pre>
        </div>
      </div>
    </Container>
  );
}
