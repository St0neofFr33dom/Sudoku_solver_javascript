import checkBlanks from "../models/checkBlanks.js";
import potentialAnswers from "../models/potentialAnswers.js";
import solver from "../models/solver.js";

let placeholderFiendish = [
  [0, 0, 0, 8, 0, 0, 0, 0, 5],
  [0, 0, 9, 0, 3, 0, 2, 0, 0],
  [0, 6, 0, 0, 2, 5, 0, 0, 9],
  [8, 0, 0, 0, 7, 0, 0, 0, 0],
  [0, 3, 2, 6, 9, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 1, 9, 0],
  [0, 2, 0, 0, 0, 3, 0, 0, 1],
  [0, 0, 0, 0, 0, 4, 0, 5, 0],
  [9, 0, 8, 0, 0, 0, 3, 0, 7],
];

//Puzzle 505,398,406
let placeholderHard = [
  [0, 0, 0, 0, 0, 0, 8, 0, 1],
  [0, 0, 2, 0, 8, 0, 0, 0, 0],
  [0, 5, 0, 0, 4, 9, 0, 2, 0],
  [6, 0, 0, 4, 0, 0, 3, 7, 0],
  [4, 0, 0, 0, 7, 0, 0, 0, 6],
  [0, 8, 7, 0, 0, 2, 0, 0, 9],
  [0, 1, 0, 3, 6, 0, 0, 9, 0],
  [0, 0, 0, 0, 1, 0, 5, 0, 0],
  [2, 0, 5, 0, 0, 0, 0, 0, 0],
];

//Puzzle 35,162,464
let placeholderEasy = [
  [0, 0, 0, 0, 0, 2, 0, 3, 1],
  [0, 2, 0, 6, 0, 1, 7, 8, 0],
  [0, 0, 8, 0, 9, 0, 6, 0, 0],
  [0, 9, 1, 0, 2, 0, 5, 7, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 5, 3, 0, 6, 0, 1, 4, 0],
  [0, 0, 4, 0, 5, 0, 8, 0, 0],
  [0, 6, 2, 3, 0, 8, 0, 5, 0],
  [8, 1, 0, 4, 0, 0, 0, 0, 0],
];

//||CHANGE THE PUZZLE TO SOLVE HERE||
let puzzle = placeholderHard;

let emptySpaces = checkBlanks(puzzle);
while (emptySpaces > 0) {
  let currentBlanks = emptySpaces
  console.log(`${emptySpaces} boxes need to be filled in`);
  let guesses = potentialAnswers(puzzle);
  puzzle = solver(puzzle,guesses);
  emptySpaces = checkBlanks(puzzle)
  if(currentBlanks === emptySpaces){
    break
  }
}
console.log(puzzle);
console.log("Finished!");
