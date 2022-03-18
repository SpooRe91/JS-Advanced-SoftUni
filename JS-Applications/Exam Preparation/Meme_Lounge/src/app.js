import { render, page } from "./helper.js";
import { logout } from "./api/data.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { memesPage } from "./views/memes.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { profilePage } from "./views/profile.js";


const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateContext)
page("/", homePage)
page("/index.html", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/memes", memesPage)
page("/create", createPage)
page("/details/:id", detailsPage)
page("/edit/:id", editPage)
page("/my-profile", profilePage)





setUserNav()
page.start();

function decorateContext(ctx, next) {
    ctx.setUserNav = setUserNav;
    ctx.render = (content) => render(content, main);

    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        [...document.querySelectorAll('nav > div.user')].forEach(a => a.style.display = 'block');
        [...document.querySelectorAll('nav > div.guest')].forEach(a => a.style.display = 'none');
        document.querySelector('div.profile > span').style.display = 'block'
        document.querySelector('div.profile > span').textContent = `Welcome,${sessionStorage.getItem('email')}`
    } else {
        [...document.querySelectorAll('nav > div.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('nav > div.guest')].forEach(a => a.style.display = 'block');
        document.querySelector('div.profile > span').textContent = `Welcome,user`
        document.querySelector('div.profile > span').style.display = 'none'

    }
}


async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/');
}