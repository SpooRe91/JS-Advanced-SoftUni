import { deleteEvent, getEventById, getEventLikes, isUserLiked, Like } from "../api/data.js";
import { html } from "../helper.js";

const detailsTemplate = (ev,onDelete,onLike,isLiked,likes) => html`
<!--Details Page-->
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${ev.title}</h1>
            <div>
                <img src=${ev.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${ev.description}</p>
            <h4>Date: ${ev.date}</h4>
            <h4>Author: ${ev.author}</h4>
            <div class="buttons">
                ${sessionStorage.getItem("userId")== ev._ownerId
                    ? html`
                        <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${ev._id}">Edit</a>`
                    : null}

                ${(sessionStorage.getItem("userId")&&(sessionStorage.getItem("userId")!=ev._ownerId)&&(isLiked==false))
                    ? html`<a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>`
                    : null}
                
            </div>
            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`

export async function detailsPage(ctx) {
    const eventId = ctx.params.id
    const userId = sessionStorage.getItem("userId")
    const event = await getEventById(eventId)
    let isLiked = await isUserLiked(eventId,userId)
    let likes = await getEventLikes(eventId)

    ctx.render(detailsTemplate(event,onDelete,onLike,isLiked,likes))

    async function onDelete(){
        await deleteEvent(eventId)
        ctx.page.redirect("/profile")
    }

    async function onLike(){
        await Like(eventId)

        isLiked = await isUserLiked(eventId,userId)
        likes = await getEventLikes(eventId)

        ctx.render(detailsTemplate(event,onDelete,onLike,isLiked,likes))
    }
}