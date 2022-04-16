// basic face - largely copied from
// https://www.espruino.com/Bangle.js+Clock

class BasicFace extends Face {
    constructor(config) {
        super(config)
    }

    draw(inputDate) {
        const hours = inputDate.getHours();
        const mins = inputDate.getMinutes();
        const secs = inputDate.getSeconds();
        var time = hours + ":" + ('0' +mins).substr(-2) + ":" +
            ('0' + secs).substr(-2)
        g.reset();
        this.config.clearFace()
        g.drawString(time, this.config.faceAt.x, this.config.faceAt.y);
    }
}

