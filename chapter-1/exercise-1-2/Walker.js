class Walker {
    constructor() {
        this.location = createVector(width / 2, height / 2);
    }

    update() {
        let x = int(random(0, 3)) - 1;
        let y = int(random(0, 3)) - 1;

        let velocity = createVector(x, y);

        this.location.add(velocity);
    }

    show() {
        stroke(0);
        point(this.location.x, this.location.y);
    }
}