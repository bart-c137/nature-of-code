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
            this.location.x = width;
            this.velocity.x *= -1;
        } else if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
        }

        if (this.location.y + this.height > height) {
            this.location.y = height - this.height;
            this.velocity.y *= -1;
        }
    }

    isInside(liquid) {
        // only need to check the bottom of the rectangle
        if (this.location.y + this.height >= liquid.height) {
            return true;
        } else {
            return false;
        }
    }

    drag(liquid) {
        let speed = this.velocity.mag();
        let dragMagnitude = liquid.coefficientOfDrag * speed * speed * this.width * 0.1;

        let drag = this.velocity.copy();
        drag.mult(-1);
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