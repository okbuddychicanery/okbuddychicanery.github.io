// 3D Primitives and CSS Centering
// Isaac Munro
// November 23 2023



function setup() {
  createCanvas(400, 400,WEBGL);
}

function draw() {
  background(0);
  //translate(50,50);
  angle= map(mouseX,0,width,-120,120);
  //rotateY(radians(frameCount));
  //box(100);
  boxes(70);
}
let angle = 5;

function boxes(size){
  if(size>10){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);
    boxes(size*0.8);
  }
}