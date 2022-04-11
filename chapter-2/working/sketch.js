var movers;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    movers = new Array(100);

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new Mover(random(0.1, 5), 0, 0);
    }
}

function draw() {
    background('#dfdfdf');

    let wind = createVector(0.001, 0);
    let frictionCoefficient = 0.01;

    for (let i = 0; i < movers.length; i++) {
        let frictionVector = movers[i].velocity.copy();
        frictionVector.mult(-1);
        frictionVector.normalize();
        frictionVector.mult(frictionCoefficient);

        let mass = movers[i].mass;
        let gravity = createVector(0, 0.1 * mass);

        movers[i].applyForce(frictionVector);
        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);
        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
}
