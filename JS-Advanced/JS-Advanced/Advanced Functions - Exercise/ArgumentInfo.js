function solve(...args) {

    let types = [];

    for (let arg of args) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type]) {
            types[type] += 1;
        } else {
            types[type] = 1;
        }

    }



    Object.entries(types).sort((a, b) => {
        return b[1] - a[1]
    }).forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}

solve('cat', 'dog', 'house', 55, 555, 665, 42, function () { console.log('Hello world!'); })