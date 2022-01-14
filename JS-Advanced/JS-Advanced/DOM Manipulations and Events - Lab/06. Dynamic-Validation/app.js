function validate() {

    let regExp = /([a-z]{1,})@([a-z]{1,})\.([a-z]{1,})/gm;

    let input = document.getElementById('email');

    input.addEventListener('change',checkValidity);

    function checkValidity(ev) {
        if(!ev.target.value.match(regExp)) {
            ev.target.classList.add('error');
        }else{
            ev.target.classList.remove('error');
        }
    }


}