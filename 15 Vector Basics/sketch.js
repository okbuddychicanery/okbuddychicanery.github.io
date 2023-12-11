// Vector Basics
// Isaac Munro
// November 1st 2023

let movers =[];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX,mouseY));
  
}





function draw() {
  background(220);
  for(let m of movers){
    m.move();
    m.display();
  }
}


class Mover{

  constructor(x,y){
    this.position = createVector(x,y);
    this.velocity = createVector(random(-3,3), random(-5,5));

    this.s = 20;
  }

  move(){
    this.position.add(this.velocity);

  }

  display(){
    push();
    translate(this.position.x, this.position.y);
    circle(0,0,this.s);
    pop();
  }


}