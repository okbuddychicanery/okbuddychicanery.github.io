// Farm Game Demo
// Isaac Munro
// Nov 15 2023


let tiles = [];

let level = [
  [0,0,0,1,0],
  [0,1,0,0,0],
  [0,0,1,0,0],
  [1,0,0,0,0],
  [0,1,0,0,0]
];

const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;


function preload(){

  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/"+ i + ".png"))
  }

}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2;
}


function renderBoard(){
  for(let y = 0; y < ROWS; y++){
    for(let x = 0; x < COLUMNS; x++){
      let currentItem = level[y][x];
      image(tiles[currentItem],x*TILE_SIZE, y*TILE_SIZE);
    }
  }



}

function swap(x1,y1,x2,y2){

  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(level[playerY-1][playerX]===0){
      swap(playerX,playerY,playerX,playerY-1);
      playerY--;
    }
    else if(level[playerY-1][playerX]===1){
      if(playerY > 1 && level[playerY-2][playerX]===0){
        swap(playerX,playerY-2,playerX,playerY-1);
        swap(playerX,playerY,playerX,playerY-1);
        playerY--;
      }
    }
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX,playerY,playerX,playerY+1);
    playerY++;
  }
  if(keyCode === LEFT_ARROW){
    swap(playerX,playerY,playerX-1,playerY);
    playerX--;
  }
  if(keyCode === RIGHT_ARROW){
    swap(playerX,playerY, playerX+1, playerY);
    playerX++;
  }

}




function draw() {
  renderBoard();
}
