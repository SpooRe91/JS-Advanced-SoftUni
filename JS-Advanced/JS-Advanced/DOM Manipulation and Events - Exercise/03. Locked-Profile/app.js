function lockedProfile() {

    document.getElementById('main').addEventListener('click', showHideProfile)

    function showHideProfile(ev) {
        if(ev.target.parentNode.querySelector('input[type="radio"]').checked==false) {
            if (ev.target.textContent == 'Show more') {
                ev.target.parentNode.querySelector('div').style.display = "block"
                ev.target.textContent = 'Hide it'
            }else if (ev.target.textContent == 'Hide it') {
                ev.target.parentNode.querySelector('div').style.display = "none"
                ev.target.textContent = 'Show more';
            }
        }
        
    }
}