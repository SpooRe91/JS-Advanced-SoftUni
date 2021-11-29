function safari(input) {
    let budget = Number(input[0]);
    let petrol = Number(input[1]);
    let day = input[2];

    let allPetrol = petrol * 2.10;
    let gid = 100;
    let money = allPetrol + gid;
    if (day === "Sunday") {
        money = money - money * 0.20;

    } else if (day === "Saturday") {

        money = money - money * 0.10;
    }
    if (budget >= money) {
        console.log(`Safari time! Money left: ${(budget - money).toFixed(2)} lv.`);

    } else {
        console.log(`Not enough money! Money needed: ${(money - budget).toFixed(2)} lv.`)
    }
}
    safari(["105.20","15","Sunday"]);