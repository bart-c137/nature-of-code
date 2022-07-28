var wing;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    wing = new BoxMover(10, 0, height - 50, 100, 50)

    p = select("#output");
}

function draw() {
    background('#dfdfdf');

    let output = "";

    // is the object in the liquid?
    // if (wing.isInside(liquid)) {
    //     let dragForce = wing.drag(liquid);

    //     // is the current drag higher
    //     if (dragForce.mag() > wing.maxDrag) {
    //         wing.maxDrag = dragForce.mag();
    //         wing.maxVelocity = wing.velocity.mag();
    //     }
    // }

    wing.fly();
    wing.lift();

    let m = 0.1 * wing.mass;
    let gravity = createVector(0, m);
    wing.applyForce(gravity);

    wing.update();
    wing.display();
    wing.checkEdges();

    output += "Object " + (wing + 1) + " - Start Height: " + (height - wing.startY).toFixed(2) + ".  ";
    output += "Max Drag: " + wing.maxDrag.toFixed(2) + ".  Max Speed: " + wing.maxVelocity.toFixed(2) + ".  ";
    output += "Surface Area: " + wing.width + "<br />";
    p.html(output);
}