// Inheritance
// Isaac Munro
// Nov 29 2023


let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i =0; i < 10; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
  }
  for(let i =0; i < 10; i++){
    objects.push(new CircleObject(random(width), random(height), random(20,40)));
  }
  for(let i =0; i < 10; i++){
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();

  }
}

class AnimatedObject{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size =1;
  }
  
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }

  display(){
    strokeWeight(4);
    point(this.x,this.y);
  }
}

class CircleObject extends AnimatedObject{
  constructor(x,y,d){
    super(x,y,);
    this.size = d;

  }

  display(){
    strokeWeight(2);
    circle(this.x,this.y,this.size);
  }
}

class LineObject extends AnimatedObject{
  constructor(){
    super();
    
  }

  move(){
    super.move();
    this.x +=5;
    if(this.x > width){
      this.x =0;
    }
  }
  display(){
    if(mouseIsPressed){
      strokeWeight(10);
    }
    else{
      strokeWeight(2);
    }
    line(this.x,this.y,this.x+15,this.y);
  }


}