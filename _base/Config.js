
class Config {
    constructor() {
        // Where do we draw the watch face?
        this.faceAt = new Point(50,50);
        // Face rectangle
        this.faceRect = new Rect(new Point(50,50), new Point(100,120));
    }

    clearFace() {
        g.clearRect(this.faceRect.tl.x, this.faceRect.tl.y,
                    this.faceRect.br.x, this.faceRect.br.y);
    }
}

