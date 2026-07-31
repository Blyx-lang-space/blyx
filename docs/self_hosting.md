# Blyx Compiler Self-Hosting Strategy & Roadmap (Phase 7 - Step 2)

This document specifies the multi-stage roadmap to compile the Blyx developer ecosystem and compiler tooling using Blyx itself (`blyxc`).

---

## 1. Multi-Stage Self-Hosting Pipeline

```
 ┌─────────────────────────────────────────────────────────────┐
 │ Stage 0: Host Bootstrap Compiler (`blyxc` C++ / Rust engine) │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼ Compiles Stage 1 Tooling
 ┌─────────────────────────────────────────────────────────────┐
 │ Stage 1: Native Blyx Ecosystem Tools                        │
 │ (`blyxpkg`, `blyxfmt`, `blyx-analyzer`, `blyxdoc`, `blyxup`) │
 └──────────────────────────────┬──────────────────────────────┘
                                │
                                ▼ Compiles Stage 2 Core Compiler
 ┌─────────────────────────────────────────────────────────────┐
 │ Stage 2: Self-Hosted Blyx Compiler (`blyxc.blyx`)          │
 └─────────────────────────────────────────────────────────────┘
```

---

## 2. Migration Execution Phases

1. **Phase 1 (Tooling Self-Hosting)**: Write `blyxpkg`, `blyxfmt`, `blyxdoc`, and `blyxup` in native `.blyx` syntax.
2. **Phase 2 (Frontend Self-Hosting)**: Re-implement `blyxc_lexer` and `blyxc_parse` in Blyx.
3. **Phase 3 (Full Bootstrap Verification)**: Compile Stage 2 `blyxc` using Stage 1 `blyxc` and verify bit-for-bit identical Stage 3 output.
