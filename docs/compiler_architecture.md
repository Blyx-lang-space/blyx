# Blyx Compiler Migration & Parser Architecture (Phase 4)

This document maps out the frontend compilation pipeline for Blyx, explaining how source files are processed from raw characters into AST nodes and diagnostics.

---

## 1. Frontend Compiler Pipeline Architecture

```
 Source Code (*.blyx)
        │
        ▼
 ┌──────────────┐
 │ rustc_lexer  │  Converts UTF-8 text into stream of TokenKind lexemes
 └──────┬───────┘
        │
        ▼
 ┌──────────────┐
 │ rustc_parse  │  Applies Pratt expression parsing & recursive-descent grammar
 └──────┬───────┘
        │
        ▼
 ┌──────────────┐
 │  rustc_ast   │  Constructs Abstract Syntax Tree (AST) representations
 └──────┬───────┘
        │
        ▼
 ┌────────────────────┐
 │ rustc_ast_lowering │  Transforms AST into High-Level Intermediate Representation (HIR)
 └────────────────────┘
```

---

## 2. Key Component Map

1. **Lexer (`compiler/rustc_lexer`)**:
   - Operates on string slices (`&str`).
   - Identifies identifiers, keywords, numbers, string literals, and comment tokens.
2. **Parser (`compiler/rustc_parse`)**:
   - `src/lexer/`: Converts raw lexer tokens into rich `Token` structs containing `Span` info.
   - `src/parser/item.rs`: Parses items (`fn`, `struct`, `enum`, `trait`, `impl`, `mod`).
   - `src/parser/expr.rs`: Parses expressions (`if`, `match`, binary ops, method calls).
   - `src/parser/diagnostics.rs`: Generates user-facing parse errors and fix suggestions.
3. **AST Data Structures (`compiler/rustc_ast`)**:
   - `src/ast.rs`: Defines `Crate`, `Item`, `Stmt`, `Expr`, `Pat`, `Ty`, `FnHeader`.
4. **Diagnostics Engine (`compiler/rustc_errors`)**:
   - Manages error emission, warning levels, spans, and ANSI color formatting.
