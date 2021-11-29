function piccolo(arr) {
    let parkingLot = {};


    for (let i = 0; i < arr.length; i++) {
        let [comand, number] = arr[i].split(', ');

        if (comand === 'IN') {

            if (!parkingLot.hasOwnProperty(number)) {
                parkingLot[number] = comand;
            }

        } else if (comand === 'OUT') {

            if (parkingLot.hasOwnProperty(number)) {
                delete parkingLot[number];
            }
        }

    }

    let arrKeys = Object.keys(parkingLot);
    let sorted = arrKeys.sort((a, b) => a.localeCompare(b));

    if (sorted.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(sorted.join('\n'));

    }




}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])