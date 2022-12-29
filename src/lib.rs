use wasm_bindgen::prelude::*;
use rustc_demangle;

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


#[wasm_bindgen(method)]
pub fn demangle(symbol: &JsValue) -> Result<JsValue, JsError> {
    let symbol = symbol.as_string()
        .ok_or(JsError::new("Expected symbol to be a string!"))?;
    Ok(JsValue::from_str(&rustc_demangle::demangle(&symbol).to_string()))
}
