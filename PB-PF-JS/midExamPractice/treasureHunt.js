function tresureHunt(input) {
    let initialTresure = input.shift().split('|');
    let steelArr = [];
    let averageGain = 0;
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        let [command, ...item] = currentCommand.split(' ')

        if (command !== 'Yohoho!') {
            if (command === 'Loot') {
                for (let j = 0; j < item.length; j++) {
                    let currentItems = item[j]
                    if (!initialTresure.includes(currentItems)) {
                        initialTresure.unshift(currentItems);
                    }
                }
            } else if (command === 'Drop') {
                let index = +item;
                if (index >= 0 && index < initialTresure.length) {
                    let itemToPush = initialTresure.splice(index, 1)
                    initialTresure.push(itemToPush.toString())
                }

            } else if (command === 'Steal') {
                let count = +item;
                steelArr = initialTresure.slice(-count);
                initialTresure.splice(-count);
                console.log(steelArr.join(', '))
            }

        } else {
            break;
        }

    }
    if (initialTresure.length === 0) {
        console.log(`Failed treasure hunt.`)

    } else {
        for (let k = 0; k < initialTresure.length; k++) {
            let curreEl = initialTresure[k];
            averageGain += curreEl.length;
        }
        console.log(`Average treasure gain: ${(averageGain / initialTresure.length).toFixed(2)} pirate credits.`)


    }

}
tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])

// tresureHunt(["Diamonds|Silver|Shotgun|Gold",
//     "Loot Silver Medals Coal",
//     "Drop -1",
//     "Drop 1",
//     "Steal 6",
//     "Yohoho!"])
