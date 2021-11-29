function radToDeg(input){
    let rad = Number(input[0]);
    let deg = rad * 180/Math.PI;
    console.log(deg.toFixed(0))
}
radToDeg(["0.7854"])