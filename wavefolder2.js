
const R1 = 10;
const R2 = 49.9;
const R3 = 91;
const R4 = 30;
const R5 = 68;

class WaveFolder2 extends AudioWorkletProcessor {
  constructor() {
    super()
  }
  static get parameterDescriptors() {
    return [{
      name: 'amount',
      defaultValue: 0.5,
      minValue: 0,
      maxValue: 10,
      automationRate: "k-rate"
    }];
  }
  process(input, output, parameters) {
    // `input` is an array of input ports, each having multiple channels.
    // For each channel of each input port, a Float32Array holds the audio
    // input data.
    // `output` is an array of output ports, each having multiple channels.
    // For each channel of each output port, a Float32Array must be filled
    // to output data.
    // `parameters` is an object having a property for each parameter
    // describing its value over time.
    let amount = parameters["amount"][0];
    let inputPortCount = input.length;
    for (let portIndex = 0; portIndex < input.length; portIndex++) {
      let channelCount = input[portIndex].length;
      for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
        let sampleCount = input[portIndex][channelIndex].length;
        for (let sampleIndex = 0; sampleIndex < sampleCount; sampleIndex++) {
          output[0][channelIndex][sampleIndex] =
                this.processSample(input[portIndex][channelIndex][sampleIndex], amount); 
        }
      }
    }
    return true;
  }

    processSample(sample, amount) {
        const denom = (R1*R3 + R2*R3 + R1*R2);
        const slope = R3*R2/denom;
        const offset = R3*R1*amount/denom;
        const thresh = R1*amount/R2;
        const const1 = -R3*thresh*(R2*thresh - 2*R1*amount*fastSign(thresh)) / (2*denom);
        const sign = fastSign(sample);
        const vinClipped = sign*Math.max(Math.abs(sample), 0);
        const f0 = vinClipped*(slope*vinClipped/2 - sign*offset) + const1;
        let vkd = 0;

        if (this.vin1 == undefined) {
            this.vin1 = amount;
            this.f01 = f0;
        }
        if (Math.abs(amount - this.vin1) > 0.001) {
            vkd = (f0 - this.F01)/(amount - this.vin1);
        } else {
            const vt1 = (amount + this.vin1)/2;
            const signT1 = fastSign(vt1);
            vkd = signT1*Math.max(slope*signT1*vt1 - offset, 0);
        }

        this.vin1 = amount;
        this.f01 = f0;

        return vkd;
    }
}

    const fastSign = (x) => x > 0 ? 1 : -1;

registerProcessor('wave-folder-node', WaveFolder2);
