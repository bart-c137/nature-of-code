// var movers;
var mover;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    // movers = new Array(100);
    mover = new Mover(random(0.1, 5), 0, 0);

    // for (let i = 0; i < movers.length; i++) {
    //     movers[i] = new Mover(random(0.1, 5), 0, 0);
    // }

    p = select("#output");
}

function exponentialDecay(distance) {
    let mag = 30 * Math.pow(1 - 0.01, distance);
    return mag;
}

function draw() {
    background('#dfdfdf');

    let wind = createVector(0.1, 0);
    let gravity = createVector(0, 0.1);

    // for (let i = 0; i < movers.length; i++) {
    //     movers[i].applyForce(wind);
    //     movers[i].applyForce(gravity);
    //     movers[i].update();
    //     movers[i].display();
    //     movers[i].checkEdges();
    // }

    let d = mover.distanceToWall();

    mover.applyForce(wind);
    mover.applyForce(gravity);

    if(abs(d) <= 500) {
        let magnitude = exponentialDecay(abs(d));
        console.log("Distance: " + d + "  Velocity: " + mover.velocity.x + "  Mag: " + magnitude);

        if (d > 0) {
            magnitude *= -1;
        }
        let pushForce = createVector(magnitude, 0);
        mover.applyForce(pushForce);
    }

    mover.update();
    mover.display();
    mover.checkEdges();

    p.html("Velocity: " + mover.velocity.x + "<br />Distance: " + d);
}
