async function getBooks() {
    const result = await fetch('http://localhost:3030/jsonstore/collections/books')
    const data = await result.json()

    return Object.entries(data)
}

async function getBookById(id) {
    const result = await fetch('http://localhost:3030/jsonstore/collections/books/' + id)
    const data = await result.json()

    return data
}

async function postBook(data) {
    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
}

async function deleteBook(id) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete',
    })
}

async function editBook(id, data) {
    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
}



export { postBook, getBooks, deleteBook, editBook,getBookById }