// Binary!
// Draws three lines of boxes.

class BinaryFace extends Face {
    constructor(config) {
        super(config);
        // -4 for a border.
        this.XBorder = 4;
        this.YBorder = 4;
        const faceHeight = this.config.faceRect.br.y - this.config.faceRect.tl.y;
        this.boxHeight = (faceHeight - (3*this.YBorder))/3;
        this.topY = this.config.faceRect.tl.y;
        const faceWidth = this.config.faceRect.br.x - this.config.faceRect.tl.x;
        this.boxWidth = (faceWidth - (8*this.XBorder))/9;
        this.startX = (faceWidth-8*this.boxWidth - 7*this.XBorder)/2;
        this.incY = this.YBorder + this.boxHeight;
    }

    draw(inputDate) {
        const hours = inputDate.getHours();
        const mins = inputDate.getMinutes();
        const secs = inputDate.getSeconds();
        this.config.clearFace();
        this.drawValue(hours, this.topY);
        this.drawValue(mins, this.topY + this.incY);
        this.drawValue(secs, this.topY + this.incY*2);
    }

    drawValue(value, y) {
        x = this.startX + this.boxWidth*7 +  this.XBorder*7;
        for (let idx = 0; idx <8; ++idx) {
            if ((value >> idx)&1) {
                g.fillRect(x, y, x+this.boxWidth, y+this.boxHeight);
            } else {
                g.drawRect(x, y, x+this.boxWidth, y+this.boxHeight);
            }
            x = x-(this.boxWidth+this.XBorder);
        }
    }

    drawStatus() {
        this.config.drawStatus(["Binary!"])
    }
}
