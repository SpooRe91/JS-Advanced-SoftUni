import { html } from "../helper.js";
import { editTeam, getTeamById } from "../api/data.js";

const editTemplate = (team, onSubmit, error) => html`
<section id="edit">
    <article class="narrow">
        <header class="pad-med">
            <h1>Edit Team</h1>
        </header>
        <form @submit=${onSubmit} id="edit-form" class="main-form pad-large">
            <div class="error">${error}</div>
            <label>Team name: <input type="text" name="name" .value=${team.name}></label>
            <label>Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}></label>
            <label>Description: <textarea name="description" .value=${team.description}></textarea></label>
            <input class="action cta" type="submit" value="Save Changes">
        </form>
    </article>
</section>`


export async function editPage(ctx) {
    const id = ctx.params.id
    const team = await getTeamById(id)


    update(team, null)

    function update(team, error) {
        ctx.render(editTemplate(team, onSubmit, error))
    }


    async function onSubmit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const name = form.get('name')
        const description = form.get("description")
        const logoUrl = form.get("logoUrl")

        try {
            if (!name || !logoUrl || !description) {
                throw new Error("All fields are required!")
            }
            if (name.length < 4) {
                throw new Error("Name should be at least 4 characters long!")
            }
            if (description.length < 10) {
                throw new Error("Description should be at least 10 characters long!")
            }

            await editTeam({ name, logoUrl, description }, id)
            ctx.page.redirect(`/details/${id}`)


        } catch (err) {
            update(team, err.message)

        }
    }

}


