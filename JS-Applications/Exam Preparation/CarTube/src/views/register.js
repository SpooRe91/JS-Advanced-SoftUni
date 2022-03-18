import { register } from "../api/data.js";
import { html } from "../helper.js";


const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target);

        const username = form.get('username')
        const password = form.get('password')
        const repeatPass = form.get('repeatPass')

        try {
            if (!username || !password|| !repeatPass) {
                throw new Error('All fields are required!')
            }

            await register(username, password)
            ctx.page.redirect("/listings")
            ctx.setUserNav()
        } catch (err) {
            alert(err.message)
        }
    }
}