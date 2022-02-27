async function updateCatch(id, data) {
    await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        },
        body: JSON.stringify(data)
    })
}

async function addCatch(data) {
    await fetch("http://localhost:3030/data/catches", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        },
        body: JSON.stringify(data)
    })
}

async function loadAllCatches() {
    const response = await fetch('http://localhost:3030/data/catches')
    const data = Object.values(await response.json());
    return data

    
}

async function register(email, password) {

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    return data
}

async function login(email, password) {
    const response = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();

    return data

}

async function logout() {
    const token = sessionStorage.getItem('accessToken');

    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token },
    });

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
}

async function onDelete(ev) {
    let id = ev.target.parentNode.id

    await fetch(`http://localhost:3030/data/catches/${id}`, {
        method: "delete",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('accessToken')
        },
    })
}

export { logout, login, register, loadAllCatches, addCatch, updateCatch, onDelete }