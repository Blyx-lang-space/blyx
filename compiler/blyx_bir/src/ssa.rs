//! SSA Definitions & Value System for BIR

use crate::instruction::ValueId;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum BirType {
    I32,
    I64,
    F32,
    F64,
    Bool,
    Unit,
    Tensor { elem_ty: Box<BirType>, dims: Vec<usize> },
    Actor { name: String },
    Pointer(Box<BirType>),
}

#[derive(Debug, Clone)]
pub struct SsaValue {
    pub id: ValueId,
    pub ty: BirType,
    pub is_defined: bool,
}

impl SsaValue {
    pub fn new(id_num: usize, ty: BirType) -> Self {
        SsaValue {
            id: ValueId(id_num),
            ty,
            is_defined: true,
        }
    }
}
