// Puzzle Game Starter
// Isaac M
// Nov 06 2023



let grid =
[[0,  0,  0,   0,  0],
 [0,   0,    0,    255,  0  ],
 [0, 0,  255,    255,  255  ],
 [0, 0,    0,    255,  0 ]];


const NUM_ROWS = 4;  const NUM_COLS = 5;
let rectWidth, rectHeight, row, col;



function randomBoard(){
  // randomly redraws the colors on the game grid
  
  for(let x = 0; x < NUM_COLS; x++){ 
    
    for(let y = 0; y < NUM_ROWS; y++){
      let choice = Math.floor(random(2));
      if (choice ===1){
        grid[y][x] = 0;
      }
      else if (choice ===0){
        grid[y][x] = 255;
      }
    }
    
  }
}



function setup() {
  rectWidth = 50;  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight);
  randomBoard();
}
function draw() {
  row = getCurrentY();   col = getCurrentX();
  background(220);
  renderGrid();
  print(col,row); //prints x,y
  fill(255,0,0);
  circle(mouseX,mouseY,5);
  victoryCheck();
}

function mousePressed(){
  //when the mouse is clicked, flip the value at the current
  //col,row + also flip 4 cardinal neighbours (North, S, E, W)

  // flip @ mouseposition
  
  if (keyIsPressed === true && keyCode === SHIFT){  // Cheat Code, if shift is pressed flip only mouse square
    flip(col,row);
  }
  // flip the 4 neighbours ↑↓→←
  else{
    flip(col,row);
    if(col < NUM_COLS-1) flip(col+1, row); //RIGHT NEIGHBOUR
    if(row > 0) flip(col,row-1); //UP NEIGHBOUR
    if(col > 0) flip(col-1, row); //LEFT 
    if(row < NUM_ROWS-1) flip(col, row+1) // DOWN
    
  }
  
  
  
}

function flip(col, row){
  //at a given x,y, flip the value in the 2D array
  //0→255   255→0
  if(grid[row][col] === 0) grid[row][col] = 255;
  else grid[row][col] = 0;
}

function getCurrentX(){ //determine current column mouse is in, and return
  let constrainMouseX = constrain(mouseX, 0, width-1);
  return floor(constrainMouseX/rectWidth);  
}
function getCurrentY(){ //determine current row mouse is in, and return
  let constrainMouseY = constrain(mouseY, 0, height-1);
  return floor(constrainMouseY/rectHeight);
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D array for the corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //x:    0,   1,   2,  3,   4
      //posx  0   50, 100, 150,200   expression? x→posx
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function victoryCheck(){
  let fullcheckW = 0;
  let fullcheckB = 0;
  for(let x = 0; x < NUM_COLS; x++){ // goes through grid adding 1 to each check variable for corresponding square 
    for(let y = 0; y < NUM_ROWS; y++){
      if (grid[y][x] === 0){
        fullcheckB +=1;
      }
      else{
        fullcheckW +=1;
      }
    }
    
  }
  if(fullcheckW === grid.length*grid[0].length || fullcheckB === grid.length*grid[0].length){ // checks if white or black are full
    text("You won!", width/2,height/2); // if one is, returns win message
    
  }
  
}

