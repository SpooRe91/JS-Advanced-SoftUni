import { render, page } from "./helper.js";
import { logout } from "./api/data.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { homePage } from "./views/home.js";
import { listingsPage } from "./views/listings.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myListingsPage } from "./views/my-listings.js";
import { searchPage } from "./views/search.js";

const main = document.querySelector("#site-content")
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateContext)
page("/", homePage)
page("/index.html", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/listings", listingsPage)
page("/create", createPage)
page("/details/:id", detailsPage)
page("/edit/:id", editPage)
page("/my-listings", myListingsPage)
page("/search", searchPage)


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
        document.getElementById('profile').style.display = 'block'
        document.getElementById('guest').style.display = 'none'
        document.querySelector("div#profile > a").textContent=`Welcome ${sessionStorage.getItem("username")}`
    } else {
        document.getElementById('profile').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
    }
}


async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/');
}