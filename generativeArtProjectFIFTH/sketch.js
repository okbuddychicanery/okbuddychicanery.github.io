// Generative Art Project
// Isaac Munro
// October 27, 2023
//

// very similar to previous but instead with circles generated within set value ranges
//sort of what I was originally going for

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
  
  let drawingX = 0;
  let drawingY = 0;
  translate(width/2,height/2);
  let counter = 0;
  for (let i = 0; i < 200; i++){
    let randDia = 40;
    if (counter < 6){
      fill(colors[0]);
      circle(random(60), random(60), randDia, );
    }
    else if (counter > 5 && counter < 20){
      fill(colors[1]);
      circle(random(60,100), random(60,100), randDia+30, );
    }
    else if (counter > 19 && counter < 35){
      fill(colors[2]);
      circle(random(100,250), random(100,250), randDia+90, );
    }
    else if (counter > 34 && counter < 60){
      fill(colors[3]);
      circle(random(250,350), random(250,350), randDia+160, );
    }
    else if (counter> 59 && counter < 80){
      fill(colors[4]);
      circle(random(350,500), random(350,500), randDia+250, );
    }
    else if (counter > 79){
      counter = 0;
    }


    counter +=1;
    
    
    
    rotate(random(4));
    

  }
}

