import { SET_CURRENT_USER } from './actionTypes.js';

export default function setCurrentUser (currentUser){
    return {
        type: SET_CURRENT_USER,
        payload: currentUser
    }
}