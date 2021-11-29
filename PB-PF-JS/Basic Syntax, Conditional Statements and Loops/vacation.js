function solve(people, type, day) {

    let price = 0;

    switch (type) {
        case 'Students':
            if (day === "Friday") {
                price = people * 8.45;
            } else if (day === "Saturday") {
                price = people * 9.80;
            } else if (day === "Sunday") {
                price = people * 10.46;
            }
            if (people >= 30) {
                price *= 0.85;
            }
            break;
        case 'Business':
            if (people >= 100) {
                people -= 10;
            }
            if (day === "Friday") {
                price = people * 10.90;
            } else if (day === "Saturday") {
                price = people * 15.60;
            } else if (day === "Sunday") {
                price = people * 16;
            }
            break;
        case 'Regular':
            if (day === "Friday") {
                price = people * 15;
            } else if (day === "Saturday") {
                price = people * 20;
            } else if (day === "Sunday") {
                price = people * 20.50;
            }
            if (people >= 10 && people <= 20) {
                price *= 0.95;
            }
            break;

    }


    console.log(`Total price: ${price.toFixed(2)}`);

}
solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")
