import { html } from '../helper.js';
import { register } from '../api/data.js';
import { notifyTemplate } from './notifications.js';


const registerTemplate = (onSubmit, error) => html`
<!-- Register Page ( Only for guest users ) -->
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>
${error 
    ? notifyTemplate(error) 
    : null}
`


export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target);

        const username = form.get("username")
        const email = form.get("email")
        const password = form.get("password")
        const repeatPass = form.get("repeatPass")
        const gender = form.get("gender")

        try {
            if (!username || !email || !password || !repeatPass) {
                throw new Error("All fields are required!")
            }

            await register(username, email, password, gender)
            ctx.setUserNav()
            ctx.page.redirect("/memes")
        } catch (err) {
            ctx.render(registerTemplate(onSubmit, err.message));
            document.querySelector("div.notification ").style.display = "block"

            setTimeout(function () {
                ctx.render(registerTemplate(onSubmit));
            }, 3000);
        }
    }
}