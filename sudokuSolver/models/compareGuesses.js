import makeColumn from "./makeColumn.js";
import makeBox from "./makeBox.js";

export default function compareGuesses(row, col, guesses) {
    if (guesses[row][col].length === 1) {
      console.log(guesses[row][col][0]);
      return guesses[row][col][0];
    }
    for (let i = 0; i < guesses[row][col].length; i++) {
      let num = guesses[row][col][i];
      let matches = 0;
      for (let c = 0; c < 9; c++) {
        if (guesses[row][c] !== 0 && guesses[row][c].includes(num)) {
          matches++;
        }
      }
      if (matches === 1) {
        console.log(num);
        return num;
      }
      matches = 0;
      let column = makeColumn(col, guesses);
      for (let r = 0; r < 9; r++) {
        if (column[r] !== 0 && column[r].includes(num)) {
          matches++;
        }
      }
      if (matches === 1) {
        console.log(num);
        return num;
      }
      matches = 0;
      let box = makeBox(row, col, guesses);
      for (let b = 0; b < 9; b++) {
        if (box[b] !== 0 && box[b].includes(num)) {
          matches++;
        }
      }
      if (matches === 1) {
        console.log(num);
        return num;
      }
      return 0;
    }
  }