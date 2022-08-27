export default function makeBox(row,column,grid){
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