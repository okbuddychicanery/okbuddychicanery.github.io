// Drawing with Loopss
// Isaac Munro
// Sep 25 2023
//
// using loops to draw
let numSegments = 40;
let segmentHeight;
let currentBackground = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = windowHeight/numSegments;
}

function gradient(){
  noStroke();
  for(let i = 0; i < numSegments; i++){
    let y = i * segmentHeight;
    let c = map(y,0,height,0,255);
    fill(c, 30, 150);
    rect(0,y,width,segmentHeight);
  }
}

function selectBackground(){
  if(currentBackground===0){ 
    gradient();
  }
  else if (currentBackground===1) {
    background(255);
  }
  else{
    background(240,50,90);
  }
}



function draw() {
  gradient();
}

function mousePressed(){
  if(mouseButton===LEFT){
    currentBackground -=1;
    if(currentBackground < 0){
      currentBackground =2;
    }
  }
  return false;
}