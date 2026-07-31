# Blyx Beta v1.0 API Reference & Public Crate Guide (Phase 11 - Step 3)

Official Domain: https://blyx-lang.space

---

## 1. Crate `blyx_bir` (`compiler/blyx_bir`)

- **`BirInstruction`**: Public enum defining all BIR instructions (`Load`, `Store`, `Call`, `Return`, `TensorAlloc`, `TensorMatMul`, `GpuDispatch`, `ActorSpawn`, `ActorSend`, `AtomicLoad`, etc.).
- **`ControlFlowGraph`**: Struct representing basic blocks and predecessor/successor edges.
- **`LlvmIrEmitter`**: Struct converting BIR basic blocks into typed LLVM IR (`define i32 @main()`).
- **`BirPassManager`**: Struct executing optimization passes across `-O0` to `-O3` levels.
- **`IncrementalCacheEngine`**: Engine managing source file hashes and compiled module artifacts.

## 2. Crate `blyx` (`library/blyx`)

- **`startup::init_runtime()`**: Initializes runtime thread pools and panic handlers.
- **`actor_scheduler::ActorScheduler`**: Lock-free actor message passing scheduler.

## 3. Crate `blyx-std` (`library/blyx-std`)

- **`tensor::Tensor<T, D1, D2>`**: Standard library statically dimensioned tensor wrapper.
- **`gpu::dispatch_kernel(threads, closure)`**: Host helper for kernel dispatches.
