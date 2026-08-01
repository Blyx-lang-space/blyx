// Blyx Language Server Protocol (blyx-analyzer) — Version v0.4.0-alpha / Beta Sprint
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::io::{self, BufRead};

fn main() {
    eprintln!("blyx-analyzer — Official Language Server for Blyx");
    eprintln!("Created by Rahul Chaube — https://blyx-lang.space");
    eprintln!("Listening for JSON-RPC messages on stdio...");

    let stdin = io::stdin();
    for line in stdin.lock().lines() {
        if let Ok(msg) = line {
            if msg.contains("initialize") {
                println!("{{\"jsonrpc\":\"2.0\",\"id\":1,\"result\":{{\"capabilities\":{{\"textDocumentSync\":1,\"hoverProvider\":true,\"completionProvider\":{{}},\"definitionProvider\":true,\"documentFormattingProvider\":true}}}}}}");
            } else if msg.contains("shutdown") {
                println!("{{\"jsonrpc\":\"2.0\",\"id\":2,\"result\":null}}");
                break;
            }
        }
    }
}
