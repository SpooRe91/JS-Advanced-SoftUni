import { html } from "../helper.js";
import { editBook, getBookById } from "../api/data.js";

const editTemplate = (book, onEdit) => html`
<section id="edit-page" class="edit">
    <form @submit=${onEdit} id="edit-form">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`


export async function editPage(ctx) {
    const bookId = ctx.params.id

    const book = await getBookById(bookId)

    ctx.render(editTemplate(book, onEdit))

    async function onEdit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const title = form.get("title")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")
        const type = form.get("type")

        try {
            if (!title || !description || !imageUrl || !type) {
                throw new Error("All fields are required!")
            }

            await editBook(bookId, title, description, imageUrl, type)
            ctx.page.redirect(`/details/${bookId}`)
        } catch (err) {
            alert(err.message)
        }
    }
}