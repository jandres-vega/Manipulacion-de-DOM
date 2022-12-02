import axios from 'axios';


export const getDataDb = async (API_URL, id) => {

    const apiUrl = id ? `${API_URL}${id}`:API_URL
    try {
        return (await axios.get(apiUrl)).data;
    }catch (e) {
        console.error(e);
    }
}

export const addDataDb = async(api_url, body) => {
    try {
        return await fetch(api_url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch (e) {
        console.error(e)
    }
}

export const deleteItem = async(url_api, id) => {
    try {
        return await fetch(`${url_api}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch (e) {
        console.error(e)
    }
}

export const updateProduct = async (url_api, body) => {

    try {
        return await fetch(`${url_api}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }catch (e) {
        console.error(e)
    }
}




