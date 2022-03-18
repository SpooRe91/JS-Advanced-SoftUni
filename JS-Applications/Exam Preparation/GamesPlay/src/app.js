import { render, page } from "./helper.js";
import { logout } from "./api/data.js";
import { registerPage } from "./views/register.js";
import { loginPage } from "./views/login.js";
import { homePage } from "./views/home.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { allGamesPage } from "./views/all-games.js";
import { editPage } from "./views/edit.js";


const main = document.querySelector("#main-content")
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateContext)
page("/", homePage)
page("/index.html", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/all-games", allGamesPage)
page("/create", createPage)
page("/details/:id", detailsPage)
page("/edit/:id", editPage)


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
        document.getElementById('user').style.display = 'block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
    }
}


async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/home');
}