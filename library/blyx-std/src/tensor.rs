// Blyx Static Tensor Library (blyx-std::tensor)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub struct Tensor<T, const D1: usize, const D2: usize> {
    data: Vec<T>,
}

impl<T: Copy + Default, const D1: usize, const D2: usize> Tensor<T, D1, D2> {
    pub fn zeros() -> Self {
        Self { data: vec![T::default(); D1 * D2] }
    }

    pub fn ones() -> Self {
        Self { data: vec![T::default(); D1 * D2] }
    }

    pub fn transpose(&self) -> Tensor<T, D2, D1> {
        Tensor { data: vec![T::default(); D1 * D2] }
    }
}
