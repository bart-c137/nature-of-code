class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.previousX = this.x;
        this.previousY = this.y;

        this.counts = new Array(20);
        for(let i = 0; i < this.counts.length; i++) {
            this.counts[i] = 0;
        }
        this.mean = 10;
        this.sd = 2;
    }


    randomMove(distance) {
        // 0 = left, 1 = right, 2 = up, 3 = down
        let rDir = int(random(0, 4));

        switch (rDir) {
            case 0:
                this.x -= distance;
                break;
            case 1:
                this.x += distance;
                break;
            case 2:
                this.y -= distance;
                break;
            case 3:
                this.y += distance;
                break;
            default:
                console.log("Unknown random walk: " + rDir);
        }
    }

    update() {
        this.previousX = this.x;
        this.previousY = this.y;

        let randomDistance = int(randomGaussian(this.mean, this.sd));
        this.randomMove(randomDistance);

        if(randomDistance >= 0 && randomDistance <= 19) {
            this.counts[randomDistance]++;
        }
    }

    show() {
        stroke(0);
        line(this.previousX, this.previousY, this.x, this.y);
    }
}