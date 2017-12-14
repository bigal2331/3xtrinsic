import { ADD_USER, ADD_USER_FROM_SERVER, REMOVE_USER } from '../actions/actionTypes.js';

const initialState ={
    users:[]
}




export default function(state=initialState,action){
    
    switch(action.type) {
        case ADD_USER:
            return {...state, users:[...state.users,action.payload]}
        case ADD_USER_FROM_SERVER:
            return {...state, conversation:[...state.conversation,action.payload]}
        case REMOVE_USER:
            return {...state,message: action.payload}
        default: return state;
    }
    
}