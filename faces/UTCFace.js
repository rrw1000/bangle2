// Derivative of BasicFace that makes you correct for
// a UTC +/- zone at random :-)

MILLISECS_PER_HOUR=1000*60*60

// Espruino doesn't really do inheritance, so wrap, don't inherit.
// We can get away with a single level, but trying to inherit from
// BasicFace seems to break the compiler
class UTCFace extends Face {
    constructor(config) {
        super(config);
        this.basicFace = new BasicFace(config);
        this.utcOffset = Math.floor(Math.random() * 22.0)-11.0;
    }

    draw(inputDate) {
        var secondaryDate = new Date()
        secondaryDate.setTime(
            inputDate.getTime() + this.utcOffset*MILLISECS_PER_HOUR);
        console.log(secondaryDate);
        this.basicFace.draw(secondaryDate);
        let offsetDesc = this.utcOffset;
        let offsetStr = ""
        if (offsetDesc < 0) {
            offsetStr = offsetStr + "-"
            offsetDesc = -offsetDesc;
        } else {
            offsetStr = offsetStr + "+"
        }
        offsetStr = offsetStr + offsetDesc;
        console.log(this.config.largeVectorSize);
        this.config.drawDescription("UTC " + offsetStr);
    }
}
