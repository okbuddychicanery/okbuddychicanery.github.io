// Final Review
// Isaac Munro
// Jan 17 2024
//

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages =[];

let spirals = [];

let gorillaX, gorillaY;
let idleIndex=0; let swipeIndex = 0;

function preload(){
  for(let i = 0; i < 16; i ++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/Circle Animation0" + i + ".png"));
    }
    
    else{
      spiralImages.push(loadImage("assets/Circle/Circle Animation" + i + ".png"));
    }
  }
  for(let i = 1; i < 7; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle" +i+ ".png"))
  }
  for(let i = 1; i < 7; i++){
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" +i+ ".png"))
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  gorillaX=width/2;
  gorillaY=height/2;
}

function draw() {
  background(220);
  if(keyIsPressed && key === " "){
    image(gorillaSwipe[swipeIndex],gorillaX,gorillaY);
    if(frameCount%4 ===0){
      swipeIndex++;
      if(swipeIndex>5) swipeIndex =0;
    }
    
  }
  else{
    image(gorillaIdle[idleIndex], gorillaX, gorillaY);
    if(frameCount%10 ===0){
      idleIndex++;
      if(idleIndex>5) idleIndex =0;
    }
    
  }
}
