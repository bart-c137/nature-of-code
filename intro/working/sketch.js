let w;

function setup() {
    createCanvas(800, 800);
    background('#dfdfdf');
    
    w = new Walker();
}

function draw() {
    w.update();
    w.show();
}