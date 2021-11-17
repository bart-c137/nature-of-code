class Splatter {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    update() {
        let meanWidth = width / 2;
        let stdDevWidth = width / 8;

        let meanHeight = height / 2;
        let stdDevHeight = height / 8;

        let randomX = randomGaussian(meanWidth, stdDevWidth);
        let randomY = randomGaussian(meanHeight, stdDevHeight);

        this.x = randomX;
        this.y = randomY;
    }

    randomColorValue() {
        let mean = 255 / 2;
        let stdDev = 255 / 8;

        return randomGaussian(mean, stdDev);
    }

    show() {
        noStroke();
        let randomRed = this.randomColorValue();
        let randomGreen = this.randomColorValue();
        let randomBlue = this.randomColorValue();

        fill(randomRed, randomGreen, randomBlue);
        circle(this.x, this.y, 20);
    }
}