import { postData, getAllPosts, postComment, getPostById } from "./requests.js";
import { displayCreatedPost, displayAnswerForm, displayPostWithComments, displaySelectedPost } from "./display.js";
import { eFactory } from "./dom.js";

document.querySelector("header").addEventListener("click", onHome);

async function onHome(event) {

    if (event.target.textContent == "Home") {
        event.preventDefault();
        if (document.querySelector(".comment") && document.querySelector(".answer-comment")) {
            document.querySelector(".comment").remove()
            document.querySelector(".answer-comment").remove()
        }

        await startForum()
    }
}

let newTopicContainer = document.querySelector(".new-topic-border")
let topics = document.querySelector(".topic-title")

async function startForum() {

    newTopicContainer.style.display = "block"

    topics.style.display = "block"
    topics.addEventListener("click", onClickTopic)

    newTopicContainer.addEventListener("submit", onModerate)
    sessionStorage.clear()
    await loadPosts()
}
startForum()

async function onClickTopic(event) {
    event.preventDefault()

    if (event.target.tagName == "H2") {
        const id = event.target.parentNode.parentNode.id
        sessionStorage.setItem("id", id)
        newTopicContainer.style.display = "none"
        topics.style.display = "none"

        let selected = await getPostById(id)

        document.querySelector("main").appendChild(eFactory("div", "comment",))
        document.querySelector(".comment").appendChild(displaySelectedPost(selected.username, selected.date, selected.post))


        await displayPostWithComments(id)

        document.querySelector("main").appendChild(displayAnswerForm())
        document.querySelector(".answer-comment").addEventListener("submit", submitComment)

    }
}

async function submitComment(ev) {
    ev.preventDefault()

    const formData = new FormData(ev.target);

    if (ev.submitter.textContent == "Post") {
        ev.preventDefault()

        const username = formData.get('username');
        const comment = formData.get('postText');
        const date = Date.now();

        if (username == '' || comment == '') {
            return alert('All fields are required!');
        } else {

            await postComment({ username, comment, date, postId: sessionStorage.getItem("id") })
            Array.from(document.querySelectorAll(".user-comment")).forEach(comment => comment.remove())
            await displayPostWithComments(sessionStorage.getItem("id"))


            ev.target.reset()
        }
    }
}


async function onModerate(ev) {
    ev.preventDefault()

    const formData = new FormData(ev.target);

    if (ev.submitter.className == "cancel") {
        ev.preventDefault()

        ev.target.reset()
    } else if (ev.submitter.className == "public") {
        ev.preventDefault()

        const title = formData.get('topicName');
        const username = formData.get('username');
        const post = formData.get('postText');
        const date = Date.now();

        if (title == '' || username == '' || post == '') {
            return alert('All fields are required!');
        } else {
            await postData({ title, username, post, date })
            await loadPosts()
            ev.target.reset()
        }
    }
}

async function loadPosts() {
    let posts = Object.values(await getAllPosts())

    let topics = document.querySelector(".topic-title")
    topics.innerHTML = ""

    posts.forEach(post => {
        let newPost = displayCreatedPost(post.title, post.username, post.date, post._id)
        topics.appendChild(newPost)
    })

}














