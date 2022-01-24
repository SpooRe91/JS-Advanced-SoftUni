function validate() {
    document.querySelector("#submit").type = "button";

    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passInput = document.getElementById('password');
    let confPassInput = document.getElementById('confirm-password');
    let checkbox = document.getElementById('company')
    let companyNum = document.getElementById('companyNumber')

    let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    let passRegex = /^[\w]{5,15}$/;
    let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;


    checkbox.addEventListener('change', onChange);

    function onChange(ev) {
        let infoBox = document.getElementById('companyInfo');

        if (ev.target.checked) {
            infoBox.style.display = 'block';
        } else {
            infoBox.style.display = 'none';
            companyNum.value = '';
        }
    }

    document.getElementById('submit').addEventListener('click', onClick);

    function onClick() {
        let validation = [];

        if (!usernameRegex.test(usernameInput.value)) {
            document.getElementById('username').style.borderColor = 'red';
            validation.push('false');
        } else {
            usernameInput.style.borderColor = '';
            validation.push('true');
        }

        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            validation.push('false');
        } else {
            emailInput.style.borderColor = '';
            validation.push('true');
        }

        if (passRegex.test(passInput.value) && passRegex.test(confPassInput.value) && (passInput.value == confPassInput.value)) {
            confPassInput.style.borderColor = '';
            passInput.style.borderColor = '';
            validation.push('true');

        } else {
            passInput.style.borderColor = 'red';
            confPassInput.style.borderColor = 'red';
            validation.push('false');
        }
        if (checkbox.checked) {
            if (companyNum.value<1000 || companyNum.value>9999) {
                companyNum.style.borderColor = 'red';
                validation.push('false');
            } else {
                companyNum.style.borderColor = '';
                validation.push('true');
            }
        }

        if (validation.includes('false')) {
            document.getElementById('valid').style.display = 'none'
        } else {
            document.getElementById('valid').style.display = 'block'
        }

    }

}
