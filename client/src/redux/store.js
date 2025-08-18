import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

const store = configureStore({
    reducer: rootReducer,

});

const DataProvider = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default DataProvider;