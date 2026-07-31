//! Official Blyx Interactive Debugger (`blyxdbg`)

use clap::Parser;

#[derive(Parser)]
#[command(name = "blyxdbg")]
#[command(about = "Official Debugger for Blyx (https://blyx-lang.space)")]
struct Cli {
    /// Executable target to debug
    executable: Option<String>,
}

fn main() {
    let cli = Cli::parse();
    let target = cli.executable.as_deref().unwrap_or("app");
    println!("Blyx Interactive Debugger (`blyxdbg` v0.1.0)");
    println!("Official Domain: https://blyx-lang.space");
    println!("Attaching process target `{}`...", target);
    println!("Commands: (b)reakpoint, (s)tep, (c)ontinue, (v)ars, (a)ctors, (q)uit");
}
