import { editEvent, getEventById } from "../api/data.js";
import { html } from "../helper.js";


const editTemplate = (event, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${event.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${event.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${event.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" name="description"
                placeholder="Description">${event.description}</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" .value=${event.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`

export async function editPage(ctx) {
    const eventId = ctx.params.id
    const event = await getEventById(eventId)

    ctx.render(editTemplate(event, onEdit))

    async function onEdit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)
        const title = form.get('title')
        const date = form.get('date')
        const author = form.get('author')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')

        try {
            if (!title || !date || !author || !description || !imageUrl) {
                throw new Error("All fields are required!")
            }
            await editEvent(eventId, title, date, author, imageUrl, description)
            ctx.page.redirect(`/details/${eventId}`)
        } catch (err) {
            alert(err.message)
        }

    }



}