class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.px = this.x;
        this.py = this.y;

        this.ts = 0;

        this.direction = ["L", "R", "U", "D"]; // left, right, up, down
    }

    randomMove(stepSize) {
        let direction = random(this.direction);

        switch(direction) {
            case "L":
                this.x -= stepSize;
                break;
            case "R":
                this.x += stepSize;
                break;
            case "U":
                this.y -= stepSize;
                break;
            case "D":
                this.y += stepSize;
                break;
            default:
                console.error("Unknown step direction " + direction);
        }
    }

    update() {
        let stepSize = int(map(noise(this.ts), 0, 1, 0, 10));

        this.px = this.x;
        this.py = this.y;

        this.randomMove(stepSize);

        this.ts += 0.01;
    }

    show() {
        line(this.px, this.py, this.x, this.y);
    }
}