# Blyx AI-Native Language Feature Proposals (Phase 6)

This proposal outlines first-class language extensions designed for AI model authoring, high-performance matrix math, and heterogeneous GPU compute dispatch in Blyx.

---

## Proposal 1: Static N-Dimensional Tensor Types (`tensor<T, D1, D2, ...>`)

### Motivation
Current languages rely on dynamically-checked runtime tensor wrappers (e.g. PyTorch/NumPy arrays) where shape mismatches cause runtime panics. Blyx introduces static compile-time verified shapes.

### Syntax
```blyx
let weights: tensor<f32, 784, 128> = tensor::zeros();
let inputs:  tensor<f32, 32, 784>  = load_batch();
let hidden:  tensor<f32, 32, 128>  = inputs @ weights; // @ denotes matrix multiply
```

### Compiler & Runtime Impact
- **Parser & AST**: Add `Tensor` type node to `rustc_ast::ast::TyKind`.
- **Type Checker**: Verify matrix inner-dimension compatibility ($A_{m \times n} \times B_{n \times p} = C_{m \times p}$) during HIR type checking (`rustc_hir_typeck`).
- **Codegen**: Emits SIMD auto-vectorized loops or BLAS calls via LLVM.

---

## Proposal 2: First-Class GPU Kernel Blocks (`gpu { ... }`)

### Motivation
CUDA and WebGPU require external C++ files or shader text strings. Blyx enables inline GPU kernels checked by `blyxc`.

### Syntax
```blyx
pub fn elementwise_add(a: &tensor<f32, N>, b: &tensor<f32, N>, out: &mut tensor<f32, N>) {
    gpu(threads = 256) {
        let idx = gpu::global_thread_id();
        if idx < N {
            out[idx] = a[idx] + b[idx];
        }
    }
}
```

### Compiler & Runtime Impact
- **Compiler**: SPIR-V or NVPTX codegen backend pass in `rustc_codegen_llvm` or `rustc_codegen_cranelift`.
- **Runtime**: Dynamic loading of CUDA / Vulkan / Metal runtime drivers.

---

## Proposal 3: Deterministic Concurrency Actors (`actor`)

### Motivation
AI pipeline data loaders require lock-free parallel streaming without data races.

### Syntax
```blyx
pub actor DataPipeline {
    queue: Channel<ImageBatch>,

    pub async fn process(&mut self) -> ProcessedBatch {
        // Safe, thread-isolated actor state execution
    }
}
```

### Compiler & Runtime Impact
- **Borrow Checker**: Verify zero mutable state sharing between actors at compile time.
