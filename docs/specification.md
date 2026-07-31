# The Blyx Programming Language Specification (v1.0-draft)

---

## 1. Philosophy and Goals

Blyx is a modern, high-performance systems programming language designed for reliability, concurrency, performance, and native AI & heterogeneous compute acceleration.

### Core Goals
1. **Memory Safety Without Garbage Collection**: Compile-time ownership, borrowing, and linear lifetime analysis ensure deterministic resource destruction and memory safety.
2. **Predictable Performance**: Zero-cost abstractions, minimal runtime footprint, and bare-metal performance suitable for operating systems, game engines, and embedded microcontrollers.
3. **Ecosystem & Toolchain First**: Integrated compiler diagnostics (`blyxc`), documentation generator (`blyxdoc`), code formatter (`blyxfmt`), and package manager (`blyx-pkg`).
4. **AI & High-Performance Compute Native**: Built-in primitives for multi-dimensional tensors, compile-time dimension verification, and GPU kernel execution dispatch.

---

## 2. Lexical Structure and Identifiers

- **Source Encoding**: UTF-8.
- **Identifiers**: Regex pattern `[a-zA-Z_][a-zA-Z0-9_]*`.
- **Comments**:
  - Line comments: `// ...`
  - Block comments: `/* ... */` (nestable)
  - Doc comments: `/// ...` (outer item) or `//! ...` (inner module)

---

## 3. Keywords and Grammar

### Reserved Keywords
- Declaration & Structure: `fn`, `let`, `mut`, `const`, `static`, `struct`, `enum`, `union`, `trait`, `impl`, `type`
- Control Flow: `if`, `else`, `match`, `loop`, `while`, `for`, `in`, `break`, `continue`, `return`
- Ownership & References: `ref`, `move`, `unsafe`
- Modules & Visibility: `mod`, `use`, `pub`, `crate`, `super`, `self`, `Self`
- Asynchronous & Parallel: `async`, `await`, `spawn`
- AI & Compute Extensions (Planned): `tensor`, `gpu`, `actor`

---

## 4. Ownership, Borrowing, and Memory Model

1. **Ownership Rules**:
   - Each value in Blyx has a single owner at any time.
   - When the owner goes out of scope, the value is dropped automatically (`Drop` trait).
   - Moving ownership transfers resource responsibility; access to moved values is rejected at compile time.
2. **Borrowing Rules**:
   - At any given time, an item may have either:
     - Any number of immutable references (`&T`).
     - Exactly one mutable reference (`&mut T`).
   - References must always be valid for their declared lifetime `'a`.

---

## 5. Modules, Imports, and Visibility

- **Module Declaration**: `mod math;` or `mod math { ... }`.
- **Imports**: `use std::collections::HashMap;`.
- **Visibility Levels**:
  - Private by default.
  - `pub`: Publicly accessible across crates.
  - `pub(crate)`: Visible within the current compilation unit.
  - `pub(super)`: Visible to parent module.

---

## 6. Traits, Generics, and Type System

### Generics & Trait Bounds
```blyx
fn print_item<T: Display>(item: T) {
    println!("{}", item);
}
```

### Trait Definitions and Implementations
```blyx
pub trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for MyStruct {
    fn summarize(&self) -> String {
        format!("Item: {}", self.name)
    }
}
```

---

## 7. Error Handling

Blyx uses explicit, type-safe error handling without runtime exceptions:
- `Result<T, E>` for recoverable operations.
- `Option<T>` for nullable/optional values.
- `?` operator for propagating errors up call stacks.
- `panic!` for non-recoverable internal invariant failures.

---

## 8. Concurrency & Async Execution

- **Threads & Channels**: Memory-safe message passing (`std::sync::mpsc`) and thread spawning (`std::thread::spawn`).
- **Async/Await**: Cooperative zero-allocation futures powered by `async fn` and `.await`.

---

## 9. Standard Library Philosophy

The Blyx standard library is structured into three tiers:
1. `core`: Zero-dependency, heap-free intrinsic primitives.
2. `alloc`: Smart pointers (`Box`, `Rc`, `Arc`) and dynamic collections (`Vec`, `HashMap`, `String`).
3. `std`: Full OS runtime, networking, file I/O, and concurrency primitives.

---

## 10. Experimental Blyx Syntax Constructs

### Feature Gates
Experimental Blyx extensions are guarded by language feature gates:
- `#![feature(blyx_experimental)]` (umbrella feature gate)
- `#![feature(blyx_tensor)]`
- `#![feature(blyx_gpu)]`
- `#![feature(blyx_actor)]`

### Grammar Rules

```ebnf
TensorType ::= "tensor" "<" Type ("," Expression)* ">"
GpuExpr    ::= "gpu" Block
ParallelExpr ::= "parallel" Block
ActorItem  ::= "actor" Ident StructFields
```

### AST Representation & Future Implementation Notes

1. **`TensorType`**:
   - `TyKind::Tensor(Box<Ty>, ThinVec<Expr>)`
   - Represents statically dimensioned multi-dimensional arrays. Type checking verifies shape compatibility before lowering to BLAS / LLVM vector intrinsics.
2. **`GpuExpr`**:
   - `ExprKind::Gpu(Box<Block>)`
   - Represents device kernel code blocks compiled via SPIR-V / NVPTX backends.
3. **`ActorItem`**:
   - `ItemKind::Actor(Ident, Generics, VariantData)`
   - Isolated state unit with actor-isolated message channels.

