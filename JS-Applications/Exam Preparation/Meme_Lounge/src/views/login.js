import { html } from "../helper.js";
import { login } from "../api/data.js";
import { notifyTemplate } from "./notifications.js";


const loginTemplate = (onSubmit, error) => html`
<!-- Login Page ( Only for guest users ) -->
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
${error 
    ? notifyTemplate(error) 
    : null}`

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));


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
            ctx.setUserNav()
            ctx.page.redirect("/memes")
        } catch (err) {
            ctx.render(loginTemplate(onSubmit,err.message));
            document.querySelector("div.notification ").style.display="block"

            setTimeout(function(){
                ctx.render(loginTemplate(onSubmit));

              },3000);
        }
    }
}