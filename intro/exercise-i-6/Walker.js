class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.previousX = this.x;
        this.previousY = this.y;

        // Keeps track of how many times each distance was picked by the random distribution
        this.counts = new Array(10);
        for(let i = 0; i < this.counts.length; i++) {
            this.counts[i] = 0;
        }

        this.mean = 10;
        this.sd = 2;

        // Keeps track of how often each direction is picked.  This should be uniform.
        this.left = 0;
        this.right = 0;
        this.up = 0;
        this.down = 0;
    }

    customRandom() {
        while (true) {
            let r1 = int(random(0, 10));
            let p1 = (r1 * r1) / 100;

            let r2 = random(0, 1);

            if (r2 < p1) {
                return r1;
            }
        }
    }

    randomMove(distance) {
        // 0 = left, 1 = right, 2 = up, 3 = down
        let rDir = int(random(0, 4));

        switch (rDir) {
            case 0:
                this.x -= distance;
                this.left++;
                break;
            case 1:
                this.x += distance;
                this.right++;
                break;
            case 2:
                this.y -= distance;
                this.up++;
                break;
            case 3:
                this.y += distance;
                this.down++;
                break;
            default:
                console.log("Unknown random walk: " + rDir);
        }
    }

    printStats() {
        for(let i = 0; i < this.counts.length; i++) {
            stroke(0);
            fill(0);

            text("" + i + ": " + this.counts[i], 15, 15 * (i + 1));
        }

        text("Left: " + this.left + "  Right: " + this.right + "  Up: " + this.up + "  Down: " + this.down,
            15, height - 5);
    }

    update() {
        this.previousX = this.x;
        this.previousY = this.y;

        // let randomDistance = int(randomGaussian(this.mean, this.sd));
        let randomDistance = this.customRandom();
        this.randomMove(randomDistance);

        if(randomDistance >= 0 && randomDistance <= 19) {
            this.counts[randomDistance]++;
        }
    }

    show() {
        stroke(0);
        line(this.previousX, this.previousY, this.x, this.y);

        // cannot redraw the background each time as it would erase the walk.  Instead draw
        // rectangles where the text will be.
        noStroke();
        fill("#dfdfdf");
        rect(0, 0, 100, height);
        rect(0, height - 20, width, 20);

        this.printStats();
    }
}