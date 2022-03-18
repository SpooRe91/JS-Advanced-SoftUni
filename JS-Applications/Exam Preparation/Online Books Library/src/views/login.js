import { login } from "../api/data.js";
import { html } from "../helper.js";

const loginTemplate = (onLogin) => html`
<section id="login-page" class="login">
    <form id="login-form" @submit=${onLogin}>
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`
export async function loginPage(ctx) {
    ctx.render(loginTemplate(onLogin))

    async function onLogin(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const email = form.get("email")
        const password = form.get("password")

        try {
            if (!email||!password) {
                throw new Error("All fields are required!")
            }
            await login(email,password)
            ctx.page.redirect("/dashboard")
            ctx.setUserNav()
        } catch (err) {
            alert(err.message)
        }
    }
}