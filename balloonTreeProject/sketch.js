let scale2 = 15;
function setup() {
  createCanvas(500, 500);
  
}
function draw() {
  background(255);
  drawTree(width/2, height*0.9, 90, 6);
  
}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale2); //calculate endpoints of current branch

    let y2 = y1 - (sin(radians(angle))*depth*scale2); //using trig ratios. Get shorter based on depth
    


    drawLine(x1, y1, x2, y2, depth);
    //for a 3-branch tree:
    drawTree(x2, y2, angle-mouseX, depth-1);
    drawTree(x2, y2, angle+mouseX, depth-1);
    drawTree(x2,y2, angle, depth-1);
    if(depth < 5){  // draws leaves randomly scaled by depth
      strokeWeight(depth*1.5);  //scales strokeweight by depth. needs reworking when I have time
      if (depth > 4){
        drawLeaf(x2,y2,random(depth+20));
      }
      else if(depth < 4){
        
        drawLeaf(x2,y2,random(depth+15));
      }
      else if (depth < 2){
        
        drawLeaf(x2,y2,random(depth+10));
      }
      else{
        
        drawLeaf(x2,y2,random(depth+5));
      }
    }
    
    
}
}

function drawLeaf(x,y,d){ // draws randomly coloured leaf
  fill(random(255), random(255), random(255));

  circle(x,y,d);
  
  



}