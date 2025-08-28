import { combineReducers } from 'redux';
import auth from './authReducer.js';
import alert from './alertReducer.js';
import theme from './themeReducer.js';
import profile from './profileReducer.js';
import homePosts from './postReducer.js';
import notify from './notifyReducer.js';
import message from './messageReducer.js';
import status from './storyReducer.js';
import modal from './modalReducer.js';

export default combineReducers({
    auth,
    alert,
    theme,
    profile,
    status,
    homePosts,
    notify,
    modal,
    message,
});