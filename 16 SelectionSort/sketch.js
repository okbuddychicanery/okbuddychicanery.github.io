// Selection Sort
// Isaac Munro
// November 3rd
//

let values =[];
const ARRAY_SIZE =20;


function setup() {
  noCanvas(); 
  populateArray();
  print(values);
  selectionSort();
  print(values);
}


function populateArray(){
  for(let i =0; i < ARRAY_SIZE; i++){
    values.push(floor(random(1000)));

  }
}

function selectionSort(){
  for(let index = 0; index<values.length; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for(let searchIndex = index+1; searchIndex < values.length; searchIndex++){
      let cur = values[searchIndex];
      if(cur < minimum){
        minimum =cur;
        minimumLoc = searchIndex;
      }
    }
    let storage = values[index];
    values[index] = values[minimumLoc];
    values[minimumLoc] = storage;
  }
}