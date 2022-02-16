function attachEvents() {
    document.getElementById("refresh").addEventListener("click", onRefresh)
    document.getElementById("submit").addEventListener("click", onSubmit)
}

attachEvents();

const messagesArea = document.getElementById("messages")
const url = "http://localhost:3030/jsonstore/messenger"

async function getAllMessages() {
    const res = await fetch(url)
    const messages = await res.json()

    return messages
}

async function onRefresh() {
    let messages = await getAllMessages()
    messagesArea.value = ""
    
    Object.values(messages).forEach(obj => messagesArea.value += `${obj.author}: ${obj.content}\n`)
}

async function postData(data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    const result = await res.json()
    return result

}

async function onSubmit() {
    let nameInput = document.getElementsByName("author")[0]
    let messageInput = document.getElementsByName("content")[0]

    let data = {
        author: nameInput.value,
        content: messageInput.value
    }

    await postData(data)

    nameInput.value = ""
    messageInput.value = ""
}