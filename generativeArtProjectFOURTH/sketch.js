// Generative Art Project
// Isaac Munro
// October 27, 2023
//

//culmination of divergence + incorporating stuff i tried in my first attempt
//looks kind of like an optical illusion when camera centered on origin

let colors = ["#FFE5F9", "#EFD7FA", "#CFACF7", "#8D6CBF", "#8D6CBF"];
strokeWeight = 3;
function setup() {
  createCanvas(2000, 2000);
  hollowPurple();
  
}

let startx = 0;
let starty = 1000;
let destX = 100;


function hollowPurple(){
  
  let drawingX = 250; // increasing creates a larger secondary circle of lines, setting to 0 erases the circle
  let drawingY = 0;
  translate(width/2,height/2);  // moves drawing point to center
  let counter = 0;  //variable for choosing colors
  for (let i = 0; i < 300; i++){
    
    if (counter < 6){
      stroke(colors[0]);
      line(drawingX, drawingY, drawingX-100, drawingY - 5); // some lines extend further into the screen than others
    }
    else if (counter > 5 && counter < 20){
      stroke(colors[1]);
      line(drawingX, drawingY, drawingX-500, drawingY - 5);
    }
    else if (counter > 19 && counter < 35){
      stroke(colors[2]);
      line(drawingX, drawingY, drawingX-750, drawingY - 5);
    }
    else if (counter > 34 && counter < 60){
      stroke(colors[3]);
      line(drawingX, drawingY, drawingX-1000, drawingY - 5);
    }
    else if (counter> 59 && counter < 80){
      stroke(colors[4]);
      line(drawingX, drawingY, drawingX-1200, drawingY - 5);
    }
    else if (counter > 79){
      counter = 0;
    }


    counter +=1;
    
    
    
    rotate(random(4));  //random element, makes different combination each time
    

  }
}

