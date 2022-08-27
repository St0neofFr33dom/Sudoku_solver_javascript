import compareGuesses from "./compareGuesses.js";
import removeGuesses from "./removeGuesses.js";

export default function solver (puzzle, guesses) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (puzzle[row][col] === 0) {
            puzzle[row][col] = compareGuesses(row, col, guesses);
            if (puzzle[row][col] !== 0) {
              guesses[row][col] = 0;
              let answer = puzzle[row][col];
              removeGuesses(row, col, answer, guesses);
            }
          }
        }
      }
    return puzzle
}