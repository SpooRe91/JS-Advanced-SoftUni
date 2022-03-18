import { html } from "../helper.js";
import { createCar } from "../api/data.js";


const createTemplate = (onSubmit) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target)

        const brand = form.get('brand')
        const model = form.get('model')
        const description = form.get('description')
        let year = form.get('year')
        const imageUrl = form.get('imageUrl')
        let price = form.get('price')

        year = Number(year)
        price = Number(price)



        try {
            if (!brand || !model || !description || !year || !imageUrl || !price) {
                throw new Error('All fields are required!')
            }

            await createCar(brand, model, description, year, imageUrl, price)
            ctx.page.redirect("/listings")
        } catch (err) {
            alert(err.message)
        }
    }
}