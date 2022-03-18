import { register } from "../api/data.js";
import { html } from "../helper.js";


const registerTemplate = (onRegister) => html`
<section id="register-page" class="register">
    <form @submit=${onRegister} id="register-form" >
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`

export async function registerPage(ctx){
    ctx.render(registerTemplate(onRegister))

    async function onRegister(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const email = form.get("email")
        const password = form.get("password")
        const rePass = form.get("confirm-pass")

        try {
            if (!email||!password||!rePass) {
                throw new Error("All fields are required!")
            }

            await register(email,password)
            ctx.page.redirect("/dashboard")
            ctx.setUserNav()
        } catch (err) {
            alert(err.message)
        }
    }
}