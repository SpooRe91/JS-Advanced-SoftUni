function flightSchedule(arr) {
    let allFlights = arr[0];
    let changedFlights = arr[1];
    let statusFlights = arr[2].join('')
    // console.log(statusFlights)
    let flights = {};

    for (let i = 0; i < allFlights.length; i++) {
        let currentLine = allFlights[i].split(' ')
        let num = currentLine[0];
        flights[num] = {
            Destination: currentLine[1],
            Status: 'Ready to fly',
        }


    }
    //console.log(flights)

    for (let j = 0; j < changedFlights.length; j++) {
        let currentLine = changedFlights[j].split(' ');
        let numToChange = currentLine[0];
        let statusChange = currentLine[1];
        // let stateToChange = currentLine[1];
        if (flights.hasOwnProperty(numToChange)) {

            flights[numToChange].Status = statusChange;



        }




    }
    for (let fly in flights) {
        if (flights[fly].Status === String(arr[2])) {
            console.log(flights[fly]);
        }
    }

}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)