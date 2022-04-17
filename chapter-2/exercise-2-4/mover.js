class Mover {
    constructor(xLocation, yLocation) {
        this.initialSpeed = 2;
        this.maxSpeed = 10;

        this.location = createVector(xLocation, yLocation);
        this.velocity = createVector(this.initialSpeed, 0);
        this.acceleration = createVector(0, 0)
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    checkEdges() {
        if (this.location.y < 0) {
            this.location.y = 0;
            this.velocity.y *= -1;
        }

        if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
        } else if (this.location.x > width) {
            // object is at the right side, wrap it back to the left side
            // do not change direction
            this.location.x = 0;
        }
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
    }
}