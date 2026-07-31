# Blyx Compiler Frontend Architecture (Phase 2 - Detailed Analysis)

This document provides a comprehensive breakdown of the Blyx compiler frontend components, their responsibilities, key files, data flows, and exact extension points for implementing new language features.

---

## 1. Subsystem Breakdown

### `rustc_lexer`
- **Responsibility**: Converts raw UTF-8 source strings into a stream of basic lexemes (`TokenKind`).
- **Key Files**:
  - `compiler/rustc_lexer/src/lib.rs` (main lexing algorithm, `TokenKind` enum)
  - `compiler/rustc_lexer/src/cursor.rs` (UTF-8 character iterator)
- **Data Flow**: `&str` -> `Cursor` -> `TokenKind` stream.
- **Syntax Extension Point**: Low-level lexical tokens (e.g. operators, comment styles, number prefixes). Keywords are checked in `rustc_parse` / `rustc_span::symbol`.

---

### `rustc_parse`
- **Responsibility**: Takes lexer tokens and builds the Abstract Syntax Tree (AST) using recursive-descent and Pratt expression parsing.
- **Key Files**:
  - `compiler/rustc_parse/src/lexer/mod.rs` (converts `rustc_lexer` tokens to `rustc_ast::token::Token`)
  - `compiler/rustc_parse/src/parser/mod.rs` (main `Parser` struct)
  - `compiler/rustc_parse/src/parser/item.rs` (parsing items: `fn`, `struct`, `enum`, `trait`, `actor`)
  - `compiler/rustc_parse/src/parser/expr.rs` (parsing expressions: `gpu { ... }`, `parallel { ... }`)
  - `compiler/rustc_parse/src/parser/ty.rs` (parsing type expressions: `tensor<f32, 4, 4>`)
- **Data Flow**: `TokenKind` -> `rustc_ast::token::Token` -> AST Nodes (`ast::Item`, `ast::Expr`, `ast::Ty`).
- **Syntax Extension Point**: Primary location for parsing Blyx keywords (`tensor`, `gpu`, `actor`, `parallel`, `kernel`).

---

### `rustc_ast`
- **Responsibility**: Definitive data structures for Abstract Syntax Tree nodes.
- **Key Files**:
  - `compiler/rustc_ast/src/ast.rs` (definitions of `ItemKind`, `ExprKind`, `TyKind`, `StmtKind`)
  - `compiler/rustc_ast/src/visit.rs` (AST Visitor pattern for linting and expansion passes)
  - `compiler/rustc_ast/src/mut_visit.rs` (mutable AST transformations)
- **Data Flow**: Constructed by `rustc_parse`, consumed by macro expansion and lowering.
- **Syntax Extension Point**: Adding new variants to `ItemKind` (e.g., `Actor`), `ExprKind` (e.g., `GpuBlock`, `ParallelBlock`), and `TyKind` (e.g., `Tensor`).

---

### `rustc_ast_lowering`
- **Responsibility**: Lowers macro-expanded AST into High-Level IR (HIR) and resolves lifetime scopes.
- **Key Files**:
  - `compiler/rustc_ast_lowering/src/lib.rs` (lowering context `LoweringContext`)
  - `compiler/rustc_ast_lowering/src/item.rs`, `expr.rs`
- **Data Flow**: `ast::Crate` -> `hir::Crate`.
- **Syntax Extension Point**: Mapping Blyx AST nodes to corresponding HIR nodes.

---

### `rustc_hir`
- **Responsibility**: High-Level Intermediate Representation optimized for type checking and item resolution.
- **Key Files**:
  - `compiler/rustc_hir/src/hir.rs` (`ItemKind`, `ExprKind`, `TyKind` for HIR)
  - `compiler/rustc_hir/src/intravisit.rs` (HIR traversal)
- **Data Flow**: Constructed by `rustc_ast_lowering`, queried during type checking.

---

### `rustc_middle`
- **Responsibility**: Type context (`TyCtxt`), semantic representations, query engine definitions, and MIR definitions.
- **Key Files**:
  - `compiler/rustc_middle/src/ty/mod.rs` (`Ty`, `TyKind` type representation)
  - `compiler/rustc_middle/src/mir/mod.rs` (MIR basic blocks and statements)
- **Data Flow**: Central query database accessible across type checking, borrow checking, and codegen.

---

### `rustc_hir_typeck`
- **Responsibility**: Type inference, trait bound checking, and expression type assignment.
- **Key Files**:
  - `compiler/rustc_hir_typeck/src/lib.rs` (type checker entry)
  - `compiler/rustc_hir_typeck/src/expr.rs` (expression type checking)
- **Data Flow**: Evaluates `hir::Expr` -> validates types against `TyCtxt` -> records typed MIR assignments.
