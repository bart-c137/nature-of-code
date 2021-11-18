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

        this.left = 0;
        this.right = 0;
        this.up = 0;
        this.down = 0;
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

        let randomDistance = int(randomGaussian(this.mean, this.sd));
        this.randomMove(randomDistance);

        if(randomDistance >= 0 && randomDistance <= 19) {
            this.counts[randomDistance]++;
        }
    }

    show() {
        stroke(0);
        line(this.previousX, this.previousY, this.x, this.y);

        noStroke();
        fill("#dfdfdf");
        rect(0, 0, 100, height);
        rect(0, height - 20, width, 20);

        this.printStats();
    }
}