import logic from "./Logic/logic.js";


// function inputNumber() {
//     let input = prompt("Please input a number between 1 to 9");
//     Node.innerHTML=input
// }

// let test = document.querySelector(".square")
// test.addEventListener("click",inputNumber)



function solve(){
    function makePuzzle(){
        let puzzle = [];
        for (let row=1; row<=9; row++){
            let line = [];
            for (let col=1; col<=9; col++){
                let input = document.querySelector(`#c${row}${col}`);
                let number = 0
                if(input){
                    number = Number(input.value);
                }
                line.push(number)
            }
            puzzle.push(line)
        }
        return puzzle
    }
    let puzzle = makePuzzle()
    logic(puzzle)
    for (let row=1; row<=9; row++){
        for (let col=1; col<=9; col++){
            let input = document.querySelector(`#c${row}${col}`);
            input.value = puzzle[row-1][col-1]
            input.innerHTML = puzzle[row-1][col-1]
        }
    }
}

let button = document.querySelector("button")
button.addEventListener("click",solve)