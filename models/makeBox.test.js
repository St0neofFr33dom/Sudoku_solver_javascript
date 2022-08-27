import makeBox from "./makeBox.js";

describe("Making sure that you get the correct box", () => {
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

  test.each([[0,0],[2,0],[0,1],[1,2]])("Expect to get the first box (top left)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([1,2,3,4,5,6,7,8,9])
  });

  test.each([[0,3],[2,3],[0,4],[1,5]])("Expect to get the second box (top center)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([4,5,6,7,8,9,1,2,3])
  });

  test.each([[0,6],[2,6],[0,7],[1,8]])("Expect to get the third box (top right)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([7,8,9,1,2,3,4,5,6])
  });

  test.each([[3,0],[5,0],[3,1],[4,2]])("Expect to get the fourth box (center left)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([2,3,4,5,6,7,8,9,1])
  });

  test.each([[3,3],[5,3],[3,4],[4,5]])("Expect to get the fifth box (center)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([5,6,7,8,9,1,2,3,4])
  });

  test.each([[3,6],[5,6],[3,7],[4,8]])("Expect to get the sixth box (center right)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([8,9,1,2,3,4,5,6,7])
  });

  test.each([[6,0],[8,0],[6,1],[7,2]])("Expect to get the seventh box (bottom left)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([3,4,5,6,7,8,9,1,2])
  });

  test.each([[6,3],[8,3],[6,4],[7,5]])("Expect to get the eighth box (bottom center)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([6,7,8,9,1,2,3,4,5])
  });

  test.each([[6,6],[8,6],[6,7],[7,8]])("Expect to get the ninth box (bottom center)", (row,col) => {
    expect(makeBox(row,col,grid)).toStrictEqual([9,1,2,3,4,5,6,7,8])
  });
})