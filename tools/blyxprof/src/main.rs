// Blyx Performance Profiler (blyxprof)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxprof — Official Profiler for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxprof <binary>");
        return;
    }
    println!("Profiling {} ...", args[1]);
}
