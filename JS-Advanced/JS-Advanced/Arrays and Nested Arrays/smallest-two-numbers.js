function nums(arr) {
    let min = Math.min(...arr);
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    let secondMin = Math.min(...arr);
    console.log(min + " " + secondMin);
}
nums([30, 15, 50, 5])