// This is "processor.js" file, evaluated in AudioWorkletGlobalScope upon
// audioWorklet.addModule() call in the main global scope.

class MultiVisualizerWorklet extends AudioWorkletProcessor {
    constructor() {
        super();

        this.sampleCount = 0;

        this.maxValues = [0,0,0,0,0,0,0,0,0,0,0,0];
    }

    process(inputs, outputs, parameters) {
        const input = inputs[0];

        let sampleRate = 44100; //this.context.sampleRate;

        for (let j = 0; j < input[0].length; j++) {
            for (let i = 0; i < input.length; i++) {
                if (Math.abs(input[i][j]) > Math.abs(this.maxValues[i])) {
                    this.maxValues[i] = input[i][j];
                }
           }
            this.sampleCount++;
            if (this.sampleCount >= sampleRate * 0.05) {
                this.port.postMessage(this.maxValues);
                for (let k=0; k < this.maxValues.length; k++) {
                    this.maxValues[k] = 0;
                }
                this.sampleCount = 0;
            }
        }
        return true;
    }
}

registerProcessor('multi-visualizer-processor', MultiVisualizerWorklet);
