import { editMeme, getMemeById } from "../api/data.js";
import { html } from "../helper.js";
import { notifyTemplate } from "./notifications.js";


const editTemplate = (meme, onSubmit, err) => html`
<!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
${err 
    ? notifyTemplate(err) 
    : null}`


export async function editPage(ctx) {
    const memeId = ctx.params.id;

    const meme = await getMemeById(memeId)

    ctx.render(editTemplate(meme, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)
        const title = form.get("title")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")

        try {
            if (!title || !description || !imageUrl) {
                throw new Error("All fields are required!")
            }

            await editMeme(memeId, title, description, imageUrl)
            ctx.page.redirect(`/details/${memeId}`)
        } catch (err) {
            ctx.render(editTemplate(meme, onSubmit, err.message));
            document.querySelector("div.notification ").style.display = "block"

            setTimeout(function () {
                ctx.render(editTemplate(meme, onSubmit));

            }, 3000);
        }

    }
}