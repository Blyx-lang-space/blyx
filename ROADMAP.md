# Blyx Programming Language Product Roadmap

Official Domain: https://blyx-lang.space

---

## Milestone 1: Alpha v0.1 (Current)
- Complete language rebranding to **Blyx** (`blyxc`).
- Feature-gated parsing for `tensor`, `gpu`, `actor`, and `parallel` constructs.
- Core ecosystem tools (`blyxpkg`, `blyxfmt`, `blyx-analyzer`, VS Code extension).
- Web portal (`https://blyx-lang.space`) and playground (`play.blyx-lang.space`).

## Milestone 2: Alpha v0.2 (Q4 2026)
- Native BLAS / SIMD code generation pass for `tensor<T, D1, D2>`.
- SPIR-V / NVPTX codegen integration for `gpu { ... }` blocks.
- Package registry deployment (`https://blyx-lang.space/registry`).

## Milestone 3: Beta v1.0 (Q2 2027)
- Language specification stabilization.
- Production-ready actor concurrency runtime (`blyx_runtime::actor`).
- Standard library stabilization (`std::tensor`, `std::gpu`).
