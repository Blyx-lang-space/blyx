# Blyx V1 Independence Masterplan & Engineering Roadmap

Official Domain: https://blyx-lang.space

This document outlines the multi-release execution masterplan for transitioning **Blyx** into a self-hosted, independent programming language.

---

## 1. Multi-Release Phased Roadmap

```
 ┌────────────────────────────────────────────────────────────────────────┐
 │ Phase I: BIR Specification & Codegen Abstraction (Months 1–6)          │
 │ - Implement BIR (Blyx Intermediate Representation) spec                │
 │ - Create modular backend interface (`BlyxBackend` for LLVM & Cranelift)│
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │ Phase II: Independent Frontend & Parser Engine (Months 7–12)           │
 │ - Replace parser frontend with `blyx_parser`                           │
 │ - Complete native dimension type checking for `tensor<T, D1, D2>`      │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │ Phase III: Self-Hosting & Standalone Release (Months 13–18)            │
 │ - Bootstrap `blyxc` compiler written in native Blyx (`blyxc.blyx`)     │
 │ - Deploy production package registry at `registry.blyx-lang.space`     │
 └────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Engineering Resource & Effort Allocation

| Phase | Milestone | Engineering Effort | Primary Focus Area |
| :--- | :--- | :--- | :--- |
| **Phase I** | Core BIR & Codegen Abstraction | **24 Person-Months** | BIR lowering pass & LLVM/Cranelift target backends. |
| **Phase II** | Native Parser & Frontend | **18 Person-Months** | Parser engine (`blyx_parser`) & type checker integration. |
| **Phase III** | Full Self-Hosting & Ecosystem | **30 Person-Months** | Bootstrap compiler (`blyxc.blyx`) & package registry. |

---

## 3. Risk Mitigation Strategy

- **Bootstrap Lockout Risk**: Mitigated by maintaining Stage 0 C++/Rust host driver validation target (`blyxc-main`) during initial migration phases.
- **ABI Compatibility Risk**: Enforced via explicit C-compatible FFI ABI layers across runtime boundaries.
- **Performance Regression Risk**: Continuous benchmarking against `blyxc` baseline metrics recorded in [benchmarks_measured.md](file:///d:/blyxlanguage/docs/benchmarks_measured.md).

---

## 4. Success Criteria

1. **Self-Hosting**: `blyxc` successfully compiles its own source code written in `.blyx`.
2. **Ecosystem Independence**: Zero dependency on external upstream driver binaries.
3. **Platform Availability**: Cross-platform binaries deployed for Linux, Windows, macOS, and WebAssembly targets on [https://blyx-lang.space](https://blyx-lang.space).
