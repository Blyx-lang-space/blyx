# Blyx Milestones, Labels & Project Board Guide (Phase 12 - Step 5)

Official Domain: https://blyx-lang.space

---

## 1. Release Milestones

- **Alpha v0.1**: Initial identity rebrand, experimental `tensor`/`gpu`/`actor` grammar, ecosystem CLI tools.
- **Beta v1.0 (Current)**: Pipeline completion through BIR (`compiler/blyx_bir`), LLVM IR lowerer, `blyxpkg`, `blyx-analyzer`, and documentation suite.
- **v1.0 Stable (Q2 2027)**: Language specification stabilization, self-hosted frontend, and package registry deployment (`registry.blyx-lang.space`).
- **v1.1 & v2.0**: Advanced SIMD auto-vectorizer passes, dynamic tensor shapes, and native multi-node actor clustering.

---

## 2. Issue & Pull Request Label Schema

| Label | Color | Description |
| :--- | :--- | :--- |
| `C-bug` | `#d93f0b` | Defect or compiler diagnostic error. |
| `A-proposal` | `#0075ca` | Feature proposal or RFC idea. |
| `T-compiler` | `#5319e7` | Compiler core (`blyxc`, `blyx_bir`). |
| `T-libs` | `#008672` | Standard library (`blyx-std`) or runtime (`blyx`). |
| `T-tools` | `#7057ff` | Tooling (`blyxpkg`, `blyxfmt`, `blyx-analyzer`). |
| `E-easy` | `#0e8a16` | Good first issue for new open-source contributors. |
