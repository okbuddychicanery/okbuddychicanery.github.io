// Primitive Paint Project
// Isaac Munro
// Sep 14, 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colorRandMax = 255;


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textFont("Helvetica");
  text("Isaac Munro", 50, 50); // draws my name
}


function draw() {    // this codeblock draws a rectangle of random colour, size and location every half a second
  frameRate(2); // sets fps (basically drawing rate) to 2
  fill(random(colorRandMax), random(colorRandMax), random(colorRandMax));
  rect(random(windowWidth), random(windowHeight), random(80), random(80)); 

}


function keyPressed(){     // this codeblock draws a random colour shape at mouse coords when a,s, or d are pressed
  if (key ===  "a") {
    fill(random(colorRandMax), random(colorRandMax), random(colorRandMax)); // fills with random colour
    rect(mouseX, mouseY, 60, 60); // draws rectangle at cursor if a is pressed
  }

  else if (key === "s") {
    fill(random(colorRandMax), random(colorRandMax), random(colorRandMax));
    circle(mouseX,mouseY, 60); // above but circle if s pressed
  }

  else if (key === "d") {
    fill(random(colorRandMax), random(colorRandMax), random(colorRandMax));
    triangle(mouseX,mouseY,mouseX-30,mouseY+30,mouseX+30,mouseY+30); // above but triangle if d pressed
  }

  else if (keyCode === 32){ // 32 is keyCode for spacebar
    clear();      // clears canvas completely
    fill(0,0,0);
    textSize(20);
    textFont("Helvetica");
    text("Isaac Munro", 50, 50); // redraws name
  }
}