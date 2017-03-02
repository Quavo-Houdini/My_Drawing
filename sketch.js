var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var timer = 400;
var bgColor = 0;
var nextTime = timer;
var x = 0;
var speed = 5;



function setup() {
    createCanvas(1230, 635);
    background(0);
    fill(0);
}

function draw() {


    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);

    stroke(redValue, greenValue, blueValue);


    if (mouseIsPressed == false) {
        quad(mouseX, mouseY, height / 100, height / 50);
    } else {
        background(bgColor);
        if (millis() > nextTime)
            bgColor += 10;
        nextTime = millis() + timer;

        stroke(255);
        strokeWeight(5);
        noFill();
        ellipse(x, 400, 100, 100);

        x = x + speed;

    }
}
