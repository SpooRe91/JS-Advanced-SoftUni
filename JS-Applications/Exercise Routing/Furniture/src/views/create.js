import { html } from "../helper.js"
import {createFur} from "../api/data.js"
import { loadTemp } from "./loading.js"

const createTemp = (onSubmit, errorMsg, errors, isSubmited) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    ${errorMsg ? html`<div style="font-size:20px;color:red">${errorMsg}</div>` : null}

    <div class="row space-top">

        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.make ? " is-invalid" : "is-valid"
                   }" id=" new-make" type="text" name="make">
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.model ? " is-invalid" : "is-valid"}" id="new-model" type="text"
                    name="model">
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.year ? " is-invalid" : "is-valid"}" id="new-year" type="number"
                    name="year">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.description ? " is-invalid" : "is-valid"}" id="new-description"
                    type="text" name="description">
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.price ? " is-invalid" : "is-valid"}" id="new-price" type="number"
                    name="price">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${!isSubmited ? " is-invalid" : null} ${errors.img ? " is-invalid" : "is-valid"}" id="new-image" type="text"
                    name="img">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control" id="new-material" type="text" name="material">
            </div>
            <input type="submit" class="btn btn-primary" value="Create" />
        </div>
    </div>
</form>`



export function createPage(ctx) {
    let isSubmited = false
    update(null, {})
    
    function update(errorMsg, errors) {
        ctx.render(createTemp(onSubmit, errorMsg, errors, isSubmited))
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        isSubmited = true

        const formData = new FormData(ev.target);
        const make = formData.get('make').trim();
        const model = formData.get('model').trim();
        const year = formData.get('year').trim();
        const price = formData.get('price').trim();
        const description = formData.get('description').trim();
        const img = formData.get('img').trim();
        const material = formData.get('material').trim();
    
        const errors = {
            make: make == "" || make.length < 4,
            model: model == "" || model.length < 4,
            year: year == "" || Number(year) < 1950 || Number(year) > 2050,
            price: price == "" || price < 0,
            description: description == "" || description.length < 10,
            img: img == "",
        }
    
        try {
            if (make.length < 4) {
                throw {
                    error: new Error("\"Make\" field must be at least 4 symbols long!"),
                    errors
                }
            }
            if (model.length < 4) {
                throw {
                    error: new Error("\"Model\" field must be at least 4 symbols long!"),
                    errors
                }
            }
            if (Number(year) < 1950 || Number(year) > 2050) {
                throw {
                    error: new Error("\"Year\" must be between 1950 and 2050!"),
                    errors
                }
            }
            if (description.length < 10) {
                throw {
                    error: new Error("\"Description\" must be more than 10 symbols!"),
                    errors
                }
            }
            if (price <= 0) {
                throw {
                    error: new Error("\"Price\" must be a positive number!"),
                    errors
                }
            }
            if (img == "") {
                throw {
                    error: new Error("Image URL is required!"),
                    errors
                }
            }
           ctx.render(loadTemp())
            await createFur({ make, model, year, price, description, img, material })
            ctx.page.redirect("/")
            
        } catch (err) {
            const message = err.message || err.error.message
            update(message, err.errors || {})
        }
    }

}