//! Official Blyx Toolchain Installer (`blyxup`)

use clap::{Parser, Subcommand};

#[derive(Parser)]
#[command(name = "blyxup")]
#[command(about = "Official Toolchain Version Installer for Blyx (https://blyx-lang.space)")]
struct Cli {
    #[command(subcommand)]
    command: Commands,
}

#[derive(Subcommand)]
enum Commands {
    /// Install a toolchain channel (stable, beta, nightly)
    Install { channel: String },
    /// Update installed toolchains
    Update,
    /// Set default active toolchain
    Default { channel: String },
    /// List installed toolchains
    List,
}

fn main() {
    let cli = Cli::parse();
    match &cli.command {
        Commands::Install { channel } => println!("Downloading and installing Blyx toolchain `{}` from https://blyx-lang.space...", channel),
        Commands::Update => println!("Updating installed Blyx toolchains..."),
        Commands::Default { channel } => println!("Set active toolchain to `{}`.", channel),
        Commands::List => {
            println!("Installed Blyx Toolchains:");
            println!("  stable-x86_64-pc-windows-msvc (active)");
            println!("  nightly-x86_64-pc-windows-msvc");
        }
    }
}
