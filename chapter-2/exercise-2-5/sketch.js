var liquid;
var movers;
var p;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    movers = new Array(10);

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new Mover(3, random(10, 700), random(20, 300));
    }

    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

    p = select("#output");
}

function draw() {
    background('#dfdfdf');
    liquid.display();

    let output = "";
    for (let i = 0; i < movers.length; i++) {
        if (movers[i].isInside(liquid)) {
            let dragForce = movers[i].drag(liquid);

            if(dragForce.mag() > movers[i].maxDrag) {
                movers[i].maxDrag = dragForce.mag();
                movers[i].maxVelocity = movers[i].velocity.mag();
            }
        }

        let m = 0.1 * movers[i].mass;
        let gravity = createVector(0, m);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].display();
        movers[i].checkEdges();

        output += "Object " + (i + 1) + " - Start Height: " + (height - movers[i].startY).toFixed(2) + ".  ";
        output += "Max Drag: " + movers[i].maxDrag.toFixed(2) + ".  Max Speed: " + movers[i].maxVelocity.toFixed(2) + ".  ";
        output += "Current Speed: " + movers[i].velocity.mag() + "<br />";
        p.html(output);
    }
}
