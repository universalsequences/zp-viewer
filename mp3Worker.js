class Decoder {
    /**
     * @param {Record<String, any>} wasm WebAssembly exports.
     * @param {Uint8Array} data MP3 data to decode.
     */
    constructor(wasm, data) {
        this.wasm = wasm;
        this.wasm.decoder_init();
        // Set `data` in Wasm memory.
        this.wasm.decoder_set_mp3_data_size(data.byteLength);
        const mp3DataInWasm = new Uint8Array(this.wasm.memory.buffer, this.wasm.decoder_mp3_data_offset(), this.wasm.decoder_mp3_data_size());
        mp3DataInWasm.set(data);
        // Calculate duration.
        this.duration = this.seek(-1);
        this.seek(0);
    }

    setData(data) {
        this.wasm.decoder_set_mp3_data_size(data.byteLength);
        const mp3DataInWasm = new Uint8Array(this.wasm.memory.buffer, this.wasm.decoder_mp3_data_offset(), this.wasm.decoder_mp3_data_size());
        mp3DataInWasm.set(data);
        this.duration = this.seek(-1);
        this.seek(0);
    }

    /**
     * Seeks to the specified position in seconds.
     * @param {number} position Position to seek in seconds.
     * @returns {number} The current position in seconds.
     */
    seek(position) {
        this.wasm.decoder_seek(position);
        return this.currentTime();
    }
    /**
     * Decodes MP3 data from the current position. The decoder advances to the new position.
     * @param {number} duration seconds to decode.
     * @returns {object} Decoded results.
     */
    decode(duration) {
        const startTime = this.currentTime();
        this.wasm.decoder_decode(duration);
        const pcm = new Int16Array(this.wasm.memory.buffer, this.wasm.decoder_pcm_data_offset(), this.wasm.decoder_pcm_data_size() / 2);
        const samplingRate = this.wasm.decode_results_sampling_rate();
        const numChannels = this.wasm.decode_results_num_channels();
        const numSamples = this.wasm.decode_results_num_samples();
        const actualDuration = (numSamples / numChannels) / samplingRate;
        return {
            pcm: pcm,
            startTime: startTime,
            duration: actualDuration,
            samplingRate: samplingRate,
            numChannels: numChannels,
            numSamples: numSamples,
        };
    }
    /**
     * @returns {number} The current position in seconds.
     */
    currentTime() {
        return this.wasm.decoder_current_time();
    }
}

async function createDecoder(data, wasmUrl) {
    wasmUrl = wasmUrl || 'decoder.opt.wasm';
    const res = await fetch(wasmUrl);
    const buffer = await res.arrayBuffer();
    let wasm = await WebAssembly.instantiate(buffer, {});
    return new Decoder(wasm.instance.exports, data);
}

let decoder = null;
let running = false;
const decodeMP3 = async (mp3Data, isNFT) => {
    running=true;
    let url = isNFT ? 'decoder.opt.wasm' : '/decoder.opt.wasm';
    if (!decoder) {
        decoder = await createDecoder(mp3Data, url);
    } else {
        decoder.setData(mp3Data);
    }
    let position=0;
    let sampleRate;
    decoder.seek(0);
    let counter=0;
    let estimate = (mp3Data.length * 14) / 44100;
    const results = decoder.decode(Math.min(60*8.5, estimate));
    const merged = new Uint16Array(results.pcm.length);
    sampleRate = results.samplingRate;
    merged.set(results.pcm, position);
    position+=results.pcm.length;
    running=false;
    return {decoded: merged, sampleRate, position};
};

onmessage = async function(e) {
    let {id, mp3Data, isNFT} = e.data;
    while (running) {
        // only decode one at a time so we can use the same memory
        await sleep(5);
    }
 
    decodeMP3(mp3Data, isNFT).then(
        async ({decoded, sampleRate, position}) => {
           postMessage({decoded, sampleRate, position, id});
        });
}

const sleep = (x) => new Promise((resolve) => setTimeout(resolve, x));
