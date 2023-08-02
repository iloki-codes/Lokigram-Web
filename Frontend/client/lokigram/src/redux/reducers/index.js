import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import socket from './socketReducer'
import notify from './notifyReducer'
import message from './messageReducer'


export default combineReducers({
    auth,
    alert,
    profile,
    story,
    socket,
    notify,
    message,
})