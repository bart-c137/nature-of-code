var liquid;
var movers;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

    movers = new Array(5);

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new Mover(random(0.1, 5), i * 40, 0);
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
