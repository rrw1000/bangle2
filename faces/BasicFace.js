// basic face - largely copied from
// https://www.espruino.com/Bangle.js+Clock

class BasicFace extends Face {
    constructor(config) {
        // espruino will accept super(..), but doesn't compile it
        // properly.
        Face.call(this, config);
        result = g.getFonts();
        for (x in result) {
            console.log(result[x]);
        }
        // console.log("WxH =" + g.getWidth() +"x" + g.getHeight());
    }

    draw(inputDate) {
        const hours = inputDate.getHours();
        const mins = inputDate.getMinutes();
        const secs = inputDate.getSeconds();
        var time = LeftPad(2, hours, '0') +  ':' +
            LeftPad(2, mins, '0') + ':' +
            LeftPad(2, secs, '0')
        this.config.clearFace();
        this.config.drawDigitalTime(time)
    }
}

