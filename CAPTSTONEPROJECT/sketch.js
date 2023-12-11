// Capstone Project: One Finger Death Punch Clone
// Isaac Munro
// Due End of Semester 


let playerHP = 20;
let rightside = [];
let leftside = [];

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  drawTerrain();
}


function drawTerrain(){ // creates terrain for Player + npcs to exist on
  strokeWeight(2);
  line(0,height/2, 1000, width/2);
}

class Enemy{  // base class for enemy npcs

  constructor(type,x,y,dir,size,speed,alive){
    this.type = type;
    this.x = x;
    this.y = y;
    this.dir = dir; // moving direction
    this.size = size;
    this.speed = speed;
    this.alive = true;
  }

  // class functions

  display(){  // shows enemies on screen
    fill(0,0,0);
    if(this.type===0){  // basic 1hp guy
      fill(0,255,0);
      circle(this.x,this.y, this.size);
      fill(255,0,0);
      rect(this.x, this.y-30, this.size, this.y-5); // hp block

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
    this.move();
    this.display();

    
  }


}

function destroyEnemies(array){ // iterates through array splicing dead enemies
  for(let i = 0; i < array.length; i++){
    if(Enemy.alive === false){
      array.splice(i,1);
    }
  }
}