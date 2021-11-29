function solve(start,end) {
    let sum = 0;
    let result = '';
    for (let index = start; index <= end; index++){
        sum += index;
        result += `${index} `;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
    
}
solve(5, 10)

    
