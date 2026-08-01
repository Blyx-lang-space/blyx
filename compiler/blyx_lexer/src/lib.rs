// Blyx Programming Language — Lexer (blyx_lexer)
// Created by Rahul Chaube — https://blyx-lang.space
// Open Source — MIT + Apache 2.0
// Repository: https://github.com/Blyx-lang-space/blyx

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Span {
    pub file: String,
    pub line: u32,
    pub col: u32,
    pub offset: usize,
    pub len: usize,
}

impl Span {
    pub fn dummy() -> Self {
        Self {
            file: "main.blyx".to_string(),
            line: 1,
            col: 1,
            offset: 0,
            len: 0,
        }
    }
}

#[derive(Debug, Clone, PartialEq)]
pub enum TokenKind {
    // Keywords
    Fn, Let, Const, Return, If, Else, While, For, In,
    Struct, Impl, Trait, Pub, Use, Mod,
    Actor, Gpu, Parallel, Tensor, Spawn, Await, Async,
    True, False, Null, SelfKw, Super, Type, Where, Match, Enum,

    // Literals
    IntLit(u64),
    FloatLit(f64),
    StringLit(String),
    CharLit(char),

    // Identifiers
    Ident(String),

    // Operators and Punctuation
    Plus, Minus, Star, Slash, Percent,
    EqEq, BangEq, Lt, Gt, LtEq, GtEq,
    AmpAmp, PipePipe, Bang,
    Amp, Pipe, Caret, Tilde, LtLt, GtGt,
    Eq, PlusEq, MinusEq, StarEq, SlashEq,
    Arrow, FatArrow, ColonColon,
    LBrace, RBrace, LParen, RParen, LBrack, RBrack,
    Comma, Semi, Colon, Dot, DotDot, DotDotDot,

    Eof,
    Unknown(char),
}

#[derive(Debug, Clone)]
pub struct Token {
    pub kind: TokenKind,
    pub span: Span,
    pub raw: String,
}

pub struct BlyxLexer {
    source: Vec<char>,
    pos: usize,
    line: u32,
    col: u32,
    file: String,
}

impl BlyxLexer {
    pub fn new(input: &str) -> Self {
        Self {
            source: input.chars().collect(),
            pos: 0,
            line: 1,
            col: 1,
            file: "main.blyx".to_string(),
        }
    }

    pub fn with_file(input: &str, file: impl Into<String>) -> Self {
        Self {
            source: input.chars().collect(),
            pos: 0,
            line: 1,
            col: 1,
            file: file.into(),
        }
    }

    pub fn tokenize(&mut self) -> Vec<Token> {
        let mut tokens = Vec::new();
        loop {
            let tok = self.next_token();
            let is_eof = tok.kind == TokenKind::Eof;
            tokens.push(tok);
            if is_eof {
                break;
            }
        }
        tokens
    }

