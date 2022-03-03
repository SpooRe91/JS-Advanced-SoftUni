import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;

async function getMovies() {
    return await api.get(host + `/data/movies`)
}

async function getMovieById(id) {
    return await api.get(host + `/data/movies/${id}`)
}

async function createMovie(data) {
    return await api.post(host + '/data/movies', data);
}

async function deleteMovie(id) {
    return await api.del(host + `/data/movies/${id}`)
}

async function editMovie(data, id) {
    return await api.put(host + `/data/movies/${id}`, data)
}

async function putLike(data) {
    return await api.post(host + '/data/likes', data);

}

async function deleteLike(id) {
    return await api.del(host + `/data/likes/${id}`)
}

async function getAllMovieLikes(movieId) {
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count `)
}

async function getMovieUserLike(movieId) {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`)
}

export {
    login, register, logout, getMovies, getMovieById, createMovie,
    deleteMovie, editMovie, putLike, deleteLike, getAllMovieLikes, getMovieUserLike
}