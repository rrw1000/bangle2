
class Config {
    constructor() {
        // Where do we draw the watch face?
        this.faceAt = new Point(20,70);
        // How about the status line?
        this.statusAt = new Rect(new Point(0,20), new Point(176, 60));
        // Face rectangle
        this.faceRect = new Rect(new Point(0,80), new Point(176,120));
        // Battery line
        this.statsAt = new Rect(new Point(0,150), new Point(176,176));
        // Screen
        this.screenRect = new Rect(new Point(0,0), new Point(176,176));
        // Size for "large" clock faces
        this.largeVectorSize = 30;
        // What we should have as a default status
        this.defaultStatusText = [ "Try this .. ", "" ]
        // Split status at
        this.splitStatusAtPixels = 160
        // Small font Y spacing
        this.smallFontYSpacing = 20
        // V border for face
        this.faceVBorder = 5
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
        this.drawStringCentered(aString, this.faceAt.y + this.faceVBorder);
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

    // Draw two status lines
    drawStatus(lines) {
        this.setSmallFont();
        g.clearRect(this.statusAt.tl.x, this.statusAt.tl.y,
                    this.statusAt.br.x, this.statusAt.br.y);
        if (lines.length > 0) {
            this.drawStringCentered(lines[0], this.statusAt.tl.y);
        }
        if (lines.length > 1) {
            this.drawStringCentered(lines[1], this.statusAt.tl.y + this.smallFontYSpacing);
        }
    }

    drawStats(aString) {
        this.setSmallFont();
        g.clearRect(this.statsAt.tl.x, this.statsAt.tl.y,
                    this.statsAt.br.x, this.statsAt.br.y);
        this.drawStringCentered(aString, this.statsAt.tl.y);
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

