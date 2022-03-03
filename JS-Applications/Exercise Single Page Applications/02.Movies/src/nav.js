export function navUpdate(welcome,nav) {
    if (sessionStorage.hasOwnProperty("authToken")) {
        welcome.textContent = `Welcome, ${sessionStorage.getItem("email")}`
        nav.children[1].children[2].style.display = "none"
        nav.children[1].children[3].style.display = "none"
        nav.children[1].children[1].style.display = "inline-block"
    } else {
        welcome.textContent = `Welcome, guest`
        nav.children[1].children[1].style.display = "none"
        nav.children[1].children[2].style.display = "inline-block"
        nav.children[1].children[3].style.display = "inline-block"
    }
}