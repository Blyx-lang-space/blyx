//! Native Independent Parser for Blyx (`blyx_parser`)

use blyx_lexer::{BlyxLexer, Token, TokenKind};

#[derive(Debug, Clone, PartialEq)]
pub enum BlyxAstItem {
    FunctionDecl {
        name: String,
        params: Vec<(String, String)>,
        return_type: Option<String>,
    },
    ActorDecl {
        name: String,
        fields: Vec<(String, String)>,
    },
    GpuBlock,
    ParallelBlock,
}

#[derive(Debug, Clone)]
pub struct BlyxAstProgram {
    pub items: Vec<BlyxAstItem>,
}

pub struct BlyxParser {
    tokens: Vec<Token>,
    cursor: usize,
}

impl BlyxParser {
    pub fn new(input: &str) -> Self {
        let mut lexer = BlyxLexer::new(input);
        let tokens = lexer.tokenize();
        Self { tokens, cursor: 0 }
    }

    pub fn parse_program(&mut self) -> Result<BlyxAstProgram, String> {
        let mut items = Vec::new();
        while !self.is_at_end() {
            if let Some(item) = self.parse_item()? {
                items.push(item);
            } else {
                self.advance();
            }
        }
        Ok(BlyxAstProgram { items })
    }

    fn parse_item(&mut self) -> Result<Option<BlyxAstItem>, String> {
        let tok = self.peek();
        match &tok.kind {
            TokenKind::Fn => self.parse_fn_decl().map(Some),
            TokenKind::Actor => self.parse_actor_decl().map(Some),
            TokenKind::Gpu => {
                self.advance();
                Ok(Some(BlyxAstItem::GpuBlock))
            }
            TokenKind::Parallel => {
                self.advance();
                Ok(Some(BlyxAstItem::ParallelBlock))
            }
            _ => Ok(None),
        }
    }

    fn parse_fn_decl(&mut self) -> Result<BlyxAstItem, String> {
        self.expect(TokenKind::Fn)?;
        let name_tok = self.advance();
        let name = match name_tok.kind {
            TokenKind::Identifier(s) => s,
            _ => return Err("Expected function name identifier".to_string()),
        };

        self.expect(TokenKind::OpenParen)?;
        self.expect(TokenKind::CloseParen)?;

        Ok(BlyxAstItem::FunctionDecl {
            name,
            params: Vec::new(),
            return_type: None,
        })
    }

    fn parse_actor_decl(&mut self) -> Result<BlyxAstItem, String> {
        self.expect(TokenKind::Actor)?;
        let name_tok = self.advance();
        let name = match name_tok.kind {
            TokenKind::Identifier(s) => s,
            _ => return Err("Expected actor name identifier".to_string()),
        };

        Ok(BlyxAstItem::ActorDecl {
            name,
            fields: Vec::new(),
        })
    }

    fn expect(&mut self, kind: TokenKind) -> Result<(), String> {
        let tok = self.peek();
        if tok.kind == kind {
            self.advance();
            Ok(())
        } else {
            Err(format!("Expected token {:?}, found {:?}", kind, tok.kind))
        }
    }

    fn peek(&self) -> &Token {
        &self.tokens[self.cursor]
    }

    fn advance(&mut self) -> Token {
        let tok = self.tokens[self.cursor].clone();
        if self.cursor < self.tokens.len() - 1 {
            self.cursor += 1;
        }
        tok
    }

    fn is_at_end(&self) -> bool {
        self.peek().kind == TokenKind::Eof
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_fn() {
        let src = "fn main() {}";
        let mut parser = BlyxParser::new(src);
        let ast = parser.parse_program().unwrap();
        assert_eq!(ast.items.len(), 1);
        match &ast.items[0] {
            BlyxAstItem::FunctionDecl { name, .. } => assert_eq!(name, "main"),
            _ => panic!("Expected FunctionDecl"),
        }
    }

    #[test]
    fn test_parse_actor() {
        let src = "actor Worker {}";
        let mut parser = BlyxParser::new(src);
        let ast = parser.parse_program().unwrap();
        assert_eq!(ast.items.len(), 1);
        match &ast.items[0] {
            BlyxAstItem::ActorDecl { name, .. } => assert_eq!(name, "Worker"),
            _ => panic!("Expected ActorDecl"),
        }
    }
}
