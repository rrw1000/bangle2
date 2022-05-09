

function to_roman(number) {
    // Progressive knock-down; the individual ones, tens, hundreds,
    // are quite idiosyncratic (according to Wikipedia), so best
    // to just store them.
    // These are all elem patterns:
    // 0 00 000 01 1 10 100 1000 02
    const REPRESENTATIONS = [
        [ "I", "V", "X" ],
        [ "X", "L", "C" ],
        [ "C", "D", "M" ]
    ];
    let factor = 10;
    let ptr = 0;
    // 1000s come first (though I don't think we ever use them)
    const nrMs = Math.floor(number/1000);
    let result = 'M'.repeat(nrMs);
    number = number % 1000;
    while (number) {
        let repResult = "";
        const repVals = REPRESENTATIONS[ptr];
        rem = Math.floor(number % factor);
        if (rem == 0) {
            // Nothing
        } else if (rem < 4) {
            repResult = repVals[0].repeat(rem);
        } else if (rem == 4) {
            repResult = repVals[0] + repVals[1];
        } else if (rem == 5) {
            repResult = repVals[1];
        } else if (rem < 9) {
            repResult = repVals[1] + repVals[0].repeat(rem-5);
        } else {
            repResult = repVals[0] + repVals[2];
        }
        // Add to the end of the result
        result = repResult + result;
        number = number / factor;
        ptr = ptr + 1;
    }
    return result;
}


module.exports = {
    ToRoman : function(number) {
        return to_roman(number);
    }
}
