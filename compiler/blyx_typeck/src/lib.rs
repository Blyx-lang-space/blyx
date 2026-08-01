// Blyx Programming Language — Type Checker (blyx_typeck)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use blyx_ast::{BlyxFile, Item, BlyxType};
use blyx_semantic::SemanticAnalyzer;

pub struct BlyxTypeChecker {
    analyzer: SemanticAnalyzer,
}

impl BlyxTypeChecker {
    pub fn new() -> Self {
        Self {
            analyzer: SemanticAnalyzer::new(),
        }
    }

    pub fn check_file(&mut self, file: &BlyxFile) -> Result<(), String> {
        self.analyzer.analyze(file)?;
        for item in &file.items {
            self.check_item(item)?;
        }
        Ok(())
    }

    fn check_item(&self, item: &Item) -> Result<(), String> {
        match item {
            Item::Struct(s) => {
                for f in &s.fields {
                    self.verify_type(&f.ty)?;
                }
                Ok(())
            }
            _ => Ok(()),
        }
    }

    fn verify_type(&self, ty: &BlyxType) -> Result<(), String> {
        match ty {
            BlyxType::Tensor(_, dims) => {
                if dims.contains(&0) {
                    return Err("Tensor dimensions must be greater than 0".to_string());
                }
                Ok(())
            }
            _ => Ok(()),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use blyx_ast::Span;

    #[test]
    fn test_typeck_basic() {
        let mut typeck = BlyxTypeChecker::new();
        let file = BlyxFile {
            path: "test.blyx".to_string(),
            items: vec![],
            span: Span::dummy(),
        };
        assert!(typeck.check_file(&file).is_ok());
    }
}
