class Mover {
    constructor(mass, xLocation, yLocation) {
        this.mass = mass;

        this.location = createVector(xLocation, yLocation);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0)
    }

    applyForce(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    distanceToWall() {
        if (this.velocity.x < 0) {
            return this.location.x * -1;
        } else if (this.velocity.x > 0) {
            return width - this.location.x;
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
        ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
    }
}