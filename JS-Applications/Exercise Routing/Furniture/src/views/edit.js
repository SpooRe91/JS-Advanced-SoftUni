import { getFurById, editFur } from "../api/data.js"
import { html } from "../helper.js"
import { loadTemp } from "./loading.js"


const editTemp = (item, onSubmit,errorMsg, errors) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
${errorMsg ? html`<div style="font-size:20px;color:red">${errorMsg}</div>` : null}

    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control  ${errors.make ? " is-invalid" : "is-valid"
                   }" id="new-make" type="text" name="make" .value=${item.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${errors.model ? " is-invalid" : "is-valid"
                   }" id="new-model" type="text" name="model" .value=${item.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${errors.year ? " is-invalid" : "is-valid"
                   }" id="new-year" type="number" name="year" .value=${item.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${errors.description ? " is-invalid" : "is-valid"
                   }" id="new-description" type="text" name="description"
                    .value=${item.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${errors.price ? " is-invalid" : "is-valid"
                   }" id="new-price" type="number" name="price" .value=${item.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${errors.img ? " is-invalid" : "is-valid"
                   }" id="new-image" type="text" name="img" .value=${item.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control  is-valid" id="new-material" type="text" name="material" .value=${item.material}>
            </div>
            <input type="submit" class="btn btn-info" value="Edit" />
        </div>
    </div>
</form>`


export async function editPage(ctx) {
    ctx.render(loadTemp())
    let id = ctx.params.id
    let item = await getFurById(id)
    update(item,null, {},onSubmit)
    
    function update(item,errorMsg, errors,onSubmit) {
        ctx.render(editTemp(item, onSubmit,errorMsg, errors))
    }

    async function onSubmit(ev) {
        ev.preventDefault();
        
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
        await editFur({ make, model, year, price, description, img, material }, id)
        ctx.page.redirect(`/details/${id}`)
        
    } catch (err) {
        const message = err.message || err.error.message
        update(item, message, err.errors || {},onSubmit)
    }
    }
}


