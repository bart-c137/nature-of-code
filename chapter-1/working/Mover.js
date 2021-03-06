class Mover {
    constructor() {
        this.location = createVector(random(width), random(height));
        this.velocity = createVector(0, 0);

        this.acceleration = createVector(0, 0);
        this.topSpeed = 5;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let direction = p5.Vector.sub(mouse, this.location);

        direction.normalize();
        direction.mult(0.5);

        this.acceleration = direction;
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
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