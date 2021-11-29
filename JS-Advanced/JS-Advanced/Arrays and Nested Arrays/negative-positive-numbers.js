function numbers(arr) {
    let secondArr=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<0) {
            secondArr.unshift(arr[i]);
        }else{
            secondArr.push(arr[i]);
        }
        
    }
    return secondArr;
}
numbers([7, -2, 8, 9])
numbers([3, -2, 0, -1])
