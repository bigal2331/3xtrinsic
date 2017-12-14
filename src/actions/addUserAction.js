import { ADD_USER } from './actionTypes.js';

export default function sendMsg (user){
    return {
        type: ADD_USER,
        payload: user
    }
}