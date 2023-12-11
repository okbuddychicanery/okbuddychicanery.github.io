// Color Demo
// Isaac Munro
// Oct 25, 2023
//

let rectWidth = 200;
let rectHeight = 15;
let colors = ["#0B486B", "#3B8686", "#79BD9A", "#A8DBA8", "#CFF09E"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width*0.1);
  drawColHSB(width*0.4);
  drawColCustom(width*0.7);
}

function drawColHSB(xPos){
  colorMode(HSB, 360);
  for(let y=0; y<height; y+=rectHeight){
    fill(y/3 % 360, 150, 270);
    rect(xPos,y,rectWidth, rectHeight);
  }

}

function drawColCustom(xPos){
  colorMode(RGB);
  let counter =0;
  for(let y =0; y <height; y+= rectHeight){
    //fill(colors[counter % 5]);

    fill(colors[Math.floor(random(colors.length))]);
    rect(xPos,y,rectWidth,rectHeight);
    //counter++;
  }

}



function drawColRGB(xPos){
  colorMode (RGB);
  for(let y=0; y<height; y+=rectHeight){
    fill(random(255), random(255), random(255));
    rect(xPos,y,rectWidth, rectHeight);
  }

}