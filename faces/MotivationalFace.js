// motivational face - insults you when you ask for the main face again.




class MotivationalFace extends Face {
    constructor(config) {
        Face.call(this, config);
    }

    draw(inputDate) {
        const insult = Insult(Math.floor(Math.random() * (1<<32)));
        g.setFont6x15(1.0);
        g.drawString(insult, this.config.faceAt.x-10,
                     this.config.faceAt.y);
    }
}
