function solve(sequence, bomb) {
    let bombNum = bomb[0];
    let power = bomb[1];

    while (sequence.includes(bombNum)) {
        let index = sequence.indexOf(bombNum);
        let elementsToRemove = power * 2 + 1;
        let startIndex = index - power;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    let finalResult = sequence.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(finalResult);
}
solve([1, 7, 7, 1, 2, 3],
    [7, 1]);