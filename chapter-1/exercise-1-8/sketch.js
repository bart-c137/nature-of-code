var mover;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    mover = new Mover();
}

function draw() {
    background('#dfdfdf');

    mover.update();
    mover.checkEdges();
    mover.display();
}