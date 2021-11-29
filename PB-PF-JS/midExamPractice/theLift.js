function theLift(liftInfo) {
    let peopleWaiting = Number(liftInfo[0]);
    let lift = liftInfo[1].split(' ').map(Number);

    for (let i = 0; i < lift.length; i++) {
        while (lift[i] !== 4 && peopleWaiting !== 0) {
            lift[i]++;
            peopleWaiting--;
        }
    }

    if (peopleWaiting !== 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!
${lift.join(' ')}`);
    }

    if (peopleWaiting === 0) {
        if (lift.includes(0) || lift.includes(1) || lift.includes(2) || lift.includes(3)) {
            console.log(`The lift has empty spots!
${lift.join(' ')}`);
        } else {
            console.log(lift.join(' '));
        }
    }


}

theLift([
    "15",
    "0 0 0 0 0"])

theLift([
    "20",
    "0 2 0"])
