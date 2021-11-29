function inventory(input) {
    let inventory = input.shift().split(", ")
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i];
        let [command, item] = currentCommand.split(" - ")
        if (command !== 'Craft!') {
            if (command === 'Collect') {
                let itemToCollect = item;
                if (!inventory.includes(itemToCollect)) {
                    inventory.push(itemToCollect);
                }

            } else if (command === 'Drop') {
                let itemToRemove = item;
                if (inventory.includes(itemToRemove)) {
                    let removeIndex = inventory.indexOf(itemToRemove);
                    inventory.splice(removeIndex, 1)
                }

            } else if (command === 'Combine Items') {
                let [oldItem, newItem] = item.split(':')
                if (inventory.includes(oldItem)) {
                    let oldItemIndex = inventory.indexOf(oldItem);
                    inventory.splice(oldItemIndex+1, 0, newItem);

                }

            } else if (command === 'Renew') {
                let replaceItem = item;
                if (inventory.includes(replaceItem)) {
                    let replaceIndex = inventory.indexOf(replaceItem);
                    inventory.splice(replaceIndex, 1);
                    inventory.push(replaceItem);
                }

            }

        } else {
            console.log(inventory.join(', '))
        }
    }



}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
])

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])