function roadRadar(num1, str) {

    let speed = Number(num1);
    let area = str;
    let speeding = 0;
    let status = '';

    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        speeding = speed - allowedSpeeds[area];
        SpeedingStatus(speeding);
        console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`);
    }

    // if (area === 'residential') {
    //     if (speed <= 20) {
    //         console.log(`Driving ${speed} km/h in a 20 zone`);
    //     } else {
    //         speeding = speed - 20;
    //         SpeedingStatus(speeding);
    //         console.log(`The speed is ${speeding} km/h faster than the allowed speed of 20 - ${status}`);
    //     }

    // } else if (area === 'city') {
    //     if (speed <= 50) {
    //         console.log(`Driving ${speed} km/h in a 50 zone`);
    //     } else {
    //         speeding = speed - 50;
    //         SpeedingStatus(speeding);
    //         console.log(`The speed is ${speeding} km/h faster than the allowed speed of 50 - ${status}`);
    //     }

    // } else if (area === 'interstate') {
    //     if (speed <= 90) {
    //         console.log(`Driving ${speed} km/h in a 90 zone`);
    //     } else {
    //         speeding = speed - 90;
    //         SpeedingStatus(speeding);
    //         console.log(`The speed is ${speeding} km/h faster than the allowed speed of 90 - ${status}`);
    //     }

    // } else if (area === 'motorway') {
    //     if (speed <= 130) {
    //         console.log(`Driving ${speed} km/h in a 130 zone`);
    //     } else {
    //         speeding = speed - 130;
    //         SpeedingStatus(speeding);
    //         console.log(`The speed is ${speeding} km/h faster than the allowed speed of 130 - ${status}`);
    //     }

    // }

    function SpeedingStatus(speeding) {
        if (speeding <= 20) {
            status = 'speeding'
        } else if (speeding > 20 && speeding <= 40) {
            status = 'excessive speeding'
        } else {
            status = 'reckless driving'
        }
    }

}
roadRadar(40, 'city')

roadRadar(21, 'residential')

roadRadar(120, 'interstate')

roadRadar(200, 'motorway')
