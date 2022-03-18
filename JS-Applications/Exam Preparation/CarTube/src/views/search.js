import { getCarsByYear } from "../api/data.js";
import { html } from "../helper.js";


const searchTemplate = (onSearch, cars) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        ${cars 
            ? cars.length > 0 
                ? cars.map(singleListing) 
                : html`<p class="no-cars"> No results.</p>` 
            : null}

    </div>
</section>`

const singleListing = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSearch))


    async function onSearch() {
        let year = document.getElementById('search-input')

        try {
            if(!year.value || isNaN(year.value)) {
                throw new Error('Enter valid year!')
            }

            const cars = await getCarsByYear(year.value)

            ctx.render(searchTemplate(onSearch, cars))
            year.value=""
        } catch (err) {
            ctx.render(searchTemplate(onSearch))
            year.value=""

            alert(err.message)
        }
        

    }
}