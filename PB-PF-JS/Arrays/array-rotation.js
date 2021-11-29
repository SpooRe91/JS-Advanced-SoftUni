function solve(arr, rots) {
    let firstElement = 0;
    for (let i = 0; i < rots; i++) {
        firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2)