class Mover {
    constructor() {
        this.mass = 1;

        this.location = createVector(width / 2, 30);
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

    update() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 48, 48);
    }
}