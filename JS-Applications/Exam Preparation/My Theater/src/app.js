import { render, page } from "./helper.js";
import { logout } from "./api/data.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { homePage } from "./views/home.js";
import { detailsPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { editPage } from "./views/edit.js";
import { profilePage } from "./views/profile.js";


const main = document.querySelector('#content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateContext)
page("/", homePage)
page("/index.html", homePage)
page("/theater", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/create", createPage)
page("/details/:id", detailsPage)
page("/edit/:id", editPage)
page("/profile", profilePage)


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
        [...document.querySelectorAll('.user')].forEach(a => a.style.display = 'block');
        [...document.querySelectorAll('.guest')].forEach(a => a.style.display = 'none');

    } else {
        [...document.querySelectorAll('.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('.guest')].forEach(a => a.style.display = 'block');
    }
}


async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/theater');
}