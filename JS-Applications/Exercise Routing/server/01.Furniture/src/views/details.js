import { deleteFur, getFurById } from "../api/data.js"
import { html } from "../helper.js"


const detailsTemp = (item, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price} $</span></p>
        <p>Material: <span>${item.material}</span></p>
        ${item._ownerId == sessionStorage.getItem("userId") 
        ? html`
            <div>
                <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="btn btn-red">Delete</a>
            </div>` 
        : null}
    </div>
</div>`

export async function detailsPage(ctx) {
    let id = ctx.params.id

    let item = await getFurById(id)
    ctx.render(detailsTemp(item, onDelete))

    async function onDelete() {
        await deleteFur(id)
        ctx.page.redirect("/")
    }

}