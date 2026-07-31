# Blyx BIR Compilation Pipeline Specification (Phase 9 - Step 9)

This document specifies the end-to-end compilation pipeline through the **Blyx Intermediate Representation (BIR)**.

---

## 1. End-to-End Pipeline Architecture

```
 Source Code (*.blyx)
          │
          ▼
   ┌─────────────┐
   │ blyxc Lexer │  Lexical tokenization
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │ blyxc Parser│  Parsing & Feature Gate Validation
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │  Blyx AST   │  Abstract Syntax Tree
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │  Blyx HIR   │  High-Level Intermediate Representation
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │  Blyx BIR   │  Blyx Intermediate Representation (compiler/blyx_bir)
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │   LLVM IR   │  LLVM IR Generation Pass (LlvmIrEmitter)
   └──────┬──────┘
          │
          ▼
   ┌─────────────┐
   │ Binary Exec │  Native Target Binary (`app` / `app.exe`)
   └─────────────┘
```

---

## 2. CLI Emission Flags

- **`blyxc --emit ast main.blyx`**: Emits Abstract Syntax Tree representation.
- **`blyxc --emit hir main.blyx`**: Emits High-Level IR.
- **`blyxc --emit bir main.blyx`**: Emits Blyx Intermediate Representation (BIR instructions and CFG).
- **`blyxc --emit llvm-ir main.blyx`**: Emits LLVM IR representation (`define i32 @main()`).
- **`blyxc --emit object main.blyx`**: Emits compiled target object file (`main.o`).
- **`blyxc main.blyx -o main`**: Compiles and links final host executable.
