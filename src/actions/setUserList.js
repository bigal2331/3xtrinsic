import { SET_USER_LIST } from './actionTypes.js';

export default function setUserList (userList){
    return {
        type: SET_USER_LIST,
        payload: userList
    }
}