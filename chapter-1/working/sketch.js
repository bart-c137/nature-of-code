var mover;

function setup() {
    createCanvas(800, 800);
    mover = new Array(20);

    for (let i = 0; i < 20; i++) {
        mover[i] = new Mover();
    }
}

function draw() {
    background(90);

    for (let i = 0; i < mover.length; i++) {
        mover[i].update();
        mover[i].checkEdges();
        mover[i].display();
    }

}