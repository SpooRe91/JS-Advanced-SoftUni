function element(arr) {
    let biggestNums = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            let biggest = Math.max(...arr[i]);
            biggestNums.push(biggest);
        }
    }
    return  Math.max(...biggestNums);
}
element([[20, 50, 10],
    [8, 33, 145]]
   )