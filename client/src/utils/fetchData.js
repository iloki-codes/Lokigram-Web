import axios from 'axios';

export const BASE_URL = "http://localhost:5000" || process.env.REACT_APP_BASE_URL;

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`http://localhost:5000/api/v1/${url}`, {
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
    console.log("Post payload:", post);
    const res = await axios.post(`http://localhost:5000/api/v1/${url}`, post, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    console.log(res);
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`http://localhost:5000/api/v1/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`http://localhost:5000/api/v1/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`http://localhost:5000/api/v1/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}