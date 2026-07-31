# Blyx Compiler Architecture Review (Phase 3)

This report presents the architectural review of the Phase 3 compiler pipeline integration for experimental Blyx constructs.

---

## 1. Technical Debt & Temporary Mappings

1. **AST Fallback Mapping**:
   - In `compiler/rustc_parse/src/parser/ty.rs`, `tensor` currently lowers to `TyKind::Infer` after emitting diagnostic notes.
   - In `compiler/rustc_parse/src/parser/item.rs`, `actor` currently maps to `ItemKind::Struct` for AST compatibility.
2. **Feature Gate Evaluation**:
   - Feature gates (`blyx_experimental`, `blyx_tensor`, `blyx_gpu`, `blyx_actor`) check `self.psess.features` during parsing.

---

## 2. Refactoring & Performance Considerations

- **Memory Overhead**: AST node additions use `Box<Ty>` and `ThinVec<Expr>` to maintain minimal memory layout overhead.
- **Bootstrapping Integrity**: Existing stage0/stage1 compiler bootstrap targets pass without regression because all new syntax is strictly feature-gated.
