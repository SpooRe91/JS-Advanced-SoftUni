import { editGame, getGameById } from "../api/data.js";
import { html } from "../helper.js";


const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>
`

export async function editPage(ctx) {
    const gameId = ctx.params.id

    const game = await getGameById(gameId)

    ctx.render(editTemplate(game, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        const form = new FormData(ev.target)

        const title = form.get("title")
        const category = form.get("category")
        const maxLevel = form.get("maxLevel")
        const imageUrl = form.get("imageUrl")
        const summary = form.get("summary")

        try {
            if (!title || !category || !maxLevel || !imageUrl || !summary) {
                throw new Error("All fields are required!")
            }
            await editGame(gameId, title, category, maxLevel, imageUrl, summary)
            ctx.page.redirect(`/details/${gameId}`)
        } catch (err) {
            alert(err.message)
        }
    }
}