import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const store = configureStore({
    reducer: {
        rootReducer,
    },
    // composeWithDevTools(applyMiddleware(thunk))
});

const DataProvider = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider;