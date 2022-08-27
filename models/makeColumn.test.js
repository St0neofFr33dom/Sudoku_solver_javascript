import makeColumn from "./makeColumn.js";

describe("Making sure that you get the correct column", () => {
  let grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7, 8, 9, 1],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
  ];

  test("Expect to get the first column (index 0)", () => {
    let col = 0
    expect(makeColumn(col,grid)).toStrictEqual([1,4,7,2,5,8,3,6,9])
  });

  test("Expect to get the fifth column (index 4)", () => {
    let col = 4
    expect(makeColumn(col,grid)).toStrictEqual([5,8,2,6,9,3,7,1,4])
  });
});
