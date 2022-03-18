import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getEvents() {
    const events = await api.get(host + "/data/theaters?sortBy=_createdOn%20desc&distinct=title")
    return events
}

export async function getEventById(eventId) {
    const event = await api.get(host + "/data/theaters/" + eventId)
    return event
}

export async function getUserEvents(userId) {
    const evs = await api.get(host + `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return evs
}

export async function createEvent(title, date, author, imageUrl, description) {
    const result = await api.post(host + "/data/theaters", { title, date, author, imageUrl, description })
    return result
}

export async function editEvent(eventId, title, date, author, imageUrl, description) {
    const result = await api.put(host + `/data/theaters/${eventId}`, { title, date, author, imageUrl, description })
    return result
}

export async function deleteEvent(eventId) {
    const result = await api.del(host + `/data/theaters/${eventId}`)
    return result
}

export async function Like(theaterId) {
    const result = await api.post(host + "/data/likes", { theaterId })
    return result
}

export async function getEventLikes(theaterId) {
    const likes = await api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
    return likes
}

export async function isUserLiked(theaterId, userId) {
    const result = await api.get(host + `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
    if (result == 0) {
        return false
    } else if (result == 1) {
        return true
    }
}


