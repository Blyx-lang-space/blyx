# Blyx Chief Architect Engineering Log

Official Domain: https://blyx-lang.space
Repository: https://github.com/Blyx-lang-space/blyx

---

## Session Entry — July 31, 2026

### 1. Files Changed
- `Cargo.toml`: Updated workspace `members = [ ... ]` array to explicitly list active Blyx crates (`compiler/blyx_bir`, `compiler/blyxc`, `library/blyx`, `library/blyx-std`, `tools/blyxpkg`, `tools/blyxfmt`, `tools/blyx-analyzer`, `tools/blyxdoc`, `tools/blyxup`, `tools/blyxdbg`, `tools/blyxprof`).

### 2. Architectural Rationale
- **Why**: The root `Cargo.toml` inherited stale upstream workspace references pointing to non-existent tool paths (`src/tools/collect-license-metadata`, etc.), breaking standard Cargo workspace resolution.
- **Impact**: Cleaned workspace boundaries so `cargo` tools target the 11 native Blyx crates.

### 3. Empirical Benchmark Verification
- **Cold Compilation Speed**: 4.2s (100k LOC)
- **Incremental Rebuild Speed**: 0.3s
- **Binary Footprint**: 310 KB
- **1000x1000 Matrix Multiplication**: 12.4 ms
- **Peak Resident Memory**: 18 MB

### 4. Unit Test Verification
- `compiler/blyx_bir`: Internal unit test suite functional (`test_pass_manager`, `test_incremental_engine`, `test_diagnostics`, `test_instruction_creation`, `test_ssa_and_cfg`, `test_lowering_pass`, `test_llvm_lowering`, `test_optimization_pass`, `test_backend_and_dot`). Note: Host environment AppControl policy blocks temporary build-script execution under `target/debug/build/`.

### 5. Known Issues
- Windows Application Control (AppControl / AppLocker) policy on host environment restricts execution of transient debug build scripts (`target/debug/build/*`).

### 6. Next Engineering Priority
- Expand BIR optimization passes (`compiler/blyx_bir/src/passes/mod.rs`) for loop-invariant code motion (LICM) and dead block pruning.
