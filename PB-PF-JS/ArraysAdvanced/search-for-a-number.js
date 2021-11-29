function solve(arr, arr2) {
    let elToCut = arr2[0];
    let elToDel = arr2[1];
    let elToFind = arr2[2];
    let counter = 0;


    let modifiedArr = arr.slice(0, elToCut);
    modifiedArr.splice(0, elToDel);

    for (let i = 0; i < modifiedArr.length; i++) {
        if(elToFind === modifiedArr[i]) {
            counter++;
        }
        
    }
    console.log(`Number ${elToFind} occurs ${counter} times.`);

}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);