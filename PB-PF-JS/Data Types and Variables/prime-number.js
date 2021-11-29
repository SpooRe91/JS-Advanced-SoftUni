function solve(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;





}
solve(-5)