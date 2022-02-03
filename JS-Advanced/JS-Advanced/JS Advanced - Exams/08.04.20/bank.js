class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let isFound = this.allCustomers.some(el => {    //returs only true or false
            if (el.firstName === customer.firstName
                && el.lastName === customer.lastName
                && el.personalId === customer.personalId) {
                return true;
            }
        });

        if (isFound) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        customer.transactions = [];
        customer.count = 0;
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        personalId = +personalId
        amount = +amount

        let isFound = this.allCustomers.find(el => {            //returs true or false and the found obj
            if (el.personalId === personalId) {
                return true;
            }
        });

        if (!isFound) {
            throw new Error("We have no customer with this ID!")
        }

        if (isFound.totalMoney) {
            isFound.totalMoney += amount
        } else {
            isFound.totalMoney = amount
        }
        isFound.count += 1
        isFound.transactions.push(`${isFound.count}. ${isFound.firstName} ${isFound.lastName} made deposit of ${amount}$!`)
        return `${isFound.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        personalId = +personalId
        amount = +amount

        let isFound = this.allCustomers.find(el => {            //returs true or false and the found obj
            if (el.personalId === personalId) {
                return true;
            }
        });

        if (!isFound) {
            throw new Error("We have no customer with this ID!")
        }

        if (isFound.totalMoney < amount) {
            throw new Error(`${isFound.firstName} ${isFound.lastName} does not have enough money to withdraw that amount!`)
        }
        isFound.count += 1
        isFound.totalMoney -= amount;
        isFound.transactions.push(`${isFound.count}. ${isFound.firstName} ${isFound.lastName} withdrew ${amount}$!`)
        return `${isFound.totalMoney}$`

    }

    customerInfo(personalId) {
        personalId = +personalId

        let isFound = this.allCustomers.find(el => {            //returs true or false and the found obj
            if (el.personalId === personalId) {
                return true;
            }
        });

        if (!isFound) {
            throw new Error("We have no customer with this ID!")
        }

        let output = []
        output.push(`Bank name: ${this._bankName}`);
        output.push(`Customer name: ${isFound.firstName} ${isFound.lastName}`);
        output.push(`Customer ID: ${isFound.personalId}`);
        output.push(`Total Money: ${isFound.totalMoney}$`);
        output.push(`Transactions:`);

        isFound.transactions.reverse().forEach(transaction => {
            output.push(transaction)
        })
        return output.join("\n")
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: "Svetlin", lastName: "Nakov", personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: "Mihaela", lastName: "Mileva", personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

