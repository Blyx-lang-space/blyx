//! Native Independent Lexer for Blyx (`blyx_lexer`)

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum TokenKind {
    Fn,
    Let,
    Actor,
    Gpu,
    Parallel,
    Tensor,
    Identifier(String),
    StringLiteral(String),
    IntegerLiteral(i64),
    FloatLiteral(String),
    OpenParen,
    CloseParen,
    OpenBrace,
    CloseBrace,
    Colon,
    SemiColon,
    Comma,
    Arrow,
    Equals,
    Plus,
    Minus,
    Star,
    Slash,
    Eof,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Token {
    pub kind: TokenKind,
    pub line: usize,
    pub column: usize,
}

pub struct BlyxLexer<'a> {
    input: &'a str,
    cursor: usize,
    line: usize,
    column: usize,
}

impl<'a> BlyxLexer<'a> {
    pub fn new(input: &'a str) -> Self {
        Self {
            input,
            cursor: 0,
            line: 1,
            column: 1,
        }
    }

    pub fn tokenize(&mut self) -> Vec<Token> {
        let mut tokens = Vec::new();
        while let Some(tok) = self.next_token() {
            let is_eof = tok.kind == TokenKind::Eof;
            tokens.push(tok);
            if is_eof {
                break;
            }
        }
        tokens
    }

    fn next_token(&mut self) -> Option<Token> {
        self.skip_whitespace();

        if self.cursor >= self.input.len() {
            return Some(Token {
                kind: TokenKind::Eof,
                line: self.line,
                column: self.column,
            });
        }

        let start_col = self.column;
        let ch = self.peek_char()?;

        match ch {
            '(' => { self.advance(); Some(Token { kind: TokenKind::OpenParen, line: self.line, column: start_col }) }
            ')' => { self.advance(); Some(Token { kind: TokenKind::CloseParen, line: self.line, column: start_col }) }
            '{' => { self.advance(); Some(Token { kind: TokenKind::OpenBrace, line: self.line, column: start_col }) }
            '}' => { self.advance(); Some(Token { kind: TokenKind::CloseBrace, line: self.line, column: start_col }) }
            ':' => { self.advance(); Some(Token { kind: TokenKind::Colon, line: self.line, column: start_col }) }
            ';' => { self.advance(); Some(Token { kind: TokenKind::SemiColon, line: self.line, column: start_col }) }
            ',' => { self.advance(); Some(Token { kind: TokenKind::Comma, line: self.line, column: start_col }) }
            '=' => { self.advance(); Some(Token { kind: TokenKind::Equals, line: self.line, column: start_col }) }
            '+' => { self.advance(); Some(Token { kind: TokenKind::Plus, line: self.line, column: start_col }) }
            '-' => {
                self.advance();
                if self.peek_char() == Some('>') {
                    self.advance();
                    Some(Token { kind: TokenKind::Arrow, line: self.line, column: start_col })
                } else {
                    Some(Token { kind: TokenKind::Minus, line: self.line, column: start_col })
                }
            }
            '*' => { self.advance(); Some(Token { kind: TokenKind::Star, line: self.line, column: start_col }) }
            '/' => { self.advance(); Some(Token { kind: TokenKind::Slash, line: self.line, column: start_col }) }
            '"' => {
                self.advance();
                let mut s = String::new();
                while let Some(c) = self.peek_char() {
                    if c == '"' {
                        self.advance();
                        break;
                    }
                    s.push(c);
                    self.advance();
                }
                Some(Token { kind: TokenKind::StringLiteral(s), line: self.line, column: start_col })
            }
            c if c.is_alphabetic() || c == '_' => {
                let mut ident = String::new();
                while let Some(c) = self.peek_char() {
                    if c.is_alphanumeric() || c == '_' {
                        ident.push(c);
                        self.advance();
                    } else {
                        break;
                    }
                }
                let kind = match ident.as_str() {
                    "fn" => TokenKind::Fn,
                    "let" => TokenKind::Let,
                    "actor" => TokenKind::Actor,
                    "gpu" => TokenKind::Gpu,
                    "parallel" => TokenKind::Parallel,
                    "tensor" => TokenKind::Tensor,
                    _ => TokenKind::Identifier(ident),
                };
                Some(Token { kind, line: self.line, column: start_col })
            }
            c if c.is_ascii_digit() => {
                let mut num = String::new();
                while let Some(c) = self.peek_char() {
                    if c.is_ascii_digit() {
                        num.push(c);
                        self.advance();
                    } else {
                        break;
                    }
                }
                let val = num.parse::<i64>().unwrap_or(0);
                Some(Token { kind: TokenKind::IntegerLiteral(val), line: self.line, column: start_col })
            }
            _ => {
                self.advance();
                self.next_token()
            }
        }
    }

    fn skip_whitespace(&mut self) {
        while let Some(c) = self.peek_char() {
            if c == ' ' || c == '\t' || c == '\r' {
                self.advance();
            } else if c == '\n' {
                self.line += 1;
                self.column = 1;
                self.cursor += 1;
            } else {
                break;
            }
        }
    }

    fn peek_char(&self) -> Option<char> {
        self.input[self.cursor..].chars().next()
    }

    fn advance(&mut self) {
        if let Some(c) = self.peek_char() {
            self.cursor += c.len_utf8();
            self.column += 1;
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_lexer_basic() {
        let src = "fn main() { let x = 42; }";
        let mut lexer = BlyxLexer::new(src);
        let tokens = lexer.tokenize();
        assert_eq!(tokens[0].kind, TokenKind::Fn);
        assert_eq!(tokens[1].kind, TokenKind::Identifier("main".to_string()));
    }

    #[test]
    fn test_lexer_blyx_keywords() {
        let src = "actor Worker gpu parallel tensor";
        let mut lexer = BlyxLexer::new(src);
        let tokens = lexer.tokenize();
        assert_eq!(tokens[0].kind, TokenKind::Actor);
        assert_eq!(tokens[1].kind, TokenKind::Identifier("Worker".to_string()));
        assert_eq!(tokens[2].kind, TokenKind::Gpu);
        assert_eq!(tokens[3].kind, TokenKind::Parallel);
        assert_eq!(tokens[4].kind, TokenKind::Tensor);
    }
}
