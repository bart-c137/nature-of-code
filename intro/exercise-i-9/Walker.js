class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.z = 0.0;
    }

    setPixelColor(x, y, xoff, yoff){
        let d = pixelDensity();

        for(let i = 0; i < d; i++) {
            for (let j = 0; j < d; j++) {
                let index = 4 * ((y * d + j) * width * d + (x * d + i));

                let bright = map(noise(xoff, yoff, this.z), 0, 1, 0, 255);
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

        let xoff = 0.0;

        for (let x = 0; x < width; x++) {
            let yoff = 0.0;

            for (let y = 0; y < height; y++) {
                this.setPixelColor(x, y, xoff, yoff);

                yoff += 0.1;
            }

            xoff += 0.1
        }

        updatePixels();
    }

    show() {
        this.z += 0.1;
    }
}