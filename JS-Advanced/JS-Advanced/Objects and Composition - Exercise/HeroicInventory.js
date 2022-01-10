function solve(input) {
    let registerArr = [];




    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(" / ");
        let heroName = current[0];
        let level = Number(current[1]);
        let items = [];
        if (current.length > 2) {
            items = current[2].split(", ");

        }
        let register = {
            name: heroName,
            level: level,
            items: items,
        }

        registerArr.push(register);
    }
    console.log(JSON.stringify(registerArr));


}
solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)