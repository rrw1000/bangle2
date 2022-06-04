// Generates statistics and renders them

class Stats {
    constructor(config) {
        this.config = config;
        this.sampleText = ""; // No data yet.
    }

    sample() {
        batteryPercent = E.getBattery();
        isCharging = Bangle.isCharging();
        isBT = BluetoothDevice.connected
        this.sampleText = "";
        if (isBT) {
            this.sampleText = this.sampleText + "[B] "
        }
        if (isCharging) {
            this.sampleText = this.sampleText + "[C] "
        }
        this.sampleText = this.sampleText + batteryPercent + "%"
    }

    draw() {
        this.config.drawStats(this.sampleText);
    }
}
