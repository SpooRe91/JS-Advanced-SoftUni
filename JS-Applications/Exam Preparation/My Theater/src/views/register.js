import { register } from "../api/data.js";
import { html } from "../helper.js";

const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onRegister))

    async function onRegister(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)
        const email = form.get("email")
        const password = form.get("password")
        const rePass = form.get("repeatPassword")

        try {
            if (!email || !password || !rePass) {
                throw new Error("All fields are required!")
            }

            await register(email, password)
            ctx.page.redirect("/theater")
            ctx.setUserNav()
        } catch (err) {
            alert(err.mesasge)
        }
    }
}