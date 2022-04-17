// An effect you can apply to a face.
// Not sure if there are any useful ones other than rotate, but .. 

class Effect {
    constructor(face) { 
        this.config = face.config;
        this.faceObject = face;
    }

    draw(currentDate) {
        this.faceObject.draw(currentDate);
    }
}

       
