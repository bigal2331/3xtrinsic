import { EMOJI_SHOW } from '../actions/actionTypes.js';

const initialState = {
    isShowingEmoji: false
};

export default function(state=initialState,action){
    
    switch(action.type) {
        case EMOJI_SHOW:
            return {
                isShowingEmoji: !action.isShowingEmoji
            };
        default: return state;
    }
    
}