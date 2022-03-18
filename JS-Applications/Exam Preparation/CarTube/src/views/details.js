import { getCarById, deleteCar } from "../api/data.js";
import { html } from "../helper.js";


const detailsTemplate = (car, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>
        ${car._ownerId == sessionStorage.getItem("userId") 
            ? html`
        <div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
            : null}

    </div>
</section>`


export async function detailsPage(ctx) {
    const carId = ctx.params.id

    const car = await getCarById(carId)

    ctx.render(detailsTemplate(car, onDelete))

    async function onDelete() {
        await deleteCar(carId)
        ctx.page.redirect("/listings")
    }
}