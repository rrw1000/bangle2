function LeftPad(nr, elem, pad) {
    return (pad.repeat(nr) + elem).substr(-nr);
}
