function solve(arr) {
    let obj = {}
    let bottles = {};

    for (const el of arr) {
        let [juice, quantity] = el.split(' => ');
        if (!obj[juice]) {
            obj[juice] = Number(quantity);
            
        } else {
            obj[juice] += Number(quantity);
            
        }

        if (obj[juice] >= 1000) {
            bottles[juice] = Math.trunc(obj[juice]/1000)
        }
    }

    for (const el in bottles) {
        console.log(`${el} => ${bottles[el]}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)

console.log('----------');


solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)