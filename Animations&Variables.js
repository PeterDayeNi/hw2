function setup() {
  createCanvas(600, 600);
}

var ball = 0;
var ballSpeed = 5;
var ballChangeX = ballSpeed;

var ball2 = 100;
var ballSpeed2 = 30;
var ballChangeX2 = ballSpeed2;

function draw() {
  background(220);
  fill(ball/4, 20, 30);
  ellipse(width/2, ball, ball/2);
  ellipse(ball2, ball2, (width-ball)/4);
  ball = ball + ballChangeX;
  ball2 = ball2 + ballChangeX2;

  // Check if ball is off right hand side of screen
  if (ball >= width) {
    ballChangeX = -ballSpeed;
  }
  if (ball2 >= width) {
    ballChangeX2 = -ballSpeed2;
  }

  // Check if ball is off left hand side of screen
  if (ball <= 0) {
    ballChangeX = ballSpeed;
  }
  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
}
