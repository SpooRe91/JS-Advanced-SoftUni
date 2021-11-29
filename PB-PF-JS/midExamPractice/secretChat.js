function secretChat(input) {
    let message = input.shift();
    let line = input.shift();

    while (line !== 'Reveal') {
        let [command, ...rest] = line.split(":|:");
        switch (command) {
            case 'InsertSpace':
                let index = +rest[0];
                message = message.split('')
                message.splice(index, 0, ' ');
                message = message.join("");

                console.log(message)

                break;
            case 'Reverse':
                let substring = rest[0];
                let substringRev = substring.split('').reverse().join('')

                if (message.includes(substring)) {
                    let indexOf = message.indexOf(substring);

                    message = message.split('');
                    message.splice(indexOf, substring.length);

                    message.push(substringRev);
                    message = message.join("");

                    console.log(message)

                } else {
                    console.log('error')
                }

                break;
            case 'ChangeAll':
                let substring1 = rest[0];
                let replacementText = rest[1];
                while (message.includes(substring1)) {
                    message = message.replace(substring1, replacementText)

                }
                console.log(message)
                break;

            default:
                break;
        }



        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`)
}



secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]
)
  // secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]
// )