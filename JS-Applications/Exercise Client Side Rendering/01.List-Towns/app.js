import { render, html } from "https://unpkg.com/lit-html?module";

const townsTemplate = (townsNames) => html`
    <ul>
        ${townsNames.map(t => html`<li>${t}</li>`)}
    </ul>`

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const towns = [...formData.values()][0].split(',').map(t => t.trim())

    render(townsTemplate(towns), document.getElementById('root'))
})