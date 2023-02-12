// This is "processor.js" file, evaluated in AudioWorkletGlobalScope upon
// audioWorklet.addModule() call in the main global scope.

const MAX_LENGTH = 41000*5;
class RecorderWorklet extends AudioWorkletProcessor {
    constructor() {
        super();
        
        this._channelCount = 2;
        this.recBuffers = [[], []];
        this.recLength = 0;
        this.recording = false;
        this.port.onmessage = this.handleMessage_.bind(this);
    }

    setChannelCount(x) {
        this._channelCount = x;
        if (x === 2) {
            this.recBuffers = [[], []];
        } else {
            this.recBuffers = [[]];
        }
    }
    
    
    clear() {
        this.recBuffers[0].length = 0;
        if (this._channelCount === 2) {
            this.recBuffers[1].length = 0;
        }
        this.recLength = 0;
    }

    handleMessage_(event) {
        if (event.data.message === 'record') {
            //this.clear();
            this.recording = true;
        } else if (event.data.message === 'clear') {
            this.clear();
        } else if (event.data.message === 'stop') {
            this.recording = false;
        } else if (event.data.message === 'get_buffer') {
            console.log('sending get_buffer back');
            let buffer = new Float32Array(0); //this.getBuffer();
            // send message
            this.port.postMessage({
                message: {
                    type: 'get_buffer',
                    data: buffer
                }});
        } else if (event.data.message === 'flush') {
            // when it receives a flush it sends out all that it has
            console.log('received flush message');
            this.port.postMessage({
                message: {
                    type: 'flush',
                    data: {
                        buffers: this.recBuffers,
                        recLength: this.recLength
                    }
                }});
            this.clear();
        } else if (event.data.message === "channel-count") {
            console.log('received channel count=', event.data.count);
            this.setChannelCount(event.data.count);
        }

        /*
        console.log('[Processor:Received] ' + event.data.message +
                    ' (' + event.data.contextTimestamp + ')');
                    */
    }
    
    process(inputs, outputs, parameters) {
        let input = inputs[0];
        if (this.recording) {
            for (var channel = 0; channel < this._channelCount; channel++){
                let arr = new Float32Array(input[channel].length);
                arr.set(input[channel], 0);
                this.recBuffers[channel].push(arr);
            }
            this.recLength += input[0].length;
        }

        if (this.recLength > MAX_LENGTH) {
            this.port.postMessage({
                message: {
                    type: 'chunk',
                    data: {
                        buffers: this.recBuffers,
                        recLength: this.recLength
                    }
                }});
            this.clear();
        }
        return true;
    }

    getBuffer() {
        var buffers = [];
        return buffers;
        for (var channel = 0; channel < 2; channel++){
            buffers.push(this.mergeBuffers(this.recBuffers[channel], this.recLength));
        }

        // then clear to force garbage collection
        this.clear();

        return buffers;
    }

    mergeBuffers(recBuffers, recLength){
        var result = new Float32Array(recLength);
        var offset = 0;
        for (var i = 0; i < recBuffers.length; i++){
            result.set(recBuffers[i], offset);
            offset += recBuffers[i].length;
        }
        return result;
    }


}

registerProcessor('recorder-processor', RecorderWorklet);
