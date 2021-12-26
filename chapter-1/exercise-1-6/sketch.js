var c;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    background('#dfdfdf');

    c = new Car();
    p = select("#output");

}

function draw() {
    background('#dfdfdf');
    c.update();
    c.checkEdges();
    c.show();
    p.html("Speed: " + c.velocity.mag());
}