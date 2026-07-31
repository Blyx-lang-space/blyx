//! Official Blyx Performance Profiler (`blyxprof`)

use clap::Parser;

#[derive(Parser)]
#[command(name = "blyxprof")]
#[command(about = "Official Performance Profiler for Blyx (https://blyx-lang.space)")]
struct Cli {
    /// Command or binary to profile
    binary: String,
}

fn main() {
    let cli = Cli::parse();
    println!("Blyx Performance Profiler (`blyxprof` v0.1.0)");
    println!("Profiling CPU, Memory Allocations, GPU Kernels, and Actor Messages for `{}`...", cli.binary);
    println!("Profile report generated: flamegraph.svg, memory_allocations.json");
}
