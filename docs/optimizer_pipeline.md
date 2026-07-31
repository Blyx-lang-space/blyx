# Blyx BIR Optimizer Pipeline & Pass Manager Specification (Phase 10 - Step 8)

This document specifies the optimization passes and pass manager infrastructure in `compiler/blyx_bir`.

---

## 1. Optimization Pass Suite

1. **Constant Folding & Propagation**: Evaluates static scalar and tensor constant expressions at compile time.
2. **Dead Code Elimination (DCE)**: Prunes unused SSA instructions and unreachable basic blocks.
3. **Copy Propagation**: Replaces redundant variable copies with direct SSA register uses.
4. **Common Subexpression Elimination (CSE)**: Identifies duplicate computations and reuses calculated SSA values.
5. **Control Flow Simplification**: Merges single-predecessor/single-successor basic blocks.
6. **Function Inlining**: Inlines small function call targets into caller block scopes.

---

## 2. Optimization Level Configurations (`BirPassManager`)

- **`-O0`**: No optimization passes executed. Fast debug build target.
- **`-O1`**: Runs Dead Code Elimination and Constant Folding.
- **`-O2` / `-O3`**: Full optimization suite including Copy Propagation, CSE, DCE, Control Flow Simplification, and Function Inlining until fixed point convergence.
- **`-Os` / `-Oz`**: Code-size constrained optimization passes.
