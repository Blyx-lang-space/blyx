//! Lowering pass from AST/HIR into BIR

use crate::cfg::ControlFlowGraph;
use crate::instruction::{BirInstruction, Span, ValueId};

pub struct HirLowerer {
    pub cfg: ControlFlowGraph,
    pub value_counter: usize,
}

impl HirLowerer {
    pub fn new() -> Self {
        HirLowerer {
            cfg: ControlFlowGraph::new(),
            value_counter: 0,
        }
    }

    pub fn next_value(&mut self) -> ValueId {
        let val = ValueId(self.value_counter);
        self.value_counter += 1;
        val
    }

    pub fn lower_function(&mut self, name: &str) -> usize {
        let entry_block = 0;
        let ret_val = self.next_value();
        self.cfg.blocks[entry_block].push_instruction(BirInstruction::Allocate {
            dest: ret_val.clone(),
            ty: "i32".to_string(),
            span: Span::dummy(),
        });
        self.cfg.blocks[entry_block].push_instruction(BirInstruction::Return {
            val: Some(ret_val),
            span: Span::dummy(),
        });
        entry_block
    }
}
