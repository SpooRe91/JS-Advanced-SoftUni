function changeBureau(input) {
    let bitcoins = Number(input[0]);
    let chineseUans = Number(input[1]);
    let comision = Number(input[2]) / 100;
    let euro = 0;

   
    euro = ((bitcoins * 1168) + (chineseUans * 0.15 * 1.76 ))/ 1.95;

    let charge = euro * comision;
    let result = euro - charge;
    console.log(result.toFixed(2));

}
changeBureau(["20",
"5678",
"2.4"])

