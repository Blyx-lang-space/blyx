//! Blyx Intermediate Representation (BIR) Compiler Crate

pub mod backend;
pub mod cfg;
pub mod diag;
pub mod dot;
pub mod incremental;
pub mod instruction;
pub mod lowering;
pub mod llvm_lowering;
pub mod opt;
pub mod passes;
pub mod ssa;

#[cfg(test)]
mod tests {
    use super::backend::{BlyxBackend, LlvmBackend};
    use super::cfg::ControlFlowGraph;
    use super::diag::{BlyxDiagnostic, DiagnosticLevel};
    use super::dot::export_cfg_dot;
    use super::incremental::IncrementalCacheEngine;
    use super::instruction::{BirInstruction, Span, ValueId};
    use super::lowering::HirLowerer;
    use super::llvm_lowering::LlvmIrEmitter;
    use super::opt::{BirOptimizationPass, DeadCodeElimination};
    use super::passes::{BirPassManager, OptLevel};
    use super::ssa::{BirType, SsaValue};

    #[test]
    fn test_pass_manager() {
        let mut manager = BirPassManager::new(OptLevel::O2);
        let mut cfg = ControlFlowGraph::new();
        let changed = manager.run(&mut cfg);
        assert!(!changed);
    }

    #[test]
    fn test_incremental_engine() {
        let mut engine = IncrementalCacheEngine::new();
        assert!(engine.should_recompile("src/main.blyx", 12345));
        engine.update_cache("src/main.blyx", 12345, vec![0x1]);
        assert!(!engine.should_recompile("src/main.blyx", 12345));
    }

    #[test]
    fn test_diagnostics() {
        let diag = BlyxDiagnostic {
            level: DiagnosticLevel::Error,
            code: "E0308",
            message: "mismatched types".to_string(),
            file: "src/main.blyx".to_string(),
            line: 10,
            column: 5,
            fix_it_hint: None,
        };
        let formatted = diag.emit_formatted();
        assert!(formatted.contains("error[E0308]"));
    }

    #[test]
    fn test_instruction_creation() {
        let load = BirInstruction::Load {
            dest: ValueId(0),
            ptr: ValueId(1),
            span: Span::dummy(),
        };
        assert_eq!(format!("{}", load), "%0 = load %1");

        let tensor_matmul = BirInstruction::TensorMatMul {
            dest: ValueId(2),
            lhs: ValueId(0),
            rhs: ValueId(1),
            span: Span::dummy(),
        };
        assert_eq!(format!("{}", tensor_matmul), "%2 = tensor_matmul %0, %1");
    }

    #[test]
    fn test_ssa_and_cfg() {
        let mut cfg = ControlFlowGraph::new();
        let b1 = cfg.add_block();
        cfg.add_edge(0, b1);
        assert_eq!(cfg.blocks.len(), 2);
        assert_eq!(cfg.blocks[0].successors, vec![1]);

        let ssa_val = SsaValue::new(0, BirType::I32);
        assert_eq!(ssa_val.id.0, 0);
    }

    #[test]
    fn test_lowering_pass() {
        let mut lowerer = HirLowerer::new();
        let entry = lowerer.lower_function("test_fn");
        assert_eq!(entry, 0);
        assert!(lowerer.cfg.blocks[0].instructions.len() >= 1);
    }

    #[test]
    fn test_llvm_lowering() {
        let mut lowerer = HirLowerer::new();
        lowerer.lower_function("main");
        let mut llvm_emitter = LlvmIrEmitter::new("main_module");
        let llvm_ir = llvm_emitter.lower_cfg(&lowerer.cfg);
        assert!(llvm_ir.contains("define i32 @main()"));
    }

    #[test]
    fn test_optimization_pass() {
        let mut cfg = ControlFlowGraph::new();
        cfg.blocks[0].push_instruction(BirInstruction::Move {
            dest: ValueId(0),
            src: ValueId(0),
            span: Span::dummy(),
        });
        let mut dce = DeadCodeElimination;
        let changed = dce.run(&mut cfg);
        assert!(changed);
        assert_eq!(cfg.blocks[0].instructions.len(), 0);
    }

    #[test]
    fn test_backend_and_dot() {
        let mut backend = LlvmBackend::new("x86_64-unknown-linux-gnu");
        assert_eq!(backend.name(), "LLVM");
        assert!(backend.initialize().is_ok());

        let cfg = ControlFlowGraph::new();
        let dot_output = export_cfg_dot(&cfg);
        assert!(dot_output.contains("digraph BIR_CFG"));
    }
}
