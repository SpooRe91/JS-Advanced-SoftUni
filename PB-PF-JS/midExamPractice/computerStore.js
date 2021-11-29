function computerStore(pricesList) {
    let totalPrice = 0;
    let taxes = 0;
    let priceWithTax = 0;
    let priceWithDiscount = 0;

    let customer = pricesList.pop();


    for (let price of pricesList) {
        if (Number(price) < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            taxes += price * 20 / 100;
            totalPrice += Number(price);
        }

    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
        return;
    } else {
        if (customer === "special") {
            priceWithTax = totalPrice + taxes;
            priceWithDiscount = priceWithTax - priceWithTax * 10 / 100;
            console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${priceWithDiscount.toFixed(2)}$`);
        } else {
            priceWithTax = totalPrice + taxes;
            console.log(`Congratulations you've just bought a new computer!
            Price without taxes: ${totalPrice.toFixed(2)}$
            Taxes: ${taxes.toFixed(2)}$
            -----------
            Total price: ${priceWithTax.toFixed(2)}$`);
        }
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])

computerStore([
    'regular'
])
