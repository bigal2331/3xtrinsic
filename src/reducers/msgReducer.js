import { SEND_MSG, SET_MSG, CLEAR_MSG } from '../actions/actionTypes.js';
import {  } from '../actions/actionTypes.js';

const initialState ={
     message:"",
     conversation:[]
}

export default function(state=initialState,action){
    console.log('this is the action ',action.type)
    switch(action.type) {
        case SET_MSG:
            return {...state,message: action.payload}
        case SEND_MSG:
            return {...state, conversation:[...state.conversation,action.payload]}
        case CLEAR_MSG:
            return {...state,message: action.payload}
        default: return state;
    }
    
}