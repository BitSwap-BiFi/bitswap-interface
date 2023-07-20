WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
