// Art WarmUp - Vertical-Horizontal Recreation
// Isaac Munro
// October 26th, 2023
//Imitating the first image on canvas, Vertical Horizontal no.3


function setup() {
  createCanvas(1000, 1000);
  verticalHorizontal(width/2,height/2);
}



function verticalHorizontal(x,y){
  let lineX = x;  // sets initial coords at centre of canvas
  let lineY = y;
  for(let i = 0; i < 200; i++) {  // iterates code 200 times
    let newPos = random(150,500); //random location for x or y change
    let decision = Math.floor(random(4.2));
    if (decision === 1){  // checks if it is x+, y+, x-, or y- in descending order
      
      line(lineX, lineY, newPos, lineY);
      lineX = newPos;
      if (lineX > width){ // resets line coords if beyond canvas
        lineX -= newPos;
      }
    }

    else if (decision === 2){
      
      line(lineX, lineY, lineX, newPos);
      lineY = newPos;
      if (lineY > height){
        lineY -= newPos;
      }
    }

    else if (decision === 3){
      
      line(lineX, lineY, newPos, lineY);
      lineX = newPos;
      if (lineX < 0){
        lineX +=newPos;
      }
    }

    else if (decision === 4){
      
      line(lineX, lineY, lineX, newPos);
      lineY = newPos;
      if (lineY < 0){
        lineY += newPos;
      }
    }



  }
}