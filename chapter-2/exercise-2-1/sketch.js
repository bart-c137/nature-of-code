var balloon;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    balloon = new Balloon();
}

function draw() {
    background('#dfdfdf');

    balloon.update();
    balloon.checkEdges();
    balloon.display();
}
