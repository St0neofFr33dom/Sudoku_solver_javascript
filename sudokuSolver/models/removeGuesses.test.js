import removeGuesses from "./removeGuesses.js";

describe("Making sure that you get the correct box", () => {
  let guesses = [
    [[3, 5], 0, [5, 6], 0, 0, 0, 0, 0, 0],
    [0, 0, [4, 6], 0, 0, 0, 0, 0, 0],
    [[3], 0, [4, 6, 8], 0, [6], 0, [1,3, 4], 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  test("After putting 3 as the value of [2][0], remove the 3s from the row and columns guesses", () => {
    let row = 2;
    let col = 0;
    let num = guesses[row][col][0];
    guesses[row][col] = 0;
    removeGuesses(row,col,num,guesses)
    expect(guesses[0][0]).toStrictEqual([5])
    expect(guesses[2][6]).toStrictEqual([1,4])
  });

  
});
