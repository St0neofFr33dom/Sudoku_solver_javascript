import compareGuesses from './compareGuesses.js'

describe("Making sure that you get the correct box", () => {
    let guesses = [
        [[3,5], 0, [5,6], 0, 0, 0, 0, 0, 0],
        [0, 0, [4,6], 0, 0, 0, 0, 0, 0],
        [[3], 0, [4,6,8], 0, [6], 0, [3,4], 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];


    test("Should return the value as it's the only possible answer",()=>{
        let row = 2
        let col = 0
        expect(compareGuesses(row,col,guesses)).toBe(3)
    })

    test("should return 8 as no other position could possibly be that value",()=>{
        let row = 2
        let col = 2
        expect(compareGuesses(row,col,guesses)).toBe(8)
    })
})