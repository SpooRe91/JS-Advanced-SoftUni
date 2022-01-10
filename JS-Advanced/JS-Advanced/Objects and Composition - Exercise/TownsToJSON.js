function solve(arr) {

    let result = [];
    arr.shift();
    for (const el of arr) {
        let newEl = el.slice(2, el.length-2)
        let[town,lat,long] = newEl.split(' | ')
        result.push({
            "Town": town,
            "Latitude": Number(Number(lat).toFixed(2)),
            "Longitude": Number(Number(long).toFixed(2))
        })
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)