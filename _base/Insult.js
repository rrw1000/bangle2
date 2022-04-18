function Insult(code) {
    // Each of these is a pair. Start at ARRAY_START, and go through
    // picking a value from code each time so we can be deterministic.
    const ARRAYS = [
        // 0
        [ "long-nosed", 1,  "spotted", 1, "reticulated", 1,  "anoxic", 1 ],
        // 1
        [ "herring", -1, "albatross", -1, "gerbil", -1, "fruit pie", -1,
          "hummingbird", -1, "sealion", -1, "archaean", -1 ],
        // 2
        [ "you are a", 0 ],       
    ]
    const ARRAY_START = 2;
    const ARRAY_MAX_LEN = 32;
    let currentArrayIndex = ARRAY_START;
    let result = ""
    while (currentArrayIndex != -1) {
        const currentArray =  ARRAYS[currentArrayIndex];
        const valFromArray = Math.floor(code % (currentArray.length/2));
        code = Math.floor(code / ARRAY_MAX_LEN);
        const idxInArray = valFromArray << 1;
        if (result.length > 0) { result = result + " "; }
        result = result + currentArray[idxInArray];
        currentArrayIndex = currentArray[idxInArray + 1];
    }
    return result;
}

if (typeof module !== 'undefined') {
    module.exports.Insult = Insult;
}

