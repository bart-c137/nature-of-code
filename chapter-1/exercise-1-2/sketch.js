var w;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    background('#dfdfdf');

    w = new Walker();
}

function draw() {
    w.update();
    w.show();
}