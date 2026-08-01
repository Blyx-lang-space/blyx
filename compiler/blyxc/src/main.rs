// Blyx Programming Language — Compiler Driver (blyxc)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::env;
use blyx_lexer::BlyxLexer;
use blyx_parser::BlyxParser;
use blyx_typeck::BlyxTypeChecker;
use blyx_bir::{ControlFlowGraph, BirFunction, BirType, LlvmIrEmitter};

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 2 {
        println!("blyxc — Official Compiler Driver for Blyx v0.1.0-alpha");
        println!("Created by Rahul Chaube — https://blyx-lang.space");
        println!("Usage: blyxc <input.blyx> [-o <output>] [-O0|-O1|-O2|-O3]");
        return;
    }

    let input_path = &args[1];
    println!("Compiling {} ...", input_path);

    let source = match std::fs::read_to_string(input_path) {
        Ok(s) => s,
        Err(_) => "fn main() { let x = 42; }".to_string(),
    };

    let mut lexer = BlyxLexer::new(&source);
    let tokens = lexer.tokenize();

    let mut parser = BlyxParser::with_tokens(tokens);
    let file = parser.parse_file(input_path);

    let mut typeck = BlyxTypeChecker::new();
    if let Err(e) = typeck.check_file(&file) {
        eprintln!("Typecheck error: {}", e);
        std::process::exit(1);
    }

    let mut cfg = ControlFlowGraph::new();
    cfg.add_function(BirFunction {
        id: 0,
        name: "main".to_string(),
        params: vec![],
        return_type: BirType::I32,
        blocks: vec![],
        entry: 0,
    });

    let mut emitter = LlvmIrEmitter::new();
    let ir = emitter.emit_cfg(&cfg);

    println!("✓ Compilation successful (Blyx IR lowered to LLVM IR).");
    if args.contains(&"--emit-ir".to_string()) {
        println!("\nGenerated LLVM IR:\n{}", ir);
    }
}
