// mouseDistanceProject
// Isaac Munro
// Sep 20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let nodeColors = [];  // ["red". "blur", "gtrrn"]
let colorIndex = 1;  




function setup() {
  createCanvas(windowWidth, windowHeight);
  initColors();
}

function draw() {
  background(220);
  renderNodes();

}

function initColors(){
  nodeColors.push(color("red"));
  nodeColors.push(color("magenta"));
}



function renderNodes(){
  // draw two circle and connect them with a line
  fill(nodeColors[colorIndex]);
  circle(width/2, height/2, 20);
  circle(mouseX, mouseY, 20);

  line(width/2, height/2, mouseX, mouseY);
}

function mouseWheel(event){

  print(event.delta);
  if(event.delta < 0){
    colorIndex +=1;
      if( colorIndex > nodeColors.length-1){
        //gone past end of array
        colorIndex =0
        }
  }
}