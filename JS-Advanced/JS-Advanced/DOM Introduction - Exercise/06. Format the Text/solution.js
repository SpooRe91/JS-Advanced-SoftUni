function solve() {

    let inputStr = document.getElementById('input').value;
    let output = document.getElementById('output');
 
    let input = inputStr.split('.').filter((p) => p.length > 0);
 
    for (let i = 0; i < input.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (input[i + y]) {
                arr.push(input[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
    // let text = document.getElementById("input").value;
    // let output = document.getElementById("output");
    // let textSentences = text.split('.').filter((p) => p.length > 0);
    // let paragraph = '';


    // if (textSentences.length > 0 && textSentences.length <= 3) {
    //     output.innerHTML = textSentences.join('. ') + '.';

    // } else if (textSentences.length > 3) {
    //     while (textSentences.length != 0) {
    //         for (let j = 0; j < 3; j++) {
    //             if (textSentences.length > 0) {
    //                 let sentence = textSentences.shift();
    //                 paragraph = paragraph + sentence + '. ';
    //             }
    //             paragraph.trim();

    //         }
    //         output.innerHTML += `<p>${paragraph}</p>`;
    //         paragraph = '';
    //     }

    // }

   
}