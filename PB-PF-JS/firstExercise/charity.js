function charity(input){
    let days = Number(input[0]);
    let coocker = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);
    
    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pancakePrice = 3.20;
    
    let moneyForOneDay = ((cakes * cakePrice) 
    + (waffles * wafflePrice) 
    + (pancakes * pancakePrice)) * coocker;
    
    let moneyForAllDays = moneyForOneDay * days;
    let money = moneyForAllDays - (moneyForAllDays/8);
    console.log(money);

}
charity(["23",
"8",
"14",
"30",
"16"])



