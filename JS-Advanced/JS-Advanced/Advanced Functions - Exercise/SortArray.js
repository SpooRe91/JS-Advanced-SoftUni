function solve(arr,argument) {
    if(argument === 'asc'){
        arr.sort((a,b) => {
            return a-b;
        })
    }else if(argument === 'desc'){
        arr.sort((a,b) => {
            return b-a;
        })
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'desc')