    pub fn next_token(&mut self) -> Token {
        self.skip_whitespace_and_comments();

        let start_pos = self.pos;
        let start_line = self.line;
        let start_col = self.col;

        if self.pos >= self.source.len() {
            return Token {
                kind: TokenKind::Eof,
                span: Span {
                    file: self.file.clone(),
                    line: start_line,
                    col: start_col,
                    offset: start_pos,
                    len: 0,
                },
                raw: String::new(),
            };
        }

        let ch = self.source[self.pos];

        if ch.is_alphabetic() || ch == '_' {
            return self.read_ident_or_keyword(start_pos, start_line, start_col);
        }

        if ch.is_ascii_digit() {
            return self.read_number(start_pos, start_line, start_col);
        }

        if ch == '"' {
            return self.read_string(start_pos, start_line, start_col);
        }

        self.pos += 1;
        self.col += 1;

        let kind = match ch {
            '(' => TokenKind::LParen,
            ')' => TokenKind::RParen,
            '{' => TokenKind::LBrace,
            '}' => TokenKind::RBrace,
            '[' => TokenKind::LBrack,
            ']' => TokenKind::RBrack,
            ',' => TokenKind::Comma,
            ';' => TokenKind::Semi,
            ':' => {
                if self.peek_char() == Some(':') {
                    self.advance_raw();
                    TokenKind::ColonColon
                } else {
                    TokenKind::Colon
                }
            }
            '.' => {
                if self.peek_char() == Some('.') {
                    self.advance_raw();
                    if self.peek_char() == Some('.') {
                        self.advance_raw();
                        TokenKind::DotDotDot
                    } else {
                        TokenKind::DotDot
                    }
                } else {
                    TokenKind::Dot
                }
            }
            '=' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::EqEq
                } else if self.peek_char() == Some('>') {
                    self.advance_raw();
                    TokenKind::FatArrow
                } else {
                    TokenKind::Eq
                }
            }
            '+' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::PlusEq
                } else {
                    TokenKind::Plus
                }
            }
            '-' => {
                if self.peek_char() == Some('>') {
                    self.advance_raw();
                    TokenKind::Arrow
                } else if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::MinusEq
                } else {
                    TokenKind::Minus
                }
            }
            '*' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::StarEq
                } else {
                    TokenKind::Star
                }
            }
            '/' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::SlashEq
                } else {
                    TokenKind::Slash
                }
            }
            '!' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::BangEq
                } else {
                    TokenKind::Bang
                }
            }
            '<' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::LtEq
                } else if self.peek_char() == Some('<') {
                    self.advance_raw();
                    TokenKind::LtLt
                } else {
                    TokenKind::Lt
                }
            }
            '>' => {
                if self.peek_char() == Some('=') {
                    self.advance_raw();
                    TokenKind::GtEq
                } else if self.peek_char() == Some('>') {
                    self.advance_raw();
                    TokenKind::GtGt
                } else {
                    TokenKind::Gt
                }
            }
            '&' => {
                if self.peek_char() == Some('&') {
                    self.advance_raw();
                    TokenKind::AmpAmp
                } else {
                    TokenKind::Amp
                }
            }
            '|' => {
                if self.peek_char() == Some('|') {
                    self.advance_raw();
                    TokenKind::PipePipe
                } else {
                    TokenKind::Pipe
                }
            }
            '^' => TokenKind::Caret,
            '~' => TokenKind::Tilde,
            '%' => TokenKind::Percent,
            _ => TokenKind::Unknown(ch),
        };

        let raw: String = self.source[start_pos..self.pos].iter().collect();
        let len = self.pos - start_pos;

        Token {
            kind,
            span: Span {
                file: self.file.clone(),
                line: start_line,
                col: start_col,
                offset: start_pos,
                len,
            },
            raw,
        }
    }

    fn read_ident_or_keyword(&mut self, start_pos: usize, start_line: u32, start_col: u32) -> Token {
        while self.pos < self.source.len() && (self.source[self.pos].is_alphanumeric() || self.source[self.pos] == '_') {
            self.pos += 1;
            self.col += 1;
        }
        let raw: String = self.source[start_pos..self.pos].iter().collect();
        let kind = keyword_from_str(&raw).unwrap_or_else(|| TokenKind::Ident(raw.clone()));
        let len = self.pos - start_pos;
        Token {
            kind,
            span: Span {
                file: self.file.clone(),
                line: start_line,
                col: start_col,
                offset: start_pos,
                len,
            },
            raw,
        }
    }

    fn read_number(&mut self, start_pos: usize, start_line: u32, start_col: u32) -> Token {
        let mut is_float = false;
        while self.pos < self.source.len() {
            let c = self.source[self.pos];
            if c.is_ascii_digit() {
                self.pos += 1;
                self.col += 1;
            } else if c == '.' && !is_float && self.peek_char().map_or(false, |next| next.is_ascii_digit()) {
                is_float = true;
                self.pos += 1;
                self.col += 1;
            } else {
                break;
            }
        }
        let raw: String = self.source[start_pos..self.pos].iter().collect();
        let len = self.pos - start_pos;
        let kind = if is_float {
            TokenKind::FloatLit(raw.parse::<f64>().unwrap_or(0.0))
        } else {
            TokenKind::IntLit(raw.parse::<u64>().unwrap_or(0))
        };
        Token {
            kind,
            span: Span {
                file: self.file.clone(),
                line: start_line,
                col: start_col,
                offset: start_pos,
                len,
            },
            raw,
        }
    }

    fn read_string(&mut self, start_pos: usize, start_line: u32, start_col: u32) -> Token {
        self.pos += 1; // skip opening "
        self.col += 1;
        let mut s = String::new();
        while self.pos < self.source.len() {
            let c = self.source[self.pos];
            if c == '"' {
                self.pos += 1;
                self.col += 1;
                break;
            }
            s.push(c);
            self.pos += 1;
            self.col += 1;
        }
        let raw: String = self.source[start_pos..self.pos].iter().collect();
        let len = self.pos - start_pos;
        Token {
            kind: TokenKind::StringLit(s),
            span: Span {
                file: self.file.clone(),
                line: start_line,
                col: start_col,
                offset: start_pos,
                len,
            },
            raw,
        }
    }

    fn skip_whitespace_and_comments(&mut self) {
        while self.pos < self.source.len() {
            let c = self.source[self.pos];
            if c == ' ' || c == '\t' || c == '\r' {
                self.pos += 1;
                self.col += 1;
            } else if c == '\n' {
                self.pos += 1;
                self.line += 1;
                self.col = 1;
            } else if c == '/' && self.peek_char() == Some('/') {
                while self.pos < self.source.len() && self.source[self.pos] != '\n' {
                    self.pos += 1;
                }
            } else {
                break;
            }
        }
    }

    fn peek_char(&self) -> Option<char> {
        if self.pos + 1 < self.source.len() {
            Some(self.source[self.pos + 1])
        } else {
            None
        }
    }

    fn advance_raw(&mut self) {
        self.pos += 1;
        self.col += 1;
    }
}

