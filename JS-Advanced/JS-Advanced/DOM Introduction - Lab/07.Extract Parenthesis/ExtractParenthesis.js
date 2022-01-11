function extract(content) {

    const text = document.getElementById(content).textContent;

    const patter = /\((.+?)\)/g;
    let result = '';

    let match = patter.exec(text);
    while (match != null) {
        result += match[1];
        result += '; '
        match = patter.exec(text);

    }
    return result;
    //console.log(result);
}