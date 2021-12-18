class Mover {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(-0.001, -0.1);
        this.topSpeed = 10;
        this.stopSpeed = 0;

        this.direction = "";
        this.oldDirection = "";
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

    accellerate() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.updateDirection();
    }

    decellerate() {
        if (this.velocity.mag() > 0) {
            this.velocity.sub(this.acceleration);
            this.updateDirection();

            if (this.direction != this.oldDirection) {
                this.velocity.setMag(this.stopSpeed);
            }
        }
    }

    updateDirection() {
        this.oldDirection = this.direction;

        if (this.velocity.heading() > 0) {
            this.direction = "DOWN";
        } else {
            this.direction = "UP";
        }
    }

    update() {
        this.checkEdges();
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);
    }

    show() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);

    }
}