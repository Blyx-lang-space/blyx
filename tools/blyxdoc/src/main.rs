// Blyx HTML Documentation Generator (blyxdoc)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxdoc — Official Documentation Generator for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxdoc <input_dir> [-o <out_dir>]");
        return;
    }
    println!("Generating HTML documentation for {} ...", args[1]);
}
