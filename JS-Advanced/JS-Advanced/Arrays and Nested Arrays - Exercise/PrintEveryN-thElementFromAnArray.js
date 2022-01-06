function solve(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);
    }
    // newArr.forEach(element => {
    //     console.log(element);
    // });
    return newArr;
}
solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
)
solve(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)