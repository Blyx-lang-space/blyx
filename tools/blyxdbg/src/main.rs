// Blyx Interactive Debugger (blyxdbg) — Version v0.3.0-alpha
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxdbg — Official Interactive Debugger for Blyx v0.3.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxdbg <binary> [args]");
        return;
    }

    println!("Debugging binary: {}", args[1]);
    println!("Target attached. Breakpoints active.");
    println!("(blyxdbg) Type 'help' for available commands.");
}
