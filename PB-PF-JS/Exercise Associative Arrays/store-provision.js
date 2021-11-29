    function storeProv(arr, arr2) {
        let store = {}
        

        for (let i = 0; i < arr.length-1; i += 2) {
            let stock = arr[i]
            let quantity = +arr[i + 1]
            store[stock] = quantity
        }
        for (let i = 0; i < arr2.length-1; i += 2) {
            let stock = arr2[i]
            let quantity = +arr2[i + 1]
            if (store.hasOwnProperty(stock)) {
                let currentQuantity = store[stock];
                store[stock] = currentQuantity+quantity;
            }else {
                store[stock] = quantity;
            }
        }

        for (let el in store) {
        console.log(`${el} -> ${store[el]}`);
        }

    }
storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)