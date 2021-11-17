class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    update() {
        let step = int(random(10));

        switch(step) {
            case 0:
            case 1:
            case 2:
                this.x++;
                break;
            case 3:
            case 4:
            case 5:
                this.y++;
                break;
            case 6:
            case 7:
                this.x--;
                break;
            case 8:
            case 9:
                this.y--;
                break;
            default:
                console.log("Unknonw random " + step);
        }
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }
}