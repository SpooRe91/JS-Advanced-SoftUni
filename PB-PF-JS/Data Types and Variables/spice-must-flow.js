function solve(yield) {
    
    let days = 0;
    let spice = 0;
    let consume = 26;
    
    if (yield<100){  // statement when the yield is less than 100
        console.log(days);
        console.log(spice); 
        return;
    }
    
    while (true) {
        spice +=yield;
        days ++;
        spice-=consume;
        yield-=10;
        if (yield<100){
            spice-=consume;
            break;
        }
    }
    console.log(days);
    console.log(spice);
}
solve(99)