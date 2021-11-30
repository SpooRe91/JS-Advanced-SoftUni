function positions(arr) {
    let secondArr = [];
    for (let index = 0; index < arr.length; index++) {
        if(index%2!==0 && index!==0){
            secondArr.push(arr[index]*2);
        }
    }
    secondArr.reverse();
    return secondArr.join(' ');
}
positions([10, 15, 20, 25]	)