function cooking(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5]


    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'chop') {
            number = number / 2
            console.log(number);
        } else if (operations[i] === 'dice') {
            number = Math.sqrt(number)
            console.log(number);
        } else if (operations[i] === 'spice') {
            number += 1;
            console.log(number);
        } else if (operations[i] === 'bake') {
            number *= 3
            console.log(number);
        } else if (operations[i] === 'fillet') {
            number -= 0.2 * number;
            console.log(number);
        }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')