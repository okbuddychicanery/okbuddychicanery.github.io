// Libraries
// Isaac Munro
// Dec 01 2023

let scribble;
let circleD = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
}

function draw() {
  rectMode(CORNERS);
  background(220);
  if(collideRectCircle(mouseX,mouseY,120,60,width/2,height/2,circleD)){
    fill(255,140,7);
  }
  else{
    fill(255);
  }

  circle(width/2,height/2,circleD);

  scribble.scribbleRect(mouseX,mouseY,120,60);
}
