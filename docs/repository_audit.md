# Blyx Compiler Repository Audit (Phase 1)

This report details the architectural audit of the Blyx compiler codebase (forked and rebranded from `rustc`), documenting current branding state, compiler subsystem locations, broken paths, build blockers, and the recommended migration roadmap.

---

## 1. Compiler Architecture Subsystem Mapping

| Subsystem | Location | Description |
| :--- | :--- | :--- |
| **Driver & CLI** | `compiler/blyxc`, `compiler/rustc_driver`, `compiler/rustc_driver_impl` | Main compiler executable entry point, CLI flags, session setup |
| **Lexer** | `compiler/rustc_lexer` | Lexical analyzer, tokenizer, string literal parsing |
| **Parser & AST** | `compiler/rustc_parse`, `compiler/rustc_ast`, `compiler/rustc_ast_lowering`, `compiler/rustc_ast_passes` | Recursive-descent & Pratt parser, AST data structures, lowering AST -> HIR |
| **HIR & Analysis** | `compiler/rustc_hir`, `compiler/rustc_hir_analysis`, `compiler/rustc_hir_typeck` | High-Level IR, item resolution, type checking, type inference |
| **Type System & Traits** | `compiler/rustc_infer`, `compiler/rustc_trait_selection`, `compiler/rustc_next_trait_solver`, `compiler/rustc_type_ir` | Type unification, trait bounds, obligation resolution |
| **Borrow Checker** | `compiler/rustc_borrowck` | Region analysis, ownership verification, lifetime checking |
| **MIR & Passes** | `compiler/rustc_middle`, `compiler/rustc_mir_build`, `compiler/rustc_mir_transform`, `compiler/rustc_mir_dataflow` | Mid-Level IR, dataflow analysis, MIR optimizations, drop elaboration |
| **Macros & Expansion** | `compiler/rustc_expand`, `compiler/rustc_builtin_macros`, `compiler/rustc_proc_macro` | Macro expansion, proc-macro interface, hygiene |
| **Backend & Codegen** | `compiler/rustc_codegen_ssa`, `compiler/rustc_codegen_llvm`, `compiler/rustc_codegen_cranelift`, `compiler/rustc_codegen_gcc` | SSA IR generation, LLVM/Cranelift/GCC code emission |
| **Target & ABI** | `compiler/rustc_target`, `compiler/rustc_abi` | Machine target definitions, layout calculation, calling conventions |
| **Errors & Session** | `compiler/rustc_errors`, `compiler/rustc_session`, `compiler/rustc_span` | Diagnostic emitter, source spans, session flags |
| **Bootstrap System** | `src/bootstrap` | Python/Rust build orchestration script (`x.py`) for stage 0/1/2 builds |
| **Standard Library** | `library/std`, `library/core`, `library/alloc`, `library/sysroot` | Standard runtime, core primitives, memory allocator |

---

## 2. Rebranding Audit Matrix

### Already Rebranded
- Root documentation: `README.md`, `CONTRIBUTING.md`, `INSTALL.md`, `bootstrap.example.toml`.
- Driver crate directory: `compiler/blyxc`.
- Package name in `compiler/blyxc/Cargo.toml`: `blyxc-main`.
- ICE / Crash reporting URLs in `compiler/rustc_driver_impl/src/lib.rs` and `signal_handler.rs`.
- Standard library headers in `library/std/src/lib.rs`, `library/core/src/lib.rs`, `library/alloc/src/lib.rs`.
- Bootstrap binary targets `blyxc` and `blyxdoc` in `src/bootstrap/Cargo.toml`.

### Still Referencing Rust Internals
- 74 compiler crates retain `rustc_*` directory and package names (e.g. `rustc_lexer`, `rustc_parse`, `rustc_ast`).
- Standard library workspace crates: `library/rustc-std-workspace-core`, `library/rustc-std-workspace-alloc`, `library/rustc-std-workspace-std`.
- Environment variable references: `RUSTC`, `RUSTFLAGS`, `RUSTDOCFLAGS`, `RUST_LOG`, `RUST_BACKTRACE` across `src/bootstrap`.
- Diagnostic lint prefixes (`clippy::*`, `rust_2024_compatibility`).

---

## 3. Broken Paths & Build Blockers

1. **Bootstrap Compile Step Path Mismatch**:
   - `src/bootstrap/src/core/build_steps/compile.rs` expects `compiler/rustc`. Needs to point to `compiler/blyxc`.
2. **Library Patch Alignment**:
   - `library/Cargo.toml` patches `rustc-std-workspace-*` crates.

---

## 4. Recommended Migration Roadmap

1. **Phase 2 (Build & Driver Stability)**:
   - Update `src/bootstrap` build steps to recognize `compiler/blyxc`.
   - Verify `blyxc` driver executable creation.
   - Document package manager strategy (`blyx-pkg` / `blyx`).
2. **Phase 3 (Language Specification)**:
   - Draft `docs/specification.md` defining Blyx philosophy, syntax, type system, ownership, error handling, and concurrency.
3. **Phase 4 (Incremental Syntax & Compiler Migration)**:
   - Implement Blyx keywords and syntax incrementally in `compiler/rustc_lexer` and `compiler/rustc_parse`.
4. **Phase 5 (Ecosystem & Toolchain)**:
   - Define `blyxdoc`, `blyxfmt`, `blyx-analyzer`, `blyxup`.
5. **Phase 6 (AI-Native Extensions)**:
   - Specify and design tensor primitives, GPU execution, and compile-time metadata.
6. **Phase 7 & 8 (DX & Quality Assurance)**:
   - Enhance error diagnostics, IDE support, test suites, and build verification.
