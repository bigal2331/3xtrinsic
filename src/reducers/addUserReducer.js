import { ADD_USER, ADD_USER_FROM_SERVER, REMOVE_USER, SET_CURRENT_USER, SET_USER_LIST } from '../actions/actionTypes.js';

const initialState ={
    users:[],
    currentUser:{}
}

export default function(state=initialState,action){
    
    switch(action.type) {
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload}
        case SET_USER_LIST:
            return {...state, users: action.payload}
        case ADD_USER:
            return {...state, users:[...state.users,action.payload]}
        case ADD_USER_FROM_SERVER:
            return {...state, conversation:[...state.conversation,action.payload]}
        case REMOVE_USER:
            return {...state,message: action.payload}
        default: return state;
    }
    
}