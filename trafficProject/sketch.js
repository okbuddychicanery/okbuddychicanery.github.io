// Traffic Simulation Project
// Isaac Munro
// October 17, 2023

let testVechicle;
let drawingX = 0;
let drawingY = 300;

let eastbound = [];
let westbound = [];


function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i ++){  // Loop pushing 20 randomized eastbound vehicles
    eastbound.push(new Vehicle(Math.floor(random(1.2)),Math.floor(random(255)),Math.floor(random(255)),Math.floor(random(255)),0,random(170,280),1,5));
  }
  for (let i = 0; i < 20; i ++){  // Same as above for westbound
    westbound.push(new Vehicle(Math.floor(random(1.2)),Math.floor(random(255)),Math.floor(random(255)),Math.floor(random(255)),width,random(320,430),0,5));
  }
}




function drawRoad(){  // Function draws black road with white lines
  fill(0,0,0);
  rect(0,height/4, width, height/2);  // draws black part of road
  while (drawingX < width){
    stroke(255,255,255);
    line(drawingX,drawingY, drawingX+10, drawingY); // draws white lines
    drawingX += 20;
  }
  drawingX = 0;
}

class Vehicle{

  constructor(type,colorR,colorG,colorB,x,y,dir,xSpeed){   
    this.type = type;
    this.colorR = colorR; // individual rgb variables
    this.colorG = colorG;
    this.colorB = colorB;
    this.x = x;
    this.y = y;
    this.dir = dir; //direction
    this.xSpeed = xSpeed;

   

  }

  // FUNCTIONS
  
  
  display(){  // colors vehicles and draws it based on its type
    fill(this.colorR,this.colorG,this.colorB);
    if(this.type === 0){  //car
      circle(this.x,this.y, 30);
    }
    else if (this.type === 1){  //truck
      rect(this.x,this.y, 30, 30);
    }


  }

  move(){
    if (this.dir === 0){  // Checks if direction is left (0)
      this.x -= this.xSpeed;
      if (this.x <0){
        this.x = width; // resets vehicle to start if beyond canvas
      }
    }

    else if (this.dir === 1){ // checks if direction is right
      this.x += this.xSpeed;
      if(this.x > width){
        this.x = 0;
      }
    }
   
  }


  speedUp(){
    this.xSpeed +=1;  // function to increase vehicle speed
    if (this.xSpeed > 15){
      this.xSpeed = 10;
    }
  }

  speedDown(){  // function to decrease vehicle speed
    this.xSpeed -=1;
    if (this.xSpeed < 0){
      this.xSpeed = 5;
    }
  }


  changeColor(){  // randomizes vehicle color
    this.colorR = random(255);
    this.colorG = random(255);
    this.colorB = random(255);
    fill(this.colorR,this.colorG,this.colorB);
  }
 
  action(){ 
    this.move();
    
    let rand1 = Math.floor(random(99));  // variables for random calling of vehicle functions
    let rand2 = Math.floor(random(99));
    let rand3 = Math.floor(random(99));


    if (rand1 === 10){  // 1% chance per frame for speedup,speeddown adn changecolor
      this.speedUp();
    }
   

    if (rand2 === 10){
      this.speedDown();
    }
    

    if (rand3 === 10){
      this.changeColor();
    }
   

    this.display();
    rand1 = Math.floor(random(99));
    rand2 = Math.floor(random(99)); // rerolls random variables
    rand3 = Math.floor(random(99));
  }


}

function mousePressed(){  // intention is to add vehicle fg mouse is pressed (west if shift also pressed), doesnt work
  if (keyIsPressed() === true && keyCode === 16){
    eastbound.push(new Vehicle(Math.floor(random(1.2)),Math.floor(random(255)),Math.floor(random(255)),Math.floor(random(255)),0,random(170,280),1,5));

  }
  else{
    westbound.push(new Vehicle(Math.floor(random(1.2)),Math.floor(random(255)),Math.floor(random(255)),Math.floor(random(255)),0,random(170,280),1,5));
  }
}
 

function draw() {
  background(220);
  drawRoad();
  for (let ev of eastbound){  
    ev.action();  // calls vehicle class functions
  }
  for(let wv of westbound){
    wv.action();
  }
}
