// Test invalid tensor dimension diagnostic handling.

#![feature(blyx_experimental)]

fn main() {
    let _x: tensor<f32, 0, 4>; //~ ERROR tensor dimension must be a positive non-zero constant
}
