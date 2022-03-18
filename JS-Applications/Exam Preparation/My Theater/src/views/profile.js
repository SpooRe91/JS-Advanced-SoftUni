import { getUserEvents } from "../api/data.js";
import { html } from "../helper.js";


const profileTemplate = (events) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="/images/profilePic.png">
        </div>
        <h2>${sessionStorage.getItem("email")}</h2>
    </div>
    <div class="board">

        ${events.length > 0 
            ? events.map(eventTemplate) 
            : html`
            <div class="no-events">
            <p>This user has no events yet!</p>
        </div>`}

    </div>
</section>`

const eventTemplate = (ev) => html`.
<div class="eventBoard">
    <div class="event-info">
        <img src=${ev.imageUrl}>
        <h2>${ev.title}</h2>
        <h6>${ev.date}</h6>
        <a href="/details/${ev._id}" class="details-button">Details</a>
    </div>
</div>`

export async function profilePage(ctx){
    const userId = sessionStorage.getItem("userId")
    const events = await getUserEvents(userId)

    ctx.render(profileTemplate(events))
}