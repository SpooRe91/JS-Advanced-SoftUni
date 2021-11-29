// function reception(input) {

//     let studentPerHour = 0;
//     let hours = 0;
//     let counter = 0;

//     for (let i = 0; i < 3; i++) {
//         studentPerHour += Number(input.shift());
//     }

//     let studentsCount = +input;

//     while (studentsCount !== 0) {

//         if (counter === 3) {
//             hours++;
//             counter = 0;
//         }

//         if (studentPerHour >= studentsCount) {
//             hours++;
//             console.log(`Time needed: ${hours}h.`);
//             return;
//         }

//         studentsCount -= studentPerHour;
//         hours++;
//         counter++;
//     }
// }

function reception(input = []) {
    let emp1Eff = +input.shift();
    let emp2Eff = +input.shift();
    let emp3Eff = +input.shift();
    let people = +input.shift();
    let neededHours = 0;
    let answerPerHour = emp1Eff + emp2Eff + emp3Eff;

    while (people > 0) {
        people -= answerPerHour;
        neededHours++;

        if (neededHours % 3 === 0) {
            neededHours++;
        }
    }

    console.log(`Time needed: ${neededHours}h.`);
}
reception(['5', '6', '4', '20'])

reception(['1', '2', '3', '45'])

reception(['1', '1', '1', '9'])