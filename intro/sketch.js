let w;

function setup() {
    createCanvas(800, 800);
    background(90);
    
    w = new Walker();
}

function draw() {
    w.update();
    w.show();
}