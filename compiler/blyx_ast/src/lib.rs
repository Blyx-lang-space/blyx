// Blyx Programming Language — Abstract Syntax Tree (blyx_ast)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use blyx_lexer::Span;

#[derive(Debug, Clone)]
pub struct BlyxFile {
    pub path: String,
    pub items: Vec<Item>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub enum Item {
    Function(FunctionDef),
    Struct(StructDef),
    Enum(EnumDef),
    Trait(TraitDef),
    Impl(ImplBlock),
    Actor(ActorDef),
    Use(UsePath),
    Mod(ModDef),
    Const(ConstDef),
    TypeAlias(TypeAlias),
}

#[derive(Debug, Clone)]
pub struct FunctionDef {
    pub name: String,
    pub generics: Vec<GenericParam>,
    pub params: Vec<Param>,
    pub return_type: Option<BlyxType>,
    pub body: Option<Block>,
    pub is_async: bool,
    pub is_pub: bool,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct StructDef {
    pub name: String,
    pub fields: Vec<Field>,
    pub is_pub: bool,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct EnumDef {
    pub name: String,
    pub variants: Vec<String>,
    pub is_pub: bool,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct TraitDef {
    pub name: String,
    pub methods: Vec<FunctionDef>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct ImplBlock {
    pub target: String,
    pub methods: Vec<FunctionDef>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct ActorDef {
    pub name: String,
    pub fields: Vec<Field>,
    pub methods: Vec<FunctionDef>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct UsePath {
    pub path: Vec<String>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct ModDef {
    pub name: String,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct ConstDef {
    pub name: String,
    pub ty: BlyxType,
    pub value: Expr,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct TypeAlias {
    pub name: String,
    pub target: BlyxType,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct Field {
    pub name: String,
    pub ty: BlyxType,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct Param {
    pub name: String,
    pub ty: BlyxType,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub struct GenericParam {
    pub name: String,
    pub span: Span,
}

#[derive(Debug, Clone, PartialEq)]
pub enum BlyxType {
    Named(String, Vec<BlyxType>),
    Tensor(Box<BlyxType>, Vec<usize>),
    Ref(Box<BlyxType>, bool),
    Ptr(Box<BlyxType>),
    Slice(Box<BlyxType>),
    Array(Box<BlyxType>, usize),
    Tuple(Vec<BlyxType>),
    Fn(Vec<BlyxType>, Box<BlyxType>),
    Unit,
    Infer,
    Never,
    I32,
    I64,
    F32,
    F64,
    Bool,
    Str,
    Custom(String),
    Actor(String),
}

#[derive(Debug, Clone)]
pub struct Block {
    pub stmts: Vec<Stmt>,
    pub span: Span,
}

#[derive(Debug, Clone)]
pub enum Stmt {
    Let {
        name: String,
        ty: Option<BlyxType>,
        init: Option<Expr>,
        is_mut: bool,
        span: Span,
    },
    Expr(Expr),
    Semi(Expr),
}

#[derive(Debug, Clone)]
pub enum Lit {
    Int(u64),
    Float(f64),
    Str(String),
    Char(char),
    Bool(bool),
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BinOp {
    Add, Sub, Mul, Div, Rem,
    Eq, Ne, Lt, Le, Gt, Ge,
    And, Or, BitAnd, BitOr, BitXor,
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum UnOp {
    Neg, Not, Deref,
}

#[derive(Debug, Clone)]
pub enum Expr {
    Literal(Lit),
    Ident(String, Span),
    Binary(Box<Expr>, BinOp, Box<Expr>, Span),
    Unary(UnOp, Box<Expr>, Span),
    Call(Box<Expr>, Vec<Expr>, Span),
    MethodCall(Box<Expr>, String, Vec<Expr>, Span),
    Field(Box<Expr>, String, Span),
    Index(Box<Expr>, Box<Expr>, Span),
    Block(Block),
    If(Box<Expr>, Block, Option<Box<Expr>>, Span),
    While(Box<Expr>, Block, Span),
    For(String, Box<Expr>, Block, Span),
    Return(Option<Box<Expr>>, Span),
    Spawn(Box<Expr>, Span),
    GpuBlock(Block, Span),
    ParallelBlock(Block, Span),
    Await(Box<Expr>, Span),
}

pub trait AstVisitor {
    fn visit_file(&mut self, file: &BlyxFile);
    fn visit_item(&mut self, item: &Item);
    fn visit_function(&mut self, func: &FunctionDef);
    fn visit_actor(&mut self, actor: &ActorDef);
    fn visit_expr(&mut self, expr: &Expr);
    fn visit_type(&mut self, ty: &BlyxType);
    fn visit_stmt(&mut self, stmt: &Stmt);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_ast_creation() {
        let fn_item = Item::Function(FunctionDef {
            name: "main".to_string(),
            generics: vec![],
            params: vec![],
            return_type: Some(BlyxType::I32),
            body: None,
            is_async: false,
            is_pub: true,
            span: Span::dummy(),
        });
        match fn_item {
            Item::Function(f) => assert_eq!(f.name, "main"),
            _ => panic!("Expected function"),
        }
    }
}
