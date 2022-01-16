class Balloon {
    constructor() {
        this.location = createVector(width / 2, height);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0)
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    checkEdges() {
        if(this.location.y < 0) {
            this.location.y = 0;
            this.velocity.y *= -1;
            this.velocity.div(2);
        }

        if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
        } else if (this.location.x > width) {
            this.location.x = width;
            this.velocity.x *= -1;
        }
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
    }
}