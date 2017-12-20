import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import msgReducer from './reducers/msgReducer.js';
import addUserReducer from './reducers/addUserReducer.js';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const allReducersCombined = combineReducers({
    msgStateInTheStore: msgReducer,
    userListInTheStore: addUserReducer
    
});

           
              
const store = createStore(allReducersCombined, applyMiddleware(thunk));



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
