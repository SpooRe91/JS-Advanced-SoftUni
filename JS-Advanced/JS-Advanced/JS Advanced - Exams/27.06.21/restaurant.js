class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr) {
        for (let el of arr) {
            let [productName, productQuantity, productTotalPrice] = el.split(' ');

            if (+productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += +productQuantity
                    this.budgetMoney -= +productTotalPrice;
                } else {
                    this.stockProducts[productName] = +productQuantity
                    this.budgetMoney -= +productTotalPrice
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }

        }
        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {
        // neededProducts: "{productName} {productQuantity}"

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                products: neededProducts,
                price: +price
            }
        }else {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let number = Object.keys(this.menu).length
        if (number == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${number} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later..."
        } else {
            let output = []
            for (const [key, value] of Object.entries(this.menu)) {
                output.push(`${key} - $ ${value.price}`)
            }
            return output.join("\n")
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let neededProd = Object.values(this.menu[meal])[0]          //to get the products arr
            for (const el of neededProd) {
                let name = el.split(" ")[0]
                let quant = el.split(" ")[1]
                if (!this.stockProducts.hasOwnProperty(name) || this.stockProducts[name] < quant) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }
            for (const el of neededProd) {
                let [product, quantity] = el.split(" ")
                this.stockProducts[product] -= +quantity
            }
            this.budgetMoney += this.menu[meal].price

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
        }
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());