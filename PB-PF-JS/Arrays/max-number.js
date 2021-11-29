function solve(arr) {
    let resultArr = [];
    let newArr = [];
    let bool = false;
    let firstNum = 0;
    let lastNum = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
        if (bool) {
            newArr.push(firstNum);
        }
        firstNum = Number(arr[i]);


        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = Number(arr[j]);

            if (firstNum > nextNum) {
                bool = true;
            } else {
                bool = false;
                break;
            }


        }


    }
    console.log(newArr.join(' ') + ' ' + lastNum);
}
solve([41, 41, 34, 20])