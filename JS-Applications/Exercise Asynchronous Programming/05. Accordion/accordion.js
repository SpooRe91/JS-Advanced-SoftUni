window.addEventListener("DOMContentLoaded", solution)
const mainElement = document.getElementById("main")
mainElement.addEventListener("click", showHider)

async function solution() {
    const titles = await getAllTitles()

    titles.forEach(obj => {
        let newDiv = createForm(obj.title, obj._id);
        mainElement.appendChild(newDiv);
    })
}

async function showHider(ev) {

    if (ev.target.className == "button" && ev.target.textContent == "More") {
        const extraEl = await getAndCreateExtra(ev.target.id)
        ev.target.parentNode.appendChild(extraEl)
        let extra = ev.target.parentNode.children[2];
        ev.target.textContent = "Less"
        extra.style.display = "block"
    } else if (ev.target.className == "button" && ev.target.textContent == "Less") {
        ev.target.textContent = "More"
        let extra = ev.target.parentNode.children[2];
        extra.style.display = "none"

    }
}

async function getAllTitles() {
    const res = await fetch("http://localhost:3030/jsonstore/advanced/articles/list");
    const data = await res.json();

    return data
}

function createForm(title, id) {
    let newDiv = document.createElement("div")
    newDiv.className = "accordion"
    newDiv.innerHTML = `<div class="head">
<span>${title}</span>
<button class="button" id=${id}>More</button>
</div>`

    return newDiv

}

async function getAndCreateExtra(id) {
    const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`);
    const data = await res.json();

    let newExtra = document.createElement("div")
    newExtra.className = "extra"
    newExtra.innerHTML = `<p>${data.content}</p>`

    return newExtra
}

