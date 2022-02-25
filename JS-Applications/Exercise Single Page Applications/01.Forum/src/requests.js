async function postData(data) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        const error = await res.json();
        return alert(error.message);
    }
    const result = await res.json()
    return result
}

async function getAllPosts() {
    const res = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts")
    const posts = await res.json()

    return posts
}

async function getPostById(id) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/myboard/posts/" + id)
    const post = await res.json()

    return post
}

async function postComment(data) {
    const res = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        const error = await res.json();
        return alert(error.message);
    }
    const result = await res.json()
    return result
}

async function getAllComments() {
    const res = await fetch("http://localhost:3030/jsonstore/collections/myboard/comments")
    const comments = await res.json()

    return comments
}

export {
    postData,
    getAllPosts,
    getPostById,
    postComment,
    getAllComments,
}