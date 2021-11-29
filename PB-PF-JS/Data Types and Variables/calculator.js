function solve(num1, operator, num2) {
    let sum = 0;
    switch (operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break
        case '/':
            sum = num1 / num2;
            break;

    }
    console.log(sum.toFixed(2));
}
solve(5,'+',10)
solve(25.5,'-',3)