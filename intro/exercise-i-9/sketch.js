let w;

function setup() {
    let canvas = createCanvas(200, 200);
    canvas.parent("canvas");

    background("#dfdfdf");
    
    w = new Walker();
}

function draw() {
    w.update();
    w.show();
}