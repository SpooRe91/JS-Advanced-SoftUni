import { render, page } from './helper.js';

import { createPage } from './views/create.js';
import { dashPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myFurPage } from './views/my-furniture.js';


import { logout } from "./api/data.js"

page.redirect("/")

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, document.querySelector(".container"));
    ctx.setUserNav = setUserNav;
    next();
}

page(decorateContext)
page("/", dashPage)
page("/my-furniture", myFurPage)
page("/login", loginPage)
page("/register", registerPage)
page("/edit/:id", editPage)
page("/create", createPage)
page("/details/:id", detailsPage)

document.getElementById('logoutBtn').addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});

setUserNav()
page.start()


function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}
