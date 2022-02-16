function attachEvents() {

    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts)
    document.getElementById('btnViewPost').addEventListener('click', displayPost)


}

attachEvents();

async function displayPost() {


    const selectedId = document.getElementById('posts').value

    const [post,comments] = await Promise.all([
        getPostById(selectedId),
        getCommentsByPostId(selectedId)
    ])
    

    document.getElementById('post-title').textContent = post.title
    document.getElementById('post-body').textContent = post.body;

    const ulElement = document.getElementById('post-comments')
    ulElement.replaceChildren();

    comments.forEach(comment =>{
         const liElement = document.createElement('li');
         liElement.textContent = comment.text;
         ulElement.appendChild(liElement);
           
    })
}

async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/ps`
ost
    const result = await fetch(url);
    const data = await result.json();



    const selectElement = document.getElementById('posts')
    selectElement.replaceChildren()

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id

        selectElement.appendChild(optionElement)
    })
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/` + postId

    const result = await fetch(url);
    const data = await result.json();

    return data;

}

async function getCommentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const result = await fetch(url);
    const data = await result.json();


    const comments = Object.values(data).filter(c => c.postId == postId);


    return comments;
}