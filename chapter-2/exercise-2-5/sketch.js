var liquid;
var movers;
var p;
var chart;
var plotData;
var timerCounter;
var timer;

function setup() {
    let canvas = createCanvas(800, 1600);
    canvas.parent("canvas");

    movers = new Array(1);

    for (let i = 0; i < movers.length; i++) {
        movers[i] = new Mover(3, random(10, 700), random(20, 300));
    }

    liquid = new Liquid(0, 400, width, 400, 0.1);
    chart = new Chart(0, 20, 0, 11);

    p = select("#output");

    plotData = {};
    timerCounter = 0;
    timer = 0;
}

function draw() {
    background('#dfdfdf');
    liquid.display();

    let output = "";
    for (let i = 0; i < movers.length; i++) {

        // is the object in the liquid?
        if (movers[i].isInside(liquid)) {
            let dragForce = movers[i].drag(liquid);

            // is the current drag higher
            if (dragForce.mag() > movers[i].maxDrag) {
                movers[i].maxDrag = dragForce.mag();
                movers[i].maxVelocity = movers[i].velocity.mag();
            }

            // every 100 milliseconds
            if (millis() >= 100 + timer) {
                timerCounter++;
                plotData[timerCounter] = dragForce.mag();
                timer = millis();
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


        chart.update(plotData);
        chart.display();
    }
}
