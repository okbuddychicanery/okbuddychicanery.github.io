// Cubic Disarray
// Isaac Munro
// Oct 24, 2023
//

let squareSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(2);
  rectMode(CENTER);

  noFill();
  drawRectangles();
}


function drawRectangles(){
  for(let x = squareSize/2; x < width-squareSize/2; x+=squareSize){
    for(let y = squareSize/2; y <height-squareSize/2; y += squareSize){
      push();
      translate(x,y);
      let rAmount = map(y,0,height,0,102);


      rotate(radians(random(-rAmount,rAmount)));
      square(0,0,squareSize);
      pop();
    }
  }

}