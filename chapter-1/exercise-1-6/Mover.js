class Car {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, -0.1);

        this.topSpeed = 5;

        this.tx = 0;        // offset for x direction
        this.ty = 10000;    // offset for y direction
        this.tm = 20000;    // offset for magnitude
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = width;
        }

        if (this.location.y > height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = height;
        }
    }

    update() {
        let rx = map(noise(this.tx), 0, 1, -1, 1);  // random x direction
        let ry = map(noise(this.ty), 0, 1, -1, 1);  // random y direction
        let rm = noise(this.tm);                    // random magnitude
        
        this.tx += 0.01;
        this.ty += 0.01;
        this.tm += 0.01;

        this.acceleration = createVector(rx, ry);
        this.acceleration.mult(rm);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);
    }

    show() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
    }
}