class Balloon {
    constructor() {
        // dimensions of balloon
        this.radius = 8;

        // floating acceleration
        this.floatAcceleration = createVector(0, -0.5);

        this.location = createVector(width / 2, height);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0)
    }

    float() {
        this.acceleration = this.floatAcceleration;
    }

    stopAcceleration() {
        this.acceleration.mult(0);
    }

    stopVelocity() {
        this.velocity.mult(0);
    }

    checkEdges() {
        // check if th eballoon hit the top of the window
        // check y value - 2 times radius because of how the ballon is drawn.
        if (this.location.y - this.radius * 2 == 0) {
            this.stopAcceleration();
            this.stopVelocity();
        }
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        // reset acceleration
        this.stopAcceleration();
    }

    display() {
        stroke(0);
        fill(175);

        // make sure to take the radius into account
        ellipse(this.location.x, this.location.y - this.radius, this.radius * 2, this.radius * 2);
    }
}