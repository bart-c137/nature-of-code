class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    update() {
        let xStep = int(random(3)) - 1;
        let yStep = int(random(3)) - 1;

        this.x += xStep;
        this.y += yStep;
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }
}