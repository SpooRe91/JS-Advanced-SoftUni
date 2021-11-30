function bigger(arr) {
    let sorted = arr.sort((a, b) => a - b )
    if (sorted.length % 2 === 0) {
        return sorted.slice(2);
    } else {
        return sorted.slice(Math.floor(sorted.length / 2));
    }
}
bigger([4, 7, 2, 5])
bigger([3, 19, 14, 7, 2, 19, 6])
