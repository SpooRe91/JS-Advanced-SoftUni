

export function isLogged() {
    let logger = sessionStorage.getItem("authToken")

    return logger
}