pub fn keyword_from_str(s: &str) -> Option<TokenKind> {
    match s {
        "fn" => Some(TokenKind::Fn),
        "let" => Some(TokenKind::Let),
        "const" => Some(TokenKind::Const),
        "return" => Some(TokenKind::Return),
        "if" => Some(TokenKind::If),
        "else" => Some(TokenKind::Else),
        "while" => Some(TokenKind::While),
        "for" => Some(TokenKind::For),
        "in" => Some(TokenKind::In),
        "struct" => Some(TokenKind::Struct),
        "impl" => Some(TokenKind::Impl),
        "trait" => Some(TokenKind::Trait),
        "pub" => Some(TokenKind::Pub),
        "use" => Some(TokenKind::Use),
        "mod" => Some(TokenKind::Mod),
        "actor" => Some(TokenKind::Actor),
        "gpu" => Some(TokenKind::Gpu),
        "parallel" => Some(TokenKind::Parallel),
        "tensor" => Some(TokenKind::Tensor),
        "spawn" => Some(TokenKind::Spawn),
        "await" => Some(TokenKind::Await),
        "async" => Some(TokenKind::Async),
        "true" => Some(TokenKind::True),
        "false" => Some(TokenKind::False),
        "null" => Some(TokenKind::Null),
        "self" => Some(TokenKind::SelfKw),
        "super" => Some(TokenKind::Super),
        "type" => Some(TokenKind::Type),
        "where" => Some(TokenKind::Where),
        "match" => Some(TokenKind::Match),
        "enum" => Some(TokenKind::Enum),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_lexer_full() {
        let src = "fn main() { let x = 42; actor Worker gpu parallel tensor }";
        let mut lexer = BlyxLexer::new(src);
        let tokens = lexer.tokenize();
        assert_eq!(tokens[0].kind, TokenKind::Fn);
        assert_eq!(tokens[1].kind, TokenKind::Ident("main".to_string()));
    }
}
