function calcDeposit(input){
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let procent = Number(input[2]/100);
    let sum = deposit + months*((deposit * procent)/12);
    console.log(sum);

}
calcDeposit(["2350",
"6",
"7"])


