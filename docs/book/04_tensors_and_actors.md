# The Blyx Programming Language Book — Chapter 4: Tensors, Actors & GPU

Official Domain: https://blyx-lang.space

---

## 1. Static Tensor Types

Blyx provides native static dimension checking for matrix operations:

```blyx
#![feature(blyx_experimental)]

fn main() {
    let weights: tensor<f32, 128, 64>;
}
```

## 2. Actor Concurrency Model

```blyx
#![feature(blyx_experimental)]

actor NetworkWorker {
    worker_id: u64,
}
```

## 3. Inline GPU Dispatch Blocks

```blyx
#![feature(blyx_experimental)]

fn main() {
    gpu {
        // Heterogeneous compute kernel
    };
}
```
