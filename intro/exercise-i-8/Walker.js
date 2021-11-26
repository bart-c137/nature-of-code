class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.tx = 0;
        this.ty = 10000;
    }

    setPixelColor(x, y) {
        let d = pixelDensity();

        for(let i = 0; i < d; i++) {
            for (let j = 0; j < d; j++) {
                let index = 4 * ((y * d + j) * width * d + (x * d + i));

                let bright = random(255);
                let c = color(bright);

                pixels[index] = c._getRed();
                pixels[index + 1] = c._getGreen();
                pixels[index + 2] = c._getBlue();
                pixels[index + 3] = c._getAlpha();
            }
        }
    }

    update() {
        loadPixels();

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.setPixelColor(x, y);
            }
        }

        updatePixels();
    }

    show() {
    }
}