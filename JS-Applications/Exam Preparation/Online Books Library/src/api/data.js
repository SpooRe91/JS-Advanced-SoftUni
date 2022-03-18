import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getBooks() {
    const books = await api.get(host + "/data/books?sortBy=_createdOn%20desc")
    return books
}

export async function getBookById(bookId) {
    const book = await api.get(host + "/data/books/" + bookId)
    return book
}

export async function getUserBooks(userId) {
    const books = await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return books
}


export async function createBook(title, description, imageUrl, type) {
    const result = await api.post(host + "/data/books", { title, description, imageUrl, type })
    return result
}

export async function editBook(bookId, title, description, imageUrl, type) {
    const result = await api.put(host + `/data/books/${bookId}`, { title, description, imageUrl, type })
    return result
}

export async function deleteBook(bookId) {
    const result = await api.del(host + `/data/books/${bookId}`)
    return result
}

export async function addLike(bookId) {
    const result = await api.post(host + "/data/likes", { bookId })
    return result
}

export async function getLikesForBook(bookId) {
    const likes = await api.get(host + `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
    
    return  likes 
}

export async function userLiked(bookId, userId) {
    const liked = await api.get(host + `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    if(liked==1) {
        return true
    }else if(liked==0){
        return false
    }
}