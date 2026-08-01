//! Native Abstract Syntax Tree (AST) for Blyx (`blyx_ast`)

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Span {
    pub start: usize,
    pub end: usize,
    pub line: usize,
    pub column: usize,
}

impl Span {
    pub fn dummy() -> Self {
        Self { start: 0, end: 0, line: 1, column: 1 }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub enum BlyxType {
    I32,
    I64,
    F32,
    F64,
    Bool,
    Str,
    Custom(String),
    Tensor { elem_ty: Box<BlyxType>, dims: Vec<usize> },
    Actor(String),
}

#[derive(Debug, Clone, PartialEq)]
pub enum BlyxExpr {
    Identifier(String, Span),
    IntegerLiteral(i64, Span),
    StringLiteral(String, Span),
    Call { callee: String, args: Vec<BlyxExpr>, span: Span },
    GpuBlock(Vec<BlyxExpr>, Span),
    ParallelBlock(Vec<BlyxExpr>, Span),
}

#[derive(Debug, Clone, PartialEq)]
pub enum BlyxItem {
    Function {
        name: String,
        params: Vec<(String, BlyxType)>,
        ret_ty: BlyxType,
        body: Vec<BlyxExpr>,
        span: Span,
    },
    Actor {
        name: String,
        fields: Vec<(String, BlyxType)>,
        span: Span,
    },
    Struct {
        name: String,
        fields: Vec<(String, BlyxType)>,
        span: Span,
    },
}

#[derive(Debug, Clone)]
pub struct BlyxAstModule {
    pub name: String,
    pub items: Vec<BlyxItem>,
}

pub trait AstVisitor {
    fn visit_item(&mut self, item: &BlyxItem);
    fn visit_expr(&mut self, expr: &BlyxExpr);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_ast_node_creation() {
        let fn_item = BlyxItem::Function {
            name: "main".to_string(),
            params: vec![],
            ret_ty: BlyxType::I32,
            body: vec![],
            span: Span::dummy(),
        };
        match fn_item {
            BlyxItem::Function { name, .. } => assert_eq!(name, "main"),
            _ => panic!("Expected Function node"),
        }
    }
}
