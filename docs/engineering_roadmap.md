# Blyx Prioritized Engineering Backlog & Roadmap (Phase 14 - Step 10)

Official Domain: https://blyx-lang.space

---

## 1. Prioritized Task Backlog

### Priority 0 (Critical / Production Blockers)
- **Native SPIR-V Codegen Target**: Implement native SPIR-V/NVPTX binary lowerer pass in `compiler/blyx_bir` for `gpu { ... }` blocks (12 Person-Months).

### Priority 1 (High Priority)
- **Self-Hosted Parser (`blyx_parser`)**: Transition recursive descent parser from C++/Rust driver to native Blyx parser (18 Person-Months).
- **Remote Package Registry Hosting**: Deploy `registry.blyx-lang.space` sparse index API (6 Person-Months).

### Priority 2 (Medium Priority)
- **Loop-Invariant Code Motion (LICM)**: Expand `BirPassManager` optimization pass suite with LICM and escape analysis (8 Person-Months).
- **Multi-File LSP Workspace Indexing**: Expand `blyx-analyzer` to cache multi-crate symbol declarations (4 Person-Months).

### Priority 3 (Nice to Have)
- **GDB/LLDB Machine Interface Bridge**: Extend `blyxdbg` with native GDB/LLDB MI protocol handler (3 Person-Months).
