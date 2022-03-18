import { render, page } from "./helper.js";
import { logout } from "./api/data.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { dashboardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { myBooksPage } from "./views/my-books.js";
import { editPage } from "./views/edit.js";

const main = document.querySelector("#site-content")
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(decorateContext)
page("/", dashboardPage)
page("/index.html", dashboardPage)
page("/dashboard", dashboardPage)
page("/login", loginPage)
page("/register", registerPage)
page("/my-books", myBooksPage)
page("/add-book", createPage)
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
        document.querySelector("div#user > span").textContent = `Welcome, ${sessionStorage.getItem("email")}`
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'block'
    }
}


async function onLogout() {
    await logout();
    setUserNav();
    page.redirect('/dashboard');
}