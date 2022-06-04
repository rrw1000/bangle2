// Rotation effect.

class RotateEffect extends Effect {
    // Sadly, default parameters seem not to happen for me.
    constructor(face, rotateBy, reflect) {
        super(face);
        this.rotateBy = rotateBy;
        this.doReflect = reflect;
    }

    draw(currentDate) {
        g.setRotation(this.rotateBy, this.doReflect);
        this.faceObject.draw(currentDate);
    }
}
