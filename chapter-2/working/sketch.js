var liquid;
var movers;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    liquid = new Liquid(0, height / 2, width, height / 2, 5);

    movers = new Array(1);

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new BoxMover(random(0.1, 5), 200, 200, 50, 100);
    }
}

function draw() {
    background('#dfdfdf');
    liquid.display();

    for (let i = 0; i < movers.length; i++) {
        if (movers[i].isInside(liquid)) {
            movers[i].drag(liquid);
        }

        let m = 0.1 * movers[i].mass;
        let gravity = createVector(0, m);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();
    }
}
