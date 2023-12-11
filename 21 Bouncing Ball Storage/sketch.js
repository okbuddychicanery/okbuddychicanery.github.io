// Bouncing Ball Storage
// Isaac Munro
// Nov 27 2023

let ball;
let totalbounces = 0;
let bounceSound;
let music;

function preload(){
  music = loadSound("assets/background.mp3");
  bounceSound = loadSound("assets/bounceSound.wav");
  


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2, height/2);

  music.loop();
}

function draw() {
  background(220);
  
  ball.move();
  ball.display();
}


class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6),random(-6,6));

    
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  move(){
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x>width){
      this.vel.x *=-1;
      totalbounces+=1;
      bounceSound.play();
    }
    if(this.pos.y < 0 || this.pos.y>height){
      this.vel.y *= -1;
      totalbounces +=1;
      bounceSound.play();
    }
  }



}