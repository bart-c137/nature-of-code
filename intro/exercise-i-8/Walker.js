class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    setPixelColor(x, y, xoff, yoff) {
        let d = pixelDensity();

        for (let i = 0; i < d; i++) {
            for (let j = 0; j < d; j++) {
                let index = 4 * ((y * d + j) * width * d + (x * d + i));

                let c = noise(xoff, yoff) * 255;

                pixels[index + 0] = c;
                pixels[index + 1] = c;
                pixels[index + 2] = c;
                pixels[index + 3] = 255;
            }
        }
    }

    update() {
        loadPixels();

        let xoff = 0.0;

        for (let x = 0; x < width; x++) {
            let yoff = 0.0;

            for (let y = 0; y < height; y++) {
                this.setPixelColor(x, y, xoff, yoff);

                yoff += 0.01;
            }

            xoff += 0.01
        }

        updatePixels();
    }

    show() {
    }
}