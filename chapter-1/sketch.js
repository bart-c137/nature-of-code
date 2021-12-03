var mover;

function setup() {
    createCanvas(800, 800);
    mover = new Mover();
}

function draw() {
    background(90);

    mover.update();
    mover.checkEdges();
    mover.display();
}