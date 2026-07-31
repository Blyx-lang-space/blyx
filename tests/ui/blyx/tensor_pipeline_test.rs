// End-to-End Pipeline Test: Tensor Type Syntax & Feature Gate Resolution

#![feature(blyx_experimental)]

pub fn process_matrix() {
    let _weights: tensor<f32, 128, 64>;
}

fn main() {
    process_matrix();
}
