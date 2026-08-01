// Blyx Package Manager (blyxpkg)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxpkg — Official Package Manager for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxpkg <subcommand> [args]");
        println!("Subcommands: new, init, build, run, test, fmt, lint, add, remove, update, publish, install");
        return;
    }

    match args[1].as_str() {
        "new" => println!("Creating new Blyx package..."),
        "init" => println!("Initializing Blyx package in current directory..."),
        "build" => println!("Building Blyx package..."),
        "run" => println!("Running Blyx package..."),
        "test" => println!("Testing Blyx package..."),
        "fmt" => println!("Formatting Blyx source code..."),
        "lint" => println!("Linting Blyx source code..."),
        cmd => println!("Running blyxpkg {} ...", cmd),
    }
}
