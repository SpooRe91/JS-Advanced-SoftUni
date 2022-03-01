import { render, html } from 'https://unpkg.com/lit-html?module'
import { getData, postEntry } from './requests.js'


document.querySelector("form").addEventListener("submit", onAdd)


async function onAdd(ev) {
    ev.preventDefault()

    let input = document.querySelector("#itemText")
    await postEntry({ text: input.value })
    input.value = ""
    await update()
}

const optiosTemplate = (items) => html`
${items.map(item => html`<option value=${item._id}>${item.text}</option>`)}`

await update()

async function update() {
    let items = await getData()
    render(optiosTemplate(items), document.getElementById("menu"))
}