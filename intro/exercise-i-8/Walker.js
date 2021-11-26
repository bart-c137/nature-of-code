class Walker {
    constructor() {
        this.x = 0;
        this.y = 0;

        this.tx = 0;
        this.ty = 10000;
    }

    update() {
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);

        this.tx += 0.01;
        this.ty += 0.01;
    }

    show() {
        point(this.x, this.y);
    }
}