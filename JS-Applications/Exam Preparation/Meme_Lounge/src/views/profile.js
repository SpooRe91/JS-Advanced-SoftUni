import { html } from "../helper.js";
import { getUserMemes } from "../api/data.js";


const profileTemplate = (memes) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${sessionStorage.getItem("userGender")=="male"?"/images/male.png":"/images/female.png"}>
        <div class="user-content">
            <p>Username: ${sessionStorage.getItem("username")}</p>
            <p>Email:  ${sessionStorage.getItem("email")}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

        ${memes.length>0
            ? memes.map(singeMeme) 
            : html`<p class="no-memes">No memes in database.</p>`}

    </div>
</section>`


const singeMeme = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`



export async function profilePage(ctx) {
    const userId = sessionStorage.getItem('userId');

    const memes = await getUserMemes(userId)

    ctx.render(profileTemplate(memes))
}