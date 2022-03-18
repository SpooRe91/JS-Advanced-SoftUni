import { html } from "../helper.js";
import { editCar, getCarById } from "../api/data.js";


const editTemplate = (car, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>
`

export async function editPage(ctx) {
    const carId = ctx.params.id

    const car = await getCarById(carId)

    ctx.render(editTemplate(car, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

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

            await editCar(carId, brand, model, description, year, imageUrl, price)
            ctx.page.redirect(`/details/${carId}`)
        } catch (err) {
            alert(err.message)
        }
    }

}