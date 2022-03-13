var movers;
var p;

/**
 * Returns the force value for a location based on how close it is to the specified edge dimension.
 * 
 * @param {number} location - The location to calculate the force for.
 * @param {number} edge - The maximum value for the edge to check.
 * @returns {number} A number representing the strength of the force to apply.
 */
function exponentailDecay(location, edge) {
    let dNorm = 0;
    let direction = 1;

    if (location < edge / 2) {
        // the location is to the left of the middle, the location is how close it os to the edge
        dNorm = location;
    } else {
        // the location is to the right of the middle, calculate how close it is to the edge by subtracting from the
        // edge value
        dNorm = edge - location;

        // the returning force must push to the left
        direction = -1;
    }

    // using random values for the starting and decay values.
    let force = 5 * Math.pow(1 - 0.025, dNorm)
    return force * direction;
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    movers = new Array(100);

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
        let xForce = exponentailDecay(movers[i].location.x, width);
        let yForce = exponentailDecay(movers[i].location.y, height);
        let edgeForce = createVector(xForce, yForce);

        movers[i].applyForce(edgeForce);
        movers[i].applyForce(leftWind);
        movers[i].applyForce(gravity);
        movers[i].update();
        movers[i].display();
    }
}
