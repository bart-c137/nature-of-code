var wing;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    wing = new BoxMover(10, 0, height - 50, 100, 50)
}

function draw() {
    background('#dfdfdf');

    wing.fly();
    wing.lift();

    let m = 0.1 * wing.mass;
    let gravity = createVector(0, m);
    wing.applyForce(gravity);

    wing.update();
    wing.display();
    wing.checkEdges();
}