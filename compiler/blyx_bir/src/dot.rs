//! Graphviz DOT Exporters for BIR Control Flow Graph and Call Graph

use crate::cfg::ControlFlowGraph;

pub fn export_cfg_dot(cfg: &ControlFlowGraph) -> String {
    let mut dot = String::from("digraph BIR_CFG {\n  node [shape=box fontname=\"Courier\"];\n");
    for block in &cfg.blocks {
        let mut instrs_text = String::new();
        for instr in &block.instructions {
            instrs_text.push_str(&format!("{}\n", instr));
        }
        dot.push_str(&format!("  bb{} [label=\"bb{}:\n{}\"];\n", block.id, block.id, instrs_text.replace("\"", "\\\"")));
        for succ in &block.successors {
            dot.push_str(&format!("  bb{} -> bb{};\n", block.id, succ));
        }
    }
    dot.push_str("}\n");
    dot
}
