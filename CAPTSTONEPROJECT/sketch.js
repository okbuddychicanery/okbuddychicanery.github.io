// Capstone Project: One Finger Death Punch Clone
// Isaac Munro
// Due End of Semester 

let startTime;
let elapsedTime;


let playerHP = 20;
let rightside = [];
let leftside = [];
let killcount = 0;


function setup() {
  startTime = millis();
  createCanvas(1000, 1000);
  // for(let i =0; i < 7; i++){
  //   leftside.push(new Enemy(0, 0, height/2, 0, 20, 2));
  // }
  // for(let i =0; i < 7; i++){
  //   rightside.push(new Enemy(0, width, height/2, 1, 20, 2));
  // } 
  document.addEventListener("contextmenu", event => event.preventDefault()); // disable default Rclick
}

function draw() {
  background(220);
  drawTerrain();
  
  destroyEnemies();
  elapsedTime = millis()-startTime;
  if(elapsedTime > 2000){
    leftside.push(new Enemy(0, 0, height/2, 0, 20, 2));
    startTime = millis();
  }
  
  
  if(playerHP ===0){  
    gameOver();
  }
  else{
    for(let rs of rightside){
      rs.action();
    }
    for(let ls of leftside){
      ls.action();
    }
  }
  
}


function drawTerrain(){ // creates terrain for Player + npcs to exist on
  strokeWeight(2);
  rect(0,height/2, 1000, height*0.6);

  fill(255);
  rect(300, width/2, 400, 20);  // zone to kill enemies
  fill(0,0,0);
  text(str(playerHP), width/2, height*0.3);
  text(str(killcount), width*0.2, height*0.3);
}

class Enemy{  // base class for enemy npcs

  constructor(type,x,y,dir,size,speed,){
    this.type = type;
    this.x = x;
    this.y = y;
    this.dir = dir; // moving direction 
    
    this.speed = speed;
    this.alive = true;
    this.pause = false;
  }

  // class functions

  display(){  // shows enemies on screen
    fill(0,0,0);
    if(this.type===0){  // basic 1hp guy
      fill(0,255,0);
      circle(this.x,this.y-10, 15);
      fill(255,0,0);
      rect(this.x-10, this.y, 20, 20); // hp block
      fill(0,0,0);

    }

  }



  move(){
    if(this.dir ===0){  // direction moving right
      this.x+= this.speed;
      if(this.x>490){ // checks if enemy is within 10px of Player, does damage and destroys if yes
        playerHP -=1;
        this.alive = false;
      }

    }
    else if (this.dir===1){
      this.x -= this.speed;
      if(this.x < 510){
        playerHP -=1;
        this.alive = false;
      }
    }
  }

  action(){
    if(this.pause === false){
      this.move();
    }
    
    this.display();

    
  }

}

function destroyEnemies(){ // iterates through arrays splicing dead enemies
  for(let i = 0; i <rightside.length; i++){
    if(rightside[i].alive === false){
      rightside.splice(i,1);
    }
    
  }
  for(let i = 0; i <leftside.length; i++){
    if(leftside[i].alive === false){
      leftside.splice(i,1);
    }
    
  }
}

function gameOver(){  // kills all enemies, display game over text
  rightside =[];
  leftside = [];
  textSize(20);
  text("GAME OVER", width/2, height/2);
}

function mouseClicked(){  // kills enemy on click if within kill area
  if(mouseButton ===LEFT){
    for(let i = 0; i <leftside.length; i++){
      if(leftside[i].x > 300){ 
        leftside.splice(i,1);
        killcount+=1;
        break;
      }
      else{
        playerHP-=1;
      }
    }
  }

  else{
    for(let i = 0; i <rightside.length; i++){
      if(rightside[i].x < 700){
        rightside.splice(i,1);
        killcount+=1;
        break;
      }
      else{
        playerHP-=1;
      }
    }
  }
  

  
}