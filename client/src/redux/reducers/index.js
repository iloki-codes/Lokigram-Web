import { combineReducers } from 'redux';
import alert from './alertReducer.js';
import auth from './authReducer.js';
import call from './callReducer.js';
import detailPost from './detailPostReducer.js';
import discover from './discoverReducer.js';
import message from './messageReducer.js';
import modal from './modalReducer.js';
import notify from './notifyReducer.js';
import online from './onlineReducer.js';
import homePosts from './postReducer.js';
import profile from './profileReducer.js';
import status from './storyReducer.js';
import suggestions from './suggestionsReducer.js';
import theme from './themeReducer.js';

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
    detailPost,
    discover,
    suggestions,
    online,
    call
});