
import Essentia from './essentia.js-core.es.js';
// import essentia-wasm-module
import { EssentiaWASM } from './essentia-wasm.es.js';

let essentia = new Essentia(EssentiaWASM);


const extract = (buffer) => {
    const inputSignalVector = essentia.arrayToVector(buffer);
    let outputKey = essentia.KeyExtractor(inputSignalVector);
    return outputKey;
};

onmessage = function(e) {
    let buffer = e.data;
    postMessage(extract(buffer));
}
 
