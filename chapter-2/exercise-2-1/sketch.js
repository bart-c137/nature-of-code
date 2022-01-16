var balloon;
var heliumRiseForce;
var windIncrement = 0;

/**
 * Calculates the wind force based off of Perlin noise.
 * 
 * The force is between -1 and 1 in the x direction.
 * 
 * @returns A new 2D P5 Vector with the x element between -1 and 1 and the y element at 0.
 */
function getWindForce() {
    let xDirection = map(noise(windIncrement), 0, 1, -1, 1);
    return createVector(xDirection, 0);
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");
    balloon = new Balloon();

    heliumRiseForce = createVector(0, -0.05);
}

function draw() {
    background('#dfdfdf');

    balloon.applyForce(heliumRiseForce);

    if (mouseIsPressed) {
        let wind = getWindForce();
        balloon.applyForce(wind);
        windIncrement += 0.1;
    }

    balloon.update();
    balloon.checkEdges();
    balloon.display();
}
