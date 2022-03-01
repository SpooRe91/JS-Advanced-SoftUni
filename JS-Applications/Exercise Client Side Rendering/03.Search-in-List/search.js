import { towns } from './towns.js'
import { render, html } from 'https://unpkg.com/lit-html?module'

const listTemplate = (towns, match) => html`
<ul>
   ${towns.map(town => html`
   <li class=${(match && town.toLowerCase().includes(match.toLowerCase()) ? 'active' : '' )}>${town}</li>`)}
</ul>`

let root = document.getElementById("towns")
let btn = document.querySelector("button")
let result = document.getElementById("result")
btn.addEventListener("click", search)

update()

function update(match = '') {

   render(listTemplate(towns, match), root);
}

function search() {
   const match = document.getElementById('searchText').value;
   countMatches(towns, match)
   update(match);
}

function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;

   result.textContent = matches ? `${matches} matches found` : '';
}
