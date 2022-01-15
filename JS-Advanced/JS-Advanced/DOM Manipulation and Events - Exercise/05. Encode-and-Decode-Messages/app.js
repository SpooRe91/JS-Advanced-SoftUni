function encodeAndDecodeMessages() {

    document.getElementById('main').addEventListener('click', onClick);
    let firstArea = document.querySelectorAll('textarea')[0];
    let secondArea = document.querySelectorAll('textarea')[1];
    function onClick(e) {
        if (e.target == document.querySelectorAll('button')[0]) {
            let encoding = firstArea.value.split('');

            for (let i = 0; i < encoding.length; i++) {
                let charCode = encoding[i].charCodeAt(0);
                charCode++;
                encoding[i] = String.fromCharCode(charCode);
            }

            firstArea.value = '';
            secondArea.value = encoding.join('');
        } else if (e.target == document.querySelectorAll('button')[1]) {
            let encoding = secondArea.value.split('');

            for (let i = 0; i < encoding.length; i++) {
                let charCode = encoding[i].charCodeAt(0);
                charCode = charCode - 1;
                encoding[i] = String.fromCharCode(charCode);
            }

            secondArea.value = encoding.join('');
        }

    }

}