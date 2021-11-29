function literaturaToReadn(input){
    let numberOfPages = Number(input[0]);
    let pagesAbleToRead = Number(input[1]);
    let days = Number(input[2]);
    let hoursPerDay = (numberOfPages / pagesAbleToRead)/days;
    console.log(hoursPerDay);


}
literaturaToReadn(["432",
"15",
"4"])




