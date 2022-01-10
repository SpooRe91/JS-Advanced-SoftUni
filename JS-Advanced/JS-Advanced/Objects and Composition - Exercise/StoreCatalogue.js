function solve(arr) {
    arr.sort();
    let obj = {};
    let sorted = [];
    for (let el of arr) {
        let[product,value] = el.split(' : ');
        obj[product] = Number(value);
    }
    for (let products in obj) {
        sorted.push([products,obj[products]]);
    }
    let letter;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i][0][0]!=letter) {
            letter = sorted[i][0][0];
            console.log(letter);
        }
        console.log(`  ${sorted[i][0]}: ${sorted[i][1]}`);

        
    }
}

     
// function solve(arr){
//     let count = {};
//     let sortable = [];
//     var first = [];
//     for (let words of arr) {
//         let [product,price] = words.split(' : ');
//         count[product] = Number(price);
//     }
 
//     for(let items in count){
//         sortable.push([items,count[items]]);
//     }
//     sortable.sort();
//     console.log(sortable);
// }


solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']


)