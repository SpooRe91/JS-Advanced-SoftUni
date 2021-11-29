function numbers(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sumOfThree = 0;
        for (let j = 1; j <= k; j++) {
            let num = arr[i - j]
            if (num !== undefined) {
                sumOfThree += num;
            }
        }
        arr.push(sumOfThree);
    }

    return arr;
}
numbers(6, 3)
numbers(8,2)