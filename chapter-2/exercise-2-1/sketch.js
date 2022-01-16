var balloon;

function getWindForce() {
    let xDirection = map(noise(this.wIncrement), 0, 1, -1, 1);
    return createVector(xDirection, 0);
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    balloon = new Balloon();
}

function draw() {
    background('#dfdfdf');

    let heliumRiseForce = createVector(0, -0.05);
    balloon.applyForce(heliumRiseForce);

    balloon.update();
    balloon.checkEdges();
    balloon.display();
}
