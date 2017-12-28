import { SET_CURRENT_USER } from '../actions/actionTypes.js';
import isEmpty from 'lodash/isEmpty'

const initialState = {
    isAuthenticated: false,
    currentUser: {}
};

export default function(state=initialState,action){
    
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.payload),
                currentUser: action.payload
            };
        default: return state;
    }
    
}