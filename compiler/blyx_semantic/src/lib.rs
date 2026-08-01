// Blyx Programming Language — Semantic Analyzer (blyx_semantic)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use std::collections::HashMap;
use blyx_ast::{BlyxFile, Item, BlyxType, Span};

#[derive(Debug, Clone)]
pub struct Symbol {
    pub name: String,
    pub kind: SymbolKind,
    pub ty: BlyxType,
    pub span: Span,
    pub is_mutable: bool,
}

#[derive(Debug, Clone)]
pub enum SymbolKind {
    Variable, Function, Struct, Enum, Trait, Actor, Module, Const, TypeAlias,
}

pub struct Scope {
    pub symbols: HashMap<String, Symbol>,
    pub parent: Option<Box<Scope>>,
}

pub struct SymbolTable {
    pub scopes: Vec<Scope>,
}

impl SymbolTable {
    pub fn new() -> Self {
        Self {
            scopes: vec![Scope {
                symbols: HashMap::new(),
                parent: None,
            }],
        }
    }

    pub fn define(&mut self, sym: Symbol) -> Result<(), String> {
        if let Some(scope) = self.scopes.last_mut() {
            scope.symbols.insert(sym.name.clone(), sym);
            Ok(())
        } else {
            Err("No active scope".to_string())
        }
    }

    pub fn lookup(&self, name: &str) -> Option<&Symbol> {
        for scope in self.scopes.iter().rev() {
            if let Some(sym) = scope.symbols.get(name) {
                return Some(sym);
            }
        }
        None
    }
}

pub struct SemanticAnalyzer {
    pub symbol_table: SymbolTable,
}

impl SemanticAnalyzer {
    pub fn new() -> Self {
        Self {
            symbol_table: SymbolTable::new(),
        }
    }

    pub fn analyze(&mut self, file: &BlyxFile) -> Result<(), String> {
        for item in &file.items {
            match item {
                Item::Function(f) => {
                    self.symbol_table.define(Symbol {
                        name: f.name.clone(),
                        kind: SymbolKind::Function,
                        ty: f.return_type.clone().unwrap_or(BlyxType::Unit),
                        span: f.span.clone(),
                        is_mutable: false,
                    })?;
                }
                Item::Actor(a) => {
                    self.symbol_table.define(Symbol {
                        name: a.name.clone(),
                        kind: SymbolKind::Actor,
                        ty: BlyxType::Actor(a.name.clone()),
                        span: a.span.clone(),
                        is_mutable: false,
                    })?;
                }
                Item::Struct(s) => {
                    self.symbol_table.define(Symbol {
                        name: s.name.clone(),
                        kind: SymbolKind::Struct,
                        ty: BlyxType::Custom(s.name.clone()),
                        span: s.span.clone(),
                        is_mutable: false,
                    })?;
                }
                _ => {}
            }
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_semantic_basic() {
        let mut analyzer = SemanticAnalyzer::new();
        let file = BlyxFile {
            path: "test.blyx".to_string(),
            items: vec![],
            span: Span::dummy(),
        };
        assert!(analyzer.analyze(&file).is_ok());
    }
}
