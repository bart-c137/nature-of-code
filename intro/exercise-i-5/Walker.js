class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.random = 0;
        this.mouse = 0;
    }

    moveRight() {
        this.x++;
    }

    moveLeft() {
        this.x--;
    }

    moveUp() {
        this.y--;
    }

    moveDown() {
        this.y++;
    }

    moveToMouse() {
        let dirX = mouseX - this.x;
        let dirY = mouseY - this.y;

        if (dirX >= 0) {
            this.moveRight();
        } else if (dirX < 0) {
            this.moveLeft();
        }

        if (dirY <= 0) {
            this.moveUp();
        } else if (dirY > 0) {
            this.moveDown();
        }
    }

    randomMove() {
        // 0 = left, 1 = right, 2 = up, 3 = down
        let rDir = int(random(0, 4));

        switch (rDir) {
            case 0:
                this.moveLeft();
                break;
            case 1:
                this.moveRight();
                break;
            case 2:
                this.moveUp();
                break;
            case 3:
                this.moveDown();
                break;
            default:
                console.log("Unknown random walk: " + rDir);
        }
    }

    update() {
        let p = random();

        if (p >= 0.7) {
            this.moveToMouse();
        } else {
            this.randomMove();
        }
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }
}