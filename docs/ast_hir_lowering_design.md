# Blyx Compiler AST & HIR Lowering Architecture (Phase 3)

This document specifies the AST node definitions, Visitor integration, HIR lowering, and Type Checker semantic rules for experimental Blyx constructs.

---

## 1. AST Node Definitions

### `TyKind::Tensor`
- **Definition**: `Tensor(Box<Ty>, ThinVec<AnonConst>)`
- **Ownership**: Owns the element type (`Box<Ty>`) and dimension constants (`ThinVec<AnonConst>`).
- **Span**: Spans the entire `tensor<T, D1, D2>` range.
- **Visitor**: Traverses element type via `walk_ty` and dimension expressions.

### `ExprKind::Gpu` & `ExprKind::Parallel`
- **Definition**: `Gpu(Box<Block>)` / `Parallel(Box<Block>)`
- **Ownership**: Owns the inner execution block.
- **Span**: Encloses keyword and trailing block.
- **Visitor**: Traverses inner block via `walk_block`.

### `ItemKind::Actor`
- **Definition**: `Actor(Ident, Generics, VariantData)`
- **Ownership**: Owns the actor name, generic parameters, and field declarations.
- **Visitor**: Traverses generics and variant fields via `walk_generics` and `walk_variant_data`.

---

## 2. HIR Lowering Mapping (`rustc_ast_lowering`)

```
 AST Node                                    HIR Representation
 ──────────────────────────────────────      ──────────────────────────────────────
 TyKind::Tensor(element_ty, dims)      ──>   hir::TyKind::Path / Custom Tensor HIR
 ExprKind::Gpu(block)                  ──>   hir::ExprKind::Block(block, GpuTarget)
 ExprKind::Parallel(block)             ──>   hir::ExprKind::Block(block, ParallelTarget)
 ItemKind::Actor(ident, generics, fields) ─> hir::ItemKind::Struct(ident, generics, fields)
```

---

## 3. Name Resolution & Semantic Analysis (`rustc_resolve` / `rustc_hir_analysis`)

1. **Actor Name Uniqueness**:
   - Rejects duplicate actor or struct definitions in the same module scope.
   - Diagnostic: `error[E0428]: the name `Worker` is defined multiple times`.
2. **Type Existence & Bounds**:
   - Verifies that element type `T` in `tensor<T, D1, D2>` is defined and accessible in the current scope.

---

## 4. Type Checking & Dimension Validation (`rustc_hir_typeck`)

1. **Tensor Dimension Verification**:
   - `tensor<T, D1, D2>` requires:
     - `T` is a valid scalar or floating-point type (`f32`, `f64`, `i32`, `u8`, etc.).
     - Dimensions `D1`, `D2` evaluate to positive integer constants (`usize`).
   - Rejects zero or negative dimensions with clear error diagnostics:
     ```text
     error[E0308]: tensor dimension must be a positive non-zero constant
       --> src/main.blyx:5:21
        |
      5 |     let x: tensor<f32, 0, 4>;
        |                        ^ invalid dimension 0
     ```
