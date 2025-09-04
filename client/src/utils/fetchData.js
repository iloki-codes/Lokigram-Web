import axios from 'axios';

// http://localhost:5000/api/v1

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getDataAPI = async (url, token) => {
    const res = await axios.get(`https://social-media-app-lokigram.onrender.com/api/v1/${url}`, {
        headers: { Authorization: token}
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`https://social-media-app-lokigram.onrender.com/api/v1/${url}`, post, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`https://social-media-app-lokigram.onrender.com/api/v1/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`https://social-media-app-lokigram.onrender.com/api/v1/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`https://social-media-app-lokigram.onrender.com/api/v1/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}