// Colors and Canvases
// Isaac Munro
// Sep 13 2023

let ballX, ballY, ballSize = 100;

let xSpeed = 5;
let ySpeed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width/2;
  ballY - height/2;
}

function draw() {
  background(220);
  moveAndDrawBall();
  drawTriangle();
}

function drawTriangle(){
  // draw triangle at cursor
  triangle(mouseX, mouseY -20, mouseX -10, mouseY+10, mouseX+10, mouseY+10);
}

function moveAndDrawBall(){
  // update position
  ballX+= xSpeed;
  ballY+= ySpeed;


  // render ball
  fill(0);
  circle(ballX, ballY, ballSize);
}