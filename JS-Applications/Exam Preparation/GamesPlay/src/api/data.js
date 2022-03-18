import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getGames() {
    const games = await api.get(host + "/data/games?sortBy=_createdOn%20desc")
    return games
}

export async function getMostRecent() {
    const games = await api.get(host + "/data/games?sortBy=_createdOn%20desc&distinct=category")
    return games
}

export async function getGameById(gameId) {
    const game = await api.get(host + "/data/games/" + gameId)
    return game
}

export async function getComments(gameId) {
    const comments = await api.get(host + `/data/comments?where=gameId%3D%22${gameId}%22`)
    return comments
}

export async function createComment(gameId, comment) {
    const result = await api.post(host + "/data/comments", { gameId, comment })
    return result
}

export async function createGame(title, category, maxLevel, imageUrl, summary) {
    const result = await api.post(host + "/data/games", { title, category, maxLevel, imageUrl, summary })
    return result
}

export async function editGame(gameId, title, category, maxLevel, imageUrl, summary) {
    const result = await api.put(host + `/data/games/${gameId}`, { title, category, maxLevel, imageUrl, summary })
    return result
}

export async function deleteGame(gameId) {
    const result = await api.del(host + `/data/games/${gameId}`)
    return result
}