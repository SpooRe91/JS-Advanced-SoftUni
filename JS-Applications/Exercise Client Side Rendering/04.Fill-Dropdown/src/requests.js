async function getData() {
    const result = await fetch('http://localhost:3030/jsonstore/advanced/dropdown ')
    const data = await result.json()

    return Object.values(data)
}

async function postEntry(entry) {
    await fetch('http://localhost:3030/jsonstore/advanced/dropdown ', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry)
    })
}

export { postEntry, getData }