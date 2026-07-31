# The Blyx Programming Language Book — Chapter 1: Introduction

Official Domain: https://blyx-lang.space

Welcome to **Blyx**, a high-performance systems programming language designed for reliability, multi-core actor concurrency, static tensor dimensions, and native GPU acceleration.

---

## Key Language Goals

1. **Memory Safety Without Garbage Collection**: Static ownership rules enforce data race safety and memory management.
2. **First-Class Tensor Computations**: Native `tensor<T, D1, D2>` statically dimensioned type primitives.
3. **Heterogeneous GPU Acceleration**: Inline `gpu { ... }` compute blocks targeting SPIR-V and NVPTX.
4. **Lock-Free Concurrency**: Dedicated `actor` declarations backed by work-stealing thread pools in `blyx`.
