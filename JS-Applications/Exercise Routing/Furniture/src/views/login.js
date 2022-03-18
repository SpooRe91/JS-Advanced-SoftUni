import { login } from "../api/api.js";
import { html } from "../helper.js"
import { loadTemp } from "./loading.js";


const loginTemp = (onSubmit, errorMsg) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            ${errorMsg ? html`<div style="font-size:20px;color:red">${errorMsg}</div>` : null}

            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control ${errorMsg ? " is-invalid" : "" }" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control ${errorMsg ? " is-invalid" : "" }" id="password" type="password"
                    name="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>`

export function loginPage(ctx) {
    update()

    function update(errorMsg) {
        ctx.render(loginTemp(onSubmit, errorMsg));
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target)

        const email = formData.get("email").trim()
        const password = formData.get("password").trim()
        ctx.render(loadTemp())
        try {
            await login(email, password)

            ctx.setUserNav()
            ctx.page.redirect("/")
        } catch (err) {
            update(err.message)
        }
    }
}