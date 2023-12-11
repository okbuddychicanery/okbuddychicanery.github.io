// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(3000, 1000);
  noLoop();
}

function draw() {
  background(0);
  for(let i =0; i < 1000; i++){
    let x = random(width);
    let y = random(height);
    if(y < height*0.7 && y >height*0.3){
      circle(x,y,10);
    }
  }

  
}

function keyPressed(){
  if(key ==="s"){
    save("myImage.png");}
  
}