var w;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    background(90);

    w = new Mover();
    p = select("#output");

}

/**
 * Check which key is pressed and have the Mover react.
 */
function keyPressed() {
    if (keyCode === UP_ARROW) {
        w.accellerate();
    } else if (keyCode === DOWN_ARROW) {
        w.decellerate();
    }
}

function draw() {
    background(90);
    w.update();
    w.show();
    p.html("Speed: " + w.velocity.mag());
}