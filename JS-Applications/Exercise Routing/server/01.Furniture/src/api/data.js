import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;

async function getAllFur() {
    return await api.get(host + `/data/catalog`)
}

async function getFurById(id) {
    return await api.get(host + `/data/catalog/${id}`)
}

async function createFur(data) {
    return await api.post(host + '/data/catalog', data);
}

async function deleteFur(id) {
    return await api.del(host + `/data/catalog/${id}`)
}

async function editFur(data, id) {
    return await api.put(host + `/data/catalog/${id}`, data)
}

async function getUserFur() {
    const userId = sessionStorage.getItem('userId');
    return await api.get(host + `/data/catalog?where=_ownerId%3D%22${userId}%22`)
}

export {
    login, register, logout,
    getAllFur,
    getFurById,
    createFur,
    deleteFur,
    editFur,
    getUserFur,
}