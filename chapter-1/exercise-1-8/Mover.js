class Mover {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);

        this.acceleration = createVector(-0.001, 0.01);
        this.topSpeed = 5;
        this.decay = 0.05;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let direction = p5.Vector.sub(mouse, this.location);

        let gravity = this.exponentialDecay(direction.mag());
        direction.normalize();
        direction.mult(gravity);

        this.acceleration = direction;
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.location.add(this.velocity);

        let p = select("#output");
        p.html(this.acceleration.mag());
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
    }

    exponentialDecay (distance) {
        let mag = this.topSpeed * Math.pow(1 - this.decay, distance);
        return mag;
    }

    checkEdges() {
        if(this.location.x > width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = width;
        }

        if(this.location.y > height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = height;
        }
    }
}