function solve(numbers, commands) {

    for (let command of commands) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];

        if (currentCommand === 'add') {
            let index = Number(tokens[1]);
            let element = +tokens[2];
            numbers.splice(index, 0, element);
            
        } else if (currentCommand === 'addMany') {

            let index = Number(tokens[1]);

            tokens.splice(0, 2);

            let numbersToAdd = tokens.map(Number);

            numbers.splice(index, 0, ...numbersToAdd);
        } else if (currentCommand === 'contains') {

            let result = numbers.indexOf(+tokens[1]);
            console.log(result);
        } else if (currentCommand === 'remove') {
            let index = Number(tokens[1]);
            numbers.splice(index, 1);

        } else if (currentCommand === 'shift') {
            let position = tokens[1];
            for (let i = 0; i < position; i++) {
                let firstNum = numbers.shift();
                numbers.push(firstNum);
            }
         } else if (currentCommand === 'sumPairs') {
            let resultArr = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i+=2) {
                let sum = numbers[i] + numbers[i + 1]
                resultArr.push(sum);

            }
            numbers = resultArr;

        } else if (currentCommand === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
        }




    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)