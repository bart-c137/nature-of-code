var movers;
// var mover;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    movers = new Array(100);
    // mover = new Mover(random(0.1, 5), random(0, width), random(0, height));

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new Mover(random(0.1, 5), random(0, width), random(0, height));
    }

    p = select("#output");
}

function draw() {
    background('#dfdfdf');

    let leftWind = createVector(0.01, 0);
    let gravity = createVector(0, 0.1);

    for (let i = 0; i < movers.length; i++) {
        let xNorm = movers[i].location.x / width;
        let yNorm = movers[i].location.y / height;
        let edgeForce = createVector(0.5 - xNorm, 0.5 - yNorm);
        
        movers[i].applyForce(edgeForce);
        movers[i].applyForce(leftWind);
        movers[i].applyForce(gravity);
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }

    // let xNorm = mover.location.x / width;
    // let yNorm = mover.location.y / height;
    // let edgeForce = createVector(0.5 - xNorm, 0.5 - yNorm);

    // mover.applyForce(edgeForce);

    // mover.applyForce(leftWind);
    // mover.applyForce(gravity);

    // mover.update();
    // mover.display();
    // mover.checkEdges();

    // p.html("Velocity: " + mover.velocity.x + "<br />Distance: " + d);
}
