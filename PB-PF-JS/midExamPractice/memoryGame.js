function memoryGame(input) {

    let sequence = input.shift().split(' ');
    let moves = 0;

    for (let i = 0; i < input.length; i++) {
        let indexes = input[i].split(' ');
        if (indexes.includes('end') || sequence.length === 0) {
            if (sequence.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                break;
            } else {
                console.log(`Sorry you lose :(
${sequence.join(' ')}`);
                break;
            }
        }

        let index1 = +indexes[0];
        let index2 = +indexes[1];

        if (index1 === index2) {
            moves++;
            console.log(`Invalid input! Adding additional elements to the board`);
            sequence.splice(sequence.length / 2, 0, ('-' + moves + 'a'));

        } else if (index1 < 0 || index2 < 0 || index1 >= sequence.length || index2 >= sequence.length) {
            moves++;
            console.log(`Invalid input! Adding additional elements to the board`);
            sequence.splice(sequence.length / 2, 0, ('-' + moves + 'a'));
            sequence.splice(sequence.length / 2, 0, ('-' + moves + 'a'));

        } else if (sequence[index1] === sequence[index2]) {
            moves++;
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);

            if (index1 > index2) {
                sequence.splice(index1, 1);
                sequence.splice(index2, 1);
            } else {
                sequence.splice(index2, 1);
                sequence.splice(index1, 1);
            }

        } else if (sequence[index1] !== sequence[index2]) {
            moves++;
            console.log(`Try again!`);
        }
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])

memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)