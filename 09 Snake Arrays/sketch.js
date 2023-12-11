// Basic Snake Mechanic
// Isaac Munro
// October 11

let points = []; //snake coords
let headLocation;

function setup() {
  createCanvas(windowWidth, windowHeight);
  initSnake();
}

function initSnake(){
  points.push(new Point(10,10));
}

function createPoint(){
  if(keyCode===RIGHT_ARROW){
    headLocation.x += 10;
  }
  else if(keyCode===LEFT_ARROW){
    headLocation.x -= 10;
  }
}

function displaySnake(){
  for(let i =0; i<points.length-1; i++){
    let curr = points[i];
    let right = points[i+1];
    line(curr.x,curr.y,right.x,right.y);
  }
}

function draw() {
  background();
  displaySnake();
}

class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}
