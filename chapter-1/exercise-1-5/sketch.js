var c;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    background(90);

    c = new Car();
    p = select("#output");

}

/**
 * Check which key is pressed and have the Mover react.
 */
function keyPressed() {
    if (keyCode === UP_ARROW) {
        c.accelerate();
    } else if (keyCode === DOWN_ARROW) {
        c.decelerate();
    }
}

function draw() {
    background(90);
    c.update();
    c.show();
    p.html("Speed: " + c.velocity.mag());
}