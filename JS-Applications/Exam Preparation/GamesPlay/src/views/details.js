import { createComment, deleteGame, getComments, getGameById } from "../api/data.js";
import { html } from "../helper.js";


const detailsTemplate = (game, onDelete,onComment,comments) => html`
<!--Details Page-->
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>

                ${comments.length>0
                    ?comments.map(commentTemplate)
                    :html`<p class="no-comment">No comments.</p>`}
                
            </ul>
            
            
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${game._ownerId == sessionStorage.getItem("userId") 
            ? html`
            <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
            </div>`
            : null}

    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${(sessionStorage.getItem("userId")&&(sessionStorage.getItem("userId")!=game._ownerId))
        ?html`
    <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea id="commentInput" name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>`
        :null}
    
</section>`

const commentTemplate=(comment)=>html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

export async function detailsPage(ctx) {
    const gameId = ctx.params.id

    const game = await getGameById(gameId)
    let comments = await getComments(gameId)

    ctx.render(detailsTemplate(game, onDelete,onComment,comments))

    async function onDelete() {
         confirm("Are you sure")
        if (confirm) {
            await deleteGame(gameId)
            ctx.page.redirect("/home")
        }
    }

    async function onComment(ev){
        ev.preventDefault()
        
        let  comment = document.getElementById("commentInput").value
        await createComment(gameId,comment)
       
        let comments = await getComments(gameId)
        ctx.render(detailsTemplate(game, onDelete,onComment,comments))
    }
}