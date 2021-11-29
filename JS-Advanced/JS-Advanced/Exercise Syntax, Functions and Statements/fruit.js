function fruit(str,weight,pricePerKilo) {  
    let moneyNeeded = (weight * pricePerKilo)/1000;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${str}.`);
}
fruit('orange', 2500, 1.80)