// Roman numerals.


class RomanFace extends Face {
    constructor(config) {
        super(config);
    }

    draw(inputDate) {
        const hours = inputDate.getHours();
        const minutes = inputDate.getMinutes();
        const secs = inputDate.getSeconds();
        // Longest is eg. LDVIII
        var time = RightPad(5, ToRoman(hours),' ') + ':' +
            RightPad(7, ToRoman(minutes), ' ')
        var outSecs =
            RightPad(7, ToRoman(secs), ' ');
        g.setFontVector(20);
        this.config.clearFace();
        g.drawString(time, this.config.faceAt.x, this.config.faceAt.y + this.config.faceVBorder);
        g.drawString(outSecs, this.config.faceAt.x + 40,
                     this.config.faceAt.y + 20 + this.config.faceVBorder);
    }

    drawStatus() {
        this.config.drawStatus(["Try this .. "])
    }
}

