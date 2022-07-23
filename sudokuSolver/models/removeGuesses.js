import makeColumn from "./makeColumn.js";
import makeBox from "./makeBox.js";

export default function removeGuesses(row, col, num, grid) {
    for (let i = 0; i < grid[row].length; i++) {
        if (grid[row][i] !== 0 && grid[row][i].includes(num)){
            let position = grid[row][i].indexOf(num)
            grid[row][i].splice(position, 1)
        }
    }
    let column = makeColumn(col,grid)
    for (let i = 0; i < column.length; i++){
        if (column[i] !==0 && column[i].includes(num)){
            let position = column[i].indexOf(num)
            column[i].splice(position, 1)
        }
    }
    let box = makeBox(row,col,grid)
    for (let i = 0; i < column.length; i++){
        if (box[i] !==0 && box[i].includes(num)){
            let position = box[i].indexOf(num)
            box[i].splice(position, 1)
        }
    }
}