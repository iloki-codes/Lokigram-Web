import { combineReducers } from 'redux';
import auth from './authReducer.js';
import alert from './alertReducer.js';
import profile from './profileReducer.js';
import socket from './socketReducer.js';
import notify from './notifyReducer.js';
import message from './messageReducer.js';
import status from './storyReducer.js';

export default combineReducers({
    auth,
    alert,
    profile,
    status,
    socket,
    notify,
    message,
});