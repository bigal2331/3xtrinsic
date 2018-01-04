import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import msgReducer from './reducers/msgReducer.js';
import addUserReducer from './reducers/addUserReducer.js';
import currentUser from './reducers/currentUserReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import setToken from './utils/setAuthToken';
import setCurrentUser from './actions/setCurrentUser';
import jwt from 'jsonwebtoken';

const allReducersCombined = combineReducers({
    msgStateInTheStore: msgReducer,
    userListInTheStore: addUserReducer,
    form: formReducer,
    currentUser
});

           
              
const store = createStore(allReducersCombined, applyMiddleware(thunk));

//makes sure we keep the token and current user on page refresh
if (localStorage.ApiToken){
    setToken(localStorage.ApiToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.ApiToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
