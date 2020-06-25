var walkerX;
var walkerY;
var speed = 60;


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 165);
    walkerX = 100 + mouseX;
    walkerY = 100 + mouseY;
    walkerA = windowWidth / 2 + mouseX;
    walkerB = windowHeight / 2 + mouseY;

}
if ((2 * windowWidth) / 5 < mouseX < (3 * windowWidth) / 5) {
    document.getElementById("cursor").style.color = "black";
}

function draw() {
    // background(220);
    fill(walkerX / 4, 100, 50, 1);
    noStroke();
    ellipse(walkerX, walkerY, 800, 800);
    ellipse(walkerA, walkerB, 800, 800);
    walkerX = walkerX + random(speed * -1, speed);
    walkerY = walkerY + random(speed * -1, speed);
    walkerA = walkerA + random(speed * -1, speed);
    walkerB = walkerB + random(speed * -1, speed);

}