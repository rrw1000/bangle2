
class Config {
    constructor() {
        // Where do we draw the watch face?
        this.faceAt = new Point(20,70);
        // How about the status line?
        this.statusAt = new Rect(new Point(0,20), new Point(176, 40));
        // Face rectangle
        this.faceRect = new Rect(new Point(0,60), new Point(176,120));
        // Screen
        this.screenRect = new Rect(new Point(0,0), new Point(176,176));
        // Size for "large" clock faces
        this.largeVectorSize = 28;
    }

    setLargeFont() {
        g.setFontVector(this.largeVectorSize);
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

    // Center a string.
    drawStringCentered(aString, atY) {
        const textWidth = g.stringWidth(aString);
        const textAt = (this.screenRect.br.x - textWidth)/2;
        g.drawString(aString, textAt, atY);
    }

    // Draw a status line
    drawStatus(aString) {
        g.clearRect(this.statusAt.tl.x, this.statusAt.tl.y,
                    this.statusAt.br.x, this.statusAt.br.y);
        this.drawStringCentered(aString, this.statusAt.tl.y);
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

