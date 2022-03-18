import { html } from "../helper.js";
import { getTeamsByUser } from "../api/data.js";

const myTeamsTemplate = (teams) => html`
<section id="my-teams">

    <article class="pad-med">
        <h1>My Teams</h1>
    </article>

    ${teams == false 
        ? html`<article class="layout narrow">
        <div class="pad-med">
            <p>You are not a member of any team yet.</p>
            <p><a href="/browse">Browse all teams</a> to join one, or use the button bellow to cerate your
                own
                team.</p>
        </div>
        <div class=""><a href="/create" class="action cta">Create Team</a></div>
    </article>`
        : teams}

</section>`

const teamTemplate = (team) => html`
    <article article class="layout">
        <img src=${team.team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.team.name}</h2>
            <p>${team.team.description}</p>
            <span class="details">${team.team.memberCount} Members</span>
            <div><a href="/details/${team.teamId}" class="action">See details</a></div>
        </div>
    </article>`

export async function myTeamsPage(ctx) {
    let teams = await getTeams()
    ctx.render(myTeamsTemplate(teams))

}

async function getTeams() {
    const id = sessionStorage.getItem("userId")
    const teams = await getTeamsByUser(id)
    if (teams.length > 0) {
        return teams.map(teamTemplate)
    }
    return false
}