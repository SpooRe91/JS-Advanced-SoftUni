import { html } from "../helper.js";
import { createTeam } from "../api/data.js";

const createTemplate = (onSubmit, error) => html`
<section id="create">
    <article class="narrow">
        <header class="pad-med">
            <h1>New Team</h1>
        </header>
        <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
            <div class="error">${error}</div>
            <label>Team name: <input type="text" name="name"></label>
            <label>Logo URL: <input type="text" name="logoUrl"></label>
            <label>Description: <textarea name="description"></textarea></label>
            <input class="action cta" type="submit" value="Create Team">
        </form>
    </article>
</section>`


export function createPage(ctx) {
    update(null)

    function update(error) {
        ctx.render(createTemplate(onSubmit, error))
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        const form = new FormData(ev.target);

        const name = form.get('name').trim();
        const logoUrl = form.get('logoUrl').trim();
        const description = form.get('description').trim();


        try {
            if (!name || !logoUrl || !description) {
                throw new Error("All fields are required!")
            } else if (name.length < 4) {
                throw new Error("Name should be at least 4 characters long!")
            } else if (description.length < 10) {
                throw new Error("Description should be at least 10 characters long!")
            }

            const result = await createTeam({ name, logoUrl, description })
            ctx.page.redirect(`/details/${result._id}`)

        } catch (err) {
            update(err.message)
        }

    }
}

