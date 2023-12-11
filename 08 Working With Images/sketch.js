// Working with Images
// Isaac Munro
// October 10, 2023
// 

let movedY;

let lionL, lionR;
let facing = "left";

let pinImages =[];
let currentPin = 0;

function preload(){
  // occurs before setup ensuring loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for (let i = 0; i < 9; i ++ ){
    pinImages.push(loadImage("assets/pin-0" +i + ".png"));
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  stepOne();
  displayPin();
}


function displayPin(){
  image(pinImages[currentPin], width/2, height/2);
  currentPin ++;
  
}

function stepOne(){
  if (movedX > 0){
    image(lionR, mouseX, mouseY);
  }
  else{
    image(lionL, mouseX, mouseY);
  }
}