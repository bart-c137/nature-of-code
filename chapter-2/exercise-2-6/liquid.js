class Liquid {
    constructor(xLocation, yLocation, width, height, coefficientOfDrag) {
        this.x = xLocation;
        this.y = yLocation;
        this.width = width;
        this.height = height;
        this.coefficientOfDrag = coefficientOfDrag;
    }

    display() {
        noStroke();
        fill("#89CFF0");
        rect(this.x, this.y, this.width, this.height);
    }
}