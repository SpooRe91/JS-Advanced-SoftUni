function occurrences(input) {
    let words = input.toLowerCase().split(' ');

    let oddWords = [];
    let counter = 1;

    for (let element of words) {
        if (!oddWords.includes(element)) {
            for (let i = words.indexOf(element) + 1; i < words.length; i++) {
                if (element === words[i])
                    counter++;
            }
            if (counter % 2 === 0) {
                counter = 1
            } else {
                oddWords.push(element);
                counter = 1;
            }
        }

    }

    console.log(oddWords.join(' '));
}
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')