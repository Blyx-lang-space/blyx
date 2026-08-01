// Blyx Programming Language — Parser (blyx_parser)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

use blyx_lexer::{BlyxLexer, Token, TokenKind, Span};
use blyx_ast::*;

#[derive(Debug)]
pub struct ParseError {
    pub message: String,
    pub span: Span,
    pub hint: Option<String>,
}

pub type ParseResult<T> = Result<T, ParseError>;

pub struct BlyxParser {
    tokens: Vec<Token>,
    pos: usize,
    errors: Vec<ParseError>,
}

impl BlyxParser {
    pub fn new(input: &str) -> Self {
        let mut lexer = BlyxLexer::new(input);
        let tokens = lexer.tokenize();
        Self {
            tokens,
            pos: 0,
            errors: Vec::new(),
        }
    }

    pub fn with_tokens(tokens: Vec<Token>) -> Self {
        Self {
            tokens,
            pos: 0,
            errors: Vec::new(),
        }
    }

    pub fn parse_file(&mut self, path: &str) -> BlyxFile {
        let mut items = Vec::new();
        let span = self.peek().span.clone();
        while !self.is_at_end() {
            if let Ok(item) = self.parse_item() {
                items.push(item);
            } else {
                self.advance();
            }
        }
        BlyxFile {
            path: path.to_string(),
            items,
            span,
        }
    }

    fn parse_item(&mut self) -> ParseResult<Item> {
        let tok = self.peek();
        match &tok.kind {
            TokenKind::Fn => self.parse_function(false).map(Item::Function),
            TokenKind::Pub => {
                self.advance();
                if self.at(&TokenKind::Fn) {
                    self.parse_function(true).map(Item::Function)
                } else if self.at(&TokenKind::Struct) {
                    self.parse_struct(true).map(Item::Struct)
                } else if self.at(&TokenKind::Actor) {
                    self.parse_actor(true).map(Item::Actor)
                } else {
                    Err(self.error("Expected fn, struct, or actor after pub"))
                }
            }
            TokenKind::Struct => self.parse_struct(false).map(Item::Struct),
            TokenKind::Actor => self.parse_actor(false).map(Item::Actor),
            _ => Err(self.error("Expected top-level item")),
        }
    }

    fn parse_function(&mut self, is_pub: bool) -> ParseResult<FunctionDef> {
        let span = self.peek().span.clone();
        self.expect(&TokenKind::Fn)?;
        let name = match &self.advance().kind {
            TokenKind::Ident(s) => s.clone(),
            _ => return Err(self.error("Expected function name identifier")),
        };

        self.expect(&TokenKind::LParen)?;
        self.expect(&TokenKind::RParen)?;

        let mut body = None;
        if self.at(&TokenKind::LBrace) {
            body = Some(self.parse_block()?);
        }

        Ok(FunctionDef {
            name,
            generics: Vec::new(),
            params: Vec::new(),
            return_type: None,
            body,
            is_async: false,
            is_pub,
            span,
        })
    }

    fn parse_struct(&mut self, is_pub: bool) -> ParseResult<StructDef> {
        let span = self.peek().span.clone();
        self.expect(&TokenKind::Struct)?;
        let name = match &self.advance().kind {
            TokenKind::Ident(s) => s.clone(),
            _ => return Err(self.error("Expected struct name identifier")),
        };
        self.expect(&TokenKind::LBrace)?;
        self.expect(&TokenKind::RBrace)?;

        Ok(StructDef {
            name,
            fields: Vec::new(),
            is_pub,
            span,
        })
    }

    fn parse_actor(&mut self, is_pub: bool) -> ParseResult<ActorDef> {
        let span = self.peek().span.clone();
        self.expect(&TokenKind::Actor)?;
        let name = match &self.advance().kind {
            TokenKind::Ident(s) => s.clone(),
            _ => return Err(self.error("Expected actor name identifier")),
        };
        self.expect(&TokenKind::LBrace)?;
        self.expect(&TokenKind::RBrace)?;

        Ok(ActorDef {
            name,
            fields: Vec::new(),
            methods: Vec::new(),
            span,
        })
    }

    fn parse_block(&mut self) -> ParseResult<Block> {
        let span = self.peek().span.clone();
        self.expect(&TokenKind::LBrace)?;
        let mut stmts = Vec::new();
        while !self.at(&TokenKind::RBrace) && !self.is_at_end() {
            if let Ok(stmt) = self.parse_stmt() {
                stmts.push(stmt);
            } else {
                self.advance();
            }
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(Block { stmts, span })
    }

    fn parse_stmt(&mut self) -> ParseResult<Stmt> {
        let span = self.peek().span.clone();
        if self.at(&TokenKind::Let) {
            self.advance();
            let name = match &self.advance().kind {
                TokenKind::Ident(s) => s.clone(),
                _ => return Err(self.error("Expected identifier after let")),
            };
            self.expect(&TokenKind::Eq)?;
            let expr = self.parse_expr()?;
            self.expect(&TokenKind::Semi)?;
            Ok(Stmt::Let {
                name,
                ty: None,
                init: Some(expr),
                is_mut: false,
                span,
            })
        } else {
            let expr = self.parse_expr()?;
            if self.at(&TokenKind::Semi) {
                self.advance();
                Ok(Stmt::Semi(expr))
            } else {
                Ok(Stmt::Expr(expr))
            }
        }
    }

    fn parse_expr(&mut self) -> ParseResult<Expr> {
        let span = self.peek().span.clone();
        let tok = self.advance();
        match &tok.kind {
            TokenKind::Ident(s) => Ok(Expr::Ident(s.clone(), span)),
            TokenKind::IntLit(val) => Ok(Expr::Literal(Lit::Int(*val))),
            TokenKind::FloatLit(val) => Ok(Expr::Literal(Lit::Float(*val))),
            TokenKind::StringLit(s) => Ok(Expr::Literal(Lit::Str(s.clone()))),
            TokenKind::Gpu => {
                let block = self.parse_block()?;
                Ok(Expr::GpuBlock(block, span))
            }
            TokenKind::Parallel => {
                let block = self.parse_block()?;
                Ok(Expr::ParallelBlock(block, span))
            }
            _ => Err(self.error("Unexpected expression token")),
        }
    }

    fn peek(&self) -> &Token {
        &self.tokens[self.pos]
    }

    fn advance(&mut self) -> Token {
        let tok = self.tokens[self.pos].clone();
        if self.pos < self.tokens.len() - 1 {
            self.pos += 1;
        }
        tok
    }

    fn expect(&mut self, kind: &TokenKind) -> ParseResult<Token> {
        let tok = self.peek();
        if &tok.kind == kind {
            Ok(self.advance())
        } else {
            Err(self.error(&format!("Expected token {:?}, found {:?}", kind, tok.kind)))
        }
    }

    fn at(&self, kind: &TokenKind) -> bool {
        &self.peek().kind == kind
    }

    fn is_at_end(&self) -> bool {
        self.peek().kind == TokenKind::Eof
    }

    fn error(&self, msg: &str) -> ParseError {
        ParseError {
            message: msg.to_string(),
            span: self.peek().span.clone(),
            hint: None,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_file_basic() {
        let src = "fn main() { let x = 42; }";
        let mut parser = BlyxParser::new(src);
        let file = parser.parse_file("test.blyx");
        assert_eq!(file.items.len(), 1);
    }
}
