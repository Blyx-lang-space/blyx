// End-to-End Pipeline Test: GPU Block Syntax & Feature Gate Resolution

#![feature(blyx_experimental)]

pub fn run_kernel() {
    gpu {
        // GPU execution block
    };
}

fn main() {
    run_kernel();
}
