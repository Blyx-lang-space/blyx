# Blyx Compiler Optimization Pipeline Specification (Phase 7 - Step 4)

This document specifies the middle-end and backend optimization passes in `blyxc`.

---

## 1. Optimization Passes

1. **Constant Folding & Propagation**: Evaluates static constant expressions (including `tensor` dimension expressions) at compile time.
2. **Dead Code Elimination (DCE)**: Prunes unreachable execution branches and unused functions.
3. **Inlining & Devirtualization**: Inlines small function calls and devirtualizes trait method calls.
4. **Escape Analysis**: Determines whether variables escape local stack frames to eliminate heap allocations.
5. **SIMD & Tensor Vectorization**: Auto-vectorizes loops operating on `tensor<T, D1, D2>` using AVX-512 / ARM Neon vector instructions.
6. **GPU Kernel Fusion**: Fuses adjacent `gpu { ... }` execution blocks to reduce GPU memory dispatch latency.
