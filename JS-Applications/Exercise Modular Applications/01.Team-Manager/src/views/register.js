import { html } from "../helper.js";
import { register } from "../api/data.js";


const registerTemplate = (onSubmit, errorMsg) => html`
<section id="register">
    <article class="narrow">
        <header class="pad-med">
            <h1>Register</h1>
        </header>
        <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
            <div class="error">${errorMsg}</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Username: <input type="text" name="username"></label>
            <label>Password: <input type="password" name="password"></label>
            <label>Repeat: <input type="password" name="repass"></label>
            <input class="action cta" type="submit" value="Create Account">
        </form>
        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
        </footer>
    </article>
</section>`


export function registerPage(ctx) {
    update(null)

    function update(errorMsg) {
        ctx.render(registerTemplate(onSubmit, errorMsg))
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target)

        const email = formData.get("email")
        const username = formData.get("username")
        const password = formData.get("password")
        const rePass = formData.get("repass")

        try {
            if (!email || !password || !rePass || !username) {
                throw new Error("Please enter all fields!")
            }
            if (username.length < 3) {
                throw new Error("Username should be at least 3 characters long!")
            }
            if (password !== rePass) {
                throw new Error("Passwords are not the same!")
            }

            if (password.length < 3) {
                throw new Error("Password should be at least 3 characters/digits long!")
            }

            await register(email, password, username)

            ctx.setUserNav()
            ctx.page.redirect("/my-teams")
        } catch (err) {
            update(err.message)
        }
    }
}