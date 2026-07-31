//! Blyx Intermediate Representation (BIR) Instructions

use std::fmt;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Span {
    pub lo: u32,
    pub hi: u32,
}

impl Span {
    pub fn dummy() -> Self {
        Span { lo: 0, hi: 0 }
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ValueId(pub usize);

impl fmt::Display for ValueId {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "%{}", self.0)
    }
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum BirInstruction {
    Load { dest: ValueId, ptr: ValueId, span: Span },
    Store { ptr: ValueId, src: ValueId, span: Span },
    Move { dest: ValueId, src: ValueId, span: Span },
    Call { dest: ValueId, func: String, args: Vec<ValueId>, span: Span },
    Return { val: Option<ValueId>, span: Span },
    Branch { target_block: usize, span: Span },
    Switch { cond: ValueId, targets: Vec<(u64, usize)>, default: usize, span: Span },
    Phi { dest: ValueId, incoming: Vec<(usize, ValueId)>, span: Span },
    Allocate { dest: ValueId, ty: String, span: Span },
    Drop { val: ValueId, span: Span },

    // Tensor Compute Instructions
    TensorAlloc { dest: ValueId, elem_ty: String, dims: Vec<usize>, span: Span },
    TensorMatMul { dest: ValueId, lhs: ValueId, rhs: ValueId, span: Span },
    TensorAdd { dest: ValueId, lhs: ValueId, rhs: ValueId, span: Span },
    TensorSub { dest: ValueId, lhs: ValueId, rhs: ValueId, span: Span },
    TensorMul { dest: ValueId, lhs: ValueId, rhs: ValueId, span: Span },

    // Acceleration & Concurrency Instructions
    GpuDispatch { kernel_name: String, grid_dims: (usize, usize, usize), args: Vec<ValueId>, span: Span },
    ActorSpawn { dest: ValueId, actor_type: String, span: Span },
    ActorSend { actor: ValueId, msg: ValueId, span: Span },
    ActorReceive { dest: ValueId, actor: ValueId, span: Span },
    ParallelFor { start: ValueId, end: ValueId, step: ValueId, body_block: usize, span: Span },

    // Atomics
    AtomicLoad { dest: ValueId, ptr: ValueId, span: Span },
    AtomicStore { ptr: ValueId, val: ValueId, span: Span },
    AtomicCAS { dest: ValueId, ptr: ValueId, expected: ValueId, desired: ValueId, span: Span },
}

impl fmt::Display for BirInstruction {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            BirInstruction::Load { dest, ptr, .. } => write!(f, "{} = load {}", dest, ptr),
            BirInstruction::Store { ptr, src, .. } => write!(f, "store {}, {}", ptr, src),
            BirInstruction::Move { dest, src, .. } => write!(f, "{} = move {}", dest, src),
            BirInstruction::Call { dest, func, args, .. } => {
                let args_str: Vec<String> = args.iter().map(|a| a.to_string()).collect();
                write!(f, "{} = call {}({})", dest, func, args_str.join(", "))
            }
            BirInstruction::Return { val, .. } => match val {
                Some(v) => write!(f, "return {}", v),
                None => write!(f, "return"),
            },
            BirInstruction::Branch { target_block, .. } => write!(f, "branch bb{}", target_block),
            BirInstruction::Switch { cond, default, .. } => write!(f, "switch {}, default bb{}", cond, default),
            BirInstruction::Phi { dest, .. } => write!(f, "{} = phi ...", dest),
            BirInstruction::Allocate { dest, ty, .. } => write!(f, "{} = alloc {}", dest, ty),
            BirInstruction::Drop { val, .. } => write!(f, "drop {}", val),
            BirInstruction::TensorAlloc { dest, elem_ty, dims, .. } => write!(f, "{} = tensor_alloc<{}>({:?})", dest, elem_ty, dims),
            BirInstruction::TensorMatMul { dest, lhs, rhs, .. } => write!(f, "{} = tensor_matmul {}, {}", dest, lhs, rhs),
            BirInstruction::TensorAdd { dest, lhs, rhs, .. } => write!(f, "{} = tensor_add {}, {}", dest, lhs, rhs),
            BirInstruction::TensorSub { dest, lhs, rhs, .. } => write!(f, "{} = tensor_sub {}, {}", dest, lhs, rhs),
            BirInstruction::TensorMul { dest, lhs, rhs, .. } => write!(f, "{} = tensor_mul {}, {}", dest, lhs, rhs),
            BirInstruction::GpuDispatch { kernel_name, grid_dims, .. } => write!(f, "gpu_dispatch {}({:?})", kernel_name, grid_dims),
            BirInstruction::ActorSpawn { dest, actor_type, .. } => write!(f, "{} = actor_spawn {}", dest, actor_type),
            BirInstruction::ActorSend { actor, msg, .. } => write!(f, "actor_send {}, {}", actor, msg),
            BirInstruction::ActorReceive { dest, actor, .. } => write!(f, "{} = actor_recv {}", dest, actor),
            BirInstruction::ParallelFor { body_block, .. } => write!(f, "parallel_for bb{}", body_block),
            BirInstruction::AtomicLoad { dest, ptr, .. } => write!(f, "{} = atomic_load {}", dest, ptr),
            BirInstruction::AtomicStore { ptr, val, .. } => write!(f, "atomic_store {}, {}", ptr, val),
            BirInstruction::AtomicCAS { dest, ptr, .. } => write!(f, "{} = atomic_cas {}", dest, ptr),
        }
    }
}

pub trait BirVisitor {
    fn visit_instruction(&mut self, instr: &BirInstruction);
}
