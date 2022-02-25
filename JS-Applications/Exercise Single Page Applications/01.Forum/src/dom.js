function eFactory(tag, className = '', content = '') {         // function to create element 
    const e = document.createElement(tag)
    e.classList.add(className)
    e.innerHTML = content

    return e
}

export {
    eFactory,
}