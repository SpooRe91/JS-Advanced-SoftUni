function solve(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let shieldCount = 0;

    for (let i = 1; i <= lostCount; i++) {

        if (i % 2 === 0) {
            expenses += helmetPrice;
        }
        if (i % 3 === 0) {
            expenses += swordPrice;
        }
        if (i % 3 === 0 && i % 2 === 0) {
            expenses += shieldPrice;
            shieldCount++;
        }
        if (shieldCount % 2 === 0 && shieldCount !== 0) {
            expenses += armorPrice;
            shieldCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23, 12.50, 21.50, 40, 200)
