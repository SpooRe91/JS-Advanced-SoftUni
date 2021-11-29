function evenPosition(arr) {
    let arr2 = [];

    for(let i = 0; i < arr.length; i+=2) {
        arr2.push(arr[i]);
    }
    console.log(arr2.join(' '));

}
evenPosition(['20', '30', '40', '50', '60'])
    