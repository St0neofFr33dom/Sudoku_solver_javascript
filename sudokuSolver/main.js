
// function inputNumber() {
//     let input = prompt("Please input a number between 1 to 9");
//     Node.innerHTML=input
// }

// let test = document.querySelector(".square")
// test.addEventListener("click",inputNumber)

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

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
    console.log(puzzle)
}

let button = document.querySelector("button")
button.addEventListener("click",makePuzzle)