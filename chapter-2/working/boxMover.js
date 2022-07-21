class BoxMover {
    constructor(mass, xLocation, yLocation, width, height) {
        this.mass = mass;
        this.xLocation = xLocation;
        this.yLocation = yLocation;
        this.width = width;
        this.height = height;

        this.location = createVector(xLocation, yLocation);

        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0)

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

        if (this.location.y > height) {
            this.location.y = height;
            this.velocity.y *= -1;
        }
    }

    isInside(liquid) {
        if (this.location.x >= liquid.x && this.location.x <= liquid.x + liquid.w && this.location.y >= liquid.y && this.location.y <= liquid.y + liquid.h) {
            return true;
        } else {
            return false;
        }
    }

    drag(liquid) {
        let speed = this.velocity.mag();
        let dragMagnitude = liquid.c * speed * speed * this.width;

        let drag = this.velocity.copy();
        drag.mult(-1);
        drag.normalize();

        drag.mult(dragMagnitude);

        this.applyForce(drag);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        fill(175);
        // ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16);
        rect(this.location.x, this.location.y, this.width, this.height);
    }
}