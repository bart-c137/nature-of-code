let s;

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas");

    background("#dfdfdf");
    
    s = new Splatter();
}

function draw() {
    s.update();
    s.show();

    stroke(10);
    strokeWeight(3);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    stroke(100);
    strokeWeight(1);
    line(width / 2 + 100, 0, width / 2 + 100, height);
    line(width / 2 + 200, 0, width / 2 + 200, height);
    line(width / 2 + 300, 0, width / 2 + 300, height);
    line(width / 2 - 100, 0, width / 2 - 100, height);
    line(width / 2 - 200, 0, width / 2 - 200, height);
    line(width / 2 - 300, 0, width / 2 - 300, height);

    line(0, height / 2 + 100, width, height / 2 + 100);
    line(0, height / 2 + 200, width, height / 2 + 200);
    line(0, height / 2 + 300, width, height / 2 + 300);
    line(0, height / 2 - 100, width, height / 2 - 100);
    line(0, height / 2 - 200, width, height / 2 - 200);
    line(0, height / 2 - 300, width, height / 2 - 300);
}