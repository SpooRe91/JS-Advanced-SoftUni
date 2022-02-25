import { eFactory } from "./dom.js"
import { getPostById, getAllComments } from "./requests.js"

function displayCreatedPost(title, username, date, id) {
    let currentDate = new Date(date)
    let innerHTML = `<div class="topic-name-wrapper">
        <div id=${id} class="topic-name">
            <a href="#" class="normal">
                <h2>${title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${currentDate.toUTCString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`
    let post = eFactory("div", "topic-container", innerHTML)
    return post
}

function displaySelectedPost(username, date, post) {
    let currentDate = new Date(date)
    let innerHTML = `<img src="./static/profile.png" alt="avatar" />
    <p><span>${username}</span> posted on <time>${currentDate.toUTCString()}</time></p>
    
    <p class="post-content">${post}</p>`

    let newPost = eFactory("div", "header", innerHTML)
    return newPost
}

function displayCreatedComment(username, date, comment) {
    let currentDate = new Date(date)
    let innerHTML = `<div class="topic-name-wrapper">
    <div class="topic-name">
    <p><strong>${username}</strong> commented on <time>${currentDate.toUTCString()}</time></p>
    
    <div class="post-content">
    <p>${comment}</p>
    </div>
    </div>
    </div>`

    let newComment = eFactory("div", "user-comment", innerHTML)
    return newComment
}

function displayAnswerForm() {
    let innerHTML = `<p><span>currentUser</span> comment:</p>
    <div class="answer">
        <form>
            <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
            <div>
                <label for="username">Username <span class="red">*</span></label>
                <input type="text" name="username" id="username">
            </div>
            <button>Post</button>
        </form>
    </div>`

    let newForm = eFactory("div", "answer-comment", innerHTML)
    return newForm
}

async function displayPostWithComments(id) {


    Object.values(await getAllComments()).forEach(comment => {
        if (comment.postId == id) {
            document.querySelector(".comment").appendChild(displayCreatedComment(comment.username, comment.date, comment.comment))
        }
    })
}

export {
    displayCreatedPost,
    displayCreatedComment,
    displaySelectedPost,
    displayAnswerForm,
    displayPostWithComments,

}