import { GLOBALTYPES } from "./globalTypes.js";
import { getDataAPI } from "../../utils/fetchData.js";

export const SUGGSTN = {
    LOADING: 'LOADING_SUGGSTN',
    GET_USERS: 'GET_USER-SUGGSTN'
};

export const getSuggestions = (token) => async (dispatch) => {
    try {
        dispatch({
            type: SUGGSTN.LOADING,
            payload: true
        })

        const res = await getDataAPI("sugeestionsUser", token);
        dispatch({
            type: SUGGSTN.GET_USERS,
            payload: res.data
        });
        dispatch({
            type: SUGGSTN.LOADING, payload: false
        });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        });
    }
};