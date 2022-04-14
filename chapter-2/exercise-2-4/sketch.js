var mover;
var speedUpZoneStart = 160;
var speedUpZoneStop = 320;
var slowDownZoneStart = 460;
var slowDownZoneStop = 640;

var slowDownFrictionCoefficient = 0.05;
var speedUpFrictionCoefficient = 0.1;

var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    mover = new Mover(random(0, speedUpZoneStart), random(0, height));

    p = select("#output");

}

function draw() {
    background('#dfdfdf');
    noStroke();
    fill("#AFE1AF");
    rect(160, 0, 160, 800);
    fill("#F88379");
    rect(460, 0, 160, 800);

    let friction = mover.velocity.copy();
    friction.normalize();

    let inZone = false;

    if (mover.location.x >= speedUpZoneStart && mover.location.x < speedUpZoneStop) {
        inZone = true;
        friction.mult(speedUpFrictionCoefficient);
    } else if (mover.location.x >= slowDownZoneStart && mover.location.x < slowDownZoneStop) {
        inZone = true;
        friction.mult(-1);
        friction.mult(slowDownFrictionCoefficient);
    }

    if (inZone) {
        mover.applyForce(friction);
    }

    mover.update();
    mover.display();
    mover.checkEdges();

    p.html("Speed: " + mover.velocity.mag().toFixed(2));
}
