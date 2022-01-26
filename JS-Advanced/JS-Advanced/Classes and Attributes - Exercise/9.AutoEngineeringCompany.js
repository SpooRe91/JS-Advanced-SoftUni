function solve(arr) {
    let obj = {}


    for (const el of arr) {
        let [carBrand, carModel, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);
        if (!obj[carBrand]) {
            obj[carBrand] = {}
            obj[carBrand][carModel] = producedCars;

        } else {
            if (!obj[carBrand].hasOwnProperty(carModel)) {
                obj[carBrand][carModel] = producedCars;
            } else {
                obj[carBrand][carModel] += producedCars;
            }
        }
    }

    Object.entries(obj).forEach(([carBrand, carModel]) => {
        console.log(carBrand);
        Object.entries(carModel).forEach(([carModel,producedCars]) => {
            console.log(`###${carModel} -> ${producedCars}`);
        })
    })
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)