//! Enhanced Diagnostic Engine & Fix-It Hint Reporting

#[derive(Debug, Clone)]
pub enum DiagnosticLevel {
    Error,
    Warning,
    Note,
    Help,
}

#[derive(Debug, Clone)]
pub struct BlyxDiagnostic {
    pub level: DiagnosticLevel,
    pub code: &'static str,
    pub message: String,
    pub file: String,
    pub line: u32,
    pub column: u32,
    pub fix_it_hint: Option<String>,
}

impl BlyxDiagnostic {
    pub fn emit_formatted(&self) -> String {
        let prefix = match self.level {
            DiagnosticLevel::Error => "error",
            DiagnosticLevel::Warning => "warning",
            DiagnosticLevel::Note => "note",
            DiagnosticLevel::Help => "help",
        };
        format!(
            "{}[{}]: {}\n  --> {}:{}:{}\n",
            prefix, self.code, self.message, self.file, self.line, self.column
        )
    }
}
