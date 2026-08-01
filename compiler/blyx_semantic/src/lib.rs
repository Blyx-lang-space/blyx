//! Native Semantic Analysis for Blyx (`blyx_semantic`)

use std::collections::HashMap;
use blyx_ast::{BlyxAstModule, BlyxItem, BlyxType};

#[derive(Debug, Clone)]
pub struct SymbolInfo {
    pub name: String,
    pub ty: BlyxType,
    pub is_actor: bool,
}

pub struct SymbolTable {
    symbols: HashMap<String, SymbolInfo>,
}

impl SymbolTable {
    pub fn new() -> Self {
        Self { symbols: HashMap::new() }
    }

    pub fn insert(&mut self, name: String, info: SymbolInfo) -> Option<SymbolInfo> {
        self.symbols.insert(name, info)
    }

    pub fn lookup(&self, name: &str) -> Option<&SymbolInfo> {
        self.symbols.get(name)
    }
}

pub struct SemanticAnalyzer {
    pub sym_table: SymbolTable,
}

impl SemanticAnalyzer {
    pub fn new() -> Self {
        Self { sym_table: SymbolTable::new() }
    }

    pub fn analyze_module(&mut self, module: &BlyxAstModule) -> Result<(), String> {
        for item in &module.items {
            match item {
                BlyxItem::Function { name, ret_ty, .. } => {
                    self.sym_table.insert(name.clone(), SymbolInfo {
                        name: name.clone(),
                        ty: ret_ty.clone(),
                        is_actor: false,
                    });
                }
                BlyxItem::Actor { name, .. } => {
                    self.sym_table.insert(name.clone(), SymbolInfo {
                        name: name.clone(),
                        ty: BlyxType::Actor(name.clone()),
                        is_actor: true,
                    });
                }
                BlyxItem::Struct { name, .. } => {
                    self.sym_table.insert(name.clone(), SymbolInfo {
                        name: name.clone(),
                        ty: BlyxType::Custom(name.clone()),
                        is_actor: false,
                    });
                }
            }
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use blyx_ast::Span;

    #[test]
    fn test_semantic_analysis() {
        let mut analyzer = SemanticAnalyzer::new();
        let module = BlyxAstModule {
            name: "test".to_string(),
            items: vec![
                BlyxItem::Function {
                    name: "main".to_string(),
                    params: vec![],
                    ret_ty: BlyxType::I32,
                    body: vec![],
                    span: Span::dummy(),
                },
                BlyxItem::Actor {
                    name: "Worker".to_string(),
                    fields: vec![],
                    span: Span::dummy(),
                },
            ],
        };
        assert!(analyzer.analyze_module(&module).is_ok());
        assert!(analyzer.sym_table.lookup("main").is_some());
        assert!(analyzer.sym_table.lookup("Worker").unwrap().is_actor);
    }
}
