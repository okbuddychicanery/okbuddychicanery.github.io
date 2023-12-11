// Generative Art Project
// Isaac Munro
// October 27, 2023
//

// Second iteration of divergent lines closer to my original plan
// all lines originate from one point and spread across the screen


function setup() {
  createCanvas(2000, 2000);
  divergentLines2();
  
}

let startx = 0;
let starty = 1000;  // starts in middle of canvas
let destX = 100;  // initial destinationx for lines
 

function divergentLines2(){
  let yVariation = 0;
  
  while(destX < 2000){
    line(startx, starty, random(startx,destX), starty+yVariation);  // divergent line
    destX += 5; // increments destinationx

    let choice = Math.floor(random(2)); // randomly increases or decreases y variable for lines
    if (choice === 0){
      yVariation +=10;
    }

    else if (choice === 1){
      yVariation -=10;
    }
  }
}