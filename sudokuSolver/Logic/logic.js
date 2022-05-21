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

let puzzle = placeholderHard;
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


function makeBox(box,row,column){
    if(row < 3 && column < 3){
        box.push(puzzle[0].slice(0,3));
        box.push(puzzle[1].slice(0,3));
        box.push(puzzle[2].slice(0,3));
    }
    else if (row < 3 && column < 6){
        box.push(puzzle[0].slice(3,6));
        box.push(puzzle[1].slice(3,6));
        box.push(puzzle[2].slice(3,6));
    }
    else if (row < 3 && column < 9){
        box.push(puzzle[0].slice(6,9));
        box.push(puzzle[1].slice(6,9));
        box.push(puzzle[2].slice(6,9));
    }
    else if(row < 6 && column < 3){
        box.push(puzzle[3].slice(0,3));
        box.push(puzzle[4].slice(0,3));
        box.push(puzzle[5].slice(0,3));
    }
    else if(row < 6 && column < 6){
        box.push(puzzle[3].slice(3,6));
        box.push(puzzle[4].slice(3,6));
        box.push(puzzle[5].slice(3,6));
    }
    else if(row < 6 && column < 9){
        box.push(puzzle[3].slice(6,9));
        box.push(puzzle[4].slice(6,9));
        box.push(puzzle[5].slice(6,9));
    }
    else if(row < 9 && column < 3){
        box.push(puzzle[6].slice(0,3));
        box.push(puzzle[7].slice(0,3));
        box.push(puzzle[8].slice(0,3));
    }
    else if(row < 9 && column < 6){
        box.push(puzzle[6].slice(3,6));
        box.push(puzzle[7].slice(3,6));
        box.push(puzzle[8].slice(3,6));
    }
    else {
        box.push(puzzle[6].slice(6,9));
        box.push(puzzle[7].slice(6,9));
        box.push(puzzle[8].slice(6,9));
    }
    return box
}

//Produces an array of the possible inputs for the puzzles
for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
        if (puzzle[i][j] === 0){
            let possibilities = [];
            for (let k = 0; k < 9; k++){
                if (puzzle[i].includes(k)){
                    continue;
                }
                let column = [];
                for (let l = 0; l<9; l++){
                    column.push(puzzle[l][j])
                }
                if (column.includes(k)){
                    continue;
                }
                let box = [];
                box = makeBox(box,i,j);
                if (box.includes(k)){
                    continue;
                }
                possibilities.push(k)
            }
            if (possibilities.length == 0){
                console.log("Error")
            } else{
                guesses[i][j] = possibilities;
            }
        }
    }
}

console.log(guesses)