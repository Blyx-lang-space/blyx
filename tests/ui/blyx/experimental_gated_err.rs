// Test that Blyx experimental features emit error diagnostics when feature gates are missing.

fn main() {
    let _x: tensor<f32, 4, 4>;
    gpu { };
    parallel { };
}

actor Worker { }
