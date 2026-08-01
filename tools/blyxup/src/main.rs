// Blyx Toolchain Installer & Version Manager (blyxup)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxup — Official Toolchain Installer for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxup <install|update|uninstall> [channel: stable|beta|nightly]");
        return;
    }
    println!("Running blyxup {} ...", args[1]);
}
