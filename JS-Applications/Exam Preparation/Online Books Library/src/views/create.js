import { createBook } from "../api/data.js";
import { html } from "../helper.js";


const createTemplate = (onCreate) => html`
<section id="create-page" class="create">
    <form @submit=${onCreate} id="create-form" action="" method="">
        <fieldset>
            <legend>Add new Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" placeholder="Title">
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image">
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Add Book">
        </fieldset>
    </form>
</section>`


export async function createPage(ctx){
    ctx.render(createTemplate(onCreate))

    async function onCreate(ev){
        ev.preventDefault()

        const form = new FormData(ev.target)

        const title = form.get("title")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")
        const type = form.get("type")

        try {
            if(!title||!description||!imageUrl||!type){
                throw new Error("All fields are required!")
            }

            await createBook(title, description, imageUrl,type)
            ctx.page.redirect("/dashboard")
        } catch (err) {
            alert(err.message)
        }
    }
}