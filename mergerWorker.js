this.onmessage = function(e){
    let {isMobile, chunks} = e.data;
    let recLength = 0;
    for (let chunk of chunks) {
        recLength += chunk.recLength;
    }
    
    let buffers = [];
    let channels = isMobile ? 1 : 2;
    for (var channel = 0; channel < channels; channel++){
        var arr = new Float32Array(recLength);
        let off = 0;
        for (let chunk of chunks) {
            if (!chunk.buffers[channel]) {
                return undefined;
            }
            for (let buffer of chunk.buffers[channel]) {
                arr.set(buffer, off);
                off+=buffer.length;
            }
        }
        buffers.push(arr);
    }
    
    this.postMessage(buffers);
};

