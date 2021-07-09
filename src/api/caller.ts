export async function caller(url, method, body) {
    console.log(url)
    return fetch(url, {
        method: method,
        body: body ? body : null
    }).then((response) => {
        // console.log(response)
        return response;
    }).catch((err) => {
        return err;
    })
}

export async function get(url) {
    return caller(url, "GET", null);
}