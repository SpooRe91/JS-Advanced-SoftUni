import { html, until } from "../helper.js";
import { getAllTeams } from "../api/data.js";
import { isLogged } from "../checker.js"

const browseTemplate = (teamsPromise, isLogged) => html`
<section id="browse">
    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${isLogged ? html`
    <article class="layout narrow">
        <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
    </article>`: ""}
    ${until(teamsPromise, html`<p>Loading...</p>`)}
</section>`

const teamTemplate = (team) => html`
<article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.memberCount} Members</span>
        <div><a href="/details/${team._id}" class="action">See details</a></div>
    </div>
</article>`




export function browsePage(ctx) {
    ctx.render(browseTemplate(getTeams(), isLogged()))
}

async function getTeams() {
    const teams = await getAllTeams()

    return teams.map(teamTemplate)

}


