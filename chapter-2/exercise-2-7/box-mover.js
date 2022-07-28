class BoxMover {
    constructor(mass, xLocation, yLocation, width, height) {
        this.mass = mass;
        this.width = width;
        this.height = height;

        this.location = createVector(xLocation, yLocation);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0)

        this.maxSpeed = 10;

        this.startX = xLocation;
        this.startY = yLocation;
        this.maxDrag = 0;
        this.maxVelocity = 0;
    }

    applyForce(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = 0;
        }

        if (this.location.y + this.height > height) {
            this.location.y = height - this.height;
            this.velocity.y *= -1;
        } else if (this.location.y < 0) {
            this.location.y = height;
            this.location.x = 0;
        }
    }

    fly() {
        let a = createVector(0.1, 0);
        this.applyForce(a);
    }

    lift() {
        let speed = this.velocity.mag();
        let dragMagnitude = 0.1 * speed * speed;

        // rotate the drag vector
        let dragX = this.velocity.y * -1;
        let dragY = this.velocity.x * 1;
        dragY *= -1; // rotate because "up" is negative on the screen

        let drag = createVector(dragX, dragY);

        drag.normalize();

        drag.mult(dragMagnitude);

        this.applyForce(drag);

        return drag;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        fill(175);
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}