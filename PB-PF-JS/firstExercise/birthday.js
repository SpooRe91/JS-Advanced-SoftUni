function birthday(input){
    let rent = Number(input[0]);
    let cake = rent*20/100;
    let drinks = cake-(cake*45/100);
    let animator = rent/3;
    let sum = rent + cake + animator + drinks;
    console.log(sum);

}
birthday(["3720"])


