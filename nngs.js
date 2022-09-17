
const neural_net_model = 'future-model-decoder.onnx'
const dataset_audio = 'future-audio.wav'
const mfcc_json_file = 'dataset_mfccs_unnormalized-f16.json'
const z_journey_file = 'z-journey_512steps (8).json'


function NNGS(){

    // important
    this.tree = null;
    this.onnx_session = null;
    this.z_journey = null;
    this.buffer = null;

    // model params
    this.batches = 1024;
    this.input_size = 8;
    this.n_mfccs = 13;

    // dataset params
    this.hop_size = 256;
    this.sample_rate = 48000;
    this.total_segments = 697224;

    // playback params 
    //this.this.sample_duration = this.hop_size * 4;
    this.sample_duration = this.hop_size * 8
    this.grain_hop = 50 // in milliseconds 

    // loading flags
    this.onnx_loaded = false;
    this.mfccs_loaded = false;
    this.audio_loaded = false;
    this.z_journey_loaded = false;
    this.tree_loaded = false;
    this.everything_loaded = false;

    let test_vector = [0,0.25,3.25,0,0,0.25,0.25,0];

    // MFCC dataset statistics for denormalization
    this.means = [31.2623,  9.8740,  7.2173, 15.9574, -0.5544, -2.9568,  0.9707, -0.2401,
             -0.4801, -0.3849,  1.3370,  0.4240,  0.4344]
    this.stds = [57.9742, 26.5851, 16.4278,  8.9616,  7.6482,  5.7878,  5.0844,  4.9500,
              4.2955,  3.9515,  3.5354,  3.4255,  3.2372]


    /////////////////////////
    // LOAD ONNX 
    /////////////////////////

    // use an async context to call onnxruntime functions.
    this.loadSession = async function() {
        console.log("Loading Neural Net model via ONNXruntime session..")

        try {
            // create a new session and load the specific model.
            //
            // the model in this example contains a single MatMul node
            // it has 2 inputs: 'a'(float32, 3x4) and 'b'(float32, 4x3)
            // it has 1 output: 'c'(float32, 3x3)
            this.onnx_session = await ort.InferenceSession.create(neural_net_model);
            console.log("Neural Net ONNX session loaded!", neural_net_model)
            this.onnx_loaded = true;
            this.checkIfLoadingComplete()
        } catch (e) {
            console.error(`ONNX session load failure: ${e}.`);
        }
    }

    this.random_vector = function(){
        let v = [];
        let sum = 0;
        let r = 0;
        // generate points
        for(let i=0;i<this.input_size;i++){
            let value = Math.random()*2-1;
            v.push(value);
            r += value*value;
        }
        /*// normalize
        for(let i=0;i<this.input_size;i++){
            v[i] /= r;
        }*/
        return v;
    }

    this.inference = async function(hilbert_vector){
        // prepare inputs. a tensor need its corresponding TypedArray as data
        //const input = Float32Array.from([0,0.25,0.25,0,0,0.25,0.25,0]);
        const input = Float32Array.from(hilbert_vector);
        const batched_input = new Float32Array(this.batches*this.input_size)
        for(let i=0;i<this.input_size;i++){
            //batched_input.set([input[i]],i*this.input_size)
            batched_input.set(input,0)
        }
        //console.log(batched_input)

        const tensorA = new ort.Tensor('float32', batched_input, [this.batches,this.input_size]);
        //console.log(tensorA)
        // prepare feeds. use model input names as keys.
        const feeds = { "n_qubit_state": tensorA };
        //console.log(feeds)
        // feed inputs and run
        const results = await this.onnx_session.run(feeds);
        //console.log(results)

        // read from results
        const batched_output = results.mfccs.data;
        //console.log("batched_output",batched_output)
        let mfcc = batched_output.slice(0, this.n_mfccs);
        //document.write(`MFCC: ${mfcc}`);
        this.playSegment(this.searchTree(mfcc))
    }




    /////////////////////////
    // LOAD Z JOURNEY TEST 
    /////////////////////////

    this.loadZjourney = function(url) {
        console.log("Loading Zjourney..")

        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status); // Rejects the promise
            }
            console.log("done Zjourney..")
            response.json().then(data => {
                this.z_journey = data;
                console.log("json z_journey.. done")
                this.z_journey_loaded = true;
                this.checkIfLoadingComplete()

            });
        });
    }


    /////////////////////////
    // MFCC POINTS 
    /////////////////////////

    this.loadMFCCs = function() {
        console.log("Loading MFCCs..")

        return fetch(mfcc_json_file).then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status); // Rejects the promise
            }
            console.log("done")
            response.json().then(data => {
                window.dataset_mfccs_unnormalized = data;
                console.log("Loaded MFCCs.. done")
                this.createTree(window.dataset_mfccs_unnormalized)
                this.mfccs_loaded = true;
                this.checkIfLoadingComplete()
            });
        });
    }

    /////////////////////////
    // KD TREE 
    /////////////////////////

    this.createTree = function(points){
        console.log("Creating KDTree..")
        this.tree = createKDTree(points)
        console.log("KDtree created!")
        this.tree_loaded = true;
        this.checkIfLoadingComplete()
    }

    this.denormalize = function(point){
        let new_point = []
        for(let i=0;i<point.length;i++){
            new_point[i] = point[i]*this.stds[i] + this.means[i]
        }
        return new_point;
    }

    this.add_noise = function(point, noise){
        let new_point = []
        for(let i=0;i<point.length;i++){
            new_point[i] = point[i] + Math.random() * noise;
        }
        return new_point;
    }

    this.searchTree = function(point){
        return this.tree.nn(this.denormalize(point))
    }

    /////////////////////////
    // AUDIO ENGINE 
    /////////////////////////

    this.audioCtx = new AudioContext({
        "sampleRate": this.sample_rate
    });

    this.loadAudio = () => {
        console.log("Loading Audio...", dataset_audio)
        const request = new XMLHttpRequest();
        request.open("GET", dataset_audio);
        request.responseType = "arraybuffer";
        request.onload = () => {
            //let undecodedAudio = request.response;
            //this.audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
            this.audioCtx.decodeAudioData(request.response, (decode_data) => {
                this.buffer = decode_data;
                console.log("Audio Loaded!")
                this.audio_loaded = true;
                this.checkIfLoadingComplete()
                //playSound(); // don't start processing it before the response is there!
            }, function(error) {
                console.error("decodeAudioData error", error);
            });
        };
        request.send();
    }

    this.playAudio = () => {
      const source = this.audioCtx.createBufferSource();
      source.buffer = this.buffer;
      source.connect(this.audioCtx.destination);
      source.start(0);
    };

    this.playSegment = (segment_id) => {
        //697224*256/48000/60
        let start = segment_id * this.hop_size / this.sample_rate;
        let duration = this.sample_duration / this.sample_rate * 10;
        // * dataset_mfccs_unnormalized.length
        console.log(segment_id, start, duration)

        let source = this.audioCtx.createBufferSource();
        source.buffer = this.buffer;
        source.connect(this.audioCtx.destination);
        source.start(0, start, duration);
        //source.start(0, start_sample, this.this.sample_duration);
    }

    /////////////////////////
    // LOAD EVERYTHING
    /////////////////////////
    
    this.checkIfLoadingComplete = () => {
        if(this.onnx_loaded 
            && this.mfccs_loaded
            && this.audio_loaded
            && this.z_journey_loaded
            && this.tree_loaded){
            console.log("Everything is loaded!")
            this.everything_loaded = true;
        }
    }

    ////////
    // AUDIO PLAY BACK 
    ///////

    let interval = null;
    this.random_sound = function(){
        let interval = setInterval(()=> {
            this.inference(this.random_vector())
        },this.grain_hop)
    }

    this.play_z_journey = function(z, noise_amount){
        let index = 0;
        let interval = setInterval(() => {
            let vector = z[index];
            vector = this.add_noise(vector, noise_amount);
            this.inference(vector)
            index = (index + 1) % z.length;
        },this.grain_hop)
    }

    this.play_dataset = function(){
        let index = 0;
        let interval = setInterval(() =>{
            //inference(z[index])
            this.playSegment(index)
            index = (index + 1) % this.total_segments;
        },this.grain_hop)
    }
}



function create_nngs(){
    console.log("Loading NNGS..")
    let nngs = new NNGS();
    nngs.loadSession();
    nngs.loadAudio();
    nngs.loadMFCCs()
    nngs.loadZjourney(z_journey_file)
    return nngs;
}


window.nngs = create_nngs();

