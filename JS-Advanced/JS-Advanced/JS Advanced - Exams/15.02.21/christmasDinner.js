class ChristmasDinner {
    constructor(budget) {
        if (+budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = +budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let [type, price] = product;

        if (+price > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
        this.budget -= price;
        this.products.push(type);

        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {
        let { recipeName, productsList } = recipe;

        if (productsList.every(meal => this.products.includes(meal))) {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error("We do not have this product")
        }
    }

    inviteGuests(name, dish) {
        let isPresent = false;
        this.dishes.forEach((obj) => {
            if (obj.recipeName === dish) {
                isPresent = true;
            }
        });
        if (!isPresent) {
            throw new Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let output = []
        let productsString;
        let string;
        for (let [name, dish] of Object.entries(this.guests)) {
            for (let i = 0; i < this.dishes.length; i++) {
                if (this.dishes[i].recipeName == dish) {
                    productsString = this.dishes[i].productsList.join(', ')
                }
            }
            string = `${name} will eat ${dish}, which consists of ` + productsString;
            output.push(string)
        }
        return output.join("\n")
    }
}

let dinner = new ChristmasDinner(300);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

console.log(dinner.inviteGuests('Ivan', 'Oshav'))
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'))
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'))

console.log(dinner.showAttendance());
