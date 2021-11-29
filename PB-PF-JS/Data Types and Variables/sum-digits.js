function solve(number) {
    let str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let currentDigit = Number(str[i]);
        sum += currentDigit;
    }
    console.log(sum);

}
solve(245678);
solve(97561)