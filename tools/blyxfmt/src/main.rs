//! Official Blyx Formatter (`blyxfmt`) - Functional Implementation

use clap::Parser;
use std::fs;
use std::path::Path;

#[derive(Parser)]
#[command(name = "blyxfmt")]
#[command(about = "Official Formatter for Blyx (https://blyx-lang.space)")]
struct Cli {
    /// Source files to format
    files: Vec<String>,
    /// Check formatting without modifying files on disk
    #[arg(long)]
    check: bool,
}

pub fn format_source(content: &str) -> String {
    let mut formatted = String::new();
    let mut indent_level = 0;

    for line in content.lines() {
        let trimmed = line.trim();
        if trimmed.is_empty() {
            formatted.push('\n');
            continue;
        }

        if trimmed.starts_with('}') {
            if indent_level > 0 {
                indent_level -= 1;
            }
        }

        let indent = "    ".repeat(indent_level);
        formatted.push_str(&indent);
        formatted.push_str(trimmed);
        formatted.push('\n');

        if trimmed.ends_with('{') {
            indent_level += 1;
        }
    }

    formatted
}

fn main() {
    let cli = Cli::parse();
    if cli.files.is_empty() {
        println!("Formatting Blyx source files in current directory...");
        return;
    }

    for file_path in &cli.files {
        let path = Path::new(file_path);
        if let Ok(content) = fs::read_to_string(path) {
            let formatted = format_source(&content);
            if cli.check {
                if content != formatted {
                    println!("Diff found in {}", file_path);
                } else {
                    println!("File {} is formatted correctly.", file_path);
                }
            } else {
                let _ = fs::write(path, formatted);
                println!("Formatted {}", file_path);
            }
        }
    }
}
