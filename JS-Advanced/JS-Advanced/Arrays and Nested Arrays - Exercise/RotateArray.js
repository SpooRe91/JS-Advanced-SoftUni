function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        let newVar = arr.pop();
        arr.unshift(newVar);
    }
    console.log(arr.join(' '));
}
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15

)