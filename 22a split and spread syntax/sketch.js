// Project Title
// Isaac Munro
// Date

let grid, img, rows, cols, colorMap;

function preload(){
  img = loadStrings("assets/image.txt");

}


function setup() {
  cols = img[0].length;
  rows = img.length;
  createCanvas(windowWidth,windowHeight);



  grid = [];
  for (let i = 0; i < img.length; i++){
    grid.push([...img[1]]);

  }
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"]
  ]);

}

function renderGrid(){
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  for(let x =0; x<cols; x++){
    for(let y=0; y<rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function windowResized(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  renderGrid();
}

// function part1(){
//   print("SPLIT INTO WORDS");
//   let stringSplit = textFile[0].split(" ");
//   print(stringSplit);

//   print("SPLIT INTO CHARS ");
//   let stringSplit2 = textFile[1].split("");
//   print(stringSplit2);

//   print("SPREAD SYNTAX FOR CHARS");
//   let stringSpread = [...textFile[1]];
//   print(stringSpread);
// }