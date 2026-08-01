//! Native Type Checker for Blyx (`blyx_typeck`)

use blyx_ast::{BlyxAstModule, BlyxItem, BlyxType};
use blyx_semantic::SemanticAnalyzer;

pub struct BlyxTypeChecker {
    analyzer: SemanticAnalyzer,
}

impl BlyxTypeChecker {
    pub fn new() -> Self {
        Self { analyzer: SemanticAnalyzer::new() }
    }

    pub fn check_module(&mut self, module: &BlyxAstModule) -> Result<(), String> {
        self.analyzer.analyze_module(module)?;
        for item in &module.items {
            self.check_item(item)?;
        }
        Ok(())
    }

    fn check_item(&self, item: &BlyxItem) -> Result<(), String> {
        match item {
            BlyxItem::Function { name: _, ret_ty: _, body: _, span: _ } => Ok(()),
            BlyxItem::Actor { name: _, fields: _, span: _ } => Ok(()),
            BlyxItem::Struct { fields, .. } => {
                for (_fname, fty) in fields {
                    self.verify_type(fty)?;
                }
                Ok(())
            }
        }
    }

    fn verify_type(&self, ty: &BlyxType) -> Result<(), String> {
        match ty {
            BlyxType::Tensor { dims, .. } => {
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
    fn test_typeck_valid() {
        let mut typeck = BlyxTypeChecker::new();
        let module = BlyxAstModule {
            name: "main".to_string(),
            items: vec![
                BlyxItem::Struct {
                    name: "Weights".to_string(),
                    fields: vec![(
                        "w".to_string(),
                        BlyxType::Tensor { elem_ty: Box::new(BlyxType::F32), dims: vec![128, 64] },
                    )],
                    span: Span::dummy(),
                },
            ],
        };
        assert!(typeck.check_module(&module).is_ok());
    }
}
