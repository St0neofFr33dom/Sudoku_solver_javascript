export default function makeColumn (col, grid){
    let column = [];
    for (let r = 0; r<9; r++){
        column.push(grid[r][col])
    }
    return column
}