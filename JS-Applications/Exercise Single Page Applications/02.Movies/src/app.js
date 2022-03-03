import { render } from "https://unpkg.com/lit-html?module";
import { pageTemp, loginTemp, registerTemp, movieDetailsTemp, editMovieTemp, addMovieTemp, loadingTemp } from "./templates.js";
import {
    login, register, logout, getMovies, getMovieById, createMovie, deleteMovie, editMovie,
    putLike, deleteLike, getAllMovieLikes, getMovieUserLike
} from "./api/data.js"
import { navUpdate } from "./nav.js"


let welcome = document.querySelector(".nav-item").children[0]
let nav = document.querySelector("nav")
nav.addEventListener("click", navClick)

async function homeUpdate() {
    render(loadingTemp(), document.getElementById("container"))

    let movies = await getMovies()
    render(pageTemp(movies), document.getElementById("container"))

    navUpdate(welcome, nav)

    if (sessionStorage.hasOwnProperty("authToken")) {
        document.getElementById("movie").addEventListener("click", onDetails)
        document.getElementById("add-movie-button").addEventListener("click", onAddMovie)
    }
}
homeUpdate()

async function onAddMovie() {

    render(addMovieTemp(), document.getElementById("container"))

    document.querySelector("form").addEventListener("submit", async (ev) => {

        ev.preventDefault()
        let form = new FormData(ev.target)

        let title = form.get("title")
        let description = form.get("description")
        let img = form.get("imageUrl")

        if (title && description && img) {
            render(loadingTemp(), document.getElementById("container"))
            await createMovie({ title, description, img })
            await homeUpdate()
        } else {
            alert("Please enter all fields!")
        }
    })
}

async function onDetails(ev) {
    if (ev.target.tagName == "BUTTON" && ev.target.textContent == "Details") {
        let id = ev.target.dataset.id
        render(loadingTemp(), document.getElementById("container"))


        const [movie, likedByUser, likes] = await Promise.all([
            getMovieById(id),
            getMovieUserLike(id),
            getAllMovieLikes(id)
        ])

        render(movieDetailsTemp(movie, likedByUser[0], likes), document.getElementById("container"))

        document.getElementById("movie-example").addEventListener("click", manageMovie)
    }
}

async function manageMovie(ev) {
    ev.preventDefault()
    if (ev.target.tagName == "A" && ev.target.textContent == "Delete") {
        const id = ev.target.parentNode.dataset.id
        render(loadingTemp(), document.getElementById("container"))

        await deleteMovie(id)
        await homeUpdate()
    }
    if (ev.target.tagName == "A" && ev.target.textContent == "Like") {

        const id = ev.target.parentNode.dataset.id
        ev.target.style.pointerEvents = "none"
        putLike({ movieId: id })

        const [movie, likedByUser, likes] = await Promise.all([
            getMovieById(id),
            getMovieUserLike(id),
            getAllMovieLikes(id)
        ])

        render(movieDetailsTemp(movie, likedByUser[0], likes), document.getElementById("container"))
    }
    if (ev.target.tagName == "A" && ev.target.textContent == "Dislike") {
        const id = ev.target.parentNode.dataset.id
        ev.target.style.pointerEvents = "none"


        const likedByUser = (await getMovieUserLike(id))[0]
        const movie = await getMovieById(id)

        await deleteLike(likedByUser._id)

        const likes = await getAllMovieLikes(id)

        render(movieDetailsTemp(movie, likedByUser[0], likes), document.getElementById("container"))
    }
    if (ev.target.tagName == "A" && ev.target.textContent == "Edit") {
        const id = ev.target.parentNode.dataset.id
        let movie = await getMovieById(id)
        render(editMovieTemp(movie.title, movie.description, movie.img, id), document.getElementById("container"))

        document.querySelector("form").addEventListener("submit", submitEdit)
    }
}

async function submitEdit(ev) {
    ev.preventDefault()
    let form = new FormData(ev.target)

    let title = form.get("title")
    let description = form.get("description")
    let img = form.get("imageUrl")
    let id = ev.target.dataset.id

    editMovie({ title, description, img }, id)
    render(loadingTemp(), document.getElementById("container"))


    const [movie, likedByUser, likes] = await Promise.all([
        getMovieById(id),
        getMovieUserLike(id),
        getAllMovieLikes(id)
    ])

    render(movieDetailsTemp(movie, likedByUser[0], likes), document.getElementById("container"))
    document.getElementById("movie-example").addEventListener("click", manageMovie)
}


async function navClick(ev) {
    ev.preventDefault()

    if (ev.target.tagName === "A") {
        if (ev.target.textContent === "Movies") {
            homeUpdate()
        }
        if (ev.target.textContent === "Login") {
            render(loginTemp(), document.getElementById("container"))

            const form = document.querySelector("form")
            form.addEventListener("submit", onLoginSubmit)
        }
        if (ev.target.textContent === "Register") {
            render(registerTemp(), document.getElementById("container"))

            const form = document.querySelector("form")
            form.addEventListener("submit", onRegisterSubmit)
        }
        if (ev.target.textContent === "Logout") {
            render(loadingTemp(), document.getElementById("container"))

            await logout()

            render(loginTemp(), document.getElementById("container"))

            const form = document.querySelector("form")
            form.addEventListener("submit", onLoginSubmit)

            navUpdate(welcome, nav)
        }
    }
}

async function onRegisterSubmit(ev) {
    ev.preventDefault()


    const formData = new FormData(ev.target)

    let email = formData.get("email")
    let pass = formData.get("password")
    let rePass = formData.get("repeatPassword")

    if (pass.length < 6) {
        alert("Passwords should be at least 6 characters long")
    } else if (pass != rePass) {
        alert("Passwords don't match! Please try again")
    } else {
        render(loadingTemp(), document.getElementById("container"))

        await register(email, pass)

        homeUpdate()
    }
}

async function onLoginSubmit(ev) {
    ev.preventDefault()

    const formData = new FormData(ev.target)

    let email = formData.get("email")
    let pass = formData.get("password")

    await login(email, pass)

    homeUpdate()
}