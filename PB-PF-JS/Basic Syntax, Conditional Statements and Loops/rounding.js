function solve(num1, num2) {

    let number = num1;
    let prec = num2;

    if (prec > 15) {
        prec = 15;
    }

    let result = number.toFixed(prec);
    console.log(parseFloat(result));

}
solve(3.1415926535897932384626433832795, 2)
solve(10.5,3)