import { html } from "../helper.js";
import { register } from "../api/data.js";

const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const email = form.get('email')
        const password = form.get('password')
        const rePass = form.get('confirm-password')

        try {
            if (!email || !password || !rePass) {
                throw new Error('All fields are required!')
            }

            await register(email, password,)
            ctx.page.redirect("/home")
            ctx.setUserNav()

        } catch (err) {
            alert(err.message)
        }
    }
}