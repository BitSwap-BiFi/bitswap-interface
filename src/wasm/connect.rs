extern crate wasm_bindgen;
extern crate wasm_bindgen_test;
extern crate connect;

use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;

#[wasm_bindgen]
pub fn connect() {
    connect::connect();
}
