function solve(input) {
    let rooms = input[0].split('|');
    let roomInfo = [];

    let health = 100;
    let coins = 0;
    let firstPart;
    let secondPart;
    let roomCounter = 0;


    for (let i = 0; i < rooms.length; i++) {
        roomCounter++;
        roomInfo = rooms[i].split(' ');
        firstPart = roomInfo[0];
        secondPart = Number(roomInfo[1]);

        if (firstPart === 'potion') {
            if (health + secondPart > 100) {
                secondPart = 100 - health;
                health = 100;
            } else {
                health += secondPart;
            }

            console.log(`You healed for ${secondPart} hp.`);
            console.log(`Current health: ${health} hp.`);


        } else if (firstPart === 'chest') {
            coins += secondPart;
            console.log(`You found ${secondPart} coins.`);

        } else {
            health -= secondPart;
            if (health > 0) {
                console.log(`You slayed ${firstPart}.`);
            } else {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }

        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`); 

}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])