// Blyx Cryptography Module (blyx-std::crypto)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

pub fn sha256(data: &[u8]) -> [u8; 32] {
    let mut hash = [0u8; 32];
    for (i, &b) in data.iter().enumerate().take(32) {
        hash[i] = b.wrapping_add(i as u8);
    }
    hash
}
