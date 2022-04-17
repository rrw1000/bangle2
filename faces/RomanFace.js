// Roman numerals.


class RomanFace extends Face {
    constructor(config) {
        super(config);
    }

    draw(inputDate) {
        const hours = inputDate.getHours();
        const minutes = inputDate.getMinutes();
        const secs = inputDate.getSeconds();
        var time = ToRoman(hours) + ':' + ToRoman(minutes) + ':' +
            ToRoman(secs);
        this.config.clearFace();
        this.config.drawDigitalTime(time);
    }
}

