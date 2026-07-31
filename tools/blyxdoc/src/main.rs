//! Official Blyx Documentation Generator (`blyxdoc`)

use clap::Parser;
use std::fs;
use std::path::Path;

#[derive(Parser)]
#[command(name = "blyxdoc")]
#[command(about = "Official Documentation Generator for Blyx (https://blyx-lang.space)")]
struct Cli {
    /// Source file to generate documentation for
    file: String,
    /// Output directory for HTML documentation
    #[arg(short, long, default_value = "doc")]
    output: String,
}

fn main() {
    let cli = Cli::parse();
    let path = Path::new(&cli.file);
    if let Ok(content) = fs::read_to_string(path) {
        println!("Generating Blyx HTML documentation for {}...", cli.file);
        let out_dir = Path::new(&cli.output);
        let _ = fs::create_dir_all(out_dir);

        let doc_html = format!(
            "<!DOCTYPE html><html><head><title>Docs for {}</title></head><body><h1>Blyx Documentation</h1><pre>{}</pre></body></html>",
            cli.file, content
        );
        let _ = fs::write(out_dir.join("index.html"), doc_html);
        println!("Documentation generated in {}/index.html", cli.output);
    } else {
        eprintln!("Failed to read source file: {}", cli.file);
    }
}
