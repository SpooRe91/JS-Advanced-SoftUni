function TheImitationGame(input) {
    let encryptedMessage = input.shift().split('');

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        let [command, index, value] = currentCommand.split('|');
        if (command === 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage.join('')}`);
            break;
        } else if (command === "Move") {
            index = Number(index);
            for (let j = 0; j < index; j++) {
                let elementToPush = encryptedMessage.shift();
                encryptedMessage.push(elementToPush)
            }

        } else if (command === 'Insert') {
            index = Number(index);
            encryptedMessage.splice(index, 0, value);

        } else if (command === 'ChangeAll') {
            while (encryptedMessage.includes(index)) {
                let place = encryptedMessage.indexOf(index);
                encryptedMessage.splice((place), 1, value);

            }
            

        }

    }
    

}
TheImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  
  )


  TheImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  )