async function getData() {
    const result = await fetch('http://localhost:3030/jsonstore/advanced/table')
    const data = await result.json()

    return Object.values(data)
}

export { getData }