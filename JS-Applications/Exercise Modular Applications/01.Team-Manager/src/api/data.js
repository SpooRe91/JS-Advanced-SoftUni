import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

const login = api.login;
const register = api.register;
const logout = api.logout;

async function getAllTeams() {
    const teams = await api.get(host + '/data/teams');
    const members = await getAllTeamMembers(teams.map(t => t._id));
    teams.forEach(t => t.memberCount = members.filter(m => m.teamId == t._id).length);
    return teams;
}

async function getTeamsByUser() {
    const id = sessionStorage.getItem('userId');
    const teams = await api.get(host + `/data/members?where=_ownerId%3D%22` + id + `%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`)
    const members = await getAllTeamMembers(teams.map(t => t.teamId));
    teams.forEach(t => t.team.memberCount = members.filter(m => (m.status == "member") && (m.teamId == t.teamId)).length);
    return teams;
}

async function getTeamById(id) {
    return await api.get(host + `/data/teams/${id}`)
}

async function createTeam(body) {
    const result = await api.post(host + '/data/teams', body);
    const request = await becomeMember(result._id);
    await approveMembeship(request);
    return result;
}

async function editTeam(body, id) {
    return await api.put(host + `/data/teams/${id}`, body)
}

async function deleteTeam(id) {
    return await api.del(host + '/data/teams/' + id);
}


async function becomeMember(teamId) {
    const body = { teamId }
    return await api.post(host + '/data/members', body);
}

async function getAllRequests(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`)
}

async function getAllTeamMembers(teamIds) {
    const query = encodeURIComponent(`teamId IN ("${teamIds.join('", "')}") AND status="member"`);
    return await api.get(host + `/data/members?where=${query}`);
}

async function approveMembeship(request) {
    const body = {
        teamId: request.teamId,
        status: 'member'
    }
    return await api.put(host + '/data/members/' + request._id, body);
}

async function removeMembership(requestId) {
    return await api.del(host + `/data/members/${requestId}`)
}



export {
    login, register, logout,
    getAllTeams,
    getTeamsByUser,
    getTeamById,
    createTeam,
    editTeam,
    deleteTeam,
    becomeMember,
    getAllRequests,
    getAllTeamMembers,
    approveMembeship,
    removeMembership,
}