function sameNums(num) {
    num = num.toString();

    let bool = true;
    let sum = 0;

    let proof = num[0];

    for (let i = 0; i < num.length; i++) {
        sum += +num[i];

        if (num[i] !== proof) {
            bool = false;
        }



    }
    console.log(bool);
    console.log(sum);
}
sameNums(2222222)