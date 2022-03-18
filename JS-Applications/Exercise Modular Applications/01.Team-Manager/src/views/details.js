import { html } from "../helper.js"
import { getTeamById, getAllRequests,removeMembership,approveMembeship,becomeMember } from "../api/data.js"


const detailsTemplate = (team, members, pendings,request,leave,join) => html`
<section id="team-home">
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${members.length} Members</span>
            ${!sessionStorage.getItem("userId")
            ?null
            :html`
            <div>
                ${team._ownerId==sessionStorage.getItem("userId")
                ?html`<a href="/edit/${team._id}" class="action">Edit team</a>`
                :null}
                
                ${(!members.find(m => m._ownerId==sessionStorage.getItem("userId")))&&(!pendings.find(p => p._ownerId==sessionStorage.getItem("userId")))
                ?html`<a @click=${join} href="javascript:void(0)" class="action">Join team</a>`
                :null}
                
                ${members.find(m => m._ownerId==sessionStorage.getItem("userId")&&(team._ownerId!=sessionStorage.getItem("userId")))
                ?html`<a @click=${e => leave(e, request._id)}  href="javascript:void(0)" class="action invert">Leave team</a>`
                :null}
                
                ${pendings.find(p => p._ownerId==sessionStorage.getItem("userId"))
                ?html`Membership pending. <a @click=${e => leave(e, request._id)} href="javascript:void(0)">Cancel request</a>`
                :null}
                
            </div>`}
            
        </div>
        ${memberTemplate(members, team)}
        ${!sessionStorage.getItem("userId") || (team._ownerId != sessionStorage.getItem("userId"))
        ? null
        : pendingTemplate(pendings)}

    </article>
</section>`

//template for non-pending members
//(the owner cant remove himself from the team && can see the button for removing members only if logged user is team owner)
const memberTemplate = (members, team) => html`
<div class="pad-large">
    <h3>Members</h3>
    <ul class="tm-members">
            ${members.map(member => member = html`<li>${member.user.username}
                ${(team._ownerId != sessionStorage.getItem("userId")) || (member._ownerId ==
                    sessionStorage.getItem("userId"))
                    ? null
                    : html` <a @click=${member.decline} href="javascript:void(0)" class="tm-control action">Remove from team</a>`}
        </li>`)}
    </ul>
</div>
`

//template for pending members
const pendingTemplate = (pendings) => html`
<div class="pad-large">
    <h3>Membership Requests</h3>
    <ul class="tm-members">
            ${pendings.map(pending => pending = html`<li>${pending.user.username}
            <a @click=${pending.approve} href="javascript:void(0)" class="tm-control action">Approve</a>
            <a @click=${pending.decline} href="javascript:void(0)" class="tm-control action">Decline</a>
        </li>`)}
    </ul>
</div>
`


export async function detailsPage(ctx) {
    const teamId = ctx.params.id

    ctx.render(await populate())

    async function populate(){
        const team = await getTeamById(teamId)
        
        const requests = await getAllRequests(teamId)

        requests.forEach(req =>{
            req.approve = (e)=>approve(e,req);
            req.decline = (e)=>leave(e,req._id);
    
        })
        
        const request = requests.find(r => r._ownerId == sessionStorage.getItem("userId")); //get the pending/member request for the logged user (if  there is one)

        const members = requests.filter(req => req.status === "member")
        const pending = requests.filter(req => req.status === "pending")
    
    
        return detailsTemplate(team, members, pending,request,leave,join)
    
    async function leave(event, requestId) {
        event.target.remove()
        await removeMembership(requestId);
        ctx.render(await populate())
    }

    async function approve(event, req) {
        //event.target.remove()
        await approveMembeship(req);
        ctx.render(await populate())
    }
    
    async function join(event) {
        //event.target.remove();
        await becomeMember(teamId);
        ctx.render(await populate())
    }
}
}
