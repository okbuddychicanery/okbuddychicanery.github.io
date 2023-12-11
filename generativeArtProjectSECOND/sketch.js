// Generative Art Project
// Isaac Munro
// October 27, 2023
//

//Attempting to create consecutive vertical lines with randomly increasing variations

function setup() {
  createCanvas(2000, 2000);
  divergentLines();
  
}


function divergentLines(){
  let minY = 500; // initial max/mins for lines
  let maxY = 510;
  let xVariation = 15;  
  for(let x = 0; x < width; x = x+2){
    line(x,random(minY), x+random(xVariation), random(maxY)); //generates divergent line
    let choice = Math.floor(random(2)); // variable to choose increase or decrease of xvariation
    if(choice === 0){
      xVariation -= 1;
      if(xVariation < 0){ // resets if variation too low
        xVariation = 5;
      }
    }
    else if(choice ===1){
      xVariation +=1;
      if(xVariation > 30){  // resets if too high
        xVariation = 20;
      }
    }
    minY -=1; // gardually increases minimum and maximum possible y


    maxY +=1;
  }
}