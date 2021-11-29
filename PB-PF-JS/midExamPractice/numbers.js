function numbers(input) {
    let numbers = input.split(' ').map(Number);
    let sum = 0;
    let avg = 0;
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        sum += currentNum;
        avg = sum / numbers.length;
    }

    for (let j = 0; j < numbers.length; j++) {
        let currentEl = numbers[j];
        if (currentEl > avg) {
            result.push(currentEl)
        }

    }

    if (result.length === 0) {
        console.log(`No`);
        return;
    }

    result.sort((a, b) => b - a)
    if (result.length < 5) {
        console.log(result.join(' '))

    } else {
        while (result.length > 5) {
            result.pop()
        }
        console.log(result.join(' '))
    }


}

numbers('10 20 30 40 50')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')