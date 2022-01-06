function solve(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
     sorted.forEach(el=>console.log(el))
}
solve(['alpha',
    'beta',
    'gamma']
)