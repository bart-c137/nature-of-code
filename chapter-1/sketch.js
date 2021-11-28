var x = 100;
var y = 100;
var xSpeed = 1;
var ySpeed = 3.3;

var vLocation = null;
var velocity = null;

function setup() {
    createCanvas(640, 360);

    vLocation = createVector(100, 100);
    velocity = createVector(2.5, 5);
}

function draw() {
   background(90);

   vLocation.add(velocity);

   if (vLocation.x > width || vLocation.x < 0) {
       velocity.x *= -1;
   }

   if (vLocation.y > height || vLocation.y < 0) {
       velocity.y *= -1;
   }

   stroke(0);
   fill(175);
   ellipse(vLocation.x, vLocation.y, 16, 16);
}