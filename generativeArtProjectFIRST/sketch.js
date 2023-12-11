// Generative Art Project
// Isaac Munro
// October 27, 2023
//

//First attempt at something i revisit later than I spent too much time 
//trying to figure out. But you can see the base for the later project

function setup() {
  createCanvas(2000, 2000);
  lapseBlue(80);
}



function lapseBlue(circleSize){
  let rAmount = 500;
  for(let i = 0; i < 18; i++){
    push();
    translate(rAmount,rAmount);
    rotate(radians(500));
    circle(200,200,circleSize);
    
  }
}