export const BASE_URL = "http://localhost:3000";

const request = ({ url, method, jwt, body }) => {
    const config = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...!!jwt && { 'Authorization': `Bearer ${jwt}` },
        },
        ...!!body && { body: JSON.stringify(body)}
    }
    return fetch (`${BASE_URL}${url}`, config)
        .then((response) => {
            console.log(response);
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(response.status);
        });
}

export const register = (name, password, email) => {
    return request ({
        method: 'POST',
        url: '/signup',
        body: {name, password, email}
    })
}

export const authorize = (password, email) => {
    return request ({
        method: 'POST',
        url: '/signin',
        body: {password, email}
    })
}

export const getContent = (jwt) => {
    return request ({
        method: 'GET',
        url: '/users/me',
        jwt, 
    })
}