import potentialAnswers from './potentialAnswers.js'

let example = [
  [0, 0, 0, 5, 2, 0, 8, 0, 1],
  [0, 0, 2, 0, 8, 0, 9, 0, 5],
  [0, 5, 0, 0, 4, 9, 0, 2, 0],
  [6, 2, 9, 4, 5, 1, 3, 7, 8],
  [4, 3, 1, 9, 7, 8, 2, 5, 6],
  [5, 8, 7, 6, 3, 2, 0, 0, 9],
  [0, 1, 0, 3, 6, 5, 0, 9, 2],
  [0, 0, 0, 2, 1, 0, 5, 8, 0],
  [2, 0, 5, 8, 9, 0, 0, 0, 0],
];



export default function findingPairs(puzzle){
  let guesses = potentialAnswers(puzzle);
  for (let i =0; i < guesses.length; i++){
    
  }
}


let answer = potentialAnswers(example)
console.log(answer)