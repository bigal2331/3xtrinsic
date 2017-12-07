import { CLEAR_MSG } from './actionTypes.js';

export default function sendMsg (translation){
    return {
        type: CLEAR_MSG,
        payload:""
    }
}