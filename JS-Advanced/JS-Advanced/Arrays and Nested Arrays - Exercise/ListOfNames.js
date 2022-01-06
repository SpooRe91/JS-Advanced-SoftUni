function solve(array) {
    let sorted = array.sort((a,b) => a.localeCompare(b));


    let orderNum = 1;
    sorted.forEach((el) => {
        console.log(`${orderNum}.${el}`);
        orderNum++;
    })
    

}

solve(["John", "Bob", "Christina", "Ema"])