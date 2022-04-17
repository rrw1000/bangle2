
class Config {
    constructor() {
        console.log("Config constructor called!");
        // Where do we draw the watch face?
        this.faceAt = new Point(30,60);
        // Face rectangle
        this.faceRect = new Rect(new Point(30,50), new Point(176,120));
        // Size for "large" clock faces
        this.largeVectorSize = 24;
    }

    setLargeFont() {
        g.setFontVector(24);
    }

    setSmallFont() {
        g.setFont12x20(1);
    }

    // Draw a digital time display (HH:MM:SS or so)
    drawDigitalTime(aString) {
        this.setLargeFont();
        g.drawString(aString, this.faceAt.x, this.faceAt.y);
    }

    // Draw a text description above the face
    drawDescription(aString) {
        this.setSmallFont();
        g.drawString(aString, this.faceAt.x, this.faceAt.y - 20);
    }

    // Clear the whole display
    clearDisplay() {
        g.clearRect(this.faceRect.tl.x, this.faceRect.tl.y-20,
                    this.faceRect.br.x, this.faceRect.br.y);
    }

    // Clear the area reserved for the watch face.
    clearFace() {
        g.clearRect(this.faceRect.tl.x, this.faceRect.tl.y,
                    this.faceRect.br.x, this.faceRect.br.y);
    }
}

