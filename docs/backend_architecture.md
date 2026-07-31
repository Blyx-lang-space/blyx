# Blyx Backend & Code Generation Architecture (Phase 4 - Step 5)

This document specifies the extensible code generation and runtime architecture for Blyx compute primitives.

---

## 1. Modular Backend Architecture Overview

```
                          ┌───────────────────────────┐
                          │     Blyx Middle-End       │
                          │   HIR / MIR Optimization  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
 ┌──────────────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
 │    Tensor Backend    │   │     GPU Backend      │   │    Actor Runtime     │
 ├──────────────────────┤   ├──────────────────────┤   ├──────────────────────┤
 │ SIMD Auto-Vec        │   │ SPIR-V Codegen       │   │ Work-Stealing Pool   │
 │ OpenBLAS / MKL       │   │ NVPTX / CUDA Driver  │   │ Lock-Free Mailboxes  │
 └──────────────────────┘   └──────────────────────┘   └──────────────────────┘
```

---

## 2. Component Specifications

### 1. Tensor Compute Backend Interface (`blyx_codegen_tensor`)
- **Compilation Target**: Generates vector SIMD loops (AVX-512, ARM Neon) or links against OpenBLAS / Apple Accelerate.
- **Memory Layout**: C-contiguous dense array layouts with dynamic striding support.

### 2. GPU Device Target Interface (`blyx_codegen_gpu`)
- **Kernel Lowering**: Compiles `gpu { ... }` blocks into SPIR-V bytecodes for Vulkan/Metal and NVPTX for CUDA.
- **Kernel Launch**: Generates runtime host wrapper logic for buffer allocation, memory transfer (`HostToDevice`, `DeviceToHost`), and grid dispatch.

### 3. Parallel Task Scheduler (`blyx_runtime::parallel`)
- **Execution Model**: Work-stealing thread pool executing parallel iteration loops.

### 4. Actor Runtime System (`blyx_runtime::actor`)
- **Message Passing**: Lock-free MPSC queues powering actor mailboxes.
- **Safety**: Compile-time move enforcement prevents data races across actor boundaries.
