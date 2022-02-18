class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {         //"{type} {quantity} {price}"
        let types = []
        vegetables.forEach(vegetable => {
            let [type, quantity, price] = vegetable.split(" ");
            quantity = Number(quantity)
            price = Number(price)
            if (!types.includes(type)) {
                types.push(type);
            }
            let found = this.availableProducts.find(product => product.type === type);

            if (found) {
                found.quantity += quantity;
                if (found.price < price) {
                    found.price = price;
                }
            } else {
                this.availableProducts.push({ type: type, quantity: +quantity, price: +price });
            }
        })

        return "Successfully added "+types.join(", ")
    }

    buyingVegetables(selectedProducts) {        //"{type} {quantity}"
        let totalPrice = 0;
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(" ");
            quantity = Number(quantity)

            let found = this.availableProducts.find(product => product.type === type);

            if (!found) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if (found.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                }
                totalPrice += (quantity * found.price)
                found.quantity-= quantity
            }
        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity)

        let found = this.availableProducts.find(product => product.type === type);

        if (!found) {
            throw new Error(`${type} is not available in the store.`)
        } else {
            if (quantity > Number(found.quantity)) {
                found.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`
            }
            found.quantity -= quantity

            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision() {
        let output = []
        output.push("Available vegetables:")
        this.availableProducts.sort((a,b) => a.price-b.price).forEach(product => {
            output.push(`${product.type}-${product.quantity}-$${product.price}`)
        })
        output.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        
        return output.join("\n")
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
