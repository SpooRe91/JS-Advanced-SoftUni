import { cats as catData } from './catSeeder.js';
import { render, html } from 'https://unpkg.com/lit-html?module';


const cardTemplate = (catData) => html`
<ul>
    ${catData.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${() => onClick(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
            ${cat.info ? html`<div class="status" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>`: null}
        </div>
    </li>`)}
</ul>`;

update()

function onClick(cat) {
    cat.info = !cat.info;
    update()
}


function update() {
    render(cardTemplate(catData), document.getElementById("allCats"))
}