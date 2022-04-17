function LeftPad(nr, elem, pad) {
    return (pad.repeat(nr) + elem).substr(-nr);
}

function ToRoman(number) {
    // Progressively knock us down. We're in base 10, so ..
    factor = 10;
    result = ""
    while (number) {
        rem = number % factor;
        
        
        number = number / factor;
        
    }
    return result;
}

if (typeof module !== 'undefined') {
    module.exports.LeftPad = LeftPad;
    module.exports.ToRoman = ToRoman;
}

