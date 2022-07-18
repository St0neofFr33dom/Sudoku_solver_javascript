import makeBox from "../models/makeBox.js";
import makeColumn from "../models/makeColumn.js";
import checkBlanks from "../models/checkBlanks.js";
import compareGuesses from "../models/compareGuesses.js"
import removeGuesses from "../models/removeGuesses.js"


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
let puzzle = placeholderEasy;

//initialising the grid the logic will be working with
let guesses = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

//Produces an array of the possible inputs for the puzzles
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    if (puzzle[row][col] === 0) {
      let possibilities = [];
      for (let num = 1; num <= 9; num++) {
        if (puzzle[row].includes(num)) {
          continue;
        }
        let column = makeColumn(col, puzzle);
        if (column.includes(num)) {
          continue;
        }
        let box = makeBox(row, col, puzzle);
        if (box.includes(num)) {
          continue;
        }
        possibilities.push(num);
      }
      if (possibilities.length === 0) {
        console.log("Error");
      } else {
        guesses[row][col] = possibilities;
      }
    }
  }
}





let emptySpaces = checkBlanks(puzzle);
console.log(`${emptySpaces} boxes need to be filled in`);
while (emptySpaces > 0) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        console.log(
          `At row: ${row + 1} and col :${col + 1}, the possible solutions are ${
            guesses[row][col]
          }`
        );
        puzzle[row][col] = compareGuesses(row, col);
        if (puzzle[row][col] !== 0) {
          let answer = puzzle[row][col];
          console.log(
            `At row: ${row + 1} and col :${col + 1}, the answer is ${answer}`
          );
          removeGuesses(row, col, answer, guesses);
        }
      }
    }
  }
}
console.log(puzzle);
