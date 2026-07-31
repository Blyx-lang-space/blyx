import React from 'react';

export const metadata = {
  title: 'Blyx Compiler Architecture — blyx-lang.space',
  description: 'Deep dive into the Blyx Intermediate Representation (BIR) SSA instruction set, CFG, BirPassManager, and LlvmIrEmitter.',
};

export default function CompilerArchitecturePage() {
  return (
    <div style={{ background: '#07090e', color: '#f8fafc', minHeight: '100vh', padding: '4rem 2rem', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #00f2fe, #7f00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem', textAlign: 'center' }}>
          Compiler Pipeline & BIR Architecture
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem', textAlign: 'center' }}>
          Overview of the 7-stage Blyx compilation pipeline operating through <code>compiler/blyx_bir</code>.
        </p>

        <div style={{ background: '#0f141d', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '12px', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#00f2fe', marginBottom: '1rem' }}>Compilation Pipeline Stages</h2>
          <ol style={{ paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '2' }}>
            <li><strong>Lexer & Tokenizer</strong>: Emits strongly typed tokens with line/column Spans.</li>
            <li><strong>Parser</strong>: Builds Abstract Syntax Tree (AST) with error recovery hooks.</li>
            <li><strong>HIR Lowerer</strong>: Resolves symbols, module imports, and static generic parameters.</li>
            <li><strong>Type Checker</strong>: Enforces ownership rules and verifies static tensor dimensions <code>tensor&lt;T, D1, D2&gt;</code>.</li>
            <li><strong>BIR SSA Lowerer</strong>: Converts HIR into SSA basic blocks and typed instructions in <code>compiler/blyx_bir</code>.</li>
            <li><strong>Optimizer (`BirPassManager`)</strong>: Applies DCE, constant folding, and copy propagation passes across <code>-O0</code> to <code>-O3</code> levels.</li>
            <li><strong>LLVM IR Emitter (`LlvmIrEmitter`)</strong>: Generates typed LLVM IR and links native binary executables.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
