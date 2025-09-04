import axios from 'axios';

// http://localhost:5000/api/v1

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${BASE_URL}/${url}`, {
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
    console.log("Post payload:", post);
    const res = await axios.post(`${BASE_URL}/${url}`, post, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    console.log(res);
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${BASE_URL}/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${BASE_URL}/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${BASE_URL}/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}