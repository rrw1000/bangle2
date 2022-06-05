// Derivative of BasicFace that makes you correct for
// a UTC +/- zone at random :-)

MILLISECS_PER_HOUR=1000*60*60

// Espruino doesn't really do inheritance, so wrap, don't inherit.
// We can get away with a single level, but trying to inherit from
// BasicFace seems to break the compiler
class UTCFace extends Face {
    // randomNumber needs to have at least enough bits to get us to 22
    // (note that the offset is thus not uniformly distributed - not
    // something I greatly care about here)
    constructor(config, randomNumber) {
        super(config);
        this.basicFace = new BasicFace(config);
        this.utcOffset = Math.floor(randomNumber%22)-11;
        let offsetDesc = this.utcOffset;
        let offsetStr = ""
        if (offsetDesc < 0) {
            offsetStr = offsetStr + "-"
            offsetDesc = -offsetDesc;
        } else {
            offsetStr = offsetStr + "+"
        }
        offsetStr = offsetStr + offsetDesc;
        this.offsetStr = offsetStr;
    }

    draw(inputDate) {
        var secondaryDate = new Date()
        secondaryDate.setTime(
            inputDate.getTime() + this.utcOffset*MILLISECS_PER_HOUR);
        this.basicFace.draw(secondaryDate);
    }

    drawStatus() {
        this.config.drawStatus(["UTC " + this.offsetStr]);
    }
}
