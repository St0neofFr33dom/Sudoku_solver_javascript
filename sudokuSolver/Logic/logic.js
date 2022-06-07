let placeholderFiendish = [
    [0,0,0,8,0,0,0,0,5],
    [0,0,9,0,3,0,2,0,0],
    [0,6,0,0,2,5,0,0,9],
    [8,0,0,0,7,0,0,0,0],
    [0,3,2,6,9,0,0,0,0],
    [0,0,5,0,0,0,1,9,0],
    [0,2,0,0,0,3,0,0,1],
    [0,0,0,0,0,4,0,5,0],
    [9,0,8,0,0,0,3,0,7]
]

//Puzzle 505,398,406
let placeholderHard = [
    [0,0,0,0,0,0,8,0,1],
    [0,0,2,0,8,0,0,0,0],
    [0,5,0,0,4,9,0,2,0],
    [6,0,0,4,0,0,3,7,0],
    [4,0,0,0,7,0,0,0,6],
    [0,8,7,0,0,2,0,0,9],
    [0,1,0,3,6,0,0,9,0],
    [0,0,0,0,1,0,5,0,0],
    [2,0,5,0,0,0,0,0,0]
]

//Puzzle 35,162,464
let placeholderEasy = [
    [0,0,0,0,0,2,0,3,1],
    [0,2,0,6,0,1,7,8,0],
    [0,0,8,0,9,0,6,0,0],
    [0,9,1,0,2,0,5,7,0],
    [6,0,0,0,0,0,0,0,3],
    [0,5,3,0,6,0,1,4,0],
    [0,0,4,0,5,0,8,0,0],
    [0,6,2,3,0,8,0,5,0],
    [8,1,0,4,0,0,0,0,0]
]
let puzzle = placeholderEasy;
let guesses = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]


function makeBox(row,column,grid){
    if(row < 3 && column < 3){   
        let box = (grid[0].slice(0,3));
        let arr1 = (grid[1].slice(0,3));
        let arr2 = (grid[2].slice(0,3));
        return box.concat(arr1,arr2)
    }
    else if (row < 3 && column < 6){
        let box = (grid[0].slice(3,6));
        let arr1 = (grid[1].slice(3,6));
        let arr2 = (grid[2].slice(3,6));
        return box.concat(arr1,arr2)
    }
    else if (row < 3 && column < 9){
        let box = (grid[0].slice(6,9));
        let arr1 = (grid[1].slice(6,9));
        let arr2 = (grid[2].slice(6,9));
        return box.concat(arr1,arr2)
    }
    else if(row < 6 && column < 3){
        let box = (grid[3].slice(0,3));
        let arr1 = (grid[4].slice(0,3));
        let arr2 = (grid[5].slice(0,3));
        return box.concat(arr1,arr2)
    }
    else if(row < 6 && column < 6){
        let box = (grid[3].slice(3,6));
        let arr1 = (grid[4].slice(3,6));
        let arr2 = (grid[5].slice(3,6));
        return box.concat(arr1,arr2)
    }
    else if(row < 6 && column < 9){
        let box = (grid[3].slice(6,9));
        let arr1 = (grid[4].slice(6,9));
        let arr2 = (grid[5].slice(6,9));
        return box.concat(arr1,arr2)
    }
    else if(row < 9 && column < 3){
        let box = (grid[6].slice(0,3));
        let arr1 = (grid[7].slice(0,3));
        let arr2 = (grid[8].slice(0,3));
        return box.concat(arr1,arr2)
    }
    else if(row < 9 && column < 6){
        let box = (grid[6].slice(3,6));
        let arr1 = (grid[7].slice(3,6));
        let arr2 = (grid[8].slice(3,6));
        return box.concat(arr1,arr2)
    }
    else {
        let box = (grid[6].slice(6,9));
        let arr1 = (grid[7].slice(6,9));
        let arr2 = (grid[8].slice(6,9));
        return box.concat(arr1,arr2)
    }
}


function makeColumn (col, grid){
    let column = [];
    for (let r = 0; r<9; r++){
        column.push(grid[r][col])
    }
    return column
}

//Checks blank spots in a puzzle
function checkBlanks (grid){
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

//Produces an array of the possible inputs for the puzzles
for (let row = 0; row < 9; row++){
    for (let col = 0; col < 9; col++){
        if (puzzle[row][col] === 0){
            let possibilities = [];
            for (let num = 1; num <= 9; num++){
                if (puzzle[row].includes(num)){
                    continue;
                }
                let column = makeColumn(col, puzzle);
                if (column.includes(num)){
                    continue;
                }
                let box = makeBox(row,col, puzzle);
                if (box.includes(num)){
                    continue;
                }
                possibilities.push(num)
            }
            if (possibilities.length === 0){
                console.log("Error")
            } else{
                guesses[row][col] = possibilities;
            }
        }
    }
}

function compareGuesses(row,col) {
    if (guesses[row][col].length === 1){
        console.log(guesses[row][col][0])
        return guesses[row][col][0];
    }
    for (let i = 0; i < guesses[row][col].length; i++){
        let num = guesses[row][col][i];
        let matches = 0;
        for (let c = 0; c < 9; c++){
            if (guesses[row][c] !== 0 && guesses[row][c].includes(num)){
                matches++
            }
        }
        if (matches === 1){
            console.log(num)
            return num;
        }
        matches = 0;
        let column = makeColumn(col, guesses)
        for (let r = 0; r < 9; r++){
            if (column[r] !== 0 && column[r].includes(num)){
                matches++
            }
        }
        if (matches === 1){
            console.log(num)
            return num
        }
        matches = 0;
        let box = makeBox(row, col, guesses)
        for (let b = 0; b < 9; b++){
            if (box[b] !== 0 && box[b].includes(num)){
                matches++
            }
        }
        if (matches === 1){
            console.log(num)
            return num
        }
        return 0;
    }
}

function removeGuesses(row,col,num){
    
  
}

let emptySpaces = checkBlanks(puzzle);
console.log(`${emptySpaces} boxes need to be filled in`)
while (emptySpaces > 0){
    for (let row = 0; row < 9; row++){
        for(let col = 0; col < 9; col++){
            if (puzzle[row][col]===0){
                console.log(`At row: ${row+1} and col :${col+1}, the possible solutions are ${guesses[row][col]}`)
                puzzle[row][col] = compareGuesses(row,col)
                if (puzzle[row][col] !== 0){
                    removeGuesses(row,col)
                }
                }
            }
        }
    }
console.log(puzzle);