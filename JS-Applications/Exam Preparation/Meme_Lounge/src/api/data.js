import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getMemes() {
    const memes = await api.get(host + "/data/memes?sortBy=_createdOn%20desc")
    return memes
}

export async function getMemeById(memeId) {
    const meme = await api.get(host + "/data/memes/" + memeId)
    return meme
}

export async function getUserMemes(userId) {
    const memes = await api.get(host + "/data/memes?where=_ownerId%3D%22" + userId + "%22&sortBy=_createdOn%20desc")
    return memes
}

export async function createMeme(title, description, imageUrl) {
    const result = await api.post(host + "/data/memes", { title, description, imageUrl })
    return result
}

export async function editMeme(memeId, title, description, imageUrl) {
    const result = await api.put(host + `/data/memes/${memeId}`, { title, description, imageUrl })
    return result
}

export async function deleteMeme(memeId) {
    const result = await api.del(host + `/data/memes/${memeId}`)
    return result
}