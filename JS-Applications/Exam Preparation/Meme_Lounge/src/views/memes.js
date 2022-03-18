import { getMemes } from "../api/data.js";
import { html } from "../helper.js";

const memesTemplate = (allMemes) => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${allMemes.length>0
            ? allMemes.map(singleMeme) 
            : html`<p class="no-memes">No memes in database.</p>`}

    </div>
</section>`

const singleMeme = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`

export async function memesPage(ctx) {

    const allMemes = await getMemes()

    ctx.render(memesTemplate(allMemes))

}