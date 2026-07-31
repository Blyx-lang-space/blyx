//! Official Blyx Standard Library (`blyx-std`)
//! Official Domain: https://blyx-lang.space

pub use std::collections;
pub use std::fs;
pub use std::io;
pub use std::net;
pub use std::sync;
pub use std::thread;

pub mod tensor {
    pub struct Tensor<T, const D1: usize, const D2: usize> {
        pub data: Vec<T>,
    }

    impl<T: Default + Clone, const D1: usize, const D2: usize> Tensor<T, D1, D2> {
        pub fn zeros() -> Self {
            Tensor {
                data: vec![T::default(); D1 * D2],
            }
        }
    }
}

pub mod gpu {
    pub fn dispatch_kernel<F>(threads: usize, _kernel: F)
    where
        F: FnOnce(usize),
    {
        _kernel(threads);
    }
}

pub mod json {
    pub fn parse(input: &str) -> Result<String, String> {
        Ok(input.to_string())
    }
}
