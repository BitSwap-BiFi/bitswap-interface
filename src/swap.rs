use crate::core::types::Swap;
use bitswap_core::types::PeerId;
use bitswap_core::types::Peer;

impl swap {
    pub fn new(peer: PeerId, swap: Swap) -> Self {
        Self {
            peer,
            swap,
        }
    }
}

