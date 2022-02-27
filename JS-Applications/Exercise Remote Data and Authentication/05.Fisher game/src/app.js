import { logout, login, register, loadAllCatches, addCatch, updateCatch, onDelete } from "./requests.js"
import {catchTemplate} from "./template.js"

let homeSection = document.getElementById("home-view")
homeSection.remove()
let registerSection = document.getElementById("register-view")
registerSection.remove()
let loginSection = document.getElementById("login-view")
loginSection.remove()

function onLoad() {
    sessionStorage.clear()

    document.querySelector("nav").addEventListener("click", navNavigate);
    navUpdate()
    showSection("home")
}
onLoad()

function navUpdate() {
    if (sessionStorage.getItem("accessToken")) {
        document.querySelector("#guest").style.display = "none"
        document.querySelector("#user").style.display = "inline-block"
    } else {
        document.querySelector("#guest").style.display = "inline-block"
        document.querySelector("#user").style.display = "none"
    }
}

async function navNavigate(ev) {
    if (ev.target.tagName == "A") {
        ev.preventDefault();
        if (ev.target.id == "logout") {
            await onLogout();
        } else {
            showSection(ev.target.id);
        }
    }
}

function showSection(id) {
    let main = document.querySelector("main");

    if (id == "home") {
        main.replaceChildren(homeSection)
        homeSectionFormat()
    } else if (id == "login") {
        main.replaceChildren(loginSection)
        const form = document.querySelector("form")
        form.addEventListener("submit", onLogin)
    } else if (id == "register") {
        main.replaceChildren(registerSection)
        const form = document.querySelector("form")
        form.addEventListener("submit", onRegister)
    }
}

function homeSectionFormat() {
    let addBtn = document.querySelector(".add")
    document.querySelector("#addForm").addEventListener("submit", onAdd)
    let loadBtn = document.querySelector(".load")

    loadBtn.addEventListener("click", loadCatches)

    let catches = document.querySelector("#catches")
    catches.innerHTML = ""

    if (sessionStorage.getItem("accessToken")) {
        addBtn.disabled = false
    } else {
        addBtn.disabled = true
    }
}

async function loadCatches() {
    let data = await loadAllCatches()

    let catches = document.querySelector("#catches")
    catches.innerHTML = ""

    data.forEach(obj => {
        let temp = catchTemplate(obj)
        temp.querySelector(".delete").addEventListener("click", onDelete)
        temp.querySelector(".update").addEventListener("click", onEdit)
        catches.appendChild(temp)
    })

}

async function onAdd(ev) {
    ev.preventDefault()
    let formData = new FormData(ev.target)

    let data = {
        "_ownerId": sessionStorage.getItem("userId"),
        "angler": formData.get("angler"),
        "weight": formData.get("weight"),
        "species": formData.get("species"),
        "location": formData.get("location"),
        "bait": formData.get("bait"),
        "captureTime": formData.get("captureTime"),
    }

    await addCatch(data)
    ev.target.reset()
}

async function onEdit(ev) {
    let id = ev.target.parentNode.id

    let inputs = Object.values(ev.target.parentNode.querySelectorAll('input'))

    let data = {
        "angler": inputs[0].value,
        "weight": inputs[1].value,
        "species": inputs[2].value,
        "location": inputs[3].value,
        "bait": inputs[4].value,
        "captureTime": inputs[5].value,
    }

    await updateCatch(id, data)
}

async function onRegister(ev) {
    ev.preventDefault()

    let formData = new FormData(ev.target);
    let email = formData.get("email")
    let password = formData.get("password")
    let rePass = formData.get("rePass")

    if (password != rePass) {
        alert("Pasword don't match")
    } else {

        let data = await register(email, password)

        sessionStorage.setItem('accessToken', data.accessToken);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('userId', data._id);

        ev.target.reset()
        navUpdate()
        document.querySelector("span").textContent = sessionStorage.getItem('email')

        showSection("home")
    }
}

async function onLogin(ev) {
    ev.preventDefault()

    let formData = new FormData(ev.target);
    let email = formData.get("email")
    let password = formData.get("password")

    let data = await login(email, password)

    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('userId', data._id);

    ev.target.reset()
    navUpdate()
    document.querySelector("span").textContent = sessionStorage.getItem('email')

    showSection("home")
}

async function onLogout() {
    await logout()

    sessionStorage.clear()

    navUpdate()
    document.querySelector("span").textContent = "guest"
    showSection("home")

}


