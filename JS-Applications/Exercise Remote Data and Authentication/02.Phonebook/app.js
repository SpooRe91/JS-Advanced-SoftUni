function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", onLoad)
    document.getElementById("btnCreate").addEventListener("click", onCreate)
    window.addEventListener("click", toDelete)

}

attachEvents();

let list = document.getElementById("phonebook")

async function toDelete(ev) {
    if (ev.target.textContent == "Delete") {
        let messages = await getAllEntries()
        let targetName = ev.target.parentNode.textContent.split(": ")[0]


        let found = Object.values(messages).find(message => message.person == targetName)

        await onDelete(found._id)
        await onLoad()
    }
}

async function onDelete(id) {
    const res = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)
    });
    const result = await res.json()

    return result
}

async function onLoad() {

    let messages = await getAllEntries()
    list.innerHTML = ""

    Object.values(messages).forEach(val => {
        let newLi = document.createElement("li")
        let newBtn = document.createElement("button")
        newBtn.textContent = "Delete"
        newLi.textContent = `${val.person}: ${val.phone}`;
        newLi.appendChild(newBtn)
        list.appendChild(newLi);
    })
}

async function onCreate() {
    let personInput = document.getElementById("person")
    let phoneInput = document.getElementById("phone")
    if (personInput.value && phoneInput.value) {
        let data = {
            person: personInput.value,
            phone: phoneInput.value
        }

        await postEntries(data)

        personInput.value = ""
        phoneInput.value = ""

        await onLoad()
    }

}

async function getAllEntries() {
    const res = await fetch("http://localhost:3030/jsonstore/phonebook")
    const messages = await res.json()

    return messages
}

async function postEntries(data) {
    const res = await fetch("http://localhost:3030/jsonstore/phonebook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const result = await res.json()

    return result
}