var ball;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    ball = new Ball();
}

function draw() {
    background(250);
    fill(100,100,255);
    noStroke();
    ball.display();
    noFill();
    stroke(0);
    strokeWeight(3);
    rect(0,0,width-2, height-2);
}
