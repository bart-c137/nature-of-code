var mover;

function getWindForce() {
    let xDirection = map(noise(this.wIncrement), 0, 1, -1, 1);
    return createVector(xDirection, 0);
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    mover = new Mover();
    createP("Click mouse to apply wind force.");
}

function draw() {
    background('#dfdfdf');

    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    if(mouseIsPressed) {
        let wind = createVector(0.1, 0);
        mover.applyForce(wind);
    }

    mover.update();
    mover.display();
    mover.checkEdges();
}
