function aquarium(input){
    let length = Number(input[0]);
    let wide = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]/100);

    let volume = length * wide * height;
    let volumeInLitres = volume / 1000;

    let litres = volumeInLitres*(1-percent);
    

    console.log(litres);

}
aquarium(["105",
"77",
"89",
"18.5"])

