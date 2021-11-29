function solve(num) {
    for (let i = 1; i <= num; i++) {
        let output = '';
        for (let j = 1; j <=i; j++) {
            output += `${i} `
            
        }
        console.log(output)
    }
}

solve(5)
solve(10)
solve(3)