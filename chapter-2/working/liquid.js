class Liquid {
    constructor(xLocation, yLocation, width, height, coefficientOfDrag) {
        this.x = xLocation;
        this.y = yLocation;
        this.w = width;
        this.h = height;
        this.c = coefficientOfDrag;
    }

    display() {
        noStroke();
        fill("#89CFF0");
        rect(this.x, this.y, this.w, this.h);
    }
}