import { html } from "../helper.js";
import { login } from "../api/data.js";

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target)

        const email = form.get("email")
        const password = form.get("password")

        try {
            if (!email || !password) {
                throw new Error("All fields are required!")
            }
            await login(email, password)
            ctx.page.redirect("/home")
            ctx.setUserNav()
        } catch (err) {
            alert(err.message)
        }

    }
}