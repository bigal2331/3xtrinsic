import { SET_MSG } from './actionTypes.js';

export default function(message){
    console.log('this is the message', message)
    return {
        type: SET_MSG,
        payload:message
    }
}