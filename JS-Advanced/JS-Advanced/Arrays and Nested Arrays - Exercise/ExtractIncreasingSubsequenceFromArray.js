function solve(arr) {
    let newArr = [];
    let biggest = 0;

    for (let i = 0; i < arr.length; i++) {
        if (biggest <= arr[i]) {
            biggest = arr[i];
            newArr.push(biggest);
        }
    }
    return newArr;
    //console.log(newArr);
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)

solve([20,
    3,
    2,
    15,
    6,
    1]
)