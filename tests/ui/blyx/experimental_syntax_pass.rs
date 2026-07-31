// Test that Blyx experimental features parse cleanly when `#![feature(blyx_experimental)]` is enabled.

#![feature(blyx_experimental)]

fn main() {
    let _x: tensor<f32, 4, 4>;
    gpu { };
    parallel { };
}

actor Worker { }
