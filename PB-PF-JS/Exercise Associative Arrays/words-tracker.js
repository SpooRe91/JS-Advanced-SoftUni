function tracker(arrOfWords) {
    let wordsToTrack = arrOfWords.shift().split(" ");

    let words = {};

    for (let elements of wordsToTrack) {
        words[elements] = 0;

    }
    for (let word of arrOfWords) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }

    }

    let sorted = Object.entries(words).sort((a, b) => {
        return b[1] - a[1];
    })

    sorted.forEach((el) => {
        console.log(`${el[0]} - ${el[1]}`);
    })
}

tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])