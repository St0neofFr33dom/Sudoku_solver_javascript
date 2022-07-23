import makeColumn from "./makeColumn";
import makeBox from "./makeBox";


//initialising the grid the logic will be working with
export default function potentialAnswers(puzzle){
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

      for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
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

      return guesses
}