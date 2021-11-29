function pass(input) {
    let pass = input.shift();
    let line = input.shift();

    let newPass = [];
    while (line !== 'Done') {
        let [command, ...item] = line.split(' ')
        switch (command) {
            case 'TakeOdd':

                pass = pass.split('')
                for (let i = 1; i < pass.length; i += 2) {
                    let currEl = pass[i];
                    newPass.push(currEl)


                }
                pass.splice(0, pass.length)
                for (let j = 0; j < newPass.length; j++) {
                    pass.push(newPass[j])

                }
                pass = pass.join("");
                console.log(pass)

                break;
            case 'Cut':
                let index = +item[0];
                let long = +item[1];

                pass = pass.split('')
                pass.splice(index, long)
                pass = pass.join("");
                console.log(pass)
                break;
            case 'Substitute':
                let substring = item[0];
                let substitute = item[1];
                if (pass.includes(substring)) {


                    while (pass.includes(substring)) {

                        pass = pass.replace(substring, substitute);



                    }
                    console.log(pass)
                } else {
                    console.log(`Nothing to replace!`)
                }
                //newPass = newPass.split(' ')
                // console.log(newPass.join(''))


                break;

            default:
                break;
        }




        line = input.shift();
    }
    console.log(`Your password is: ${pass}`)

}

pass(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])


// pass(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
//     "TakeOdd",
//     "Cut 18 2",
//     "Substitute ! ***",
//     "Substitute ? .!.",
//     "Done"])
