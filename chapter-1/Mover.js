class Mover {
    constructor() {
        this.location = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);

        this.acceleration = createVector(-0.001, 0.01);
        this.topSpeed = 10;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);

        let p = select("#output");
        p.html(this.velocity.mag());
    }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x, this.location.y, 16, 16);
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