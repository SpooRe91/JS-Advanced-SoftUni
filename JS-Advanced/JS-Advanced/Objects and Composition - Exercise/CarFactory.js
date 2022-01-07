function solve(obj) {
    let resultCar = {};
    resultCar.model = obj.model;

    if (obj.power <= 90) {
        resultCar.engine = { power: 90, volume: 1800 };
    } else if (obj.power > 90 && obj.power <= 120) {
        resultCar.engine = { power: 120, volume: 2400 };
    } else if (obj.power > 120 && obj.power <= 200) {
        resultCar.engine = { power: 200, volume: 3500 };
    }

    resultCar.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    resultCar.wheelsize = []
    let newSize = 0;

    if (obj.wheelsize % 2 == 0) {
        newSize = obj.wheelsize - 1;
        for (let i = 0; i < 4; i++) {
            resultCar.wheelsize.push(newSize);

        }
    } else {
        newSize = obj.wheelsize;
        for (let i = 0; i < 4; i++) {
            resultCar.wheelsize.push(newSize);

        }
    }
    return resultCar;
    //console.log(resultCar);
}
solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}

)