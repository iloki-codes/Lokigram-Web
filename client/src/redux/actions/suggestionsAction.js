import { GLOBALTYPES } from "./globalTypes.js";
import { getDataAPI } from "../../utils/fetchData.js";

export const SUGGES_TYPES = {
    LOADING: 'LOADING_SUGGSTN',
    GET_USERS: 'GET_USER-SUGGSTN'
};

export const getSuggestions = (token) => async (dispatch) => {
    try {
        dispatch({
            type: SUGGES_TYPES.LOADING,
            payload: true
        })

        const res = await getDataAPI("suggestionsUser", token);
        dispatch({
            type: SUGGES_TYPES.GET_USERS,
            payload: res
        });
        dispatch({
            type: SUGGES_TYPES.LOADING, payload: false
        });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err?.response?.msg
            }
        });
    }
};