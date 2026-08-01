// Blyx Code Formatter (blyxfmt)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxfmt — Official Code Formatter for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxfmt <file.blyx> [--check]");
        return;
    }
    println!("Formatting {} ...", args[1]);
}
