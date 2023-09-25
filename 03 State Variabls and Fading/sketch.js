// State Variables and Fading
// Isaac Munro
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mouseSide;
let fillValue = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}


function updateMouseState(){    // determine if mouse is left or right
  if (mouseX > width/2){
    mouseSide = "right";
  }
  else {
    mouseSide = "left";
  print(mouseSide);
  
  }
}

function renderSquares(){   //draw two rectangles on either side
  if(mouseSide==="left"){
    fill(0);
  }
  else {
    fill(255);
  }

  rect(0,0,width/2,height);

  if (mouseSide==="right"){
    fillValue = 0;
  }
  else{
    fillValue+=10
  }

  fillValue = constrain(fillValue, 0, 255);

  fill(fillValue);
  rect(width/2,0,width/2,height);

}