//Checks blank spots in a puzzle
export default function checkBlanks (grid){
    let blanks = 0
    for (let row = 0; row<grid.length; row++){
        for (let col = 0; col<grid[row].length; col++){
            if (grid[row][col] === 0){
                blanks++
            }
        }
    }
    return blanks
}