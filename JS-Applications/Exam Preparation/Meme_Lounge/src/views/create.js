import { createMeme } from "../api/data.js";
import { html } from "../helper.js";
import { notifyTemplate } from "./notifications.js";


const createTemplate = (onSubmit, err) => html`
<!-- Create Meme Page ( Only for logged users ) -->
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
${err 
    ? notifyTemplate(err) 
    : null}`


export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target);

        const title = form.get("title")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")

        try {
            if (!title || !description || !imageUrl) {
                throw new Error("All fields are required!")
            }

            await createMeme(title, description, imageUrl)
            ctx.page.redirect("/memes")
        } catch (err) {
            ctx.render(createTemplate(onSubmit, err.message));
            document.querySelector("div.notification ").style.display = "block"

            setTimeout(function () {
                ctx.render(createTemplate(onSubmit));

            }, 3000);
        }
    }

}